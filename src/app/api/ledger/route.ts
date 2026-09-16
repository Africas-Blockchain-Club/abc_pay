import { unavailable } from "@/src/lib/api/unavailable";

export async function GET() {
  return unavailable("Ledger access");
}
