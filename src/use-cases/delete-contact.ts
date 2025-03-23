import type { ContactsRepository } from '@/repositories/contacts-repository'

export class DeleteContactUseCase {
  constructor(private contactsRepository: ContactsRepository) {}

  async execute(contactId: string) {
    await this.contactsRepository.delete(contactId)
  }
}
