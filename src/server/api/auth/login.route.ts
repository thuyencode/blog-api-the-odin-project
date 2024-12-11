import { BadRequest } from '@/server/errors'
import { SECURED_COOKIE_OPTS } from '@/server/libs/constants'
import { issueAccessToken, issueRefreshToken } from '@/server/utils/jwt'
import type { User } from '@prisma/client'
import { HttpStatusCode } from 'axios'
import e from 'express'

const loginRoutes = e.Router()

loginRoutes.post(
  '/',
  (req: e.Request<unknown, unknown, Pick<User, 'username'>>, res) => {
    const {
      body: { username }
    } = req

    if (username !== 'thuyencode') {
      throw new BadRequest(`Username '${username}' not found`)
    }

    const accessToken = issueAccessToken({ username })
    const refreshToken = issueRefreshToken({ username })

    return res
      .status(HttpStatusCode.Ok)
      .cookie('refresh-token', refreshToken, SECURED_COOKIE_OPTS)
      .json({ accessToken })
  }
)

export default loginRoutes
