import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import Newsletter from '../components/newsletter';
import Contact from './contactpage'
import { useSearchParams } from 'next/navigation';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}
