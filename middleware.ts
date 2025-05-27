import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define public paths that don't require authentication
const publicPaths = [
  '/login',
  '/signup',
  '/api/auth/manual-login',
  '/api/auth/manual-signup',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Root path already points to the home page in Next.js
  // No need to redirect as '/' automatically serves page.tsx from the app folder

  // Skip middleware for public paths
  if (publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Skip middleware for API routes in development
  if (process.env.NODE_ENV === 'development' && pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // Skip middleware for static files and images
  if (pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|css|js)$/)) {
    return NextResponse.next();
  }

  // Check for session cookie
  const sessionCookie = request.cookies.get('session_id');
  
  if (!sessionCookie && pathname !== '/') {
    // Redirect to login if no session cookie found and not accessing the home page
    const loginUrl = new URL('/logins', request.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Session cookie exists or accessing the home page, continue with the request
  return NextResponse.next();
}

// Configure which paths the middleware will run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
