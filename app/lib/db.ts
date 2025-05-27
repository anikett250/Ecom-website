import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ecom_db';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null, collections: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
    
    // Initialize collections if they don't exist
    if (!cached.collections) {
      const db = mongoose.connection.db;
      
      // Check if collections exist, if not create them
      const collections = await db.listCollections().toArray();
      const collectionNames = collections.map(c => c.name);
      
      if (!collectionNames.includes('signups')) {
        await db.createCollection('signups');
      }
      
      if (!collectionNames.includes('logins')) {
        await db.createCollection('logins');
      }
      
      cached.collections = {
        signups: db.collection('signups'),
        logins: db.collection('logins')
      };
    }
    
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

// Get the collections
export async function getCollections() {
  await connectToDatabase();
  return cached.collections;
}

export default connectToDatabase;
