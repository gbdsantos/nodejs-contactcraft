import swaggerJsDoc from 'swagger-jsdoc'

const swaggerOptions = swaggerJsDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ContactCraft API',
      version: '1.0.0',
      description: 'A CRUD Contact list/Phone book project',
    },
    servers: [{ url: 'http://localhost:3000', description: 'Servidor local' }],
    components: {
      schemas: {
        ContactBody: {
          type: 'object',
          required: ['name', 'phone'],
          properties: {
            name: {
              type: 'string',
              description: 'Nome do contato',
            },
            phone: {
              type: 'string',
              description: 'Número de telefone do contato',
            },
          },
          example: {
            name: 'John Doe',
            phone: '+55011987654321',
          },
        },
        ContactResponse: {
          type: 'object',
          properties: {
            contact: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  format: 'uuid',
                  description: 'ID único do contato',
                },
                name: {
                  type: 'string',
                  description: 'Nome do contato',
                },
                phone: {
                  type: 'string',
                  description: 'Número de telefone do contato',
                },
              },
            },
          },
          example: {
            contact: {
              id: '2c427150-554e-42fd-b853-65b4e82114bc',
              name: 'John Doe',
              phone: '+55011987654321',
            },
          },
        },
        ContactsResponse: {
          type: 'object',
          properties: {
            contacts: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: {
                    type: 'string',
                    format: 'uuid',
                    description: 'ID único do contato',
                  },
                  name: {
                    type: 'string',
                    description: 'Nome do contato',
                  },
                  phone: {
                    type: 'string',
                    description: 'Número de telefone do contato',
                  },
                },
              },
            },
          },
          example: {
            contacts: [
              {
                id: '2c427150-554e-42fd-b853-65b4e82114bc',
                name: 'John Doe',
                phone: '+55011987654321',
              },
              {
                id: 'd6292acb-70d5-4a56-95c1-307919a7b94d',
                name: 'John Smith',
                phone: '+55021998765432',
              },
            ],
          },
        },
        ContactDeletedResponse: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Mensagem de sucesso que o contato foi deletado',
            },
          },
          example: {
            message: 'Contact successfully deleted',
          },
        },
        ContactNotFoundErrorResponse: {
          type: 'object',
          properties: {
            error: {
              type: 'object',
              properties: {
                code: {
                  type: 'string',
                  description: 'Código customizado de erro da aplicação',
                },
                message: {
                  type: 'string',
                  description: 'Mesagem de erro',
                },
              },
            },
          },
          example: {
            error: {
              code: 'APP_ERROR',
              message: 'Contact does not exist',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes.ts'],
})

export default swaggerOptions
