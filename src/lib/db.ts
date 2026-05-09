import { Db, MongoClient, ServerApiVersion } from "mongodb";

// const client = new MongoClient(process.env.DB_URI!, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function getDB(dbName: string) {
//   try {
//     await client.connect();
//     console.log("DB connected successfully");
//     return client.db(dbName);
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getCollection(collectionName: string) {
//   const db = await getDB("aether");
//   if (db) return db.collection(collectionName);
//   return null;
// }

const uri = process.env.DB_URI!;
const dbName = "aether";

if (!uri) {
  throw new Error("Please define the DB_URI environment variable");
}

// 1. Create the client (singleton)
const client = new MongoClient(uri, {
  maxPoolSize: 10, // Good for serverless
  minPoolSize: 0,
});

// 2. Export the database instance directly
// The driver will internally queue operations until the connection is established
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

// 3. Export the client in case you need transactions or to close it
export { client };
