import dotenv from "dotenv";
import {
  createPublicClient,
  formatUnits,
  http,
  type Address,
} from "viem";
import { sepolia } from "viem/chains";

dotenv.config({ path: ".env" });

const rpcUrl = process.env.SEPOLIA_RPC_URL;

if (!rpcUrl) {
  throw new Error("SEPOLIA_RPC_URL is not configured");
}

const client = createPublicClient({
  chain: sepolia,
  transport: http(rpcUrl),
});

const USDC_ADDRESS =
  "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238" as Address;

const walletAddress = "0x7Fa89244D97cdf91D7fCA5a5f3075FBefC4a9e82" as Address;

const rawBalance = await client.readContract({
  address: USDC_ADDRESS,
  abi: [
    {
      type: "function",
      name: "balanceOf",
      stateMutability: "view",
      inputs: [{ name: "account", type: "address" }],
      outputs: [{ name: "", type: "uint256" }],
    },
  ],
  functionName: "balanceOf",
  args: [walletAddress],
});

console.log("Raw USDC balance:", rawBalance.toString());
console.log("USDC balance:", formatUnits(rawBalance, 6));