import { HttpStatusCode } from 'axios'
import e from 'express'
import passport from 'passport'

const statusRoutes = e.Router()

statusRoutes.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => res.status(HttpStatusCode.Ok)
)

export default statusRoutes
