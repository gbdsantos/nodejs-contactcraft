import type { ContactsRepository } from '@/repositories/contacts-repository'

interface ContactUseCaseRequest {
  name: string
  phone: string
}

export class CreateContactUseCase {
  constructor(private contactsRepository: ContactsRepository) {}

  async execute({ name, phone }: ContactUseCaseRequest) {
    const result = await this.contactsRepository.create({
      name,
      phone,
    })

    return result
  }
}
