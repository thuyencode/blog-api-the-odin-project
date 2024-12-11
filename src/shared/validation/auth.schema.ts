import v from '.'

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

export const AuthCredentialSchema = v.object({
  username: UsernameSchema,
  password: PasswordSchema
})
