import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be 100 characters or fewer"),
  email: z
    .string()
    .trim()
    .email("A valid email address is required")
    .max(254, "Email must be 254 characters or fewer"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be 5000 characters or fewer"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function formatZodErrors(error: z.ZodError): string {
  return error.errors.map((e) => e.message).join(". ");
}
