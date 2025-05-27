import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import Story from './story';

function StoryPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Story />
      <Footer />
    </div>
  );
}
export default StoryPage;