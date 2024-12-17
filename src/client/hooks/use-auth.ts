import { useContext } from 'react'
import { AuthContext, type IAuthContext } from '../contexts/auth.context'

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext)

  if (context === null) {
    throw new Error("'useAuth' must be used within AuthProvider")
  }

  return context
}
