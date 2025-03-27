import { AppError } from './app-error'

export class ContactNotFoundError extends AppError {
  constructor(message = 'contact not found', statusCode = 404) {
    super(message, statusCode)
  }
}
