import type { Env as TypeSafeEnv } from '../env'

declare module 'bun' {
  interface Env extends TypeSafeEnv {}
}

export {}
