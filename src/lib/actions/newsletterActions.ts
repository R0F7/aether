"use server";

import { headers } from "next/headers";
import { NewsletterValidationSchema } from "../validationSchema/newsletterValidationSchema";
import { getCollection } from "../db";

export async function newsletterActions(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const headerList = await headers();
  const newsletter = await getCollection("newsletter");

  const validatedFields = NewsletterValidationSchema.safeParse({ email });
  const ip = headerList.get("x-forwarded-for")?.split(",")[0] || "unknown";

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid email address",
      errors: validatedFields.error.flatten().fieldErrors,
      inputs: email,
    };
  }

  const data = {
    email: validatedFields.data.email,
    ipAddress: ip,
    subscribedAt: new Date(),
  };

  try {
    const isExist = await newsletter?.findOne({
      email: validatedFields.data.email,
    });

    if (isExist) {
      return { success: false, message: "This email is already subscribed." };
    }

    if (!newsletter) {
      return {
        success: false,
        message: "Database connection unavailable. Please try again.",
      };
    }

    await newsletter.insertOne(data);
    return { success: true, message: "Successfully subscribed!" };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
