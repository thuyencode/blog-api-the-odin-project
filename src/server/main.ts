import compression from 'compression'
import e from 'express'
import helmet from 'helmet'
import ViteExpress from 'vite-express'
import { safeEnv } from './env'

const { PORT } = safeEnv

const app = e()

app.use(
  helmet({
    contentSecurityPolicy: false
  })
)

app.use(e.json())
app.use(e.urlencoded({ extended: true }))

app.use(compression())

app.get('/hello', (_, res) => {
  res.send('Hello Vite + React + TypeScript!')
})

ViteExpress.listen(app, PORT, () => {
  console.log(`Server is listening on port ${PORT}...`)
})
