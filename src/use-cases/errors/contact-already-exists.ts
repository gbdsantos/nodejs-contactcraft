import { AppError } from '@/utils/app-error'

export class ContactAlreadyExistsError extends AppError {
  constructor() {
    super('Você já cadastrou um contato com este mesmo nome.', 409)
  }
}
