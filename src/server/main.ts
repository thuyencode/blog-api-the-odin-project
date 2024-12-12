import compression from 'compression'
import cookieParser from 'cookie-parser'
import e from 'express'
import helmet from 'helmet'
import ViteExpress from 'vite-express'
import apiRoutes from './api'
import { safeEnv } from './env'
import {
  errorHandler,
  errorResponser,
  internalServerErrorLogger
} from './middlewares'

import './configs/passport/jwt.strategy'

const { PORT } = safeEnv

const app = e()

app.use(
  helmet({
    contentSecurityPolicy: false
  })
)

app.use(cookieParser(safeEnv.COOKIE_SECRET_KEY))

app.use(e.json())
app.use(e.urlencoded({ extended: true }))

app.use(compression())

app.get('/hello', (_, res) => {
  res.send('Hello Vite + React + TypeScript!')
})

app.use('/api', apiRoutes)

app.use(errorHandler)
app.use(internalServerErrorLogger)
app.use(errorResponser)

ViteExpress.listen(app, PORT, () => {
  console.log(`Server is listening on port ${PORT}...`)
})
