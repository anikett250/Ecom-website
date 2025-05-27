import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import Checkout from './checkout';

function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Checkout />
      <Footer />
    </div>
  );
}
export default CheckoutPage;