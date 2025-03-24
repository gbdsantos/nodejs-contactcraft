import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { env } from './env'
import { errorHandling } from './middlewares/error-handling'
import { routes } from './routes'
import swaggerOptions from './swagger'

const app = express()

app.use(express.json())
app.use(routes)

app.use(errorHandling)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions))

app.listen(env.PORT, () => {
  console.log(`🚀 HTTP server running on port ${env.PORT}`)
})
