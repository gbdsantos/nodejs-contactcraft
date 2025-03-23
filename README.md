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

  <a href="https://nodejs.org">
    <img alt="imagem do logo Node.js com a versão" src="https://img.shields.io/badge/Node.js-v22.14.0-43853D?style=flat&logo=node.js&logoColor=white&labelColor=43853D&color=5a5a5a">
  </a>

  <a href="https://www.mysql.com">
    <img alt="imagem do logotipo MySQL" src="https://img.shields.io/badge/MySQL-3E6E94?style=flat-&logo=mysql&logoColor=white">
  </a>

  <a href="https://www.prisma.io">
    <img alt="imagem do logotipo Prisma ORM" src="https://img.shields.io/badge/Prisma-3982CE?style=flat&logo=Prisma&logoColor=white">
  </a>

  <a href="https://www.typescriptlang.org" target="_blank">
    <img alt="imagem do logotipo TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white">
  </a>
</p>

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

# Criar e aplicar migrações durante o desenvolvimento [OPCIONAL]
npx prisma migrate dev

# Executar o projeto
npm run start:dev
```

## Sobre 

Desafio/Teste técnico para a empresa **Port Louis** que consiste em uma api para gerenciar contatos telefônicos.

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

---

Feito com ❤️ por **Guilherme Bezerra** 👋 [Entrar em contato!](https://www.linkedin.com/in/gbdsantos)
