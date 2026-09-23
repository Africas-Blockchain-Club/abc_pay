import { prisma } from "../lib/prisma.js";
function mapUser(user) {
    return { ...user, role: user.role };
}
function mapWallet(wallet) {
    return { ...wallet, balanceCached: wallet.balanceCached.toString() };
}
export class PrismaStore {
    async findUserByEmail(email) {
        const user = await prisma.user.findUnique({ where: { email } });
        return user ? mapUser(user) : null;
    }
    async findUserById(id) {
        const user = await prisma.user.findUnique({ where: { id } });
        return user ? mapUser(user) : null;
    }
    async createUserWithWallet(input) {
        const created = await prisma.$transaction(async (tx) => {
            const user = await tx.user.create({
                data: {
                    ...input,
                    wallet: { create: {} },
                    kycProfile: { create: {} },
                },
                include: { wallet: true },
            });
            if (!user.wallet)
                throw new Error("Wallet creation failed");
            return { user, wallet: user.wallet };
        });
        return { user: mapUser(created.user), wallet: mapWallet(created.wallet) };
    }
    async getWalletByUserId(userId) {
        const wallet = await prisma.wallet.findUnique({ where: { userId } });
        return wallet ? mapWallet(wallet) : null;
    }
}
