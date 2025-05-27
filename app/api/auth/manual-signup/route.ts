import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongodb';
import User from '@/app/models/User';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { createSession } from '@/app/lib/session-utils';

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    
    const { socialTitle, fullName, email, password, birthdate } = await request.json();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already in use' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      socialTitle,
      fullName,
      email,
      password: hashedPassword,
      birthdate: birthdate ? new Date(birthdate) : undefined,
    });

    await user.save();

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

    return NextResponse.json(
      { 
        message: 'User created and logged in successfully', 
        user: userResponse 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
