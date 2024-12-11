import type v from '../validation'
import type { AuthCredentialSchema } from '../validation/auth.schema'

export type AuthCredentialInput = v.InferInput<typeof AuthCredentialSchema>
