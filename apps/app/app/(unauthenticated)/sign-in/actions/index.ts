"use server";

import { signInEmail } from "@repo/auth";
import { product } from "@repo/product";
import { redirect } from "next/navigation";
import type { SignInFormSchema } from "../schemas";

export async function signInSubmit(data: SignInFormSchema) {
  const { email, password } = data;

  const user = await signInEmail(email, password);

  if (!user) {
    return null;
  }

  const { id, name } = user;
  product.identify(id, {
    properties: {
      email,
      name,
    },
  });
  redirect("/");
}
