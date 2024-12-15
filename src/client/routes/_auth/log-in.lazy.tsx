import { LogInPage } from '@/client/features/auth/pages'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/log-in')({
  component: LogInPage
})
