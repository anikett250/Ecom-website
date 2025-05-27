import { connectToDatabase } from './mongodb';
import { ObjectId } from 'mongodb';

interface Session {
  _id: any;
  userId: any;
  createdAt: Date;
  expiresAt: Date;
  userAgent: string;
  ip: string;
}

export async function createSession(userId: string, userAgent: string = 'unknown', ip: string = 'unknown'): Promise<Session> {
  try {
    const { connection } = await connectToDatabase();
    if (!connection) {
      throw new Error('Failed to connect to database');
    }
    
    const db = connection.db;
    const sessions = db.collection<Session>('sessions');
    
    const session: Omit<Session, '_id'> = {
      userId: new ObjectId(userId),
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
      userAgent,
      ip,
    };

    const result = await sessions.insertOne(session as any);
    return { ...session, _id: result.insertedId };
  } catch (error) {
    console.error('Error creating session:', error);
    throw new Error('Failed to create session');
  }
}

export async function validateSession(sessionId: string): Promise<Session | null> {
  try {
    const { connection } = await connectToDatabase();
    if (!connection) {
      throw new Error('Failed to connect to database');
    }
    
    const db = connection.db;
    const sessions = db.collection<Session>('sessions');
    
    const session = await sessions.findOne({
      _id: new ObjectId(sessionId),
      expiresAt: { $gt: new Date() }
    });

    return session;
  } catch (error) {
    console.error('Error validating session:', error);
    return null;
  }
}

export async function deleteSession(sessionId: string): Promise<boolean> {
  try {
    const { connection } = await connectToDatabase();
    if (!connection) {
      throw new Error('Failed to connect to database');
    }
    
    const db = connection.db;
    const sessions = db.collection('sessions');
    
    const result = await sessions.deleteOne({ _id: new ObjectId(sessionId) });
    return result.deletedCount > 0;
  } catch (error) {
    console.error('Error deleting session:', error);
    return false;
  }
}

export function getSessionCookie(): string | undefined {
  try {
    const cookies = require('next/headers').cookies;
    return cookies().get('session_id')?.value;
  } catch (error) {
    console.error('Error getting session cookie:', error);
    return undefined;
  }
}

// Helper to get user from session
export async function getSessionUser() {
  try {
    const sessionId = getSessionCookie();
    if (!sessionId) return null;
    
    const session = await validateSession(sessionId);
    if (!session) return null;
    
    const { connection } = await connectToDatabase();
    if (!connection) {
      throw new Error('Failed to connect to database');
    }
    
    const db = connection.db;
    const users = db.collection('users');
    return users.findOne({ _id: new ObjectId(session.userId) });
  } catch (error) {
    console.error('Error getting session user:', error);
    return null;
  }
}
