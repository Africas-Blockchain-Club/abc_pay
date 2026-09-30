import {
  encodeFunctionData,
  formatUnits,
  parseUnits,
  type Address,
  type Hash,
} from "viem";

export const SEPOLIA_CHAIN_ID_HEX = "0xaa36a7";
export const SEPOLIA_CHAIN_ID_DECIMAL = 11155111;

export const SEPOLIA_USDC_ADDRESS: Address = (
  process.env.NEXT_PUBLIC_USDC_CONTRACT_ADDRESS || "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"
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
] as const;

export async function ensureSepoliaNetwork(): Promise<void> {
  if (typeof window === "undefined" || !window.ethereum) {
    throw new Error("No Web3 wallet found. Please install MetaMask or another EVM wallet.");
  }

  const currentChainId = await window.ethereum.request({ method: "eth_chainId" });

  if (currentChainId !== SEPOLIA_CHAIN_ID_HEX) {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: SEPOLIA_CHAIN_ID_HEX }],
      });
    } catch (switchError: any) {
      if (switchError.code === 4902 || switchError?.data?.originalError?.code === 4902) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: SEPOLIA_CHAIN_ID_HEX,
              chainName: "Sepolia Test Network",
              nativeCurrency: { name: "Sepolia ETH", symbol: "ETH", decimals: 18 },
              rpcUrls: ["https://rpc.sepolia.org", "https://ethereum-sepolia-rpc.publicnode.com"],
              blockExplorerUrls: ["https://sepolia.etherscan.io"],
            },
          ],
        });
      } else {
        throw switchError;
      }
    }
  }
}

export async function connectPayerWallet(): Promise<string> {
  if (typeof window === "undefined" || !window.ethereum) {
    throw new Error("MetaMask is required to complete this payment.");
  }

  const accounts = (await window.ethereum.request({
    method: "eth_requestAccounts",
  })) as string[];

  if (!accounts || accounts.length === 0) {
    throw new Error("No account selected. Please unlock MetaMask and select an account.");
  }

  await ensureSepoliaNetwork();
  return accounts[0];
}

export async function getPayerUsdcBalance(payerAddress: string): Promise<string> {
  if (typeof window === "undefined" || !window.ethereum) return "0.00";

  try {
    const data = encodeFunctionData({
      abi: ERC20_ABI,
      functionName: "balanceOf",
      args: [payerAddress as Address],
    });

    const rawHex = (await window.ethereum.request({
      method: "eth_call",
      params: [
        {
          to: SEPOLIA_USDC_ADDRESS,
          data,
        },
        "latest",
      ],
    })) as string;

    if (!rawHex || rawHex === "0x") return "0.00";
    const rawBigInt = BigInt(rawHex);
    return formatUnits(rawBigInt, 6);
  } catch {
    return "0.00";
  }
}

export async function sendUsdcTransfer(
  recipientAddress: string,
  amountUsdc: string
): Promise<{ txHash: Hash; payerAddress: string }> {
  const payer = await connectPayerWallet();
  await ensureSepoliaNetwork();

  if (typeof window === "undefined" || !window.ethereum) {
    throw new Error("No Web3 wallet found. Please install MetaMask or another EVM wallet.");
  }

  const numAmount = parseFloat(amountUsdc);
  if (isNaN(numAmount) || numAmount <= 0) {
    throw new Error("Invalid USDC amount");
  }

  const rawUnits = parseUnits(amountUsdc, 6);

  const transferData = encodeFunctionData({
    abi: ERC20_ABI,
    functionName: "transfer",
    args: [recipientAddress as Address, rawUnits],
  });

  const txHash = (await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [
      {
        from: payer,
        to: SEPOLIA_USDC_ADDRESS,
        data: transferData,
      },
    ],
  })) as Hash;

  return { txHash, payerAddress: payer };
}
