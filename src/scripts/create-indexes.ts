import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { MongoClient } from "mongodb";

const uri = process.env.DB_URI;

if (!uri) {
  throw new Error("DB_URI missing");
}

async function createIndexes() {
  const client = new MongoClient(uri!);

  try {
    await client.connect();

    const db = client.db("aether");
    const products = db.collection("products");

    await products.createIndex({ category: 1, sizes: 1, price: 1 });
    await products.createIndex({ name: 1 });
    await products.createIndex({ slug: 1 }, { unique: true });
    await products.createIndex({ createdAt: -1 });

    console.log("Indexes created successfully");
  } catch (error) {
    console.error("Failed to create indexes:", error);
  } finally {
    await client.close();
  }
}

createIndexes();
