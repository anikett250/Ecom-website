import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import Loginpage from '../login/loginpage'

function Blog() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Loginpage />
      <Footer />
    </div>
  );
}
export default Blog;