import jwt from 'jsonwebtoken'
import { safeEnv } from '../env'

type Payload = string | Buffer | object

const issueJwtToken = (payload: Payload, opts: jwt.SignOptions): string =>
  jwt.sign(payload, safeEnv.JWT_SECRET_KEY, opts)

export const issueAccessToken = (payload: Payload): string =>
  issueJwtToken(payload, { expiresIn: '15m' })

export const issueRefreshToken = (payload: Payload): string =>
  issueJwtToken(payload, { expiresIn: '30 days' })
