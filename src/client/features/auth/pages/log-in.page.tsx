import { useAuth } from '@/client/contexts/auth'
import type { ReactElement } from 'react'
import { AuthForm } from '../components'

export const LogInPage = (): ReactElement => {
  const { logIn } = useAuth()

  return <AuthForm type='log-in' authCallback={logIn} />
}
