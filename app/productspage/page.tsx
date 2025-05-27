import React from 'react';
import Products from './products';
import Header from '../components/Header'
import Footer from '../components/footer'


export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Products />
      <Footer />
    </div>
  );
}
