import UserDB from '@/server/db/User.db'
import { BadRequest, Unauthorized } from '@/server/errors'
import { COOKIE_NAMES, MESSAGES } from '@/server/libs/constants'
import { getUserNotFoundMessage } from '@/server/utils'
import { issueAccessToken, verifyJwtToken } from '@/server/utils/jwt'
import { HttpStatusCode } from 'axios'
import e from 'express'
import expressAsyncHandler from 'express-async-handler'
import type jwt from 'jsonwebtoken'

const refreshRoutes = e.Router()

refreshRoutes.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const refreshToken = String(req.signedCookies[COOKIE_NAMES.REFRESH_TOKEN])

    const payload = verifyJwtToken<jwt.JwtPayload>(refreshToken)

    if (payload === null) {
      throw new Unauthorized()
    }

    const existedUser = await UserDB.findByUsername(payload.username)

    if (existedUser === null) {
      throw new BadRequest(getUserNotFoundMessage(payload.username))
    }

    if (payload.type === 'access') {
      throw new BadRequest('Access token is only used to request resources')
    }

    if (payload.v_ !== existedUser.v_) {
      throw new Unauthorized(MESSAGES.OUTDATED_TOKEN)
    }

    const { salted_hash, ...user } = existedUser

    const accessToken = issueAccessToken(user)

    res.status(HttpStatusCode.Ok).json({ accessToken })
  })
)

export default refreshRoutes
