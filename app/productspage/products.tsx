"use client"
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import ShowMoreProduct from './showmore-product';

// Import the kratom images
import greenKratom from "../components/assets/greenkratom.png";
import whiteKratom from "../components/assets/whitekratom.png";
import purpleKratom from "../components/assets/purplekratom.png";
import redKratom from "../components/assets/redkratom.png";

// Define the kratom image array for random selection
const kratomImages = [
  { src: greenKratom, alt: "Green Kratom" },
  { src: whiteKratom, alt: "White Kratom" },
  { src: purpleKratom, alt: "Purple Kratom" },
  { src: redKratom, alt: "Red Kratom" },
];

const products = [
  { id: 1, name: "Stem and Vein Kratom", price: 12.74, rating: 5, imageIndex: 0, originalPrice: 15.74 },
  { id: 2, name: "Stem and Vein Kratom", price: 12.74, rating: 5, imageIndex: 1, originalPrice: 15.74 },
  { id: 3, name: "Stem and Vein Kratom", price: 12.74, rating: 5, imageIndex: 3, originalPrice: 15.74 },
  { id: 4, name: "Stem and Vein Kratom", price: 12.74, rating: 5, imageIndex: 3, originalPrice: 15.74 },
  { id: 5, name: "Stem and Vein Kratom", price: 12.74, rating: 5, imageIndex: 3, originalPrice: 15.74 },
  { id: 6, name: "Stem and Vein Kratom", price: 12.74, rating: 5, imageIndex: 0, originalPrice: 15.74 },
  { id: 7, name: "Stem and Vein Kratom", price: 12.74, rating: 5, imageIndex: 1, originalPrice: 15.74 },
  { id: 8, name: "Stem and Vein Kratom", price: 12.74, rating: 5, imageIndex: 3, originalPrice: 15.74 },
  { id: 9, name: "Stem and Vein Kratom", price: 12.74, rating: 5, imageIndex: 0, originalPrice: 15.74 },
  { id: 10, name: "Stem and Vein Kratom", price: 12.74, rating: 5, imageIndex: 1, originalPrice: 15.74 },
  { id: 11, name: "Stem and Vein Kratom", price: 12.74, rating: 5, imageIndex: 3, originalPrice: 15.74 },
  { id: 12, name: "Stem and Vein Kratom", price: 12.74, rating: 5, imageIndex: 0, originalPrice: 15.74 },
];

const ratings = [5, 4, 3, 2, 1];

const faqs = [
  "What is kratom?",
  "What Do People Use Kratom For?",
  "How Do I Choose the Right Kratom Strain?",
  "Is Kratom Legal?",
  "Why Buy from GoPure?",
  "Can I Use Kratom Safely?",
];

const childCategories = [
  { title: "Child Category 1", items: ["Child sub-category 1", "Child sub-category 2", "Child sub-category 3"] },
  { title: "Child Category 2", items: ["Child sub-category 1", "Child sub-category 2", "Child sub-category 3"] },
  { title: "Child Category 3", items: ["Child sub-category 1", "Child sub-category 2", "Child sub-category 3"] },
];

