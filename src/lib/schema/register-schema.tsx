import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters long.",
    })
    .max(20, {
      message: "Username cannot exceed 20 characters.",
    })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores.",
    }),
  email: z.string().email({
    message: "Invalid email address format.",
  }),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters long.",
    })
    .max(30, {
      message: "Password cannot exceed 30 characters.",
    })
    .regex(/(?=.*[A-Z])/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/(?=.*\d)/, {
      message: "Password must contain at least one number.",
    })
    .regex(/(?=.*[@$!%*?&])/, {
      message:
        "Password must contain at least one special character (e.g., @, $, !, %, *, ?).",
    }),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
