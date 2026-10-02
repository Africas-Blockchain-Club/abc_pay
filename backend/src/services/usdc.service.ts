import {
  createPublicClient,
  http,
  formatUnits,
  type Address,
} from "viem";
import { sepolia } from "viem/chains";

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;

if (!SEPOLIA_RPC_URL) {
  throw new Error("SEPOLIA_RPC_URL is not configured");
}

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(SEPOLIA_RPC_URL),
});

// Sepolia USDC contract address.
// We will verify this against the issuer/network configuration
// before relying on it for real transactions.
const USDC_ADDRESS = "0x7Fa89244D97cdf91D7fCA5a5f3075FBefC4a9e82" as Address;
const ERC20_ABI = [
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
] as const;

export async function getUsdcBalance(walletAddress: string): Promise<string> {
  const address = walletAddress as Address;

  const [rawBalance, decimals] = await Promise.all([
    publicClient.readContract({
      address: USDC_ADDRESS,
      abi: ERC20_ABI,
      functionName: "balanceOf",
      args: [address],
    }),
    publicClient.readContract({
      address: USDC_ADDRESS,
      abi: ERC20_ABI,
      functionName: "decimals",
    }),
  ]);

  return formatUnits(rawBalance, decimals);
}