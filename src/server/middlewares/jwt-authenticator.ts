/* eslint-disable @typescript-eslint/no-unsafe-call -- This is fine */
import type e from 'express'
import type jwt from 'jsonwebtoken'
import passport from 'passport'
import { Unauthorized } from '../errors'

export const jwtAuthenticator: e.RequestHandler = (req, res, next) => {
  passport.authenticate(
    'jwt',
    { session: false },
    (
      err: Error | null,
      user: Express.User | false | null,
      info?: jwt.JsonWebTokenError
    ) => {
      if (info) {
        next(new Unauthorized(info.message))
        return
      }

      if (err) {
        next(err)
        return
      }

      next()
    }
  )(req, res, next)
}
