import type { Contact, Prisma } from '@prisma/client'

export interface ContactsRepository {
  create(data: Prisma.ContactCreateInput): Promise<Contact>
  findById(id: string): Promise<Contact | null>
  index(): Promise<Contact[] | null>
  update(id: string, data: Prisma.ContactUpdateInput): Promise<Contact>
  delete(id: string): Promise<void>
}
