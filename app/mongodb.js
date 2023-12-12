import { MongoClient } from 'mongodb';

const MONGO_PASSWORD = 'BAZNJJpkfNs7nspA';
const MONGO_USER = 'admin';

const MONGODB_URI = `mongodb+srv://admin:BAZNJJpkfNs7nspA@cluster0.ujbecaz.mongodb.net/?retryWrites=true&w=majority`;
const MONGODB_DB = 'Cluster0';

if (!MONGODB_URI || !MONGODB_DB) {
  throw new Error('Please define the MONGODB_URI and MONGODB_DB environment variables inside .env.local');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(MONGODB_URI);

  await client.connect();
  const db = client.db(MONGODB_DB);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
