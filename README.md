# ABC Pay — Sepolia USDC Merchant Payment Platform

ABC Pay is a stablecoin payment platform tailored for South African merchants. It allows logged-in merchants to generate dynamic QR codes for USDC payments on the **Ethereum Sepolia Testnet**. Customers scan the QR code to review the checkout details and execute an ERC-20 `transfer` directly to the merchant's wallet using MetaMask or another EVM wallet. The payment is cryptographically verified on-chain and lands directly in the merchant's account.

---

## Key Features

- **Sepolia On-Chain Transfers**: Direct peer-to-peer ERC-20 transfers using Circle's official Sepolia USDC contract (`0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238`).
- **Dynamic Payment QR Codes**: Merchants specify the USDC amount (and optional ZAR conversion). The system generates a scannable QR code encoded with the direct checkout URL and EIP-681 standard URI.
- **Automated Customer Checkout**: Scanners open `/pay/[id]`, connect MetaMask, auto-switch to Sepolia testnet, and sign the transaction with 1-click.
- **On-Chain Cryptographic Verification**: The backend inspects the Sepolia transaction receipt, decodes ERC-20 `Transfer` event topics, verifies the recipient wallet and amount, and marks the invoice as confirmed.
- **Live Merchant Polling & Instant Settlement**: The merchant's QR page polls every 2 seconds and automatically transitions to a success screen with tx hash and Etherscan link when paid.
- **User & Wallet Management**: Secure registration and cookie-based JWT authentication, recording user profiles and linked EVM wallet addresses.
- **USDC <-> ZAR Ramp Engine**: Built-in quotation and ramp routing for ZAR fiat conversion.

---

## Project Architecture

This repository is structured as an npm workspace monorepo:

```text
abc_pay/
├── frontend/                     # Next.js 16 (Turbopack) & React 19 Frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── (auth)/          # Login & Register pages
│   │   │   ├── (dashboard)/     # Merchant QR generator, Wallet, Payments
│   │   │   ├── pay/[id]/        # Public customer checkout & Web3 approval
│   │   │   └── page.tsx         # ABC Pay landing page
│   │   └── services/
│   │       ├── api.ts           # Type-safe backend HTTP client
│   │       └── web3.ts          # MetaMask & Sepolia USDC transfer helper
│   ├── .env.example
│   └── .env.local
├── backend/                      # Express & TypeScript Backend
│   ├── prisma/                  # PostgreSQL schema & migrations
│   ├── src/
│   │   ├── routes/              # Auth, Wallet, Payments, and Ramp routers
│   │   ├── services/            # Sepolia USDC on-chain verifier & Ramp
│   │   ├── stores/              # PrismaStore (DB) & MemoryStore (Testing)
│   │   ├── app.ts               # Express application configuration
│   │   └── server.ts            # Server entrypoint
│   ├── tests/                   # Vitest unit & integration test suites
│   ├── .env.example
│   └── .env
├── docker-compose.yml           # Local PostgreSQL service
└── package.json                 # Monorepo workspace configuration
```

---

## Prerequisites

- **Node.js**: v20.9.0 or newer (v22 LTS recommended)
- **npm**: v10+
- **Docker & Docker Compose**: For local PostgreSQL database
- **MetaMask / EVM Wallet**: Configured for Ethereum Sepolia Testnet with testnet ETH and Sepolia USDC.
  - *Sepolia USDC Faucet*: Available on Circle's Faucet (`https://faucet.circle.com/`) or Alchemy Sepolia Faucets.

---

## Configuration & Environment Variables

### 1. Backend (`backend/.env`)

Copy `backend/.env.example` to `backend/.env`:

```bash
cp backend/.env.example backend/.env
```

| Variable | Description | Default / Example |
| --- | --- | --- |
| `PORT` | Backend HTTP listening port | `4000` |
| `FRONTEND_URL` | Allowed frontend origin for CORS | `http://localhost:3000` |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://abc_pay:abc_pay@localhost:5432/abc_pay?schema=public` |
| `JWT_SECRET` | Secret key for JWT session tokens | `abc_pay_dev_secret_jwt_key_92837410293847561029` |
| `JWT_EXPIRES_IN` | Token validity duration | `7d` |
| `SEPOLIA_RPC_URL` | Sepolia JSON-RPC endpoint | `https://rpc.sepolia.org` |
| `USDC_CONTRACT_ADDRESS` | Circle Sepolia USDC contract address | `0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238` |

### 2. Frontend (`frontend/.env.local`)

Copy `frontend/.env.example` to `frontend/.env.local`:

