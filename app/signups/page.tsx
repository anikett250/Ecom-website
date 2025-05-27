import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import Signuppage from '../signup/signuppage'

function Blog() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Signuppage />
      <Footer />
    </div>
  );
}
export default Blog;