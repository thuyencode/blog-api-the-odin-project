import type { HttpError } from '@/shared/errors'
import type { AxiosError } from 'axios'

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError<HttpError>
  }
}

declare module 'axios' {
  interface InternalAxiosRequestConfig {
    _retry?: boolean
  }
}
