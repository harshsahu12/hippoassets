import { z } from "zod";

export const AuthCredentialValidator = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 charecter log." }),
});

export type TAuthCredentialValidator = z.infer<typeof AuthCredentialValidator>;
