import type { QueryClient } from '@tanstack/react-query'
import { createRouter } from '@tanstack/react-router'
import type { IAuthContext } from '../contexts/auth.context'
import { routeTree } from '../routeTree.gen'
import { queryClient } from './query'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export interface RouterContext {
  queryClient: QueryClient
  auth?: IAuthContext
}

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: {
    queryClient,
    auth: undefined
  },
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0
})
