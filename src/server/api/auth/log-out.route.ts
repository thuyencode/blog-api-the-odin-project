import { COOKIE_NAMES, MESSAGES } from '@/server/libs/constants'
import { accessTokenAuthenticator } from '@/server/middlewares'
import { HttpStatusCode } from 'axios'
import e from 'express'

const logOutRoutes = e.Router()

logOutRoutes.post('/', accessTokenAuthenticator, (req, res) => {
  res
    .clearCookie(COOKIE_NAMES.REFRESH_TOKEN)
    .status(HttpStatusCode.Ok)
    .json({ message: MESSAGES.LOGGED_OUT })
})

export default logOutRoutes
