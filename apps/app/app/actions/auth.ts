import "server-only";

import { requireAuthenticatedUser as authRequireAuthenticatedUser } from "@repo/auth";

export async function requireAuthenticatedUser() {
  return await authRequireAuthenticatedUser("/sign-in");
}
