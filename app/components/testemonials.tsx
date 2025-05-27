"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
    id: number;
    name: string;
    location: string;
    rating: number;
    text: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Cristina',
        location: 'Belgium',
        rating: 5,
        text: 'Thanks for good quality kratom. I had a knee injury and lots of pain. Nothing really worked until I ordered kratom from you.',
        avatar: '/testemonials/testemonial-img.png'
    },
    {
        id: 2,
        name: 'Michael',
        location: 'Germany',
        rating: 5,
        text: 'Excellent product quality and fast shipping. Will definitely order again!',
        avatar: '/testemonials/testemonial-img.png'
    },
    {
        id: 3,
        name: 'Sophie',
        location: 'France',
        rating: 4,
        text: 'Very satisfied with my purchase. The customer service was also very helpful.',
        avatar: '/testemonials/testemonial-img.png'
    },
    {
        id: 4,
        name: 'David',
        location: 'Netherlands',
        rating: 5,
        text: 'Best quality Ive found online. Shipping was quick and packaging was discreet.',
        avatar: '/testemonials/testemonial-img.png'
    },
    {
        id: 5,
        name: 'Emma',
        location: 'Sweden',
        rating: 5,
        text: 'The product exceeded my expectations. Will be a returning customer for sure!',
        avatar: '/testemonials/testemonial-img.png'
    },
    {
        id: 6,
        name: 'Thomas',
        location: 'Austria',
        rating: 5,
        text: 'Great quality and excellent value for money. Highly recommended!',
        avatar: '/testemonials/testemonial-img.png'
    },
    {
        id: 7,
        name: 'Anna',
        location: 'Switzerland',
        rating: 5,
        text: 'Amazing product that really helped with my chronic pain. Thank you!',
        avatar: '/testemonials/testemonial-img.png'
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            // Swipe left
            handleNext();
        }
        if (touchStart - touchEnd < -50) {
            // Swipe right
            handlePrev();
        }
    };

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative w-full overflow-hidden bg-[#ebe6dd]">
            <div
                className="flex items-center justify-between px-4 py-8 md:py-12 lg:py-16 max-w-7xl mx-auto"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Left side - Leaf image (desktop only) */}
                <div className="absolute left-0 top-0 h-full w-1/4 max-w-[200px] overflow-hidden hidden md:block">
                    <Image
                        src="/products/hero-topleaf.png"
                        alt="Decorative leaf"
                        width={200}
                        height={400}
                        className="object-cover mt-[80px] w-[191.6px] h-[132.5px] scale-x-[-1] -rotate-40"
                    />
                    <Image
                        src="/products/hero-topleaf.png"
                        alt="Decorative leaf"
                        width={200}
                        height={400}
                        className="absolute inset-0 mt-[140px] object-cover w-[191.6px] h-[132.5px] scale-x-[-1]"
                    />
                </div>

                {/* Left arrow */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 z-10 bg-green-700 hover:bg-green-800 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
                    aria-label="Previous testimonial"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Mobile Testimonial layout */}
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-4 md:px-12 z-10 md:hidden">
                    {/* Avatar at the top for mobile */}
                    <div className="mb-4">
                        <Image
                            src={testimonials[currentIndex].avatar}
                            alt={testimonials[currentIndex].name}
                            width={80}
                            height={80}
                            className="rounded-full mx-auto"
                        />
                    </div>
                    
                    {/* Stars with count */}
                    <div className="mb-6">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-2xl">★</span>
                        ))}
                        <span className="text-gray-500 text-sm ml-2">(123)</span>
                    </div>

                    {/* Testimonial text */}
                    <p className="text-gray-800 mb-6 text-lg">
                        {testimonials[currentIndex].text}
                    </p>

                    {/* Name and location */}
                    <h3 className="font-semibold text-xl">{testimonials[currentIndex].name}</h3>
                    <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                </div>

                {/* Desktop Testimonial layout */}
                <div className="hidden md:flex flex-col items-center text-center max-w-2xl mx-auto px-4 md:px-12 z-10">
                    <div className="mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-2xl">★</span>
                        ))}
                        <span className="text-gray-500 text-sm ml-2">({Math.floor(Math.random() * 200) + 100})</span>
                    </div>

                    <div className="mb-6">
                        <Image
                            src={testimonials[currentIndex].avatar}
                            alt={testimonials[currentIndex].name}
                            width={60}
                            height={60}
                            className="rounded-full mx-auto mb-4"
                        />
                    </div>

                    <p className="text-gray-800 mb-6 text-lg">
                        {testimonials[currentIndex].text}
                    </p>

                    <h3 className="font-semibold text-xl">{testimonials[currentIndex].name}</h3>
                    <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                </div>

                {/* Right arrow */}
                <button
                    onClick={handleNext}
                    className="absolute right-4 z-10 bg-green-700 hover:bg-green-800 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
                    aria-label="Next testimonial"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Right side - Product images (desktop only) */}
                <div className="absolute right-0 top-0 h-full w-1/3 max-w-[300px] overflow-hidden hidden md:block">
                    <div className="relative h-full w-full">
                        <Image
                            src="/products/redkratom.png"
                            alt="Product"
                            width={130}
                            height={199.4}
                            className="absolute top-[30%] right-[40%] transform rotate-33 shadow-lg"
                        />
                        <Image
                            src="/products/whitekratom.png"
                            alt="Product"
                            width={138.6}
                            height={213.2}
                            className="absolute top-[0%] right-[0%] transform rotate-33 shadow-lg"
                        />
                        <Image
                            src="/products/whitekratom.png"
                            alt="Product"
                            width={138.6}
                            height={213.2}
                            className="absolute top-[40%] right-[0%] transform rotate-33 shadow-lg"
                        />
                        <Image
                            src="/products/purplekratom.png"
                            alt="Product"
                            width={111.4}
                            height={171.1}
                            className="absolute top-[60%] right-[25%] transform rotate-33 shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Dots navigation */}
            <div className="flex justify-center pb-6">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`h-2 w-2 mx-1 rounded-full ${index === currentIndex ? 'bg-green-700' : 'bg-gray-400'}`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;