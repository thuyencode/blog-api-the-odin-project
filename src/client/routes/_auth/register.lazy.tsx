import { RegisterPage } from '@/client/features/auth/pages'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/register')({
  component: RegisterPage
})
