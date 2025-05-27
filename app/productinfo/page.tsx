import React from 'react';
import ProductInfo from './productsinfo';
import Header from '../components/Header';
import Footer from '../components/footer';
import Products from '../components/products';
import Newsletter from '../components/newsletter';
import TrustBadges from '../components/trustbadges';
import { useSearchParams } from 'next/navigation';

export default function ProductInfoPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col gap-[100px] ">
      <Header />
      <ProductInfo />
      <Products />
      <Newsletter />
      <TrustBadges />
      <Footer />
    </div>
  );
}
