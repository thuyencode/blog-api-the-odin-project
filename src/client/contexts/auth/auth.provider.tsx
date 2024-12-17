/* eslint-disable @eslint-react/no-unstable-context-value -- This is fine */
import baseApi from '@/client/libs/api'
import AuthApi from '@/client/libs/api/auth.api'
import { router } from '@/client/libs/router'
import type { HttpError } from '@/shared/errors'
import type { AuthCredentialInput } from '@/shared/types/auth.type'
import { type AxiosError, HttpStatusCode } from 'axios'
import {
  type ReactElement,
  type ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { AuthContext } from './auth.context'

export const AuthProvider = ({
  children
}: {
  children: ReactNode
}): ReactElement => {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  console.log('Re-rendered')

  useEffect(() => {
    void router.invalidate()
  }, [accessToken])

  useEffect(() => {
    abortControllerRef.current = new AbortController()

    AuthApi.getRefresh(abortControllerRef.current.signal)
      .then(({ data }) => {
        setAccessToken(data.accessToken)
      })
      .catch(() => {
        setAccessToken(null)
      })

    return () => {
      abortControllerRef.current?.abort()
    }
  }, [])

  useLayoutEffect(() => {
    const authInterceptor = baseApi.interceptors.request.use((config) => {
      config.headers.Authorization =
        !config._retry && accessToken
          ? `Bearer ${accessToken}`
          : config.headers.Authorization

      return config
    })

    return () => {
      baseApi.interceptors.request.eject(authInterceptor)
    }
  }, [accessToken])

  useLayoutEffect(() => {
    const refreshInterceptor = baseApi.interceptors.response.use(
      (response) => response,
      async (error: AxiosError<HttpError>) => {
        const { config: originalRequest } = error

        if (!originalRequest) {
          return
        }

        if (
          error.response?.status === HttpStatusCode.Unauthorized &&
          error.response.data.cause === 'Unauthorized request'
        ) {
          try {
            const { data } = await AuthApi.getRefresh()

            setAccessToken(data.accessToken)

            originalRequest.headers.Authorization = `Bearer ${data.accessToken}`
            originalRequest._retry = true

            return await baseApi(originalRequest)
          } catch {
            setAccessToken(null)
          }
        }

        return await Promise.reject(error)
      }
    )

    return () => {
      baseApi.interceptors.response.eject(refreshInterceptor)
    }
  }, [])

  const isAuthenticated = useMemo(() => Boolean(accessToken), [accessToken])

  const logIn = useCallback(async (input: AuthCredentialInput) => {
    const { data } = await AuthApi.postLogIn(input)

    setAccessToken(data.accessToken)
  }, [])

  const register = useCallback(async (input: AuthCredentialInput) => {
    const { data } = await AuthApi.postRegister(input)

    setAccessToken(data.accessToken)
  }, [])

  const logOut = useCallback(async () => {
    setAccessToken(null)

    await AuthApi.postLogOut()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        isAuthenticated,
        logIn,
        register,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
