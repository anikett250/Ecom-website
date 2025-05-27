import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/db';
import Signup from '@/app/models/Signup';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    // Connect to the database
    await connectToDatabase();
    
    // Parse the request body
    const { socialTitle, fullName, email, password, birthdate } = await req.json();
    
    // Check if user already exists
    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }
    
    // Validate password
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters long' },
        { status: 400 }
      );
    }
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create a new user in the signup collection
    const user = await Signup.create({
      socialTitle,
      fullName,
      email,
      password: hashedPassword,
      birthdate: birthdate ? new Date(birthdate) : undefined,
    });
    
    // Return the user without the password
    const userWithoutPassword = {
      _id: user._id,
      socialTitle: user.socialTitle,
      fullName: user.fullName,
      email: user.email,
      birthdate: user.birthdate,
      createdAt: user.createdAt,
    };
    
    return NextResponse.json(
      { message: 'User created successfully', user: userWithoutPassword },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'An error occurred during signup' },
      { status: 500 }
    );
  }
}