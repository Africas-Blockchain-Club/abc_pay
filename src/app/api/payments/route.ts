import { unavailable } from "@/src/lib/api/unavailable";

export async function POST() {
  return unavailable("Payment creation");
}
