import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase, { getCollections } from '@/app/lib/db';
import Signup from '@/app/models/Signup';
import Login from '@/app/models/Login';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    // Connect to the database
    await connectToDatabase();
    
    // Parse the request body
    const { email, password } = await req.json();
    
    // Find the user in the signup collection
    const user = await Signup.findOne({ email });
    if (!user) {
      // Record failed login attempt
      await Login.create({
        email,
        successful: false,
        ipAddress: req.headers.get('x-forwarded-for') || 'unknown',
        userAgent: req.headers.get('user-agent') || 'unknown'
      });
      
      return NextResponse.json(
        { error: 'No account found with this email. Please sign up first.' },
        { status: 401 }
      );
    }
    
    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      // Record failed login attempt
      await Login.create({
        email,
        successful: false,
        ipAddress: req.headers.get('x-forwarded-for') || 'unknown',
        userAgent: req.headers.get('user-agent') || 'unknown'
      });
      
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }
    
    // Record successful login
    await Login.create({
      userId: user._id,
      email,
      successful: true,
      ipAddress: req.headers.get('x-forwarded-for') || 'unknown',
      userAgent: req.headers.get('user-agent') || 'unknown'
    });
    
    // Return user info without password
    const userWithoutPassword = {
      _id: user._id,
      socialTitle: user.socialTitle,
      fullName: user.fullName,
      email: user.email,
      birthdate: user.birthdate,
    };
    
    // Create response with user data
    const response = NextResponse.json(
      { 
        message: 'Login successful', 
        user: userWithoutPassword
      },
      { status: 200 }
    );
    
    // Set a session cookie that expires in 24 hours
    response.cookies.set({
      name: 'user_session',
      value: user._id.toString(),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
      sameSite: 'strict'
    });
    
    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'An error occurred during login' },
      { status: 500 }
    );
  }
}