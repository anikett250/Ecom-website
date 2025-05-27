'use client'
import React from 'react'
import Image from 'next/image'
import { FaStar, FaHeart } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useCart } from '../context/CartContext'

export default function Arrivals() {
    const { addToCart } = useCart();
    const products = [
        {
            id: 1,
            name: 'Red Sumatra Kratom',
            type: 'POWDER',
            price: 12.74,
            originalPrice: 16.74,
            rating: 5,
            reviews: 123,
            image: '/products/redkratom.png',
            strength: 'MEDIUM',
            colorDot: '#B02222' // Red color
        },
        {
            id: 2,
            name: 'Green Thai Kratom',
            type: 'POWDER',
            price: 12.74,
            originalPrice: 16.74,
            rating: 5,
            reviews: 123,
            image: '/products/greenkratom.png',
            strength: 'STRONG',
            colorDot: '#057029' // Green color
        },
        {
            id: 3,
            name: 'White Malay Kratom',
            type: 'POWDER',
            price: 12.74,
            originalPrice: 16.74,
            rating: 5,
            reviews: 123,
            image: '/products/whitekratom.png',
            strength: 'LOW',
            colorDot: '#D5C832' // Yellow color
        },
        {
            id: 4,
            name: 'Stem & Vein Kratom',
            type: 'POWDER',
            price: 12.74,
            originalPrice: 16.74,
            rating: 5,
            reviews: 123,
            image: '/products/purplekratom.png',
            strength: 'STRONG',
            colorDot: '#B02222' // Red color for this variant
        }
    ];

    return (
        <div className="flex flex-col mt-[65px] max-w-[1200px] mx-auto w-full md:w-[1490px] h-auto md:h-[696px] px-4 md:px-0">
            <div className="text-[28px] md:text-[34px] text-black text-center font-[700] mb-6 md:mb-8">New Arrivals</div>

            <div className="relative">
                {/* Navigation buttons - hidden on mobile */}
                <button className="hidden md:flex absolute left-[-100px] top-[200px] transform -translate-y-1/2 bg-[#0E8044] text-white p-3 rounded-full z-10 w-[72px] h-[72px] items-center justify-center">
                    <IoIosArrowBack className='w-72 h-72' />
                </button>

                {/* Mobile layout uses 2 columns, desktop uses 4 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-17">
                    {products.map((product) => (
                        <div key={product.id} className="bg-[#FFF8EC] rounded-lg p-3 md:p-4 flex flex-col relative w-full md:w-[305px] h-auto md:h-[622px]">
                            {/* Heart icon - smaller on mobile */}
                            <button className="absolute top-2 right-2 md:top-3 md:right-4 text-gray-400 hover:text-red-500">
                                <FaHeart size={20} className="md:w-[30px] md:h-[30px]" />
                            </button>
                            
                            {/* Rating stars - smaller on mobile */}
                            <div className="flex items-center mb-2 md:mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 text-xs md:text-base" />
                                ))}
                                <span className="text-gray-500 text-xs md:text-sm ml-1">({product.reviews})</span>
                            </div>
                            
                            {/* Product image - smaller on mobile */}
                            <div className="mb-2 md:mb-4 flex justify-center">
                                <div className="relative w-[120px] h-[140px] md:w-[187px] md:h-[289px]">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Strength Badge - hidden on mobile */}
                            <div className="hidden md:flex items-center mb-2">
                                <span className={`${
                                    product.strength === 'MEDIUM' ? 'bg-[#93C178]' : 
                                    product.strength === 'STRONG' ? 'bg-[#5D4B9C]' : 
                                    'bg-[#FFDEC5] text-black'
                                } text-[#FFFFFF] text-[14px] font-[700] px-[23px] py-[11px] rounded-full`}>
                                    {product.strength}
                                </span>

                                {/* Icons for product properties - hidden on mobile */}
                                <div className="flex ml-auto space-x-2">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                        <Image src="/products/powdercup.png" alt="Powder" width={40} height={31} />
                                    </div>
                                    <div className="mt-[3px] w-[34px] h-[34px] rounded-full" style={{ backgroundColor: product.colorDot }}></div>
                                </div>
                            </div>

                            {/* Product name - smaller on mobile */}
                            <h3 className="font-[600] md:font-[700] text-[14px] md:text-[18px] text-black">{product.name}</h3>

                            {/* Product type - hidden on mobile */}
                            <div className="hidden md:flex items-center text-gray-500 text-sm mb-2">
                                <Image src="/products/powdercup.png" alt="Powder" width={24.1} height={18.3} className='mr-[6px]' />
                                <span>{product.type}</span>
                            </div>

                            {/* Price - smaller on mobile */}
                            <div className="flex items-center mb-2 md:mb-4 mt-1 md:mt-0">
                                <span className="font-[700] text-black text-[18px] md:text-[27px]">£{product.price}</span>
                                <span className="text-gray-500 line-through ml-2 text-xs md:text-sm">£{product.originalPrice}</span>
                            </div>

                            {/* Add to cart button - full width on mobile */}
                            <button 
                                onClick={() => addToCart(product, 1)}
                                className="bg-[#DE7A22] text-white py-2 px-4 md:py-[13px] md:px-[63px] rounded-[6px] md:rounded-[10px] text-[14px] md:text-[18px] w-full md:w-auto mt-auto"
                            >
                                Add to cart
                            </button>
                        </div>
                    ))}
                </div>
                
                {/* Navigation buttons - hidden on mobile */}
                <button className="hidden md:flex absolute right-[-100px] top-[200px] transform -translate-y-1/2 bg-[#0E8044] text-white p-3 rounded-full z-10 w-[72px] h-[72px] items-center justify-center">
                    <IoIosArrowForward className='w-72 h-72' />
                </button>
            </div>
        </div>
    )
}