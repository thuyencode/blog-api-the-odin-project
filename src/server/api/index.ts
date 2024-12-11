import e from 'express'
import authRoutes from './auth'

const apiRoutes = e.Router()

apiRoutes.use('/auth', authRoutes)

export default apiRoutes
