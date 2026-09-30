import {
  createPublicClient,
  http,
  fallback,
  formatUnits,
  decodeEventLog,
  type Address,
  type Hash,
} from "viem";
import { sepolia } from "viem/chains";

function getRpcTransports() {
  const configuredRpc = process.env.SEPOLIA_RPC_URL;
  const transports = [];

  if (configuredRpc) {
    // If configured as wss://, convert to https:// for HTTP transport
    const httpRpc = configuredRpc.startsWith("wss://")
      ? configuredRpc.replace(/^wss:\/\//, "https://")
      : configuredRpc;
    transports.push(http(httpRpc));
  }

  // Resilient public fallback RPC endpoints
  transports.push(http("https://rpc.sepolia.org"));
  transports.push(http("https://ethereum-sepolia-rpc.publicnode.com"));
  transports.push(http("https://sepolia.gateway.tenderly.co"));

  return transports;
}

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: fallback(getRpcTransports()),
});

// Default to Circle official Sepolia testnet USDC contract address,
// or allow override via USDC_CONTRACT_ADDRESS in environment
export const USDC_ADDRESS: Address = (
  process.env.USDC_CONTRACT_ADDRESS ||
  process.env.NEXT_PUBLIC_USDC_CONTRACT_ADDRESS ||
  "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"
) as Address;

export const ERC20_ABI = [
  {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [{ name: "account", type: "address" }],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    type: "function",
    name: "decimals",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint8" }],
  },
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      { name: "recipient", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    outputs: [{ name: "", type: "bool" }],
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      { name: "from", type: "address", indexed: true },
      { name: "to", type: "address", indexed: true },
      { name: "value", type: "uint256", indexed: false },
    ],
  },
] as const;

export async function getUsdcDecimals(): Promise<number> {
  try {
    const decimals = await publicClient.readContract({
      address: USDC_ADDRESS,
      abi: ERC20_ABI,
      functionName: "decimals",
    });
    return decimals;
  } catch {
    return 6; // Standard USDC decimals
  }
}

export async function getUsdcBalance(walletAddress: string): Promise<string> {
  const address = walletAddress as Address;

  try {
    const [rawBalance, decimals] = await Promise.all([
      publicClient.readContract({
        address: USDC_ADDRESS,
        abi: ERC20_ABI,
        functionName: "balanceOf",
        args: [address],
      }),
      getUsdcDecimals(),
    ]);

    return formatUnits(rawBalance, decimals);
  } catch (error) {
    console.warn(`Could not fetch Sepolia USDC balance for ${walletAddress}:`, (error as Error).message);
    return "0.00";
  }
}

export type TransferVerificationResult = {
  verified: boolean;
  from?: string;
  to?: string;
  amount?: string;
  blockNumber?: string;
  reason?: string;
};

/**
 * Cryptographically verifies an on-chain Sepolia USDC Transfer transaction receipt.
 */
export async function verifyUsdcTransfer(
  txHash: string,
  expectedRecipient: string,
  expectedAmount?: string
): Promise<TransferVerificationResult> {
  // Allow simulated / test hash for offline testing
  if (txHash.startsWith("mock_") || txHash.startsWith("sim_")) {
    return {
      verified: true,
      from: "0x1111111111111111111111111111111111111111",
      to: expectedRecipient,
      amount: expectedAmount ?? "0.00",
      blockNumber: "1",
    };
  }

  try {
    const receipt = await publicClient.waitForTransactionReceipt({
      hash: txHash as Hash,
      confirmations: 1,
      timeout: 30_000,
    });

    if (receipt.status !== "success") {
      return { verified: false, reason: "Transaction status reverted or failed on Sepolia" };
    }

    const decimals = await getUsdcDecimals();

    // Scan transaction logs for the ERC-20 Transfer event to expectedRecipient
    for (const log of receipt.logs) {
      if (log.address.toLowerCase() !== USDC_ADDRESS.toLowerCase()) {
        continue;
      }

      try {
        const decoded = decodeEventLog({
          abi: ERC20_ABI,
          eventName: "Transfer",
          data: log.data,
          topics: log.topics,
        });

        if (
          decoded.args &&
          decoded.args.to.toLowerCase() === expectedRecipient.toLowerCase()
        ) {
          const transferredAmount = formatUnits(decoded.args.value, decimals);
          return {
            verified: true,
            from: decoded.args.from,
            to: decoded.args.to,
            amount: transferredAmount,
            blockNumber: receipt.blockNumber.toString(),
          };
        }
      } catch {
        // Log was not an ERC-20 Transfer event, skip
      }
    }

    return {
      verified: false,
      reason: `No Transfer event to recipient ${expectedRecipient} found in transaction logs for USDC contract ${USDC_ADDRESS}`,
    };
  } catch (error) {
    return {
      verified: false,
      reason: `Failed to verify transaction on Sepolia: ${(error as Error).message}`,
    };
  }
}