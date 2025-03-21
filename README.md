<div align="center">
  <h1 align="center">
  ☎️ ContactCraft
  </h1>
</div>

<p align="center">
  <a href="https://biomejs.dev">
    <img alt="Biome logo image" src="https://img.shields.io/badge/Biome-61A3FF?style=flat&logo=biome&logoColor=white">
  </a>

  <a href="https://expressjs.com">
    <img alt="Expressjs logo image" src="https://img.shields.io/badge/Express-20232A?style=flat&logo=express&logoColor=white">
  </a>

  <a href="https://nodejs.org">
    <img alt="Node.js version" src="https://img.shields.io/badge/Node.js-v22.14.0-43853D?style=flat&logo=node.js&logoColor=white&labelColor=43853D&color=5a5a5a">
  </a>

  <a href="https://www.mysql.com">
    <img alt="MySQL logo" src="https://img.shields.io/badge/MySQL-3E6E94?style=flat-&logo=mysql&logoColor=white">
  </a>

  <a href="https://www.prisma.io">
    <img alt="Prisma ORM logo image" src="https://img.shields.io/badge/Prisma-3982CE?style=flat&logo=Prisma&logoColor=white">
  </a>

  <a href="https://www.typescriptlang.org" target="_blank">
    <img alt="TypeScript logo" src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white">
  </a>
</p>

## Getting Started

1. Create .env file in root project directory (copy & past file content in `.env.example`)

2. Install dependencies and run bellow commands

```bash
# Install dependencies
npm install

# Create a new Docker environment
docker compose up -d

# Run Prisma migrations [OPTIONAL]
npx prisma migrate dev

# Run project
npm run start:dev
```

## About 

Challenge/Technical test to Port Louis company.

<br>

## Functional Requirements (FR)

- [ ] Create contact (name and phone);
- [ ] Update contact;
- [ ] Delete contact.

## Business Requirements (BR)

- [ ] Name: Minimum of two words, each with at least 3 letters.

## Non-Functional Requirements (NFR)

- [x] Create a Node.js application using the Express framework;
- [x] The application data must be persisted in a MySQL database;
- [x] Create a .env file to store environment variables (such as database credentials).

---
Made with ❤️ by 🧑‍🚀 Guilherme Bezerra 👋 [Get in touch!](https://www.linkedin.com/in/gbdsantos/)
