import { Db, MongoClient } from "mongodb";

const uri = process.env.DB_URI!;
const dbName = "aether";

if (!uri) {
  throw new Error("Please define the DB_URI environment variable");
}

const client = new MongoClient(uri, {
  maxPoolSize: 10,
  minPoolSize: 0,
});

export const db: Db = client.db(dbName);

export async function getCollection(collectionName: string) {
  try {
    await client.connect();
    return db.collection(collectionName);
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { client };
