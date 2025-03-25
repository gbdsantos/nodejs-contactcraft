<div align="center">
  <h1 align="center">
  ☎️ ContactCraft
  </h1>
</div>

<p align="center">
  <a href="https://biomejs.dev">
    <img alt="imagem do logotipo Biome" src="https://img.shields.io/badge/Biome-61A3FF?style=flat&logo=biome&logoColor=white">
  </a>

  <a href="https://expressjs.com">
    <img alt="imagem do logotipo Expressjs" src="https://img.shields.io/badge/Express-20232A?style=flat&logo=express&logoColor=white">
  </a>

  <a href="https://jestjs.io">
    <img alt="imagem do logotipo Jest" src="https://img.shields.io/badge/Jest-98425B?style=flat&logo=jest&logoColor=white">
  </a>

  <a href="https://nodejs.org">
    <img alt="imagem do logo Node.js com a versão" src="https://img.shields.io/badge/Node.js-v22.14.0-43853D?style=flat&logo=node.js&logoColor=white&labelColor=43853D&color=5a5a5a">
  </a>

  <a href="https://www.mysql.com">
    <img alt="imagem do logotipo MySQL" src="https://img.shields.io/badge/MySQL-3E6E94?style=flat-&logo=mysql&logoColor=white">
  </a>

  <a href="https://www.prisma.io">
    <img alt="imagem do logotipo Prisma ORM" src="https://img.shields.io/badge/Prisma-3982CE?style=flat&logo=Prisma&logoColor=white">
  </a>

  <a href="https://swagger.io">
    <img alt="imagem do logotipo Swagger" src="https://img.shields.io/badge/Swagger-black?style=flat&logo=Swagger&logoColor=green">
  </a>

  <a href="https://www.typescriptlang.org" target="_blank">
    <img alt="imagem do logotipo TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white">
  </a>
</p>

## Sobre 

Desafio/Teste técnico para a empresa **Port Louis** que consiste em uma api para gerenciar contatos telefônicos.

## Começando

1. Crie um arquivo `.env` no diretório raiz do projeto (copie e cole o conteúdo do arquivo `.env.example`).

2. Instale as dependências e execute os comandos abaixo:

```bash
# Instalar dependências
npm install

# Criar um novo ambiente Docker
docker compose up -d

# Gerar o cliente do Prisma
npx prisma generate

# Criar e aplicar migrations
npx prisma migrate dev

# Executar o projeto
npm run start:dev

# Executar testes [OPCIONAL]
npm test
```

Para testar os endpoints da API você pode:
- Acessar pelo endereço `http://localhost:3000/docs` pelo Swagger com todas as rotas documentadas;
- Diretamente pelo Visual Studio Code com a extensão [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client "REST Client para Visual Studio Code") instalada abrindo o arquivo chamado `requests.http` que está no diretório raiz do projeto;
- Utilizar um REST Client de sua preferência (ex: Insomnia, Postman).

<br>

## Requisitos Funcionais (RF)

- [x] Criar contato (nome e telefone);
- [x] Listar todos os contatos;
- [x] Atualizar contato;
- [x] Excluir contato.

## Requisitos de Negócio (RN)

- [x] Nome: Mínimo de duas palavras, cada uma com pelo menos 3 letras.

## Requisitos Não Funcionais (RNF)

- [x] Criar uma aplicação em Node.js utilizando o framework Express;
- [x] Os dados da aplicação devem ser persistidos em um banco de dados MySQL;
- [x] Criar um arquivo `.env` para armazenar variáveis de ambiente (como credenciais do banco de dados).

<br>

## Milha extra

- [x] Documentação da API com Swagger
- [x] Testes unitários com Jest

<br>

## ⚖️ Licença

Este projeto está sob a licença Creative Commons Attribution-NonCommercial (CC BY-NC 4.0). Veja em [LICENSE](https://github.com/gbdsantos/nodejs-contactcraft/blob/main/LICENSE) para mais informações.

---

Feito com ❤️ por **Guilherme Bezerra** 👋 [Entrar em contato!](https://www.linkedin.com/in/gbdsantos)
