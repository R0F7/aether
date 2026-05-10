import { getCollection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const queryText = searchParams.get("q");

  if (!queryText) {
    return NextResponse.json([]);
  }

  try {
    const productCollection = await getCollection("products");
    
    const products = await productCollection
      ?.find({
        name: { $regex: queryText, $options: "i" },
      })
      .limit(10)
      .toArray();

    return NextResponse.json(products);
  } catch (error) {
    console.error("Search API Error:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}