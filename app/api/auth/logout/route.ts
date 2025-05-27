import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { deleteSession, getSessionCookie } from '@/app/lib/session-utils';

export async function POST() {
  try {
    const sessionId = getSessionCookie();
    
    if (sessionId) {
      // Delete the session from the database
      await deleteSession(sessionId);
      
      // Clear the session cookie
      const cookieStore = cookies();
      cookieStore.delete('session_id');
    }
    
    return NextResponse.json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
