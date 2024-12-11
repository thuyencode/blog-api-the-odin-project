import type { User as IUSer } from '@prisma/client'
import type { Env as TypeSafeEnv } from '../env'

declare module 'bun' {
  interface Env extends TypeSafeEnv {}
}

declare module 'jsonwebtoken' {
  export interface JwtPayload extends Omit<IUSer, 'salted_hash'> {}
}

declare global {
  namespace Express {
    export interface User extends Omit<IUSer, 'salted_hash'> {}
  }
}

export {}
