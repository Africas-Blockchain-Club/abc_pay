ABC Pay MVP

## Quick start: run the whole project

Make sure Node.js, npm, and Docker with Docker Compose are installed, and Docker is running. Run the following commands from the project root (`abc_pay_mvp/`), which contains both `frontend/` and `backend/`. If your terminal is currently inside `backend/`, run `cd ..` first.

### First-time setup

```bash
npm install

# Create environment files without overwriting existing settings
test -f backend/.env || cp backend/.env.example backend/.env
test -f frontend/.env.local || cp frontend/.env.example frontend/.env.local

# Start PostgreSQL
docker compose up -d postgres

# Generate the Prisma client and apply database migrations
npm run prisma:generate -w backend
npm run prisma:migrate -w backend

# Start both the frontend and backend
npm run dev
```

Before starting the app, set `JWT_SECRET` in `backend/.env` to a long random secret. The example database settings match the PostgreSQL service in `docker-compose.yml`.

Open:

- App: http://localhost:3000
- Backend: http://localhost:4000
- Backend health check: http://localhost:4000/api/v1/health

### Subsequent runs

From the project root:

```bash
docker compose up -d postgres
npm run dev
```

Press **Ctrl+C** to stop the frontend and backend. To also stop PostgreSQL, run `docker compose stop postgres`.

To run each application in a separate terminal, use `npm run dev -w backend` in one and `npm run dev -w frontend` in the other, both from the project root.

ABC Pay is a web-based payment MVP designed to support crypto and stablecoin payments while allowing merchants to ultimately receive fiat settlement.

The project originally started as a standard Next.js application, but the architecture has been updated to separate the frontend from the backend.

Architecture

abc_pay/
├── frontend/
│   └── Next.js + React + TypeScript
│
├── backend/
│   └── Node.js + Express + TypeScript
│
├── docker-compose.yml
├── package.json
└── README.md

Application flow:

User
 ↓
Next.js Frontend
 ↓
Express Backend API
 ↓
PostgreSQL / Blockchain / External APIs

The frontend does not communicate directly with blockchain providers, exchanges, KYC providers, banking services, or other external services.

All external integrations are handled through the backend.

Frontend

The frontend uses:

Next.js

React

TypeScript

The frontend is responsible for:

Registration

Login

Wallet UI

QR scanning

Payment approval

Payment history

Receipts

Merchant QR generation

Communicating with the backend API

Example routes:

/register
/login
/wallet
/scan
/payments
/approve/[id]
/receipt/[id]
/merchant/qr-generate

Backend

The backend uses:

Node.js

Express

TypeScript

Prisma

PostgreSQL

The backend is responsible for:

Authentication

User registration

Login and logout

User sessions

Wallet management

Payments

Quotes

Ledger management

KYC

Custody

Crypto-to-fiat conversion

Settlement

Reconciliation

Blockchain interaction

External API integrations

The backend is intentionally separated from Next.js so that payment, blockchain, database, and financial logic remain isolated from the frontend.

Authentication

Available authentication routes:

POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/logout
GET  /api/v1/auth/me

Passwords are hashed before being stored.

Authentication sessions use JWT tokens stored in HTTP-only cookies.

Protected endpoints require a valid authenticated session.

When a user registers successfully, a wallet is automatically created and linked to that user.

Wallet

The authenticated user's wallet can be retrieved through:

GET /api/v1/wallets/me

The wallet abstraction will later support blockchain addresses, balances, custody, transactions, and supported assets without requiring the frontend to interact directly with blockchain infrastructure.

Database Models

Prisma is used as the backend ORM.

Current MVP models include:

User

Wallet

Merchant

Payment

Quote

LedgerEntry

KycProfile

Models are defined in:

backend/prisma/schema.prisma

External API Architecture

External services are accessed only through the backend.

Frontend
   ↓
Express Backend
   ↓
Integration Service
   ↓
External Provider

Planned integration categories include:

backend/src/integrations/
├── exchanges/
├── blockchain/
├── kyc/
└── banking/

Potential providers include:

VALR

