import express from 'express'

import { env } from './env'
import { errorHandling } from './middlewares/error-handling'
import { routes } from './routes'

const app = express()

app.use(express.json())
app.use(routes)

app.use(errorHandling)

app.listen(env.PORT, () => {
  console.log(`🚀 HTTP server running on port ${env.PORT}`)
})
