import type { ContactsRepository } from '@/repositories/contacts-repository'
import { ContactNotFoundError } from '@/use-cases/errors/contact-not-found'
import type { Contact, Prisma } from '@prisma/client'

export class InMemoryContactsRepository implements ContactsRepository {
  public items: Contact[] = []

  async create(contact: Contact): Promise<Contact> {
    this.items.push(contact)

    return contact
  }

  async delete(id: string): Promise<void> {
    const itemIndex = this.items.findIndex(item => item.id === id)

    this.items.splice(itemIndex, 1)
  }

  async findById(id: string): Promise<Contact | null> {
    const contact = this.items.find(item => item.id === id)

    return contact || null
  }

  async index(): Promise<Contact[] | null> {
    return [...this.items]
  }

  async update(id: string, data: Prisma.ContactUpdateInput): Promise<Contact> {
    const contactIndex = this.items.findIndex(item => item.id === id)

    if (contactIndex === -1) {
      throw new ContactNotFoundError('contato não encontrado')
    }

    const currentContact = this.items[contactIndex]

    const updatedContact = {
      ...currentContact,
      ...data,
      name: data.name ?? currentContact.name,
      phone: data.phone ?? currentContact.phone,
    } as Contact

    this.items[contactIndex] = updatedContact

    return updatedContact
  }
}
