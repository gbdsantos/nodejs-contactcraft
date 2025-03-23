import { prisma } from '@/database/prisma'
import type { Contact, Prisma } from '@prisma/client'
import type { ContactsRepository } from '../contacts-repository'

export class PrismaContactsRepository implements ContactsRepository {
  async create(data: Prisma.ContactCreateInput) {
    const contact = await prisma.contact.create({
      data,
    })

    return contact
  }

  async findById(id: string): Promise<Contact | null> {
    const contact = await prisma.contact.findUnique({
      where: { id },
    })

    return contact
  }

  async index() {
    const contacts = await prisma.contact.findMany()

    return contacts
  }

  async update(contactId: string, data: Prisma.ContactUpdateInput) {
    const contact = await prisma.contact.update({
      where: { id: contactId },
      data,
    })

    return contact
  }

  async delete(contactId: string) {
    await prisma.contact.delete({
      where: { id: contactId },
    })
  }
}
