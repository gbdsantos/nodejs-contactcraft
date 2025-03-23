import type { ContactsRepository } from '@/repositories/contacts-repository'
import type { Prisma } from '@prisma/client'

interface UpdateContactUseCaseRequest {
  contactId: string
  data: Prisma.ContactUpdateInput
}

export class UpdateContactUseCase {
  constructor(private contactsRepository: ContactsRepository) {}

  async execute({ contactId, data }: UpdateContactUseCaseRequest) {
    const contactUpdated = await this.contactsRepository.update(contactId, data)

    return contactUpdated
  }
}
