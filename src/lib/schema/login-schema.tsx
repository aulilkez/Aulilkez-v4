import { z } from "zod";

export const loginSchema = z.object({
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

export type LoginSchemaType = z.infer<typeof loginSchema>;
