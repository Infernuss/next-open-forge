"use server";
import "server-only";

import {
  requireAuthenticatedUser as authRequireAuthenticatedUser,
  requireUnauthenticatedUser as authRequireUnauthenticatedUser,
  signOut as authSignOut,
} from "@repo/auth";
import { product } from "@repo/product";

export async function requireAuthenticatedUser() {
  return await authRequireAuthenticatedUser("/sign-in");
}

export async function requireUnauthenticatedUser() {
  return await authRequireUnauthenticatedUser("/");
}

export async function signOut() {
  await authSignOut();
  product.reset();
}
