import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from '@tanstack/react-router'
import type { ReactElement } from 'react'
import { queryClient } from './libs/query'
import { router } from './libs/router'

const RouterProviderWithContext = (): ReactElement => (
  <RouterProvider router={router} />
)

export default function App(): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProviderWithContext />
    </QueryClientProvider>
  )
}
