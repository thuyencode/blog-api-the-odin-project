import { jwtAuthenticator } from '@/server/middlewares/jwt-authenticator'
import { HttpStatusCode } from 'axios'
import e from 'express'

const statusRoutes = e.Router()

statusRoutes.get('/', jwtAuthenticator, (req, res) =>
  res.status(HttpStatusCode.Ok).send(req.user)
)

export default statusRoutes
