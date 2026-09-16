# ABC Pay

> **README history:** The original frontend README supplied by the team is preserved below. Its descriptions of the current implementation, routes, and setup refer to that earlier frontend version. For the restructured project, follow [Current project setup (addendum)](#current-project-setup-addendum).

ABC Pay is an early-stage South African stablecoin payment project. The product concept lets a merchant request a ZAR amount, lets a customer review and approve a stablecoin transfer, and aims to provide the merchant with ZAR settlement.

The current repository contains the migrated responsive landing page and interactive demonstrations. The payment, blockchain, conversion, identity, database, and settlement services are not implemented yet.

## Current stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ethers and viem reserved for later blockchain integration

## Requirements

- Node.js 20.9 or newer; Node.js 22 LTS is recommended
- npm
- Git

Mbuyiselo's confirmed local versions are compatible:

```text
Node.js v22.23.2
npm 10.9.8
```

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

No database, Redis instance, VALR credentials, wallet keys, or `.env` file is required for the current frontend demonstration.

## Verify the project

```bash
npm run lint
npm run build
```

Both commands should pass before opening a merge request.

## Current routes

| Route | Current purpose |
| --- | --- |
| `/` | Responsive ABC Pay landing page and interactive payment demos |
| `/merchant/qr-generate` | Placeholder for merchant payment creation |
| `/frontend/scan` | Placeholder for customer QR scanning |
| `/frontend/approve` | Placeholder for payment review and approval |
| `/frontend/receipt/[id]` | Placeholder for a transaction receipt |
| `/frontend/register` | Placeholder for registration/authentication |
| `/frontend/wallet` | Placeholder for the agreed wallet/custody experience |

The API route files return HTTP `501 Not Implemented`. This is deliberate: the routes compile, but they do not pretend that money movement or blockchain verification exists.

## Frontend structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── frontend/
│   ├── merchant/
│   └── api/
├── components/
│   ├── landing/AbcPayLanding.tsx
│   └── ComingSoonPage.tsx
└── lib/
    └── api/unavailable.ts
```

The homepage includes mock values and UI-only demonstrations. It does not call the API routes or create genuine QR payment requests.

## Next implementation milestone

Before connecting the landing page to real services, the frontend and backend developers should agree on request and response contracts for:

```text
POST /api/quotes
POST /api/payments
GET  /api/payments/:id/status
```

The first safe integration should use mock or sandbox responses and cover:

1. Merchant enters a valid ZAR amount.
2. Frontend requests a time-limited quote.
3. Frontend displays a payment URL or QR code.
4. Customer reviews merchant, amount, token, network, destination, reference, and expiry.
5. Frontend follows payment status.
6. Both sides receive a clear success, failed, or expired result.

## Planned technologies

The following technologies are architectural plans, not current dependencies:

- PostgreSQL and Prisma
- Authentication and KYB/KYC
- Redis and background workers
- VALR or another approved conversion partner
- Real QR generation and scanning
- Blockchain transfer verification
- Reconciliation and ZAR settlement

Add these only when their requirements, owner, security model, and API contract are agreed. Never expose database credentials, exchange secrets, wallet private keys, or authentication secrets through `NEXT_PUBLIC_` variables.

## Team workflow

- Work on a feature branch.
- Run `git pull --rebase` before pushing.
- Coordinate changes to `prisma/schema.prisma`, `src/lib/types.ts`, and `src/lib/db.ts`.
- Use small descriptive commits such as `feat: migrate ABC Pay landing page`.
- Do not market the prototype as licensed, regulated, bank-approved, or production-ready without verified approval.

## Design source

The landing page was migrated from the Figma Make export previously labelled `Grocery shopping app design`. That label belonged only to the Figma project; the implemented product is ABC Pay.

---

## Current project setup (addendum)

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

For additional startup instructions, see [the backend README](backend/README.md#quick-start-run-the-whole-project).
