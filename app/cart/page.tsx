import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import Newsletter from '../components/newsletter';
import Cart from './cart';

function CartPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Cart />
      <Newsletter />
      <Footer />
    </div>
  );
}
export default CartPage;