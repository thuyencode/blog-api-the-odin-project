import v from '@/shared/validation'
import { PasswordSchema, UsernameSchema } from '@/shared/validation/auth.schema'

const NonEmptySchema = v.pipe(v.string(), v.nonEmpty())

const PortSchema = v.pipe(
  NonEmptySchema,
  v.transform((input) => Number(input)),
  v.integer()
)

const SecretKeySchema = v.pipe(NonEmptySchema, v.minLength(15))

const EnvSchema = v.object({
  PORT: PortSchema,
  AUTHOR_USERNAME: UsernameSchema,
  AUTHOR_PASSWORD: PasswordSchema,
  COOKIE_SECRET_KEY: SecretKeySchema,
  JWT_SECRET_KEY: SecretKeySchema,
  PGHOST: v.pipe(NonEmptySchema, v.minLength(9)),
  PGPORT: PortSchema,
  PGUSER: NonEmptySchema,
  PGPASSWORD: SecretKeySchema,
  PGDATABASE: NonEmptySchema,
  DATABASE_URL: v.pipe(v.string(), v.url(), v.startsWith('postgresql'))
})

export const safeEnv = { ...Bun.env, ...v.parse(EnvSchema, Bun.env) }

export type Env = v.InferInput<typeof EnvSchema>
