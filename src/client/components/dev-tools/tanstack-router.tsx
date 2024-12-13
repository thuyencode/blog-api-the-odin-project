import { lazy } from 'react'

export const TanStackRouterDevtools =
  import.meta.env.MODE === 'production'
    ? () => null // Render nothing in production
    : lazy(
        async () =>
          // Lazy load in development
          await import('@tanstack/router-devtools').then((res) => ({
            default: res.TanStackRouterDevtools
            // For Embedded Mode
            // default: res.TanStackRouterDevtoolsPanel
          }))
      )