```bash
cp frontend/.env.example frontend/.env.local
```

| Variable | Description | Default / Example |
| --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | Backend API URL | `http://localhost:4000` |
| `NEXT_PUBLIC_USDC_CONTRACT_ADDRESS` | Sepolia USDC contract address | `0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238` |

---

## Step-by-Step: Running Locally

Run all commands from the repository root:

### 1. Install dependencies
```bash
npm install
```

### 2. Start PostgreSQL with Docker
```bash
docker compose up -d postgres
```

### 3. Run Database Migrations
```bash
npm run prisma:generate -w backend
npm run prisma:migrate -w backend
```

*(Optional) Inspect your database anytime with Prisma Studio:*
```bash
npm run prisma:studio -w backend
```

### 4. Start the Development Servers
```bash
npm run dev
```

This launches both applications concurrently:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4000
- **API Health Check**: http://localhost:4000/api/v1/health
- **Swagger API Docs**: http://localhost:4000/docs

---

## End-to-End Payment Walkthrough

1. **Merchant Setup**:
   - Navigate to `http://localhost:3000/register`.
   - Register a merchant account and enter your EVM Sepolia wallet address (e.g., your MetaMask public address).
   - Once logged in, visit the **Merchant QR Generator** at `/merchant/qr-generate`.

2. **Generate Payment Request**:
   - Enter an amount (e.g. `10.00` USDC) and an optional note/description (e.g., `Coffee & Muffin`).
   - Click **Generate Payment QR**.
   - A QR code is generated containing the checkout link (`http://localhost:3000/pay/[paymentId]`).
   - The page begins live polling every 2 seconds waiting for on-chain settlement.

3. **Customer Checkout**:
   - The customer scans the QR code or opens `http://localhost:3000/pay/[paymentId]` in their browser.
   - The checkout page displays the merchant's name, requested USDC amount, recipient address, and network details.
   - Click **Connect Wallet** (MetaMask prompts to connect).
   - Click **Pay [Amount] USDC**. MetaMask prompts to switch to Sepolia (if not already on it) and approve the ERC-20 transfer.

4. **On-Chain Confirmation**:
   - Once the transaction is broadcast, the frontend submits the transaction hash to `/api/v1/payments/request/:id/confirm`.
   - The backend validates the transaction on Sepolia via Viem RPC:
     - Confirms receipt status is `success`.
     - Validates the ERC-20 `Transfer(from, to, value)` event.
     - Confirms the recipient matches the merchant's wallet.
     - Confirms the amount matches the requested USDC units.
   - The payment request status updates to `CONFIRMED`.
   - The merchant's QR page detects the confirmation in real time, displays a green success badge, and links to the transaction on Sepolia Etherscan (`https://sepolia.etherscan.io/tx/...`).

---

## Verification & Testing

Run all quality checks and tests before committing:

```bash
# Run backend Vitest unit & integration tests
npm test

# Run ESLint & TypeScript type checks across backend & frontend
npm run lint

# Compile backend TypeScript & create Next.js production build
npm run build
```

---

## API Endpoints Reference

### Payments (`/api/v1/payments`)

| Method | Path | Auth | Description |
| --- | --- | --- | --- |
| `POST` | `/api/v1/payments/request` | Yes | Creates an on-chain Sepolia USDC payment request for the logged-in user |
| `GET` | `/api/v1/payments/request/:id` | No | Retrieves public details of a payment request (for the payer) |
| `POST` | `/api/v1/payments/request/:id/confirm` | No | Cryptographically verifies a Sepolia tx on-chain and marks invoice confirmed |
| `GET` | `/api/v1/payments/history` | Yes | Lists payment request history for the logged-in merchant |

### Authentication & Wallets (`/api/v1`)

| Method | Path | Auth | Description |
| --- | --- | --- | --- |
| `GET` | `/api/v1/health` | No | Service health check |
| `POST` | `/api/v1/auth/register` | No | Register new user with wallet address and password |
| `POST` | `/api/v1/auth/login` | No | Sign in and receive HTTP-only session cookie |
| `POST` | `/api/v1/auth/logout` | Yes | Invalidate session |
| `GET` | `/api/v1/auth/me` | Yes | Get currently authenticated user profile |
| `GET` | `/api/v1/wallets/me` | Yes | Retrieve merchant wallet record and live balance |
| `POST` | `/api/v1/ramp/quote` | No | Get live ZAR <-> USDC exchange quote |
| `POST` | `/api/v1/ramp/offramp` | Yes | Create an off-ramp order |
