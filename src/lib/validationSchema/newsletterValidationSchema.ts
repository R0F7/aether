import { z } from "zod";

export const NewsletterValidationSchema = z.object({
  email: z.email("Invalid email address"),
});
