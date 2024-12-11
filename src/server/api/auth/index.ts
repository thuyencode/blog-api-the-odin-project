import e from 'express'
import loginRoutes from './login.route'
import statusRoutes from './status.route'

const authRoutes = e.Router()

authRoutes.use('/login', loginRoutes)
authRoutes.use('/status', statusRoutes)

export default authRoutes
