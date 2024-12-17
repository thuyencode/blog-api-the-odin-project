import v from '@/shared/validation'
import { createFileRoute, redirect } from '@tanstack/react-router'

const SearchParamsSchema = v.object({
  redirect: v.optional(v.string())
})

export const Route = createFileRoute('/_auth')({
  validateSearch: (search) => v.parse(SearchParamsSchema, search),
  beforeLoad({ context: { auth }, search }) {
    if (auth?.isAuthenticated) {
      throw redirect({ to: search.redirect ?? '/' })
    }
  }
})