export default function GreenKratomPage() {
  const router = useRouter();
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const [showMoreOpen, setShowMoreOpen] = useState<boolean>(false);
  const [showMobileFilter, setShowMobileFilter] = useState<boolean>(false);
  const [sortByOpen, setSortByOpen] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<string>("Relevance");
  
  // Function to navigate to product info page
  const navigateToProductInfo = (productId: number) => {
    router.push(`/productinfo?id=${productId}`);
  };

  // Function to get a random image for products without a specific imageIndex
  const getRandomKratomImage = (productName: string) => {
    // Assign specific image based on product name or use random
    if (productName.toLowerCase().includes('green')) {
      return kratomImages[0];
    } else if (productName.toLowerCase().includes('white')) {
      return kratomImages[1];
    } else if (productName.toLowerCase().includes('purple')) {
      return kratomImages[2];
    } else if (productName.toLowerCase().includes('red')) {
      return kratomImages[3];
    } else {
      // Random image for other products
      return kratomImages[Math.floor(Math.random() * kratomImages.length)];
    }
  };

  const toggleFaq = (index: number) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };
  
  const openShowMore = () => {
    setShowMoreOpen(true);
  };

  const closeShowMore = () => {
    setShowMoreOpen(false);
  };

  const toggleMobileFilter = () => {
    setShowMobileFilter(!showMobileFilter);
  };

  const toggleSortBy = () => {
    setSortByOpen(!sortByOpen);
  };

  const handleSortSelection = (sort: string) => {
    setSelectedSort(sort);
    setSortByOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Title */}
      <section className="sm:relative sm:overflow-hidden sm:flex">
        <div className="sm:absolute sm:inset-0 sm:right-0">
          <img
            src="/products/productpage-hero.png"
            alt="Green Kratom"
            className="sm:w-full sm:h-full sm:object-cover w-0 "
          />
        </div>
        <div className="relative z-10 sm:w-[755px] sm:h-[234px] w-[445px] h-[138px] bg-[#223912] text-white md:w-1/2 lg:w-2/5 p-8 flex flex-col justify-center rounded-tr-[24px] rounded-br-[24px] sm:pl-[238px] ">
          <h2 className="sm:text-[34px] text-[21px] font-[700] ">Green Kratom</h2>
          <p className="mt-2 text-gray-200 sm:text-[18px] text-[14px] font-[500] ">
            In traditional medication, green kratom strains have<br /> been used for pain relief without drowsiness. Its<br /> believed to deliver long-lasting mild
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-6">
        {/* Mobile filter and sort options */}
        <div className="flex justify-between items-center w-full mb-4 md:hidden">
          <div className="text-lg font-medium">There are 13 products</div>
          <button 
            onClick={toggleMobileFilter}
            className="flex items-center justify-between gap-2 bg-green-700 text-white px-4 py-2 rounded-md"
          >
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M7 12H17M9 18H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Filter</span>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        {/* Mobile sort by dropdown */}
        <div className="relative w-full mb-4 md:hidden">
          <div className="flex items-center">
            <span className="mr-2 font-[700] text-[14px] ">Sort by:</span>
            <div className="relative w-[202px] h-[42px] ">
              <button 
                onClick={toggleSortBy}
                className="flex items-center justify-between w-full bg-[#E9E3D8] px-4 py-2 rounded-md"
              >
                <span>{selectedSort}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {sortByOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  {["Relevance", "Price: Low to High", "Price: High to Low", "Rating"].map((option) => (
                    <button 
                      key={option}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${selectedSort === option ? 'bg-gray-100' : ''}`}
                      onClick={() => handleSortSelection(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Sidebar filters */}
        <aside className={`${showMobileFilter ? 'block' : 'hidden'} md:block w-full md:w-72 bg-white rounded-lg shadow-sm p-5`}>
          {/* Filter by effect */}
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-[16px]">Filter by effect</h3>
              <button className="bg-green-700 rounded-full w-6 h-6 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <div className="space-y-2">
              {[
                { name: "Energy", count: 3, checked: true },
                { name: "Euphoric", count: 4, checked: false },
                { name: "Focus", count: 3, checked: false },
                { name: "Relax/Sedation", count: 3, checked: false }
              ].map((effect) => (
                <label key={effect.name} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox w-5 h-5 text-green-700 rounded border-gray-300 focus:ring-0 accent-[#0E8044] "
                    defaultChecked={effect.checked}
                  />
                  <span className="text-[14px]">{effect.name} ({effect.count})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filter by Strain color */}
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-[16px]">Filter by Strain color</h3>
              <button className="bg-green-700 rounded-full w-6 h-6 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Filter by Strain origin */}
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-[16px]">Filter by Strain origin</h3>
              <button className="bg-green-700 rounded-full w-6 h-6 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Filter by Type */}
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-[16px]">Filter by Type</h3>
              <button className="bg-green-700 rounded-full w-6 h-6 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Filter by weight */}
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-[16px]">Filter by weight</h3>
              <button className="bg-green-700 rounded-full w-6 h-6 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <div className="space-y-2">
              {[
                { name: "200g", checked: true },
                { name: "450g", checked: false },
                { name: "700g", checked: false },
                { name: "1kg", checked: false }
              ].map((weight) => (
                <label key={weight.name} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox w-5 h-5 text-green-700 rounded border-gray-300 focus:ring-0 accent-[#0E8044] "
                    defaultChecked={weight.checked}
                  />
                  <span className="text-[14px]">{weight.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filter by price */}
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-[16px]">Filter by price</h3>
              <button className="bg-green-700 rounded-full w-6 h-6 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <div className="space-y-2">
              {[
                { name: "Low to high", checked: true },
                { name: "High to low", checked: false }
              ].map((price) => (
                <label key={price.name} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox w-5 h-5 text-green-700 rounded border-gray-300 focus:ring-0 accent-[#0E8044] "
                    defaultChecked={price.checked}
                  />
                  <span className="text-[14px]">{price.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filter by rating */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-[16px]">Filter by rating</h3>
              <button className="bg-green-700 rounded-full w-6 h-6 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <div className="space-y-2">
              {[
                { stars: 5, count: 123, checked: true },
                { stars: 4, count: 213, checked: false },
                { stars: 3, count: 33, checked: false },
                { stars: 2, count: 12, checked: false }
              ].map((rating) => (
                <label key={rating.stars} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox w-5 h-5 text-green-700 rounded border-gray-300 focus:ring-0 accent-[#0E8044] "
                    defaultChecked={rating.checked}
                  />
                  <span className="flex items-center">
                    {[...Array(rating.stars)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.572-.955L10 0l2.938 5.955 6.572.955-4.755 4.635 1.123 6.545z" /></svg>
                    ))}
                    <span className="ml-1 text-gray-500 text-[14px]">({rating.count})</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Products grid */}
        <section className="flex-1">
          {/* Sort dropdown - desktop only */}
          <div className="hidden md:flex justify-end mb-4">
          <span className="mr-2 font-[700] text-[14px] ">Sort by:</span>
            <select 
              className="rounded px-3 py-1 text-sm bg-[#E9E3D8] text-[14px] " 
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
            >
              <option value="Relevance">Relevance</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Rating">Rating</option>
            </select>
          </div>

          {/* Product cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-[45px]">
            {products.slice(0, 6).map((product) => (
              <div 
                key={product.id} 
                className="flex flex-col bg-[#FEF6E6] rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigateToProductInfo(product.id)}
              >
                {/* Wishlist and Rating */}
                <div className="flex justify-between items-start p-2">
                  <div className="flex">
                    {[...Array(product.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.572-.955L10 0l2.938 5.955 6.572.955-4.755 4.635 1.123 6.545z" /></svg>
                    ))}
                    <span className="text-xs ml-1">({123})</span>
                  </div>
                  <button className="text-gray-500 hover:text-gray-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </button>
                </div>
                
                {/* Product Image */}
                <div className="flex justify-center p-2">
                  <Image
                    src={product.imageIndex !== undefined ? kratomImages[product.imageIndex].src : getRandomKratomImage(product.name).src}
                    alt={product.name}
                    width={150}
                    height={220}
                    className="w-[102px] h-[150px] sm:w-[150px] sm:h-[220px] object-contain"
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-3 flex flex-col">
                  <h3 className="text-sm sm:text-base font-medium mb-1 line-clamp-2">Stem and Vein Kratom</h3>
                  
                  {/* Price */}
                  <div className="flex items-center mb-2">
                    <span className="text-2xl font-bold">£{product.price.toFixed(2)}</span>
                    <span className="text-sm line-through text-gray-500 ml-2">£15.74</span>
                  </div>
                  
                  {/* Add to Cart Button */}
                  <button 
                    className="w-full bg-[#DE7A22] text-white py-2 px-4 rounded-md text-sm font-semibold"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent navigation when clicking the button
                      // Add to cart logic here
                    }}
                  >
                    Add to cart
                  </button>
                  
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center sm:justify-end space-x-3 text-sm">
            <button className="px-3 py-1 hover:bg-green-100">Prev</button>
            <button className="border rounded-[100px] px-3 py-1 w-[37px] h-[37px] bg-green-700 text-white">1</button>
            <button className="border rounded-[100px] px-3 py-1 w-[37px] h-[37px] hover:bg-green-100">2</button>
            <button className="px-3 py-1 hover:bg-green-100">Next</button>
          </div>
        </section>
      </main>

      {/* Key Benefits */}
      <section className="max-w-7xl mx-auto p-6 bg-green-50 rounded my-12 flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <h3 className="sm:text-[34px] text-[27px] font-[700] mb-3">Key Benefit</h3>
          <p className="sm:text-[18px] text-[14px] font-[500] " >
            The region where a kratom strain originates plays a significant role in determining its effects. Over time, these strains have adapted to the local climate and soil conditions, resulting in unique characteristics.
            <br />
            <br />
            The traditional use of kratom in herbal medicine varies from region to region, with different cultures cultivating and refining native strains to suit their preferences. Today, while most kratom available on the market is cultivated in Indonesia, the distinct traits of each strain have remained consistent as the industry standard.
          </p>
          <button 
            onClick={openShowMore}
            className="flex flex-row justify-center gap-[10px] w-[200px] h-[48px] mt-4 py-[10px] bg-white-0 text-[#0E8044] text-[18px] font-[700] border-[2px] border-[#0E8044] rounded-[100px] "
          >
            Show more 
            <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 24.5195C5.37281 24.5195 0 19.1467 0 12.5195C0 5.89234 5.37281 0.519531 12 0.519531C18.6272 0.519531 24 5.89234 24 12.5195C24 19.1467 18.6272 24.5195 12 24.5195ZM18.5625 11.8347C18.5624 11.6077 18.4722 11.3901 18.3117 11.2296C18.1512 11.0691 17.9335 10.9789 17.7066 10.9788H13.5408V6.81297C13.5407 6.586 13.4504 6.36836 13.2899 6.20787C13.1295 6.04737 12.9118 5.95716 12.6848 5.95703H11.3152C11.0882 5.95716 10.8705 6.04737 10.7101 6.20787C10.5496 6.36836 10.4593 6.586 10.4592 6.81297V10.9788H6.29344C6.06647 10.9789 5.84883 11.0691 5.68834 11.2296C5.52784 11.3901 5.43762 11.6077 5.4375 11.8347V13.2044C5.43762 13.4313 5.52784 13.649 5.68834 13.8095C5.84883 13.97 6.06647 14.0602 6.29344 14.0603H10.4592V18.2261C10.4593 18.4531 10.5496 18.6707 10.7101 18.8312C10.8705 18.9917 11.0882 19.0819 11.3152 19.082H12.6848C12.9118 19.0819 13.1295 18.9917 13.2899 18.8312C13.4504 18.6707 13.5407 18.4531 13.5408 18.2261V14.0603H17.7066C17.9335 14.0602 18.1512 13.97 18.3117 13.8095C18.4722 13.649 18.5624 13.4313 18.5625 13.2044V11.8347Z" fill="#0E8044" />
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <img
            src="/products/productpage-hero.png"
            alt="Green Kratom"
            className="sm:w-[440px] sm:h-[440px] w-[413px] h-[256px] object-cover rounded-[16px] sm:rounded-[30px] "
          />
        </div>
      </section>

      {/* Show More Modal */}
      <ShowMoreProduct isOpen={showMoreOpen} onClose={closeShowMore} />

      {/* FAQ */}
      <section className="max-w-7xl mx-auto p-6">
        <h3 className="mb-6 text-center text-[34px] font-[700]">Frequently asked questions</h3>
        <div className="flex-col flex gap-[10px] max-w-[960px] mx-auto">
          {faqs.map((q, i) => (
            <div key={i} className="border border-gray-200 rounded-md bg-[#E9E3D8]">
              <button
                onClick={() => toggleFaq(i)}
                className="flex justify-between items-center p-4 text-left w-full h-[52px] bg-[#E9E3D8] text-[16px] font-[600] rounded-md"
                aria-expanded={faqOpenIndex === i}
              >
                {q}
                <span className="flex items-center justify-center">
                  {faqOpenIndex === i ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM7 11V13H17V11H7Z" fill="#0E8044" />
                    </svg>
                  ) : (
                    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 26.0195C6.54441 26.0195 0.5 20.199 0.5 13.0195C0.5 5.84008 6.54441 0.0195312 14 0.0195312C21.4556 0.0195312 27.5 5.84008 27.5 13.0195C27.5 20.199 21.4556 26.0195 14 26.0195ZM21.3828 12.2776C21.3827 12.0317 21.2812 11.796 21.1006 11.6221C20.9201 11.4482 20.6752 11.3505 20.4199 11.3504H15.7334V6.83742C15.7332 6.59154 15.6317 6.35576 15.4512 6.18189C15.2706 6.00803 15.0258 5.91029 14.7704 5.91016H13.2296C12.9742 5.91029 12.7294 6.00803 12.5488 6.18189C12.3683 6.35576 12.2668 6.59154 12.2666 6.83742V11.3504H7.58012C7.32477 11.3505 7.07993 11.4482 6.89938 11.6221C6.71882 11.796 6.61733 12.0317 6.61719 12.2776V13.7614C6.61733 14.0073 6.71882 14.2431 6.89938 14.417C7.07993 14.5908 7.32477 14.6886 7.58012 14.6887H12.2666V19.2016C12.2668 19.4475 12.3683 19.6833 12.5488 19.8572C12.7294 20.031 12.9742 20.1288 13.2296 20.1289H14.7704C15.0258 20.1288 15.2706 20.031 15.4512 19.8572C15.6317 19.6833 15.7332 19.4475 15.7334 19.2016V14.6887H20.4199C20.6752 14.6886 20.9201 14.5908 21.1006 14.417C21.2812 14.2431 21.3827 14.0073 21.3828 13.7614V12.2776Z" fill="#0E8044" />
                    </svg>
                  )}
                </span>
              </button>
              {faqOpenIndex === i && (
                <div className="p-4 border-t border-gray-200 bg-white text-sm">
                  <p>Answer to "{q}" will be here.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Other Related Categories */}
      <section className="max-w-7xl mx-auto p-6 border-t mb-[31px]">
        <h4 className="font-[700] mb-4 text-center sm:text-[34px] text-[27px] ">Other Related Categories</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
          {childCategories.map(({ title, items }, i) => (
            <div key={i}>
              <h5 className="font-[700] text-[14px] sm:text-[22px] mb-2">{title}</h5>
              <ul className="space-y-1 list-disc">
                {items.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:underline text-[#222222] text-[14px] sm:text-[18px] font-[500] list-disc ">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}