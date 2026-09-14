# ABC Pay MVP

ABC Pay is a web-based payment MVP designed to support crypto and stablecoin payments while allowing merchants to ultimately receive fiat settlement.

The project originally started as a standard Next.js application bootstrapped with `create-next-app`, but the architecture has since been updated to separate the frontend from the backend.

## Architecture

The project now follows this structure:

```text
abc_pay/
├── frontend/
│   └── Next.js + TypeScript
│
├── backend/
│   └── Node.js + Express + TypeScript
│
├── docker-compose.yml
├── package.json
└── README.md
```

The application flow is:

```text
User
 ↓
Next.js Frontend
 ↓
Express Backend API
 ↓
Database / Blockchain / External APIs
```

The frontend does not communicate directly with blockchain providers, exchanges, KYC providers, banking services, or other external services.

All external integrations are handled through the backend.

---

## Frontend

The frontend uses:

* Next.js
* React
* TypeScript

The frontend is responsible for:

* Registration
* Login
* Wallet UI
* QR scanning
* Payment approval
* Payment history
* Receipts
* Merchant QR generation
* Communicating with the backend API

Example frontend routes include:

```text
/register
/login
/wallet
/scan
/payments
/approve/[id]
/receipt/[id]
/merchant/qr-generate
```

---

## Backend

A dedicated backend has been added using:

* Node.js
* Express
* TypeScript
* Prisma
* PostgreSQL

The backend is responsible for:

* Authentication
* User registration
* Login
* Logout
* User sessions
* Wallet management
* Payments
* Quotes
* Ledger management
* KYC
* Custody
* Crypto-to-fiat conversion
* Settlement
* Reconciliation
* Blockchain interaction
* External API integrations

The backend is intentionally separated from Next.js so that payment, blockchain, database, and financial logic remain isolated from the frontend.

---

## Authentication Changes

Authentication functionality has been added to the backend.

Available authentication flows include:

```text
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
```

Passwords are hashed before being stored.

Authentication sessions use JWT tokens stored in HTTP-only cookies.

Protected endpoints require a valid authenticated session.

---

## User Registration

Registration now creates a user account in the backend.

A user contains information such as:

```text
id
name
email
passwordHash
createdAt
updatedAt
```

When a new user successfully registers, a wallet is automatically created and linked to that user.

---

## Wallet Model

A wallet model has been added to represent the user's wallet inside the platform.

The relationship is:

```text
User
  ↓
Wallet
```

A wallet can contain information such as:

```text
walletId
userId
walletAddress
currency
balance
createdAt
updatedAt
```

The authenticated user's wallet can be retrieved through a protected endpoint such as:

```text
GET /api/wallets/me
```

The wallet abstraction will later allow the platform to manage blockchain addresses, balances, custody, transactions, and supported assets without requiring the frontend to interact directly with blockchain infrastructure.

---

## Database Models

Prisma is used as the backend ORM.

The current MVP database structure includes models for:

* User
* Wallet
* Merchant
* Payment
* Quote
* LedgerEntry
* KycProfile

These models live in:

```text
backend/prisma/schema.prisma
```

Unlike a Mongoose-based application, Prisma models are defined inside the Prisma schema instead of separate files such as:

```text
models/User.ts
models/Wallet.ts
```

---

## External API Architecture

The backend also contains integration boundaries for external providers.

These may include:

```text
backend/src/integrations/
├── exchanges/
├── blockchain/
├── kyc/
└── banking/
```

Future providers may include:

* VALR
* Luno
* Blockchain RPC providers
* KYC / identity verification providers
* Banking APIs
* Payout providers
* Pricing APIs
* Notification providers

The architecture follows this pattern:

```text
Frontend
   ↓
Our Backend
   ↓
External Provider
```

For example:

```text
Next.js
   ↓
Express API
   ↓
Conversion Service
   ↓
VALR / Luno
```

API credentials and sensitive provider information remain exclusively on the backend.

---

## Backend Testing

Backend tests have been added using:

* Vitest
* Supertest

The initial API test suite covers:

* API health
* Successful registration
* Invalid registration
* Duplicate registration
* Successful login
* Incorrect password rejection
* Authenticated user lookup
* Protected wallet access

Tests are stored under:

```text
backend/tests/
```

The tests use an in-memory application store where appropriate so that basic API tests do not require a running PostgreSQL database.

Run backend tests with:

```bash
cd backend
npm test
```

---

## Getting Started

### Install dependencies

From the project root:

```bash
npm install
```

You may also install frontend and backend dependencies individually:

```bash
cd frontend
npm install
```

and:

```bash
cd backend
npm install
```

---

## Start the Frontend

Navigate to the frontend:

```bash
cd frontend
```

Run the development server:

```bash
npm run dev
```

Or:

```bash
yarn dev
```

```bash
pnpm dev
```

```bash
bun dev
```

Open:

```text
http://localhost:3000
```

with your browser.

The page automatically updates as frontend files are edited.

---

## Start the Backend

Navigate to:

```bash
cd backend
```

Start the development server:

```bash
npm run dev
```

The backend runs separately from the Next.js frontend and exposes the application's REST API.

---

## Database

The backend uses PostgreSQL with Prisma.

A database connection string should be configured in the backend `.env` file.

Example:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/abc_pay"
```

Generate the Prisma client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

You can inspect the database using:

```bash
npx prisma studio
```

---

## Environment Variables

Sensitive credentials should never be committed to Git.

Example backend environment variables:

```env
DATABASE_URL=
JWT_SECRET=
FRONTEND_URL=http://localhost:3000

VALR_API_KEY=
VALR_API_SECRET=

LUNO_API_KEY=

BLOCKCHAIN_RPC_URL=

KYC_API_KEY=

BANKING_API_KEY=
```

Create a local `.env` file and ensure it is included in `.gitignore`.

---

## Current MVP Payment Direction

The intended payment architecture is:

```text
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
```

Some parts of this flow are currently architecture placeholders and will be implemented incrementally as the MVP develops.

---

## Learn More

To learn more about Next.js:

* Next.js Documentation
* Learn Next.js
* Next.js GitHub repository

To learn more about the backend technologies:

* Node.js Documentation
* Express Documentation
* Prisma Documentation
* PostgreSQL Documentation
* Vitest Documentation
* Supertest Documentation

---

## Deployment

The frontend can eventually be deployed using platforms such as Vercel.

The backend should be deployed separately as a Node.js service with access to:

* PostgreSQL
* blockchain RPC providers
* external exchange APIs
* KYC providers
* banking / settlement providers

Production deployment architecture will be defined as the MVP matures.
