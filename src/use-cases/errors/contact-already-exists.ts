import { AppError } from './app-error'

export class ContactAlreadyExistsError extends AppError {
  constructor() {
    super('You have already registered a contact with this same name', 409)
  }
}
