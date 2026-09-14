This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# ABC Pay

Crypto-to-fiat payment gateway enabling merchants to accept crypto payments and receive instant ZAR settlement, powered by VALR and built for FSCA-regulated CASP operations in South Africa.

## Tech Stack

- **Framework:** Next.js (App Router) — frontend + backend in one codebase
- **Database:** PostgreSQL via Prisma ORM
- **Blockchain:** ethers.js / viem (Base or Polygon network — TBD)
- **Conversion:** VALR API (HMAC-SHA512 signed REST)
- **Background jobs:** BullMQ + Redis
- **Auth:** NextAuth
- **UI:** Tailwind CSS + shadcn/ui
- **Validation:** Zod + React Hook Form
- **State management:** Zustand

## Prerequisites

Before you start, install:

- **Node.js** v18.17 or later ([download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Git**
- A code editor (VS Code recommended)

You do **not** need Docker for local development — see note at the bottom.

## Getting Started

### 1. Clone the repo

```bash
git clone <repo-url>
cd abc-pay
```

### 2. Install dependencies

```bash
npm install
```

This installs everything listed in `package.json` — no need to install packages individually.

### 3. Set up environment variables

Copy the example env file and fill in the values (ask the team lead for API keys/secrets — never commit real secrets):

```bash
cp .env.example .env
```

You'll need:
- `DATABASE_URL` — Postgres connection string (see Database section below)
- `VALR_API_KEY` / `VALR_API_SECRET`
- `NEXTAUTH_SECRET` — generate with `openssl rand -base64 32`
- `UPSTASH_REDIS_URL` (or local Redis URL if running one)

### 4. Set up the database

We're using a free-tier hosted Postgres (Supabase or Neon) — no local Postgres install needed. Get the connection string from whoever provisioned it and put it in `.env` as `DATABASE_URL`.

Then run:

```bash
npx prisma generate
npx prisma db push
```

This generates the Prisma client and syncs the schema to the database.

### 5. Run the dev server

```bash
npm run dev
```

App runs at [http://localhost:3000](http://localhost:3000).

## Project Structure & Ownership

| Folder | Owner | Responsibility |
|---|---|---|
| `src/app/(customer)`, `src/app/(merchant)`, `src/components` | Frontend Dev | Customer/merchant UI, QR scan/generate flow |
| `src/app/api/quotes`, `src/app/api/payments`, `src/app/api/ledger`, `src/lib/ledger` | Backend Dev | Payment core, ledger logic |
| `src/app/api/custody`, `src/app/api/conversion`, `src/lib/custody`, `src/lib/conversion`, `src/workers` | Blockchain Dev | Custody, VALR integration, batch conversion |
| `src/app/api/kyc`, `src/app/api/settlement`, `src/app/api/reconciliation`, `src/lib/kyc`, `src/lib/settlement` | Identity/Settlement Dev | KYB onboarding, AML screening, payout, reconciliation |

**Shared files — coordinate before editing:**
- `prisma/schema.prisma` — the database schema
- `src/lib/types.ts` — shared TypeScript interfaces
- `src/lib/db.ts` — Prisma client singleton

## Git Workflow

- Pull before you push: `git pull --rebase` to avoid unnecessary merge commits
- Commit to your own folder freely; flag shared-file changes in the team chat before pushing
- Keep commit messages short and descriptive: `feat: add QR scan flow`, `fix: quote expiry timer`

## Useful Commands

```bash
npm run dev          # start dev server
npm run build         # production build
npx prisma studio     # visual DB browser
npx prisma db push    # sync schema changes to DB
```

## Why No Docker (for now)

We're skipping Docker for local dev to save setup time during the MVP sprint — Node dependencies still install the same way inside a container, so it doesn't remove the `npm install` step, it just adds container overhead. Each dev just needs Node installed locally. If we hit "works on my machine" issues, we'll containerize just the database/Redis, not the whole app.