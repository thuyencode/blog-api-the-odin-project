import { useAuth } from '@/client/hooks'
import type { ReactElement } from 'react'
import { AuthForm } from '../components'

export const LogInPage = (): ReactElement => {
  const { logIn } = useAuth()

  return <AuthForm type='log-in' authCallback={logIn} />
}
