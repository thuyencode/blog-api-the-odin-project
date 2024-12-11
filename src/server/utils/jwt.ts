import jwt from 'jsonwebtoken'
import { safeEnv } from '../env'

type Payload = object

const issueJwtToken = (
  payload: Payload & Pick<jwt.JwtPayload, 'type'>,
  opts: jwt.SignOptions
): string => jwt.sign(payload, safeEnv.JWT_SECRET_KEY, opts)

export const issueAccessToken = (payload: Payload): string =>
  issueJwtToken({ ...payload, type: 'access' }, { expiresIn: '15m' })

export const issueRefreshToken = (payload: Payload): string =>
  issueJwtToken({ ...payload, type: 'refresh' }, { expiresIn: '30 days' })
