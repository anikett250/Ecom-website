import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import Blogpage from './blogpage'

function Blog() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Blogpage />
      <Footer />
    </div>
  );
}
export default Blog;