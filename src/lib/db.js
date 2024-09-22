import { MongoClient } from "mongodb";

let client;
let clientPromise;
let db;
const uri = "mongodb+srv://tasniem:yGvkbgmfq8n8DIr7@cluster0.tika6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

if (!db) {
  client = new MongoClient(uri);
  clientPromise = await client.connect();
  db = clientPromise.db("products");
}

export default db;
