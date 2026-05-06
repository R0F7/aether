import { z } from "zod";

export const NewsletterValidationSchema = z.object({
  email: z.string().email("Invalid email address").trim().lowercase(),
});
