import v from '@/shared/validation'

const PortSchema = v.pipe(
  v.string(),
  v.nonEmpty(),
  v.transform((input) => Number(input)),
  v.integer()
)

const SecretKeySchema = v.pipe(v.string(), v.nonEmpty(), v.minLength(15))

const EnvSchema = v.object({
  PORT: PortSchema,
  COOKIE_SECRET_KEY: SecretKeySchema,
  SESSION_SECRET_KEY: SecretKeySchema,
  PGHOST: v.pipe(v.string(), v.nonEmpty(), v.minLength(9)),
  PGPORT: PortSchema,
  PGUSER: v.pipe(v.string(), v.nonEmpty()),
  PGPASSWORD: SecretKeySchema,
  PGDATABASE: v.pipe(v.string(), v.nonEmpty()),
  DATABASE_URL: v.pipe(v.string(), v.url(), v.startsWith('postgresql'))
})

export const safeEnv = { ...Bun.env, ...v.parse(EnvSchema, Bun.env) }

export type Env = v.InferInput<typeof EnvSchema>