Luno

Blockchain RPC providers

KYC / identity verification providers

Banking and payout providers

Pricing APIs

Notification providers

API keys and provider credentials must remain on the backend and must never be exposed to the frontend.

Backend Testing

Backend tests use:

Vitest

Supertest

The current test suite covers:

API health

Successful registration

Invalid registration

Duplicate registration

Successful login

Incorrect password rejection

Authenticated user lookup

Protected wallet access

Tests are located in:

backend/tests/

Run tests with:

cd backend
npm test

Local Development

1. Install Dependencies

From the project root:

npm install

Or install each application separately:

cd frontend
npm install

cd backend
npm install

2. Start PostgreSQL

From the project root:

docker compose up -d postgres

The default development database configuration is:

Database: abc_pay
User: abc_pay
Password: abc_pay
Port: 5432

3. Configure Backend Environment

Inside backend/:

cp .env.example .env

Example backend/.env:

PORT=4000

DATABASE_URL=postgresql://abc_pay:abc_pay@localhost:5432/abc_pay?schema=public

JWT_SECRET=replace-this-with-a-long-random-secret

FRONTEND_URL=http://localhost:3000

If Next.js starts on port 3001, either update FRONTEND_URL or configure CORS to allow both development origins.

Sensitive credentials must never be committed to Git.

Future environment variables may include:

VALR_API_KEY=
VALR_API_SECRET=
LUNO_API_KEY=
BLOCKCHAIN_RPC_URL=
KYC_API_KEY=
BANKING_API_KEY=

4. Initialize Prisma

From backend/:

npx prisma generate
npx prisma migrate dev --name init

To inspect the database:

npx prisma studio

5. Run the Backend

From backend/:

npm run dev

Development backend:

http://localhost:4000

For a production-style run:

npm run build
npm start

npm start runs the compiled file:

dist/server.js

6. Run the Frontend

Open another terminal:

cd frontend
npm run dev

Frontend:

http://localhost:3000

If port 3000 is already occupied, Next.js may start on:

http://localhost:3001

CORS

The backend must allow the origin used by the frontend.

For local development, the backend may allow both:

http://localhost:3000
http://localhost:3001

The frontend should communicate only with the backend:

Next.js Frontend
        ↓
Express Backend
        ↓
PostgreSQL / Blockchain / External APIs

Frontend requests that use cookie-based authentication must include credentials.

Example:

fetch("http://localhost:4000/api/v1/auth/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
  body: JSON.stringify(data),
});

Common Development Issues

DATABASE_URL not found

If Prisma reports:

Environment variable not found: DATABASE_URL

make sure this file exists:

backend/.env

and contains:

DATABASE_URL=postgresql://abc_pay:abc_pay@localhost:5432/abc_pay?schema=public

Restart the backend after changing environment variables.

CORS origin mismatch

If the frontend runs on http://localhost:3001 while the backend only allows http://localhost:3000, browser requests will be blocked.

Update the backend CORS configuration or the FRONTEND_URL environment variable.

dist/server.js not found

If npm start fails because dist/server.js does not exist, compile the TypeScript backend first:

npm run build
npm start

During development, use:

npm run dev

Current MVP Payment Direction

Customer scans merchant QR
        ↓
Frontend requests payment quote
        ↓
Backend creates payment
        ↓
Customer pays using crypto / stablecoin
        ↓
Backend verifies blockchain payment
        ↓
Crypto enters platform custody
        ↓
Conversion service
        ↓
VALR / Luno
        ↓
Crypto converted to ZAR
        ↓
Platform fee calculated
        ↓
Ledger updated
        ↓
Settlement service
        ↓
Merchant receives ZAR

Some parts of this flow are currently architecture placeholders and will be implemented incrementally as the MVP develops.

Deployment

The frontend can be deployed separately from the backend.

A future production environment will require:

Next.js frontend hosting

Node.js backend hosting

PostgreSQL

Blockchain RPC access

Exchange API access

KYC integration

Banking / settlement integration

Secure secret management

Production infrastructure will be defined as the MVP matures.
