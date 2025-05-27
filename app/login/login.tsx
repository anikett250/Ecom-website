"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Blog() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/logins');
  }, [router]);
  return null;
}
export default Blog;