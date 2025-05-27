import React from 'react';
import Image from 'next/image';

const Newsletter = () => {
  return (
    <section className="relative w-full bg-[#e6dfd3] z-1 py-10 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="text-center px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Sign me up too!</h2>
            <p className="text-gray-700 mb-6">Find nature's best offers with our newsletter</p>
            
            <div className="flex flex-col mb-4 text-black">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 mb-3"
              />
              <button
                className="bg-[#DE7A22] hover:bg-[#c96d1e] text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Subscribe now
              </button>
            </div>
            
            <div className="text-sm text-gray-600 mt-4">
              <p>Subscribe now to get discounts and exclusive promotions!</p>
              <p>You can unsubscribe at any time.</p>
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="w-1/2 pr-8 mb-0">
            <h2 className="text-[54px] font-bold text-gray-900 mb-2">Sign me up too!</h2>
            <p className="text-gray-700 mb-6 text-[18px]">Find nature's best offers with our newsletter</p>
            
            <div className="flex flex-row mb-4 text-black">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 mr-3"
              />
              <button
                className="bg-[#DE7A22] hover:bg-[#c96d1e] text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Subscribe now
              </button>
            </div>
            
            <div className="text-[18px] text-gray-600">
              <p>Subscribe now to get discounts and exclusive promotions!</p>
              <p>You can unsubscribe at any time.</p>
            </div>
          </div>
          
          {/* Right side - Product images */}
          <div className="w-1/2 relative">
            <div className="relative h-[400px]">
              {/* Kratom powder in bowl */}
              <div className="absolute top-0 left-1/4 transform -translate-x-1/2 drop-shadow-2xl">
                <Image
                  src="/products/bowl.png"
                  alt="Kratom powder"
                  width={150}
                  height={150}
                  className="object-contain absolute inset-0"
                />
                <Image
                  src="/products/spilled.png"
                  alt="Kratom powder"
                  width={150}
                  height={150}
                  className="object-contain ml-[70px]"
                />
              </div>
              
              {/* Product packages grid */}
              <div className="absolute -right-80 -top-20 grid grid-cols-3 gap-10 drop-shadow-2xl">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="relative w-[131px] h-[201px]">
                    <Image
                      src={`/products/${['redkratom', 'greenkratom', 'purplekratom'][i % 3]}.png`}
                      alt={`Kratom product ${i + 1}`}
                      fill
                      className="object-contain rotate-31"
                    />
                  </div>
                ))}
              </div>
              
              {/* Dropper bottle */}
              <div className="absolute top-1/2 left-50 drop-shadow-2xl">
                <Image
                  src="/products/hero-prdt3.png"
                  alt="Kratom dropper"
                  width={50}
                  height={114}
                  className="object-contain rotate-31 mt-[-130px] ml-[110px]"
                />
                <Image
                  src="/products/hero-prdt1.png"
                  alt="Kratom dropper"
                  width={100}
                  height={180}
                  className="object-contain rotate-31"
                />
                <Image
                  src="/products/hero-prdt3.png"
                  alt="Kratom dropper"
                  width={50}
                  height={114}
                  className="object-contain rotate-31 mt-[-10px] ml-[-60px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;