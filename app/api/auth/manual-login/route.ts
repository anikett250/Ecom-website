import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongodb';
import User from '@/app/models/User';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { createSession } from '@/app/lib/session-utils';

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    
    const { email, password } = await request.json();

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Create session in database
    const session = await createSession(
      user._id,
      request.headers.get('user-agent') || 'unknown',
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    );
    
    // Set session cookie using the cookies() API
    const cookieStore = cookies();
    cookieStore.set('session_id', session._id.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    // Don't send back the password
    const userResponse = user.toObject();
    delete userResponse.password;

    return NextResponse.json({
      message: 'Login successful',
      user: userResponse,
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function createSession(userId: string) {
  const db = (await connectToDatabase()).connection.db;
  const sessions = db.collection('sessions');
  
  const session = {
    userId: userId,
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
    userAgent: 'unknown', // You can extract this from request headers
    ip: 'unknown', // You can extract this from request
  };

  const result = await sessions.insertOne(session);
  return { ...session, _id: result.insertedId };
}
