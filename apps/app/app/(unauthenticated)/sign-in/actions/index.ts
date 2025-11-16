"use server";

import { auth } from "@repo/auth/server";
import type { SignInFormSchema } from "../schemas";
import { redirect } from "next/navigation";

export async function signInSubmit(data: SignInFormSchema) {
  const { email, password } = data;

  const result = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });

  if (result.token) {
    redirect("/");
  }
}
