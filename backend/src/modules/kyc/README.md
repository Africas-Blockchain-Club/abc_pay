# KYC Module (Didit.me Identity Verification)

## Responsibility
This module manages customer identity verification (KYC/AML) using Didit.me's REST API and webhook infrastructure.
It allows authenticated users to initiate verification sessions, tracks the verification lifecycle, and securely validates status updates delivered via Didit webhooks.

## Components
- `didit.service.ts`: API client wrapper for Didit Sessions API (`POST /v3/session/` and `GET /v3/session/{sessionId}/decision/`).
- `kyc.controller.ts`: Controllers for initiating sessions (`POST /api/kyc/start`) and checking user status (`GET /api/kyc/status`).
- `kyc.routes.ts`: Express routes protected by `requireAuth`.
- `kyc.webhook.ts`: Raw body webhook handler (`POST /api/webhooks/didit`) featuring Didit X-Signature-V2 canonical verification (float shortening + key sorting + HMAC-SHA256), timestamp freshness checks, and idempotency deduplication.

## Read/Write Boundaries
- **Database Writes**:
  - `KycVerification`: Creates and updates verification session rows and decision payloads.
  - `ProcessedWebhookEvent`: Inserts unique `eventId` records for idempotency deduplication.
  - `User`: Updates `kycVerified = true` and `kycVerifiedAt = now` upon receiving an approved decision.
- **External Reads**:
  - `User`: Reads user ID and auth session from `req.auth`.
- **Boundaries with Other Modules**:
  - Never directly writes to `Payment`, `Wallet`, `LedgerEntry`, `Settlement`, or `CustodyTransfer`.
  - Stubs compliance queue dispatch (`notifyCompliance`) for non-approved states without blocking webhook execution.

