import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Blue Lotus - Egyptian wonder plant',
    excerpt: 'The Blue Lotus Flower (Nymphaea Caerulea), also known as Egyptian Lotus or Blue Water Lily, is a sacred aquatic...',
    date: '14/04/2025',
    readTime: '5 mins read',
    image: '/blogs/blog-img1.jpg',
    slug: 'blue-lotus-egyptian-wonder-plant'
  },
  {
    id: 2,
    title: 'Blue Lotus - Egyptian wonder plant',
    excerpt: 'The Blue Lotus Flower (Nymphaea Caerulea), also known as Egyptian Lotus or Blue Water Lily, is a sacred aquatic...',
    date: '14/04/2025',
    readTime: '5 mins read',
    image: '/blogs/blog-img2.jpg',
    slug: 'blue-lotus-egyptian-wonder-plant-2'
  },
  {
    id: 3,
    title: 'US Kratom Crackdown: Opportunity for European Kratom Buyers',
    excerpt: 'US Kratom Import Ban: What It Means for European Buyers | GoPure Shop',
    date: '14/04/2025',
    readTime: '5 mins read',
    image: '/blogs/blog-img3.jpg',
    slug: 'us-kratom-crackdown-opportunity-for-european-buyers'
  },
  {
    id: 4,
    title: 'Blue Lotus - Egyptian wonder plant',
    excerpt: 'The Blue Lotus Flower (Nymphaea Caerulea), also known as Egyptian Lotus or Blue Water Lily, is a sacred aquatic...',
    date: '14/04/2025',
    readTime: '5 mins read',
    image: '/blogs/blog-img1.jpg',
    slug: 'blue-lotus-egyptian-wonder-plant'
  },
  {
    id: 5,
    title: 'Blue Lotus - Egyptian wonder plant',
    excerpt: 'The Blue Lotus Flower (Nymphaea Caerulea), also known as Egyptian Lotus or Blue Water Lily, is a sacred aquatic...',
    date: '14/04/2025',
    readTime: '5 mins read',
    image: '/blogs/blog-img2.jpg',
    slug: 'blue-lotus-egyptian-wonder-plant-2'
  },
  {
    id: 6,
    title: 'US Kratom Crackdown: Opportunity for European Kratom Buyers',
    excerpt: 'US Kratom Import Ban: What It Means for European Buyers | GoPure Shop',
    date: '14/04/2025',
    readTime: '5 mins read',
    image: '/blogs/blog-img3.jpg',
    slug: 'us-kratom-crackdown-opportunity-for-european-buyers'
  },
  {
    id: 7,
    title: 'Blue Lotus - Egyptian wonder plant',
    excerpt: 'The Blue Lotus Flower (Nymphaea Caerulea), also known as Egyptian Lotus or Blue Water Lily, is a sacred aquatic...',
    date: '14/04/2025',
    readTime: '5 mins read',
    image: '/blogs/blog-img1.jpg',
    slug: 'blue-lotus-egyptian-wonder-plant'
  },
  {
    id: 8,
    title: 'Blue Lotus - Egyptian wonder plant',
    excerpt: 'The Blue Lotus Flower (Nymphaea Caerulea), also known as Egyptian Lotus or Blue Water Lily, is a sacred aquatic...',
    date: '14/04/2025',
    readTime: '5 mins read',
    image: '/blogs/blog-img2.jpg',
    slug: 'blue-lotus-egyptian-wonder-plant-2'
  },
  {
    id: 9,
    title: 'US Kratom Crackdown: Opportunity for European Kratom Buyers',
    excerpt: 'US Kratom Import Ban: What It Means for European Buyers | GoPure Shop',
    date: '14/04/2025',
    readTime: '5 mins read',
    image: '/blogs/blog-img3.jpg',
    slug: 'us-kratom-crackdown-opportunity-for-european-buyers'
  }
];

const DesktopBlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    
      <div className="bg-white rounded-lg h-[520px] w-[367px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="relative h-[200px] w-[367px] overflow-hidden">
              <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
              />
          </div>
          <div className="p-5">
              <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center">
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.886 23.1494H16.1139M20.5826 23.1494H22.8104M7.20245 23.1494H9.4303M13.886 16.4658H16.1139M20.5826 16.4658H22.8104M7.20245 16.4658H9.4303M1.63281 10.8773H28.38M21.6964 7.53546V1.96582M8.31641 7.53546V1.96582M6.10142 28.7002H23.9114C26.3794 28.7002 28.38 26.6995 28.38 24.2315V8.66233C28.38 6.19438 26.3794 4.19367 23.9114 4.19367H6.10142C3.63347 4.19367 1.63281 6.19438 1.63281 8.66233V24.2315C1.63281 26.6995 3.63347 28.7002 6.10142 28.7002Z" stroke="#222222" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      <span className="text-gray-600 text-sm ml-[10px]">{post.date}</span>
                  </div>
                  <div className="flex items-center">
                      <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 8.18848V15.333L20.763 20.096M1.71094 15.333H4.09243M1.71094 15.333C1.71094 23.2246 8.10838 29.6221 16 29.6221M1.71094 15.333C1.71094 7.44139 8.10838 1.04395 16 1.04395M27.9076 15.333H30.2891M30.2891 15.333C30.2891 23.2246 23.8916 29.6221 16 29.6221M30.2891 15.333C30.2891 7.44139 23.8916 1.04395 16 1.04395M16 29.6221V27.2406M16 3.42544V1.04395" stroke="#222222" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <span className="text-gray-600 text-sm ml-[10px]">{post.readTime}</span>
                  </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-black">{post.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

              <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-green-700 hover:text-green-800">
                  <span className="mr-1 text-[18px] font-[700]">Read more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
              </Link>
          </div>
      </div>
  );
};

// Mobile blog card component
const MobileBlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
      <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-4">
          <div className="relative h-[200px] w-full overflow-hidden">
              <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
              />
          </div>
          <div className="p-4">
              <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center">
                      <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.886 23.1494H16.1139M20.5826 23.1494H22.8104M7.20245 23.1494H9.4303M13.886 16.4658H16.1139M20.5826 16.4658H22.8104M7.20245 16.4658H9.4303M1.63281 10.8773H28.38M21.6964 7.53546V1.96582M8.31641 7.53546V1.96582M6.10142 28.7002H23.9114C26.3794 28.7002 28.38 26.6995 28.38 24.2315V8.66233C28.38 6.19438 26.3794 4.19367 23.9114 4.19367H6.10142C3.63347 4.19367 1.63281 6.19438 1.63281 8.66233V24.2315C1.63281 26.6995 3.63347 28.7002 6.10142 28.7002Z" stroke="#222222" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <span className="text-gray-600 text-sm ml-[10px]">{post.date}</span>
                  </div>
                  <div className="flex items-center">
                      <svg width="24" height="24" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 8.18848V15.333L20.763 20.096M1.71094 15.333H4.09243M1.71094 15.333C1.71094 23.2246 8.10838 29.6221 16 29.6221M1.71094 15.333C1.71094 7.44139 8.10838 1.04395 16 1.04395M27.9076 15.333H30.2891M30.2891 15.333C30.2891 23.2246 23.8916 29.6221 16 29.6221M30.2891 15.333C30.2891 7.44139 23.8916 1.04395 16 1.04395M16 29.6221V27.2406M16 3.42544V1.04395" stroke="#222222" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <span className="text-gray-600 text-sm ml-[10px]">{post.readTime}</span>
                  </div>
              </div>

              <h3 className="text-lg font-semibold mb-2 text-black">{post.title}</h3>
              <p className="text-gray-600 mb-3 text-sm line-clamp-3">{post.excerpt}</p>

              <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-green-700 hover:text-green-800">
                  <span className="mr-1 font-semibold">Read more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
              </Link>
          </div>
      </div>
  );
};

const Blogpage = () => {
  const currentPage = 1;
  const totalPages = Math.ceil(blogPosts.length / 9); // Assuming 9 posts per page as in the image

  return (
    <div className="min-h-screen bg-[#f5f7fa] pb-10">
      {/* Header */}
      <div className="relative w-full h-40 md:h-56 flex items-center justify-center bg-cover bg-center mb-8 md:mb-12" style={{ backgroundImage: 'url(/blogs/contact-bg.png)' }}>
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-white text-2xl md:text-[34px] lg:text-4xl font-semibold text-center px-4">
          GoPure.shop Blog – Latest Insights on Kratom & Botanicals
        </h1>
      </div>

      <div className="container mx-auto px-4">
        {/* Mobile layout - stacked cards */}
        <div className="md:hidden space-y-6">
          {blogPosts.map(post => (
            <MobileBlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Desktop layout - grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <DesktopBlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */} 
        <div className="mt-10 md:mt-16 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <span className="text-sm text-gray-700">
            Page {currentPage}/{totalPages}
          </span>
          <div className="flex items-center space-x-2">
            <button 
              className="p-2 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              return (
                <button 
                  key={pageNum}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium 
                    ${currentPage === pageNum 
                      ? 'bg-green-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'}
                  `}
                >
                  {pageNum}
                </button>
              );
            })}
            <button 
              className="p-2 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === totalPages}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blogpage;