import UserDB from '@/server/db/User.db'
import { safeEnv } from '@/server/env'
import { BadRequest, Unauthorized } from '@/server/errors'
import { MESSAGES } from '@/server/libs/constants'
import { getUserNotFoundMessage } from '@/server/utils'
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
            'Refresh token is only used for issuing new access tokens'
          ),
          false
        )
      }

      UserDB.findByUsername(payload.username)
        .then((user) => {
          if (user === null) {
            done(
              new BadRequest(getUserNotFoundMessage(payload.username)),
              false
            )
            return
          }

          if (payload.v_ !== user.v_) {
            done(new Unauthorized(MESSAGES.OUTDATED_TOKEN), false)
            return
          }

          const { salted_hash, ...userInfo } = user

          done(null, userInfo)
        })
        .catch((error: unknown) => {
          done(error, false)
        })
    }
  )
)
