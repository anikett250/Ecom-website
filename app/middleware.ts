import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Define protected routes that require authentication
  const protectedRoutes = [
    '/profile',
    '/checkout',
    '/orders',
  ];

  // Check if the current path is in the protected routes
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    // Get the session cookie
    const session = request.cookies.get('user_session')?.value;

    // If no session, redirect to login
    if (!session) {
      return NextResponse.redirect(new URL('/logins', request.url));
    }

    try {
      // We're just checking if the session cookie exists
      // The actual validation is done in the API routes
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL('/logins', request.url));
    }
  }

  // For non-protected routes, continue normally
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/profile/:path*',
    '/checkout/:path*',
    '/orders/:path*',
  ],
};