import { accessTokenAuthenticator } from '@/server/middlewares'
import { HttpStatusCode } from 'axios'
import e from 'express'

const statusRoutes = e.Router()

statusRoutes.get('/', accessTokenAuthenticator, (req, res) =>
  res.status(HttpStatusCode.Ok).send(req.user)
)

export default statusRoutes
