import { createHmac } from "node:crypto";
import type {
  ConversionQuote,
  ExchangeProvider,
  ValrDepositAddressResponse,
  ValrFiatWithdrawResponse,
  ValrMarketSummary,
  ValrSimpleOrderResponse,
  ValrSimpleQuote,
  ValrWithdrawResponse,
} from "./exchange.types.js";
import { env } from "../../config/env.js";

export type ValrConfig = {
  apiKey?: string;
  apiSecret?: string;
  baseUrl?: string;
  subaccountId?: string;
  webhookSecret?: string;
  solanaDepositAddress?: string;
};

export class ValrClient implements ExchangeProvider {
  public apiKey: string;
  public apiSecret: string;
  public baseUrl: string;
  public subaccountId?: string;
  public webhookSecret?: string;
  public fallbackSolanaAddress?: string;

  constructor(config?: ValrConfig) {
    this.apiKey = config?.apiKey !== undefined ? config.apiKey : env.valr.apiKey;
    this.apiSecret = config?.apiSecret !== undefined ? config.apiSecret : env.valr.apiSecret;
    this.baseUrl = (config?.baseUrl || env.valr.baseUrl).replace(/\/$/, "");
    this.subaccountId = config?.subaccountId !== undefined ? config.subaccountId : env.valr.subaccountId;
    this.webhookSecret = config?.webhookSecret !== undefined ? config.webhookSecret : env.valr.webhookSecret;
    this.fallbackSolanaAddress = config?.solanaDepositAddress !== undefined ? config.solanaDepositAddress : env.valr.solanaDepositAddress;
  }

  hasCredentials(): boolean {
    return Boolean(
      this.apiKey &&
      this.apiSecret &&
      this.apiKey !== "your_valr_api_key" &&
      this.apiKey.trim().length > 0
    );
  }

  private signRequest(
    timestamp: number,
    verb: string,
    path: string,
    body = "",
    subAccountId?: string
  ): string {
    const payload = `${timestamp}${verb.toUpperCase()}${path}${body}${subAccountId ?? ""}`;
    return createHmac("sha512", this.apiSecret).update(payload).digest("hex");
  }

  async request<T>(verb: "GET" | "POST" | "DELETE", path: string, body?: unknown): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    const timestamp = Date.now();
    const bodyStr = body ? JSON.stringify(body) : "";

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (this.hasCredentials()) {
      headers["X-VALR-API-KEY"] = this.apiKey;
      headers["X-VALR-SIGNATURE"] = this.signRequest(
        timestamp,
        verb,
        path,
        bodyStr,
        this.subaccountId
      );
      headers["X-VALR-TIMESTAMP"] = timestamp.toString();

      if (this.subaccountId) {
        headers["X-VALR-SUB-ACCOUNT-ID"] = this.subaccountId;
      }
    }

    const response = await fetch(url, {
      method: verb,
      headers,
      body: body ? bodyStr : undefined,
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = `VALR API error (${response.status}): ${response.statusText}`;
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.message || errorJson.error || errorMessage;
      } catch {
        if (errorText) errorMessage += ` - ${errorText}`;
      }
      throw new Error(errorMessage);
    }

