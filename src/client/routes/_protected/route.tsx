import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected')({
  beforeLoad({ context: { auth }, location }) {
    if (!auth?.isAuthenticated) {
      throw redirect({ to: '/log-in', search: { redirect: location.href } })
    }
  }
})
