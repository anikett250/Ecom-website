import React from 'react'
import Image from 'next/image'
import { FaStar, FaHeart } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function Arrivals() {
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
            strength: 'MEDIUM'
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
            strength: 'MEDIUM'
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
            strength: 'MEDIUM'
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
            strength: 'MEDIUM'
        }
    ];

    return (
        <div className="flex flex-col mt-[40px] sm:mt-[65px] px-4 sm:px-0 mx-auto w-full sm:max-w-[1200px]">
            <div className="text-[28px] sm:text-[34px] text-black text-center font-[700] mb-6 sm:mb-8">New arrivals</div>

            <div className="relative">
                <button className="hidden sm:flex absolute left-[-100px] top-[200px] transform -translate-y-1/2 bg-[#0E8044] text-white p-3 rounded-full z-10 w-[72px] h-[72px] items-center justify-center">
                    <IoIosArrowBack className='w-72 h-72' />
                </button>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="border border-[#F5EFE0] rounded-lg p-3 sm:p-4 flex flex-col relative">
                            <button className="absolute top-2 right-2 sm:top-3 sm:right-4 text-gray-400 hover:text-red-500">
                                <FaHeart size={20} className="sm:text-[30px]" />
                            </button>
                            <div className="flex items-center mb-2 sm:mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 text-xs sm:text-base" />
                                ))}
                                <span className="text-gray-500 text-xs sm:text-sm ml-1">({product.reviews})</span>
                            </div>
                            <div className="mb-3 sm:mb-4 flex justify-center">
                                <div className="relative w-full h-[140px] sm:w-[187px] sm:h-[289px]">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <h3 className="font-[700] text-[16px] sm:text-[18px] text-black">{product.name}</h3>

                            <div className="flex items-center mb-2 sm:mb-4">
                                <span className="font-[700] text-black text-[20px] sm:text-[27px]">£{product.price}</span>
                                <span className="text-gray-500 line-through ml-2 text-xs sm:text-sm">£{product.originalPrice}</span>
                            </div>

                            <button className="bg-[#DE7A22] text-white py-2 sm:py-[13px] w-full text-center rounded-[10px] text-[16px] sm:text-[18px]">
                                Add to cart
                            </button>
                        </div>
                    ))}
                </div>
                <button className="hidden sm:flex absolute right-[-100px] top-[200px] transform -translate-y-1/2 bg-[#0E8044] text-white p-3 rounded-full z-10 w-[72px] h-[72px] items-center justify-center">
                    <IoIosArrowForward className='w-72 h-72' />
                </button>
            </div>
        </div>
    )
}