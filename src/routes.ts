import { type Request, type Response, Router } from 'express'
import { ContactController } from './controllers/contacts-controller'

const routes = Router()

const contactsController = new ContactController()

/**
 * @swagger
 * /ping:
 *   get:
 *     summary: Verifica se o servidor está rodando
 *     tags: [Health Check]
 *     responses:
 *       200:
 *         description: Servidor está rodando
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Server is running.
 */
routes.get('/ping', (_: Request, response: Response) => {
  return response.status(200).json({ message: 'Server is running.' })
})

/**
 * @swagger
 * /contatos:
 *   post:
 *     summary: Cria um novo contato
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContactBody'
 *     responses:
 *       201:
 *         description: Contato criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContactResponse'
 *       400:
 *         description: Erro na requisição
 */
routes.post('/contatos', contactsController.create)

/**
 * @swagger
 * /contatos:
 *   get:
 *     summary: Retorna todos os contatos
 *     tags: [Contact]
 *     responses:
 *       200:
 *         description: Lista de contatos
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/ContactsResponse'
 *       500:
 *         description: Erro no servidor
 */
routes.get('/contatos', contactsController.index)

/**
 * @swagger
 * /contatos/{contactId}:
 *   patch:
 *     summary: Atualiza um contato existente
 *     tags: [Contact]
 *     parameters:
 *       - in: path
 *         name: contactId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do contato a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContactBody'
 *     responses:
 *       200:
 *         description: Contato atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContactResponse'
 *       404:
 *         description: Contato não encontrado
 *       400:
 *         description: Erro na requisição
 */
routes.patch('/contatos/:contactId', contactsController.update)

/**
 * @swagger
 * /contatos/{contactId}:
 *   delete:
 *     summary: Remove um contato
 *     tags: [Contact]
 *     parameters:
 *       - in: path
 *         name: contactId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do contato a ser removido
 *     responses:
 *       204:
 *         description: Contato removido com sucesso
 */
routes.delete('/contatos/:contactId', contactsController.delete)

export { routes }
