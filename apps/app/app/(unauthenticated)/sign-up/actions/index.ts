"use server";

import { auth } from "@repo/auth/server";
import { generateUsername } from "@repo/auth/utils/username";
import { redirect } from "next/navigation";
import type { SignUpFormSchema } from "../schemas";

export async function signUpSubmit(data: SignUpFormSchema) {
  const { firstName, lastName, email, password } = data;
  const name = `${firstName} ${lastName}`;
  const username = generateUsername(firstName, lastName);

  const result = await auth.api.signUpEmail({
    body: {
      displayUsername: name,
      username,
      name,
      email,
      password,
    },
  });

  if (result.token) {
    redirect("/");
  }
}
