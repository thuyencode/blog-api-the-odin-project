import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

export const Route = createFileRoute('/_protected/secret')({
  component: RouteComponent
})

function RouteComponent(): ReactElement {
  return <div>Hello "/_protected/secret"!</div>
}
