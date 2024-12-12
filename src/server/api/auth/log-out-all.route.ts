import UserDB from '@/server/db/User.db'
import { Unauthorized } from '@/server/errors'
import { COOKIE_NAMES, MESSAGES } from '@/server/libs/constants'
import { accessTokenAuthenticator } from '@/server/middlewares'
import { HttpStatusCode } from 'axios'
import e from 'express'
import expressAsyncHandler from 'express-async-handler'

const logOutAllRoutes = e.Router()

logOutAllRoutes.post(
  '/',
  accessTokenAuthenticator,
  expressAsyncHandler(async (req, res) => {
    if (!req.user) {
      throw new Unauthorized()
    }

    await UserDB.updateByUsername(req.user.username, { v_: req.user.v_ + 1 })

    res
      .clearCookie(COOKIE_NAMES.REFRESH_TOKEN)
      .status(HttpStatusCode.Ok)
      .json({ message: MESSAGES.LOGGED_OUT })
  })
)

export default logOutAllRoutes
