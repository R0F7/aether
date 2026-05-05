import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.DB_URI) {
  throw new Error("Mongo URI not found!");
}

const client = new MongoClient(process.env.DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function getDB(dbName) {
  try {
    await client.connect();
    console.log("DB connected successfully");
    return client.db(dbName);
  } catch (error) {
    console.log(error);
  }
}

export async function getCollection(collectionName) {
  const db = await getDB("aether");
  if (db) return db.collection(collectionName);
  return null;
}
