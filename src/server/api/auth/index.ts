import e from 'express'
import loginRoutes from './log-in.route'
import logOutAllRoutes from './log-out-all.route'
import logOutRoutes from './log-out.route'
import refreshRoutes from './refresh.route'
import registerRoutes from './register.route'
import statusRoutes from './status.route'

const authRoutes = e.Router()

authRoutes.use('/log-in', loginRoutes)
authRoutes.use('/status', statusRoutes)
authRoutes.use('/log-out', logOutRoutes)
authRoutes.use('/log-out-all', logOutAllRoutes)
authRoutes.use('/register', registerRoutes)
authRoutes.use('/refresh', refreshRoutes)

export default authRoutes
