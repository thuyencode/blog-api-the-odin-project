import type { QueryClient } from '@tanstack/react-query'
import { createRouter } from '@tanstack/react-router'
import { routeTree } from '../routeTree.gen'
import { queryClient } from './query'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export interface RouterContext {
  queryClient: QueryClient
}

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: {
    queryClient
  },
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0
})
