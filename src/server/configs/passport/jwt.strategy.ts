import { safeEnv } from '@/server/env'
import { BadRequest, Unauthorized } from '@/server/errors'
import type { JwtPayload } from 'jsonwebtoken'
import passport from 'passport'
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt'

export default passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: safeEnv.JWT_SECRET_KEY
    },
    (payload: JwtPayload, done) => {
      if (payload.type === 'refresh') {
        done(
          new BadRequest(
            `Refresh token is only used for issuing new access tokens`
          ),
          false
        )
        return
      }

      if (payload.username === 'thuyencode') {
        done(null, true)
        return
      }

      done(new Unauthorized(`Username '${payload.username}' not found`), false)
    }
  )
)
