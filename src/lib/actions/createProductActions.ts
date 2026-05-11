"use server";

import { getCollection } from "../db";
import { ProductValidationSchema } from "../validationSchema/productValidationSchema";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "@/lib/r2";

export async function createProductAction(prevState: any, formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  const sizes = formData.getAll("sizes") as File[];
  const images = formData.getAll("images") as File[];

  const validImages = images.filter(
    (file) => file.name !== "undefined" && file.size > 0
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

  const validatedData = validatedFields.data;

  try {
    const uploadedImageUrls = await Promise.all(
      validatedData.images.map(async (file: File) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;

        await s3Client.send(
          new PutObjectCommand({
            Bucket: process.env.R2_BUCKET_NAME!,
            Key: fileName,
            Body: buffer,
            ContentType: file.type,
          })
        );

        return `${process.env.R2_PUBLIC_CUSTOM_DOMAIN}/${fileName}`;
      })
    );

    const productCollection = await getCollection("products");
    
    const newProduct = {
      ...validatedData,
      images: uploadedImageUrls,
      createdAt: new Date(),
    };

    await productCollection?.insertOne(newProduct);

    return { success: true, message: "Product added successfully!" };
  } catch (error) {
    console.error("Upload/DB Error:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}