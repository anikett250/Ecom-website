"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Story() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/story');
  }, [router]);
  return null;
}
export default Story;