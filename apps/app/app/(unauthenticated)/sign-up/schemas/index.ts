import z from "zod";

export const signUpFormSchema = z.object({
  firstName: z
    .string()
    .min(3, "First name must be at least 3 characters long."),
  lastName: z.string().min(3, "Last name must be at least 3 characters long."),
  email: z.email("Please enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters long."),
});

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
