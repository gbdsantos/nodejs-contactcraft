import { InMemoryContactsRepository } from '@/test/repositories/in-memory-contacts-repository'
import { CreateContactUseCase } from './create-contact'
import { DeleteContactUseCase } from './delete-contact'

let inMemoryContactsRepository: InMemoryContactsRepository
let createContactUseCase: CreateContactUseCase
let sut: DeleteContactUseCase

describe('Delete Contact (Use Case)', () => {
  beforeEach(() => {
    inMemoryContactsRepository = new InMemoryContactsRepository()
    createContactUseCase = new CreateContactUseCase(inMemoryContactsRepository)
    sut = new DeleteContactUseCase(inMemoryContactsRepository)

    jest.clearAllMocks()
  })

  it('should be able to delete a contact', async () => {
    const contactData = {
      name: 'John Doe',
      phone: '+55011987654321',
    }

    const contact = await createContactUseCase.execute(contactData)

    await sut.execute(contact.id)

    expect(inMemoryContactsRepository.items).toHaveLength(0)
  })
})
