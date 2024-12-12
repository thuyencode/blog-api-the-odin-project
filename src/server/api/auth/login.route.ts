import UserDB from '@/server/db/User.db'
import { BadRequest } from '@/server/errors'
import { SECURED_COOKIE_OPTS } from '@/server/libs/constants'
import { reqBodyValidator } from '@/server/middlewares'
import { getUserNotFoundMessage } from '@/server/utils'
import { issueAccessToken, issueRefreshToken } from '@/server/utils/jwt'
import { verifyPassword } from '@/server/utils/password'
import type { AuthCredentialInput } from '@/shared/types/auth.type'
import { AuthCredentialSchema } from '@/shared/validation/auth.schema'
import { HttpStatusCode } from 'axios'
import e from 'express'
import expressAsyncHandler from 'express-async-handler'

const loginRoutes = e.Router()

loginRoutes.post(
  '/',
  reqBodyValidator<AuthCredentialInput>(AuthCredentialSchema),
  expressAsyncHandler<unknown, unknown, AuthCredentialInput>(
    async (req, res) => {
      const {
        body: { username, password }
      } = req

      const existedUser = await UserDB.findByUsername(username)

      if (existedUser === null) {
        throw new BadRequest(getUserNotFoundMessage(username))
      }

      const isPasswordCorrect = await verifyPassword(
        password,
        existedUser.salted_hash
      )

      if (!isPasswordCorrect) {
        throw new BadRequest(`Wrong password`)
      }

      const { salted_hash, ...user } = existedUser

      const accessToken = issueAccessToken(user)
      const refreshToken = issueRefreshToken(user)

      res
        .status(HttpStatusCode.Ok)
        .cookie('refresh-token', refreshToken, SECURED_COOKIE_OPTS)
        .json({ accessToken })
    }
  )
)

export default loginRoutes
