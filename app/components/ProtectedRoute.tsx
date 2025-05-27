'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from './LoadingSpinner';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
}

export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/me');
        
        if (!response.ok) {
          throw new Error('Not authenticated');
        }

        const data = await response.json();
        
        // Check if user has the required role if specified
        if (requiredRole && data.user.role !== requiredRole) {
          throw new Error('Unauthorized');
        }

        setIsAuthorized(true);
      } catch (error) {
        console.error('Authentication check failed:', error);
        // Redirect to login with the current path for redirection after login
        const currentPath = window.location.pathname;
        router.push(`/login?from=${encodeURIComponent(currentPath)}`);
      }
    };

    checkAuth();
  }, [requiredRole, router]);

  if (isAuthorized === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!isAuthorized) {
    return null; // Will be redirected by the useEffect
  }

  return <>{children}</>;
}
