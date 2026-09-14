const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api/v1";

export async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.message ?? "Request failed");
  }

  return payload as T;
}
