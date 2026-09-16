# ABC Pay

ABC Pay is an early-stage South African stablecoin payment project. The product concept lets a merchant request a ZAR amount, lets a customer review and approve a stablecoin transfer, and aims to provide the merchant with ZAR settlement.

The repository contains the migrated responsive landing page and interactive demonstrations, plus a separate Express backend with registration, login, cookie-based sessions, PostgreSQL persistence, and wallet records. Registration creates a database wallet record; on-chain wallet provisioning and real money movement are not implemented.

The homepage includes mock values and UI-only demonstrations. It does not call payment APIs or create genuine QR payment requests. Payment processing, blockchain verification, conversion, KYB/KYC, reconciliation, and ZAR settlement remain planned integrations.

## Current stack

- Frontend: Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS 4
- Backend: Node.js, Express, and TypeScript
- Database: PostgreSQL and Prisma
- Authentication: bcrypt password hashing and JWT sessions in HTTP-only cookies
- Validation: Zod on the backend
- Backend tests: Vitest and Supertest
- ethers and viem remain candidates for later blockchain integration; neither is a current workspace dependency

## Requirements

- Node.js 20.9 or newer; Node.js 22 LTS is recommended
- npm
- Git

Mbuyiselo's confirmed local versions are compatible:

```text
Node.js v22.23.2
npm 10.9.8
```

For the full application, use Docker with Docker Compose for the supplied local PostgreSQL service, or provide an existing PostgreSQL database.

## Run locally

Run all commands below from the project root, which contains `frontend/`, `backend/`, and `package.json`.

### First-time setup

1. Install workspace dependencies:

```bash
npm ci
```

2. Create environment files without overwriting existing settings:

```bash
test -f backend/.env || cp backend/.env.example backend/.env
test -f frontend/.env.local || cp frontend/.env.example frontend/.env.local
```

Set `JWT_SECRET` in `backend/.env` to a long random secret. The example `DATABASE_URL` matches the supplied Docker PostgreSQL service. If using another database, update that URL instead.

3. With Docker running, start PostgreSQL:

```bash
docker compose up -d postgres
```

4. Generate the Prisma client and apply migrations:

```bash
npm run prisma:generate -w backend
npm run prisma:migrate -w backend
```

5. Start both applications:

```bash
npm run dev
```

- Frontend: http://localhost:3000
- Backend: http://localhost:4000
- Health check: http://localhost:4000/api/v1/health

The frontend uses `NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1`. The backend uses `FRONTEND_URL=http://localhost:3000` for CORS. If the frontend starts on another port, update `FRONTEND_URL` and restart the backend.

No Redis instance, VALR credentials, or wallet keys are needed for the currently implemented features.

### Subsequent runs

```bash
docker compose up -d postgres
npm run dev
```

Press **Ctrl+C** to stop both applications. Run `docker compose stop postgres` to also stop the database.

To run the applications in separate terminals, use `npm run dev -w frontend` and `npm run dev -w backend` from the root.

### Frontend demonstration only

After installing dependencies, you can view the landing page without a database or backend:

```bash
npm run dev -w frontend
```

Open http://localhost:3000. The landing-page demonstration needs no environment file; registration, login, and wallet data require the backend and database setup above.

## Verify the project

```bash
npm run lint
npm test
npm run build
```

Run these checks before opening a merge request. The root lint command checks frontend lint rules and backend types; the build command builds both applications. Backend API tests use an in-memory store and do not require PostgreSQL.

## Current routes

| Route | Current purpose |
| --- | --- |
| `/` | Responsive ABC Pay landing page and interactive payment demos |
| `/register` | Registration through the backend API |
| `/login` | Login through the backend API |
| `/wallet` | Display the authenticated user's backend wallet record |
| `/merchant/qr-generate` | Placeholder for merchant payment creation |
| `/scan` | Placeholder for customer QR scanning |
| `/approve/[id]` | Placeholder for payment review and approval |
| `/payments` | Placeholder for payment history |
| `/receipt/[id]` | Placeholder for a transaction receipt |

The earlier `/frontend/...` paths have been replaced by the routes above.

### Implemented backend endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/v1/health` | API health check |
| POST | `/api/v1/auth/register` | Create a user and wallet record |
| POST | `/api/v1/auth/login` | Start a session |
| POST | `/api/v1/auth/logout` | Clear the session cookie |
| GET | `/api/v1/auth/me` | Retrieve the authenticated user |
| GET | `/api/v1/wallets/me` | Retrieve the authenticated user's wallet |

The earlier Next.js API placeholders returning HTTP `501 Not Implemented` are no longer the current API structure. The Express backend implements the routes above and returns HTTP `404` for unknown routes. Payment endpoints are not implemented yet.

## Project structure

```text
abc_pay_mvp/
├── frontend/
│   └── src/
│       ├── app/
│       │   ├── page.tsx
│       │   ├── (auth)/
│       │   └── (dashboard)/
│       ├── components/landing/AbcPayLanding.tsx
│       └── services/api.ts
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── src/
│   │   ├── routes/
│   │   ├── stores/
│   │   ├── integrations/
│   │   ├── app.ts
│   │   └── server.ts
│   └── tests/
├── docker-compose.yml
└── package.json
```

The frontend communicates with the Express API. Database access and future exchange, blockchain, identity, and banking integrations belong in the backend. See [the backend README](backend/README.md) for additional backend details.

## Next implementation milestone

Before connecting the landing page to real payment services, the frontend and backend developers should agree on request and response contracts. The original proposed contracts were:

```text
POST /api/quotes
POST /api/payments
GET  /api/payments/:id/status
```

These are proposed endpoints, not implemented routes. Agree how they fit the current `/api/v1` prefix before implementation.

The first safe integration should use mock or sandbox responses and cover:

1. Merchant enters a valid ZAR amount.
2. Frontend requests a time-limited quote.
3. Frontend displays a payment URL or QR code.
4. Customer reviews merchant, amount, token, network, destination, reference, and expiry.
5. Frontend follows payment status.
6. Both sides receive a clear success, failed, or expired result.

## Planned technologies and integrations

PostgreSQL, Prisma, and basic authentication are now implemented. The following remain plans or integration placeholders:

- KYB/KYC and identity verification
- Redis and background workers
- VALR, Luno, or another approved conversion partner
- Real QR generation and scanning
- On-chain wallet provisioning and blockchain transfer verification
- Payment processing, reconciliation, and ZAR settlement

Add these only when their requirements, owner, security model, and API contract are agreed. Never expose database credentials, exchange secrets, wallet private keys, or authentication secrets through `NEXT_PUBLIC_` variables.

## Team workflow

- Work on a feature branch.
- Run `git pull --rebase` before pushing.
- Coordinate changes to shared database and API contracts, particularly `backend/prisma/schema.prisma`, `backend/src/types/store.ts`, `backend/src/lib/prisma.ts`, and `frontend/src/services/api.ts`. These replace the earlier shared-file locations under root `prisma/` and `src/lib/`.
- Use small descriptive commits such as `feat: migrate ABC Pay landing page`.
- Do not market the prototype as licensed, regulated, bank-approved, or production-ready without verified approval.

## Design source

The landing page was migrated from the Figma Make export previously labelled `Grocery shopping app design`. That label belonged only to the Figma project; the implemented product is ABC Pay.
