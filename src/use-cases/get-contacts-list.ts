import type { ContactsRepository } from '@/repositories/contacts-repository'

export class GetContactsListUseCase {
  constructor(private contactsRepository: ContactsRepository) {}

  async execute() {
    const contacts = await this.contactsRepository.index()

    return contacts
  }
}
