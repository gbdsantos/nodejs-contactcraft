import { InMemoryContactsRepository } from '@/test/repositories/in-memory-contacts-repository'
import { CreateContactUseCase } from './create-contact'
import { GetContactsListUseCase } from './get-contacts-list'

let inMemoryContactsRepository: InMemoryContactsRepository
let createContactUseCase: CreateContactUseCase
let sut: GetContactsListUseCase

describe('List Contacts (Use Case)', () => {
  beforeEach(() => {
    inMemoryContactsRepository = new InMemoryContactsRepository()
    createContactUseCase = new CreateContactUseCase(inMemoryContactsRepository)
    sut = new GetContactsListUseCase(inMemoryContactsRepository)

    jest.clearAllMocks()
  })

  it('should be able to list all contacts', async () => {
    const contactsToCreate = [
      { name: 'John Doe', phone: '+55011987654321' },
      { name: 'John Smith', phone: '+55021998765432' },
      { name: 'Jane Doe', phone: '+55031987654321' },
    ]

    await Promise.all(
      contactsToCreate.map(contact => createContactUseCase.execute(contact))
    )

    const result = await sut.execute()

    expect(result).toBeInstanceOf(Array)
    expect(result).toHaveLength(contactsToCreate.length)
  })

  it('should return an empty array when no contacts exist', async () => {
    const result = await sut.execute()

    expect(result).toEqual([])
    expect(result).toHaveLength(0)
    expect(inMemoryContactsRepository.items).toHaveLength(0)
  })
})
