import type e from 'express'

export const SECURED_COOKIE_OPTS: e.CookieOptions = {
  signed: true,
  httpOnly: true
}
