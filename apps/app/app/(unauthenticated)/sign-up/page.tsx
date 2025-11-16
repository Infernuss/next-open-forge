import { createMetadata } from "@repo/seo/metadata";
import type { Metadata } from "next";
import SignUpForm from "./components/sign-up-form";

const title = "Create an account";
const description = "Enter your details to get started.";

export const metadata: Metadata = createMetadata({ title, description });

export default function SignUpPage() {
  return <SignUpForm />;
}
