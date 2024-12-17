import { useAuth } from '@/client/contexts/auth'
import type { ReactElement } from 'react'
import { AuthForm } from '../components'

export const RegisterPage = (): ReactElement => {
  const { register } = useAuth()

  return <AuthForm type='register' authCallback={register} />
}
