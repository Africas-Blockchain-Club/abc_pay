import type { Response } from "express";
import type { AuthenticatedRequest } from "../../shared/authMiddleware.js";
import { diditService } from "./didit.service.js";
import { prisma } from "../../lib/prisma.js";

export async function startKycSession(req: AuthenticatedRequest, res: Response) {
  try {
    const userId = req.auth?.userId;
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const session = await diditService.createSession(userId);

    // Upsert KycVerification row
    await prisma.kycVerification.upsert({
      where: { sessionId: session.session_id },
      create: {
        userId,
        sessionId: session.session_id,
        status: session.status || "Not Started",
        vendorData: userId,
      },
      update: {
        status: session.status || "Not Started",
        vendorData: userId,
      },
    });

    return res.status(200).json({
      verificationUrl: session.url,
      sessionToken: session.session_token,
      sessionId: session.session_id,
      status: session.status || "Not Started",
    });
  } catch (error) {
    console.error("Failed to start KYC session:", error);
    return res.status(500).json({
      message: error instanceof Error ? error.message : "Failed to initiate verification session",
    });
  }
}

export async function getKycStatus(req: AuthenticatedRequest, res: Response) {
  try {
    const userId = req.auth?.userId;
    if (!userId) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const [user, latestVerification] = await Promise.all([
      prisma.user.findUnique({
        where: { id: userId },
        select: { kycVerified: true, kycVerifiedAt: true },
      }),
      prisma.kycVerification.findFirst({
        where: { userId },
        orderBy: { createdAt: "desc" },
      }),
    ]);

    return res.status(200).json({
      kycVerified: user?.kycVerified ?? false,
      kycVerifiedAt: user?.kycVerifiedAt ?? null,
      status: latestVerification?.status ?? (user?.kycVerified ? "Approved" : "Not Started"),
      sessionId: latestVerification?.sessionId ?? null,
      latestVerification: latestVerification ?? null,
    });
  } catch (error) {
    console.error("Failed to get KYC status:", error);
    return res.status(500).json({ message: "Failed to retrieve KYC status" });
  }
}

