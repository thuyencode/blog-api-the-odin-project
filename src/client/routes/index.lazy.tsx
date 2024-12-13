import { createLazyFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent
})

function RouteComponent(): ReactElement {
  return <div>Hello!</div>
}
