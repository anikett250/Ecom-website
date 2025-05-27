import React from 'react'
import Image from 'next/image'
import bg from './assets/herobg.png'
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative">
            {/* Desktop version */}
            <div className="hidden md:block relative">
                <Image src={bg} alt="bg" className="w-[100vw]" priority />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-row items-center justify-between">
                            <div className="w-1/2">
                                <h1 className="text-[54px] font-[700] text-white mb-4 w-[525px]">
                                    Feel Better, Naturally
                                </h1>
                                <h2 className="text-[54px] font-[700] text-white mb-6 w-[525px]">
                                    – GoPure Kratom
                                </h2>
                                <p className="text-white mb-6 text-[23px] font-[400]">
                                    Trusted Plant-Based Relief · Fresh, Pure, and Always<br /> Lab-tested
                                </p>
                                <Link href="/productspage">
                                    <button className='w-[273px] h-[58px] bg-[#DE7A22] py-[15px] rounded-[10px] font-[700] text-[18px] hover:bg-[#de6d22] transition-all duration-300 ease-out '>
                                        Buy now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile version */}
            <div className="md:hidden flex flex-col items-center">
                {/* Green background with text */}
                <div className="bg-[#0F7A3D] w-full h-[250px] flex flex-col items-center justify-center text-center pt-[4px] pb-[4px]">
                    <h1 className="text-[32px] font-[700] text-white mb-2 mt-[32px]">
                        Feel Better, Naturally
                    </h1>
                    <h2 className="text-[32px] font-[700] text-white mb-3">
                        – GoPure Kratom
                    </h2>
                    <p className="text-white mb-4 text-[14px] font-[400]">
                        Trusted Plant-Based Relief · Fresh, Pure,<br /> and Always Lab-Tested
                    </p>
                    <Link href="/productspage">
                        <button className='bg-[#DE7A22] py-[10px] px-[100px] rounded-[10px] font-[700] text-[16px] hover:bg-[#de6d22] transition-all duration-300 ease-out mb-[27px]'>
                            BUY NOW
                        </button>
                    </Link>
                </div>

                {/* Background image below */}
                <div className="w-full h-[250px] relative -top-0.5">
                    <Image
                        src={bg}
                        alt="kratom products"
                        height={250}
                        className="object-cover object-right w-full h-full"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}