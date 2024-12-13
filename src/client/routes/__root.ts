import { createRootRouteWithContext } from '@tanstack/react-router'
import { Layout } from '../components/layout'
import type { RouterContext } from '../libs/router'

export const Route = createRootRouteWithContext<RouterContext>()({
  component: Layout
})
