import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import type { Adapter } from 'next-auth/adapters';
import type { JWT } from 'next-auth/jwt';
import type { Session } from 'next-auth';
import type { MongoClient } from 'mongodb';

// Import the MongoDB client with proper typing
import { MongoClient } from 'mongodb';

// Type assertion for the client promise
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient>;
}

let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MONGODB_URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(process.env.MONGODB_URI);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  const client = new MongoClient(process.env.MONGODB_URI);
  clientPromise = client.connect();
}

// Extend the Session type to include the user ID
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

// Fix for TypeScript error with MongoDBAdapter
const adapter = MongoDBAdapter(clientPromise as Promise<MongoClient>, {
  databaseName: 'ecom_db',
});

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: adapter as Adapter,
  session: {
    strategy: 'jwt' as const,
  },
  callbacks: {
    async session({ session, token, user }): Promise<Session> {
      if (session?.user) {
        session.user.id = token.sub || user?.id;
      }
      return session;
    },
    async jwt({ token, user }): Promise<JWT> {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async signIn(): Promise<boolean> {
      // You can add custom logic here when a user signs in
      return true;
    },
  },
  pages: {
    signIn: '/logins',
    signOut: '/',
    error: '/logins',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
