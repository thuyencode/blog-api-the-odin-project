import type { AuthCredentialInput } from '@/shared/types/auth.type'
import { createContext, useContext } from 'react'

export interface IAuthContext {
  accessToken: string | null
  isAuthenticated: boolean
  logIn: (input: AuthCredentialInput) => Promise<void>
  register: (input: AuthCredentialInput) => Promise<void>
  logOut: () => Promise<void>
}

export const AuthContext = createContext<IAuthContext | null>(null)

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext)

  if (context === null) {
    throw new Error("'useAuth' must be used within AuthProvider")
  }

  return context
}
