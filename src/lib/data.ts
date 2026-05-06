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

export async function getProducts() {
  const productCollection = await getCollection("products");
  const productsResult = await productCollection?.find().toArray();

  return (productsResult || []).map((product) => ({
    ...product,
    _id: product._id.toString(),
  })) as Product[];
}
