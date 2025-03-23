import { AppError } from '@/utils/app-error'

export class ContactNotFoundError extends AppError {
  constructor(message = 'contato não encontrado', statusCode = 404) {
    super(message, statusCode)
  }
}
