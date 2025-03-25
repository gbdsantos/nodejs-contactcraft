import { InMemoryContactsRepository } from '@/test/repositories/in-memory-contacts-repository'
import { CreateContactUseCase } from './create-contact'

let inMemoryContactsRepository: InMemoryContactsRepository
let sut: CreateContactUseCase

describe('Create Contact (Use Case)', () => {
  beforeEach(() => {
    inMemoryContactsRepository = new InMemoryContactsRepository()
    sut = new CreateContactUseCase(inMemoryContactsRepository)

    jest.clearAllMocks()
  })

  it('should be able to create a contact', async () => {
    const contactData = {
      name: 'John Doe',
      phone: '+55011987654321',
    }

    const result = await sut.execute(contactData)

    expect(result).toMatchObject(contactData)
    expect(inMemoryContactsRepository.items).toHaveLength(1)
    expect(inMemoryContactsRepository.items[0]).toEqual(
      expect.objectContaining(contactData)
    )
  })
})
