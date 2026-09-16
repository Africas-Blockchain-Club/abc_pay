import { randomUUID } from "node:crypto";
export class MemoryStore {
    users = new Map();
    wallets = new Map();
    async findUserByEmail(email) {
        return [...this.users.values()].find((user) => user.email === email.toLowerCase()) ?? null;
    }
    async findUserById(id) {
        return this.users.get(id) ?? null;
    }
    async createUserWithWallet(input) {
        const now = new Date();
        const user = {
            id: randomUUID(),
            name: input.name,
            email: input.email.toLowerCase(),
            passwordHash: input.passwordHash,
            role: "USER",
            createdAt: now,
        };
        const wallet = {
            id: randomUUID(),
            userId: user.id,
            publicAddress: null,
            chain: "EVM",
            stablecoin: "USDC",
            balanceCached: "0",
            createdAt: now,
        };
        this.users.set(user.id, user);
        this.wallets.set(user.id, wallet);
        return { user, wallet };
    }
    async getWalletByUserId(userId) {
        return this.wallets.get(userId) ?? null;
    }
}
