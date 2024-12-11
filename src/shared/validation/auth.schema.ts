import v from '.'

export const NameSchema = v.pipe(
  v.string(),
  v.trim(),
  v.minLength(2, 'Name must be at least 2 characters'),
  v.maxLength(100, 'Name must not exceed 100 characters')
)

export const UsernameSchema = v.pipe(
  v.string(),
  v.trim(),
  v.regex(/^\S*$/, 'Username must not contains any white spaces'),
  v.minLength(2, 'Username must be at least 2 characters'),
  v.maxLength(25, 'Username must not exceed 25 characters')
)

export const PasswordSchema = v.pipe(
  v.string(),
  v.trim(),
  v.minLength(8, 'Password must be at least 8 characters'),
  v.maxLength(30, 'Password must not exceed 30 characters'),
  v.regex(/[a-z]/, 'Password must contain a lowercase letter'),
  v.regex(/[A-Z]/, 'Password must contain a uppercase letter'),
  v.regex(/[0-9]/, 'Password must contain a number')
)

export const SignUpSchema = v.object({
  name: NameSchema,
  username: UsernameSchema,
  password: PasswordSchema
})

export const SignInSchema = v.omit(SignUpSchema, ['name'])
