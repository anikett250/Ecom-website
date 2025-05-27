import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}

export { signIn, signOut } from 'next-auth/react';
