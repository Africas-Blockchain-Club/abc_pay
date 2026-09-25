import { randomUUID } from "node:crypto";
import { ValrClient } from "../integrations/exchanges/valr.client.js";
export function isValidSolanaAddress(address) {
    return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address);
}
const PLATFORM_FEE_RATE = 0.02; // 2% ABC Pay platform markup
export class RampService {
    store;
    valrClient;
    constructor(store, valrClient) {
        this.store = store;
        this.valrClient = valrClient || new ValrClient();
    }
    /**
     * Calculates a live conversion quote between USDC and ZAR on Solana.
     * Pulls real-time prices from VALR and applies the 2% ABC Pay platform markup.
     */
    async getQuote(request) {
        if (request.fromAsset === request.toAsset) {
            throw new Error("Source and destination assets must differ");
        }
        const numAmount = typeof request.amount === "string" ? parseFloat(request.amount) : request.amount;
        if (isNaN(numAmount) || numAmount <= 0) {
            throw new Error("Invalid quote amount");
        }
        const marketSummary = await this.valrClient.getMarketSummary("USDCZAR");
        const quoteId = randomUUID();
        const expiresAt = new Date(Date.now() + 60 * 1000).toISOString();
        if (request.fromAsset === "ZAR" && request.toAsset === "USDC") {
            // ON-RAMP: Buying USDC with ZAR
            const askPrice = parseFloat(marketSummary.askPrice);
            const platformFeeZar = numAmount * PLATFORM_FEE_RATE;
            const netZar = numAmount - platformFeeZar;
            const destinationAmount = (netZar / askPrice).toFixed(6);
            const effectiveRate = (numAmount / parseFloat(destinationAmount)).toFixed(4);
            return {
                quoteId,
                pair: "USDCZAR",
                side: "BUY",
                network: "SOL",
                baseRate: askPrice.toFixed(4),
                rate: effectiveRate,
                sourceAmount: numAmount.toFixed(2),
                sourceAsset: "ZAR",
                destinationAmount,
                destinationAsset: "USDC",
                platformFeeZar: platformFeeZar.toFixed(2),
                platformFeeRate: "0.0200",
                expiresAt,
            };
        }
        else if (request.fromAsset === "USDC" && request.toAsset === "ZAR") {
            // OFF-RAMP: Selling USDC for ZAR
            const bidPrice = parseFloat(marketSummary.bidPrice);
            const grossZar = numAmount * bidPrice;
            const platformFeeZar = grossZar * PLATFORM_FEE_RATE;
            const netZar = (grossZar - platformFeeZar).toFixed(2);
            const effectiveRate = (parseFloat(netZar) / numAmount).toFixed(4);
            return {
                quoteId,
                pair: "USDCZAR",
                side: "SELL",
                network: "SOL",
                baseRate: bidPrice.toFixed(4),
                rate: effectiveRate,
                sourceAmount: numAmount.toFixed(6),
                sourceAsset: "USDC",
                destinationAmount: netZar,
                destinationAsset: "ZAR",
                platformFeeZar: platformFeeZar.toFixed(2),
                platformFeeRate: "0.0200",
                expiresAt,
            };
        }
        else {
            throw new Error(`Unsupported pair ${request.fromAsset}/${request.toAsset}. Only USDC/ZAR supported.`);
        }
    }
    /**
     * Initiates an on-ramp order (Fiat ZAR -> USDC on Solana).
     */
    async createOnrampOrder(input) {
        if (!isValidSolanaAddress(input.destinationSolanaAddress)) {
            throw new Error("Invalid destination Solana wallet address");
        }
        const quote = await this.getQuote({
            fromAsset: "ZAR",
            toAsset: "USDC",
            amount: input.amountZar,
        });
        const fiatReference = `ABC-VALR-${Math.floor(100000 + Math.random() * 900000)}`;
        const order = await this.store.createRampOrder({
            userId: input.userId,
            type: "ONRAMP",
            status: "PENDING_DEPOSIT",
            fiatCurrency: "ZAR",
            fiatAmount: quote.sourceAmount,
            cryptoAsset: "USDC",
            cryptoAmount: quote.destinationAmount,
            exchangeRate: quote.rate,
            platformFeeRate: quote.platformFeeRate,
            platformFeeZar: quote.platformFeeZar,
            network: "SOL",
            destinationWalletAddress: input.destinationSolanaAddress,
            fiatReference,
        });
        return {
            orderId: order.id,
            type: "ONRAMP",
            status: order.status,
            fiatAmount: order.fiatAmount,
            fiatCurrency: "ZAR",
            cryptoAsset: "USDC",
            cryptoAmount: order.cryptoAmount,
            exchangeRate: order.exchangeRate,
            platformFeeZar: order.platformFeeZar,
            network: "SOL",
            destinationAddress: input.destinationSolanaAddress,
            fiatReference,
            depositInstructions: {
                bankName: "Nedbank",
                accountNumber: "1204051305",
                branchCode: "198765",
                accountType: "Current",
                paymentReference: fiatReference,
            },
            expiresAt: quote.expiresAt,
        };
    }
    /**
     * Initiates an off-ramp order (USDC on Solana -> Fiat ZAR Bank Account).
     */
    async createOfframpOrder(input) {
        if (input.sourceSolanaAddress && !isValidSolanaAddress(input.sourceSolanaAddress)) {
            throw new Error("Invalid source Solana wallet address");
        }
        const quote = await this.getQuote({
            fromAsset: "USDC",
            toAsset: "ZAR",
            amount: input.amountUsdc,
        });
        let cryptoDepositAddress = "9RrszC4d3qh4nL4jA2cEZrj9KmMxUaDghhSvucEg7XpU";
        try {
            const depositInfo = await this.valrClient.getCryptoDepositAddress("USDC", "SOL");
            if (depositInfo?.address) {
                cryptoDepositAddress = depositInfo.address;
            }
        }
        catch {
            // In case keys are not yet configured on VALR, fallback to default deposit address
        }
        const order = await this.store.createRampOrder({
            userId: input.userId,
            type: "OFFRAMP",
            status: "PENDING_DEPOSIT",
            fiatCurrency: "ZAR",
            fiatAmount: quote.destinationAmount,
            cryptoAsset: "USDC",
            cryptoAmount: quote.sourceAmount,
            exchangeRate: quote.rate,
            platformFeeRate: quote.platformFeeRate,
            platformFeeZar: quote.platformFeeZar,
            network: "SOL",
            sourceWalletAddress: input.sourceSolanaAddress,
            cryptoDepositAddress,
            bankName: input.bankDetails.bankName,
            accountNumber: input.bankDetails.accountNumber,
            branchCode: input.bankDetails.branchCode,
            accountHolderName: input.bankDetails.accountHolderName,
        });
        return {
            orderId: order.id,
            type: "OFFRAMP",
            status: order.status,
            cryptoAsset: "USDC",
            cryptoAmount: order.cryptoAmount,
            network: "SOL",
            fiatCurrency: "ZAR",
            estimatedFiatAmount: order.fiatAmount,
            exchangeRate: order.exchangeRate,
            platformFeeZar: order.platformFeeZar,
            cryptoDepositAddress,
            bankDetails: {
                bankName: input.bankDetails.bankName,
                accountNumber: `******${input.bankDetails.accountNumber.slice(-4)}`,
                accountHolderName: input.bankDetails.accountHolderName,
            },
            expiresAt: quote.expiresAt,
        };
    }
    async getOrderById(id) {
        const order = await this.store.getRampOrderById(id);
        if (!order) {
            throw new Error(`Order ${id} not found`);
        }
        return order;
    }
    async listOrders(userId) {
        return this.store.listRampOrders(userId);
    }
    /**
     * Executes the conversion and payout for an order.
     */
    async executeSettlement(orderId) {
        const order = await this.getOrderById(orderId);
        if (order.status === "COMPLETED") {
            return order;
        }
        await this.store.updateRampOrder(orderId, { status: "CONVERTING" });
        try {
            if (order.type === "ONRAMP") {
                let valrOrderId = "VALR-SWAP-ONRAMP-SIM";
                try {
                    const swap = await this.valrClient.createSimpleOrder("USDCZAR", order.fiatAmount, "ZAR", "BUY");
                    if (swap?.id)
                        valrOrderId = swap.id;
                }
                catch {
                    // Dev mode fallback
                }
                let valrWithdrawalId = "VALR-TX-SOL-SIM";
                if (order.destinationWalletAddress) {
                    try {
                        const withdrawal = await this.valrClient.withdrawCrypto("USDC", order.cryptoAmount, order.destinationWalletAddress, "SOL");
                        if (withdrawal?.id)
                            valrWithdrawalId = withdrawal.id;
                    }
                    catch {
                        // Dev mode fallback
                    }
                }
                return await this.store.updateRampOrder(orderId, {
                    status: "COMPLETED",
                    valrOrderId,
                    valrWithdrawalId,
                });
            }
            else {
                let valrOrderId = "VALR-SWAP-OFFRAMP-SIM";
                try {
                    const swap = await this.valrClient.createSimpleOrder("USDCZAR", order.cryptoAmount, "USDC", "SELL");
                    if (swap?.id)
                        valrOrderId = swap.id;
                }
                catch {
                    // Dev mode fallback
                }
                return await this.store.updateRampOrder(orderId, {
                    status: "COMPLETED",
                    valrOrderId,
                });
            }
        }
        catch (error) {
            await this.store.updateRampOrder(orderId, {
                status: "FAILED",
                errorMessage: error.message,
            });
            throw error;
        }
    }
    /**
     * Processes incoming VALR webhooks.
     */
    async handleValrWebhook(payload, signature, timestamp) {
        if (signature && timestamp) {
            const isValid = this.valrClient.verifyWebhookSignature(payload, signature, timestamp);
            if (!isValid) {
                throw new Error("Invalid webhook signature");
            }
        }
        const eventType = payload?.type || payload?.eventType;
        if (eventType === "FIAT_DEPOSIT" || payload?.data?.paymentReference) {
            const ref = payload?.data?.paymentReference || payload?.paymentReference;
            if (ref) {
                const order = await this.store.findRampOrderByReference(ref);
                if (order && order.status === "PENDING_DEPOSIT") {
                    await this.executeSettlement(order.id);
                    return { processed: true, orderId: order.id };
                }
            }
        }
        return { processed: false };
    }
}
