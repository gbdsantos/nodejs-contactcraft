import { type Request, type Response, Router } from 'express'

export const routes = Router()

routes.get('/ping', (_: Request, response: Response) => {
  return response.status(200).json({ message: 'Server is running.' })
})
