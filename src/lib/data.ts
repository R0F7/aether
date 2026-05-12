import { getCollection } from "@/lib/db";
import { cache } from "react";

export const getCollections = cache(async function () {
  const collection = await getCollection("collections");
  const result = await collection?.find().toArray();

  return (result || []).map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
});

export const getProduct = cache(async (slug: string) => {
  const collection = await getCollection("products");
  const result = await collection?.findOne({ slug });

  if (!result) return null;

  return {
    ...result,
    _id: result._id.toString(),
  };
});

export async function getProducts({
  category,
  size,
  sort,
  min,
  max,
  page = 1,
  limit = 9,
}: {
  category?: string;
  size?: string;
  sort?: string;
  min?: number;
  max?: number;
  page?: number;
  limit?: number;
} = {}) {
  const collection = await getCollection("products");

  const query: any = {};

  // category
  if (category && category !== "all") {
    query.category = category;
  }

  // size
  if (size) {
    query.sizes = {
      $in: [size],
    };
  }

  // price
  if (min !== undefined || max !== undefined) {
    query.price = {};

    if (min !== undefined) {
      query.price.$gte = min;
    }

    if (max !== undefined) {
      query.price.$lte = max;
    }
  }

  // sort
  let sortQuery: any = {};

  switch (sort) {
    case "price-asc":
      sortQuery.price = 1;
      break;

    case "price-desc":
      sortQuery.price = -1;
      break;

    case "name":
      sortQuery.name = 1;
      break;

    default:
      sortQuery.isNew = -1;
  }

  // total count
  const totalProducts = await collection?.countDocuments(query);

  // pagination
  const skip = (page - 1) * limit;

  const products = await collection
    ?.find(query)
    .sort(sortQuery)
    .skip(skip)
    .limit(limit)
    .toArray();

  return {
    products:
      products?.map((product) => ({
        ...product,
        _id: product._id.toString(),
      })) || [],

    totalProducts,
    totalPages: Math.ceil((totalProducts || 0) / limit),
  };
}
