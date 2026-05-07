import { z } from "zod";

export const ProductValidationSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name is too long"),
  slug: z
    .string()
    .min(1, "Slug is required")
    .regex(
      /^[a-z0-9-]+$/,
      "Slug can only contain lowercase letters, numbers, and hyphens",
    ),
  price: z.coerce.number().min(0.01, "Price must be greater than 0"),
  originalPrice: z.coerce
    .number()
    .min(1, "Original price must be greater than 0"),

  category: z.string().min(1, "Please select a category"),
  sizes: z.array(z.string()).min(1, "Please select at least one size"),
  images: z.array(z.any()).refine((files) => files.length === 3, {
    message: "Exactly 3 images are required",
  }),

  featured: z.preprocess((val) => val === "true", z.boolean()),

  isNew: z.preprocess((val) => val === "true", z.boolean()),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),

  details: z.string().min(10, "Details must be at least 10 characters long"),

  sizingGuide: z
    .string()
    .min(10, "Sizing-Guide must be at least 10 characters long"),

  shipping: z.string().min(10, "Shipping must be at least 10 characters long"),
});
