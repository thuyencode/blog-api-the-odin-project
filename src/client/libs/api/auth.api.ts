import type { ResAccessToken } from '@/client/types/response.type'
import type { AuthCredentialInput } from '@/shared/types/auth.type'
import baseApi from '.'

type ResAuthStatus = Express.User

const getAuthStatus = async (signal?: AbortSignal): Promise<ResAuthStatus> =>
  (await baseApi.get<ResAuthStatus>('/api/auth/status', { signal })).data

const postLogIn = async (
  authCredentialInput: AuthCredentialInput
): Promise<ResAccessToken> =>
  (await baseApi.post<ResAccessToken>('/api/auth/log-in', authCredentialInput))
    .data

const postRegister = async (
  authCredentialInput: AuthCredentialInput
): Promise<ResAccessToken> =>
  (
    await baseApi.post<ResAccessToken>(
      '/api/auth/register',
      authCredentialInput
    )
  ).data

interface ResLogOut {
  message: string
}

const postLogOut = async (): Promise<ResLogOut> =>
  (await baseApi.post<ResLogOut>('/api/auth/log-out')).data

const postLogOutAll = async (): Promise<ResLogOut> =>
  (await baseApi.post<ResLogOut>('/api/auth/log-out-all')).data

const getRefresh = async (signal?: AbortSignal): Promise<ResAccessToken> =>
  (await baseApi.get<ResAccessToken>('/api/auth/refresh', { signal })).data

const AuthApi = {
  getAuthStatus,
  postLogIn,
  postRegister,
  getRefresh,
  postLogOut,
  postLogOutAll
}

export default AuthApi
