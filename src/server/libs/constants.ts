import type e from 'express'

export const SECURED_COOKIE_OPTS: e.CookieOptions = {
  signed: true,
  httpOnly: true
}

export const COOKIE_NAMES = {
  REFRESH_TOKEN: 'refresh-token'
}

export const MESSAGES = {
  LOGGED_OUT: 'Logged out successfully',
  OUTDATED_TOKEN: 'Outdated token'
}
