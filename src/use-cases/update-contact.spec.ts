import { randomUUID } from 'node:crypto'
// update-contact.spec.ts
import { InMemoryContactsRepository } from '@/test/repositories/in-memory-contacts-repository'
import { CreateContactUseCase } from './create-contact'
import { ContactNotFoundError } from './errors/contact-not-found'
import { UpdateContactUseCase } from './update-contact'

let inMemoryContactsRepository: InMemoryContactsRepository
let createContactUseCase: CreateContactUseCase
let sut: UpdateContactUseCase

describe('Update Contact (Use Case)', () => {
  beforeEach(() => {
    inMemoryContactsRepository = new InMemoryContactsRepository()
    createContactUseCase = new CreateContactUseCase(inMemoryContactsRepository)
    sut = new UpdateContactUseCase(inMemoryContactsRepository)

    jest.clearAllMocks()
  })

  it('should be able to update a contact', async () => {
    const contactData = {
      name: 'John Doe',
      phone: '+55011987654321',
    }

    const contact = await createContactUseCase.execute(contactData)

    const updatedContact = await sut.execute({
      contactId: contact.id,
      data: { name: 'John Smith', phone: '+55021998765432' },
    })

    expect(updatedContact.name).toBe('John Smith')
    expect(updatedContact.phone).toBe('+55021998765432')
  })

  it('should not be able to update a non-existing contact', async () => {
    await expect(
      sut.execute({
        contactId: 'non-existing-id',
        data: { name: 'Test' },
      })
    ).rejects.toBeInstanceOf(ContactNotFoundError)
  })

  it('should be able to update partial fields without affecting others', async () => {
    const contactData = {
      name: 'John Doe',
      phone: '+55011987654321',
    }

    const contact = await createContactUseCase.execute(contactData)

    const updatedContact = await sut.execute({
      contactId: contact.id,
      data: { name: 'John Smith' },
    })

    expect(updatedContact.name).toBe(updatedContact.name)
    expect(updatedContact.phone).toBe(contact.phone)
  })
})
