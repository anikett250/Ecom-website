import { NextResponse } from 'next/server';
import { getSessionUser } from '@/app/lib/session-utils';

export async function GET() {
  try {
    // Get the current user from the session
    const user = await getSessionUser();
    
    if (!user) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }
    
    // Don't send back the password
    const { password, ...userWithoutPassword } = user;
    
    return NextResponse.json({
      user: userWithoutPassword
    });
    
  } catch (error) {
    console.error('Error getting user:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
