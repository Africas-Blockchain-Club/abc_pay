export type RegistrationPayload = {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  walletAddress: string;
};

type ApiErrorResponse = {
  message?: string;
  error?: string;
};

export class RegistrationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RegistrationError";
  }
}

function authApiUrl(path: string) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000";
  return new URL(path, baseUrl).toString();
}

export async function registerCustomer(payload: RegistrationPayload) {
  const response = await fetch(authApiUrl("/api/v1/auth/register"), {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: payload.name,
      surname: payload.surname,
      email: payload.email,
      phoneNumber: payload.phoneNumber,
      walletAddress: payload.walletAddress,
    }),
  });

  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as ApiErrorResponse | null;
    throw new RegistrationError(body?.message ?? body?.error ?? "We could not create your account. Please try again.");
  }

  return response.json() as Promise<unknown>;
}
