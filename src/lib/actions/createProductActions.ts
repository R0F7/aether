"use server";

import { getCollection } from "../db";
import { ProductValidationSchema } from "../validationSchema/productValidationSchema";

export async function createProductAction(prevState: any, formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  const sizes = formData.getAll("sizes") as File[];
  const images = formData.getAll("images") as File[];

  const validImages = images.filter(
    (file) => file.name !== "undefined" && file.size > 0,
  );

  const dataToValidate = {
    ...rawData,
    sizes: sizes.length > 0 ? sizes : [],
    images: validImages,
  };

  const validatedFields = ProductValidationSchema.safeParse(dataToValidate);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please fix the errors in the form",
      errors: validatedFields.error.flatten().fieldErrors,
      inputs: dataToValidate,
    };
  }

  const data = validatedFields.data;
  console.log("Validated Data:", data);

  //TODO: DB Logic here

  return { success: true, message: "Product added successfully!" };
}
