/**
 * src/lib/custody/wallet.ts
 *
 * HD (BIP32/BIP44) deposit address generation for ABC Pay custody.
 *
 * SECURITY MODEL — READ BEFORE MODIFYING:
 * - The master seed / xpriv NEVER touches the database and is NEVER logged.
 *   It is read once from an env var (or better: a secrets manager / KMS) at
 *   process startup and held only in memory.
 * - Each invoice gets a unique, never-reused address derived at
 *   m/44'/60'/0'/0/{index}, where {index} is a strictly incrementing,
 *   persisted counter. Reusing an index reuses an address — never do that.
 * - This module only ever derives PUBLIC addresses for day-to-day use.
 *   Signing (spending from custody) is a separate, more locked-down
 *   concern and must not share this code path.
 * - If MASTER_XPRIV is compromised, every derived address is compromised.
 *   Treat the env var / secret store entry with the same care as a raw
 *   private key, because that is what it is.
 */

import { HDKey } from "@scure/bip32";
import { mnemonicToSeedSync, validateMnemonic } from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english";
import { privateKeyToAccount } from "viem/accounts";
import type { Hex } from "viem";

// EVM coin type (60) per SLIP-44. Same derivation path works for both
// Base and Polygon since both are EVM chains — network choice is a
// downstream RPC/chainId concern, not a derivation concern.
const DERIVATION_BASE_PATH = "m/44'/60'/0'/0";

export interface DepositAddressRecord {
  address: string;
  derivationIndex: number;
  derivationPath: string;
}

export class CustodyWalletError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustodyWalletError";
  }
}

/**
 * Loads the master HD key from configuration.
 *
 * Accepts EITHER:
 *  - MASTER_XPRIV: a precomputed BIP32 extended private key (preferred —
 *    lets you generate the seed once, offline, and never re-derive it), OR
 *  - MASTER_MNEMONIC (+ optional MASTER_MNEMONIC_PASSPHRASE): a BIP39
 *    mnemonic, seed-derived at load time.
 *
 * Throws rather than silently falling back — a misconfigured custody
 * wallet must fail loudly at startup, not generate addresses from an
 * empty/default seed.
 */
function loadMasterKey(): HDKey {
  const xpriv = process.env.MASTER_XPRIV;
  if (xpriv) {
    try {
      return HDKey.fromExtendedKey(xpriv);
    } catch (err) {
      throw new CustodyWalletError(
        "MASTER_XPRIV is set but is not a valid extended private key",
      );
    }
  }

  const mnemonic = process.env.MASTER_MNEMONIC;
  if (mnemonic) {
    if (!validateMnemonic(mnemonic, wordlist)) {
      throw new CustodyWalletError(
        "MASTER_MNEMONIC is set but failed BIP39 checksum validation",
      );
    }
    const seed = mnemonicToSeedSync(
      mnemonic,
      process.env.MASTER_MNEMONIC_PASSPHRASE ?? "",
    );
    return HDKey.fromMasterSeed(seed);
  }

  throw new CustodyWalletError(
    "No custody master key configured. Set MASTER_XPRIV (preferred) or " +
      "MASTER_MNEMONIC in the environment before starting any process " +
      "that imports wallet.ts.",
  );
}

// Lazily initialized singleton — avoids reading/deriving the master key
// at module-import time in contexts (tests, tooling) that don't need it.
let _masterKey: HDKey | null = null;
function getMasterKey(): HDKey {
  if (!_masterKey) {
    _masterKey = loadMasterKey();
  }
  return _masterKey;
}

/**
 * Derives the deposit address for a given index.
 *
 * Pure function of (masterKey, index) — same index always yields the same
 * address. This is intentional and required: it means the DB row (invoice
 * -> index mapping) is the source of truth, and the address itself is
 * always re-derivable from it, e.g. for disaster recovery or audits.
 */
export function deriveAddressAtIndex(index: number): DepositAddressRecord {
  if (!Number.isInteger(index) || index < 0) {
    throw new CustodyWalletError(
      `Invalid derivation index: ${index}. Must be a non-negative integer.`,
    );
  }

  const path = `${DERIVATION_BASE_PATH}/${index}`;
  const child = getMasterKey().derive(path);

  if (!child.privateKey) {
    // Should not happen when deriving from a private master key, but a
    // hardened-path edge case or a public-only key would land here —
    // fail loudly rather than return a garbage address.
    throw new CustodyWalletError(
      `Derivation at path ${path} did not yield a private key`,
    );
  }

  const privateKeyHex = `0x${Buffer.from(child.privateKey).toString("hex")}` as Hex;
  const account = privateKeyToAccount(privateKeyHex);

  return {
    address: account.address,
    derivationIndex: index,
    derivationPath: path,
  };
}

/**
 * Allocates a fresh deposit address for an invoice.
 *
 * This is the function API routes should call. It does NOT handle
 * persistence itself — the caller is responsible for atomically
 * reserving `nextIndex` (e.g. via a Postgres sequence or a
 * SELECT ... FOR UPDATE / transaction against a counter row) and writing
 * the resulting DepositAddressRecord to the DepositAddress table before
 * returning the address to a customer.
 *
 * Splitting derivation (pure, deterministic) from persistence (has side
 * effects, needs atomicity) keeps this module testable without a DB and
 * keeps the "never reuse an index" invariant enforced at the DB layer
 * where it belongs (unique constraint on derivationIndex).
 */
export function allocateDepositAddress(
  nextIndex: number,
  invoiceId: string,
): DepositAddressRecord & { invoiceId: string } {
  const record = deriveAddressAtIndex(nextIndex);
  return { ...record, invoiceId };
}

/**
 * Re-derives an address for verification/audit purposes — e.g. confirming
 * that the address stored in the DB for a given invoice actually matches
 * what the master key produces for that index. Use this to detect DB
 * tampering or corruption; never trust a stored address without the
 * ability to reproduce it.
 */
export function verifyStoredAddress(
  storedAddress: string,
  derivationIndex: number,
): boolean {
  const { address } = deriveAddressAtIndex(derivationIndex);
  return address.toLowerCase() === storedAddress.toLowerCase();
}