import type { ResAccessToken } from '@/client/types/response.type'
import type { AuthCredentialInput } from '@/shared/types/auth.type'
import type { AxiosResponse } from 'axios'
import baseApi from '.'

type ResAuthStatus = Express.User

const getAuthStatus = async (
  signal?: AbortSignal
): Promise<AxiosResponse<ResAuthStatus>> =>
  await baseApi.get<ResAuthStatus>('/api/auth/status', { signal })

const postLogIn = async (
  authCredentialInput: AuthCredentialInput
): Promise<AxiosResponse<ResAccessToken>> =>
  await baseApi.post<ResAccessToken>('/api/auth/log-in', authCredentialInput)

const postRegister = async (
  authCredentialInput: AuthCredentialInput
): Promise<AxiosResponse<ResAccessToken>> =>
  await baseApi.post<ResAccessToken>('/api/auth/register', authCredentialInput)

interface ResLogOut {
  message: string
}

const postLogOut = async (): Promise<AxiosResponse<ResLogOut>> =>
  await baseApi.post<ResLogOut>('/api/auth/log-out')

const postLogOutAll = async (): Promise<AxiosResponse<ResLogOut>> =>
  await baseApi.post<ResLogOut>('/api/auth/log-out-all')

const getRefresh = async (
  signal?: AbortSignal
): Promise<AxiosResponse<ResAccessToken>> =>
  await baseApi.get<ResAccessToken>('/api/auth/refresh', { signal })

const AuthApi = {
  getAuthStatus,
  postLogIn,
  postRegister,
  getRefresh,
  postLogOut,
  postLogOutAll
}

export default AuthApi
