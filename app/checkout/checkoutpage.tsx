"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Checkout() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/checkout');
  }, [router]);
  return null;
}
export default Checkout;