import { PrismaContactsRepository } from '@/repositories/prisma/prisma-contacts-repository'
import { CreateContactUseCase } from '@/use-cases/create-contact'
import { DeleteContactUseCase } from '@/use-cases/delete-contact'
import { ContactAlreadyExistsError } from '@/use-cases/errors/contact-already-exists'
import { ContactNotFoundError } from '@/use-cases/errors/contact-not-found'
import { GetContactsListUseCase } from '@/use-cases/get-contacts-list'
import { UpdateContactUseCase } from '@/use-cases/update-contact'
import { validateMinTwoWords } from '@/utils/validate-min-two-words'
import type { NextFunction, Request, Response } from 'express'
import z from 'zod'

class ContactController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const contactBodySchema = z.object({
        name: z.string().refine(validateMinTwoWords, {
          message:
            'O nome do contato deve ter pelo menos duas palavras, cada uma com pelo menos 3 letras.',
        }),
        phone: z.string().max(16),
      })

      const { name, phone } = contactBodySchema.parse(request.body)

      const contactsRepository = new PrismaContactsRepository()
      const createContactUseCase = new CreateContactUseCase(contactsRepository)

      const contact = await createContactUseCase.execute({ name, phone })

      return response.status(201).json({ contact })
    } catch (error) {
      next(error)
    }
  }

  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const contactsRepository = new PrismaContactsRepository()
      const getContactsListUseCase = new GetContactsListUseCase(
        contactsRepository
      )

      const contacts = await getContactsListUseCase.execute()

      return response.status(200).json({ contacts })
    } catch (error) {
      next(error)
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const paramsSchema = z.object({
        contactId: z.string().uuid(),
      })

      const contactBodySchema = z.object({
        name: z
          .string()
          .refine(validateMinTwoWords, {
            message:
              'O nome do contato deve ter pelo menos duas palavras, cada uma com pelo menos 3 letras.',
          })
          .optional(),
        phone: z.string().max(16).optional(),
      })

      const { contactId } = paramsSchema.parse(request.params)
      const data = contactBodySchema.parse(request.body)

      const contactsRepository = new PrismaContactsRepository()
      const updateContactUseCase = new UpdateContactUseCase(contactsRepository)

      const contactNotFound = await contactsRepository.findById(contactId)

      if (!contactNotFound) {
        throw new ContactNotFoundError()
      }

      const contact = await updateContactUseCase.execute({ contactId, data })

      return response.status(200).json({ contact })
    } catch (error) {
      next(error)
    }
  }

  async delete(request: Request, response: Response, next: NextFunction) {
    try {
      const paramsSchema = z.object({
        contactId: z.string().uuid(),
      })

      const { contactId } = paramsSchema.parse(request.params)

      const contactsRepository = new PrismaContactsRepository()
      const deleteContactUseCase = new DeleteContactUseCase(contactsRepository)

      const contactNotFound = await contactsRepository.findById(contactId)

      if (!contactNotFound) {
        throw new ContactNotFoundError('operação realizada com sucesso', 204)
      }

      deleteContactUseCase.execute(contactId)

      return response
        .status(204)
        .json({ message: 'contato excluído com sucesso' })
    } catch (error) {
      next(error)
    }
  }
}

export { ContactController }
