import { type Request, type Response, Router } from 'express'
import { ContactController } from './controllers/contacts-controller'

const routes = Router()

const contactsController = new ContactController()

routes.get('/ping', (_: Request, response: Response) => {
  return response.status(200).json({ message: 'Server is running.' })
})

routes.post('/contatos', contactsController.create)
routes.get('/contatos', contactsController.index)
routes.patch('/contatos/:contactId', contactsController.update)
routes.delete('/contatos/:contactId', contactsController.delete)

export { routes }
