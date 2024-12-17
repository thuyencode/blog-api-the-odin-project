import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from '@tanstack/react-router'
import type { ReactElement } from 'react'
import { AuthProvider } from './contexts/auth.context'
import { useAuth } from './hooks'
import { queryClient } from './libs/query'
import { router } from './libs/router'

const RouterProviderWithContext = (): ReactElement => {
  const auth = useAuth()

  return <RouterProvider router={router} context={{ auth }} />
}

export default function App(): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProviderWithContext />
      </AuthProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
