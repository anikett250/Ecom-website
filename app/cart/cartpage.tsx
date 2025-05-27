"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Cart() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/cart');
  }, [router]);
  return null;
}
export default Cart;