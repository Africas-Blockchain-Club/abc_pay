# ABC Pay MVP

Web MVP with a separated frontend and backend.

## Stack

- Frontend: Next.js + React + TypeScript
- Backend: Node.js + Express + TypeScript
- Database: PostgreSQL + Prisma
- Backend tests: Vitest + Supertest
- Auth: email/password + JWT stored in an httpOnly cookie

## Structure

```text
abc_pay_mvp/
├── frontend/   # Next.js web app
├── backend/    # Express REST API
├── docker-compose.yml
└── package.json
```

## Run locally

1. Copy environment files:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local
```

2. Start PostgreSQL:

```bash
docker compose up -d postgres
```

3. Install packages:

```bash
npm install
```

4. Create Prisma client and database tables:

```bash
npm run prisma:generate -w backend
npm run prisma:migrate -w backend -- --name init
```

5. Run frontend and backend:

```bash
npm run dev
```

- Frontend: http://localhost:3000
- Backend: http://localhost:4000
- Health: http://localhost:4000/api/v1/health

## Tests

```bash
npm test
```

The backend API tests use an in-memory store, so they do not need PostgreSQL running.
