import { getCollection } from "./db";
import { Collection, Product } from "./mock-data";

export async function getCollections() {
  const collection = await getCollection("collections");
  const collectionResult = await collection?.find().toArray();

  return (collectionResult || []).map(
    (item) =>
      ({
        ...item,
        _id: item._id.toString(),
      }) as Collection,
  );
}

// export async function getProducts() {
//   const productCollection = await getCollection("products");
//   const productsResult = await productCollection?.find().toArray();

//   return (productsResult || []).map((product) => ({
//     ...product,
//     _id: product._id.toString(),
//   })) as Product[];
// }

export async function getProduct(slug: string) {
  const productCollection = await getCollection("products");

  const productResult = await productCollection?.findOne({ slug });

  if (!productResult) return null;

  return {
    ...productResult,
    _id: productResult._id.toString(),
  };
}

export async function getProducts({
  category,
  size,
  sort,
  min,
  max,
}: {
  category?: string;
  size?: string;
  sort?: string;
  min?: number;
  max?: number;
}= {}) {
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

  // price range
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

  const products = await collection
    ?.find(query)
    .sort(sortQuery)
    .toArray();

  return (
    products?.map((product) => ({
      ...product,
      _id: product._id.toString(),
    })) || []
  );
}