    return (await response.json()) as T;
  }

  /**
   * Fetches real-time live market summary for a given pair (e.g. USDCZAR).
   * Live public endpoint: GET /v1/public/{pair}/marketsummary
   */
  async getMarketSummary(pair = "USDCZAR"): Promise<ValrMarketSummary> {
    return this.request<ValrMarketSummary>("GET", `/v1/public/${pair}/marketsummary`);
  }

  /**
   * Requests a simple quote from VALR.
   * POST /v1/simple/{pair}/quote
   */
  async getSimpleQuote(
    pair: string,
    payInCurrency: string,
    payAmount: string,
    side: "BUY" | "SELL"
  ): Promise<ValrSimpleQuote> {
    return this.request<ValrSimpleQuote>("POST", `/v1/simple/${pair}/quote`, {
      payAmount,
      payInCurrency,
      side,
    });
  }

  /**
   * Executes a simple order directly with VALR using real money.
   * POST /v1/simple/{pair}/order
   */
  async createSimpleOrder(
    pair: string,
    payAmount: string,
    payInCurrency: string,
    side: "BUY" | "SELL"
  ): Promise<ValrSimpleOrderResponse> {
    return this.request<ValrSimpleOrderResponse>("POST", `/v1/simple/${pair}/order`, {
      payAmount,
      payInCurrency,
      side,
    });
  }

  /**
   * Retrieves the Solana deposit address for USDC.
   * Live endpoint: GET /v1/wallet/crypto/{currency}/deposit/address?networkType=Solana
   */
  async getCryptoDepositAddress(
    currency = "USDC",
    network = "Solana"
  ): Promise<ValrDepositAddressResponse> {
    const networkParam = network.toUpperCase() === "SOL" || network.toLowerCase() === "solana" ? "Solana" : network;
    try {
      return await this.request<ValrDepositAddressResponse>(
        "GET",
        `/v1/wallet/crypto/${currency}/deposit/address?networkType=${networkParam}`
      );
    } catch (error) {
      if (this.fallbackSolanaAddress) {
        return {
          currency,
          address: this.fallbackSolanaAddress,
          network: networkParam,
        };
      }
      throw error;
    }
  }

  /**
   * Initiates a crypto withdrawal on the Solana network to a user's wallet address.
   * POST /v1/wallet/crypto/{currency}/withdraw
   */
  async withdrawCrypto(
    currency: string,
    amount: string,
    address: string,
    network = "Solana"
  ): Promise<ValrWithdrawResponse> {
    const networkParam = network.toUpperCase() === "SOL" || network.toLowerCase() === "solana" ? "Solana" : network;
    return this.request<ValrWithdrawResponse>("POST", `/v1/wallet/crypto/${currency}/withdraw`, {
      amount,
      address,
      currency,
      networkType: networkParam,
    });
  }

  /**
   * Initiates a fiat ZAR withdrawal into a linked South African bank account.
   * POST /v1/wallet/fiat/{currency}/withdraw
   */
  async withdrawFiat(
    currency: string,
    amount: string,
    linkedBankAccountId: string
  ): Promise<ValrFiatWithdrawResponse> {
    return this.request<ValrFiatWithdrawResponse>("POST", `/v1/wallet/fiat/${currency}/withdraw`, {
      amount,
      linkedBankAccountId,
      fast: true,
    });
  }

  /**
   * Verifies the authenticity of VALR incoming webhooks.
   */
  verifyWebhookSignature(payload: string | object, signature: string, timestamp: number): boolean {
    const secret = this.webhookSecret || this.apiSecret;
    if (!secret) return false;

    const payloadString = typeof payload === "string" ? payload : JSON.stringify(payload);
    const expected = createHmac("sha512", secret)
      .update(`${timestamp}${payloadString}`)
      .digest("hex");

    return expected.toLowerCase() === signature.toLowerCase();
  }

  /**
   * Implementation for ExchangeProvider interface.
   */
  async getQuote(input: {
    fromAsset: string;
    toAsset: string;
    amount: string;
  }): Promise<ConversionQuote> {
    const pair = `${input.toAsset}${input.fromAsset}` === "USDCZAR" ? "USDCZAR" : "USDCZAR";
    const summary = await this.getMarketSummary(pair);

    const isBuy = input.toAsset === "USDC";
    const rate = isBuy ? summary.askPrice : summary.bidPrice;
    const numAmount = parseFloat(input.amount);
    const numRate = parseFloat(rate);
    const destAmount = isBuy ? (numAmount / numRate).toFixed(6) : (numAmount * numRate).toFixed(2);

    return {
      provider: "VALR",
      pair,
      rate,
      sourceAmount: input.amount,
      destinationAmount: destAmount,
      expiresAt: new Date(Date.now() + 60 * 1000),
    };
  }

  async convert(input: {
    fromAsset: string;
    toAsset: string;
    amount: string;
  }): Promise<{ providerReference: string }> {
    const isBuy = input.toAsset === "USDC";
    const side = isBuy ? "BUY" : "SELL";
    const order = await this.createSimpleOrder("USDCZAR", input.amount, input.fromAsset, side);
    return { providerReference: order.id };
  }
}
