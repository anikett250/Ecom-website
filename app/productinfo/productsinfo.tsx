"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import maengdakratom from '/public/products/maeng-da-kratom.jpg'

// Import images (you may need to adjust paths based on your project structure)
import redMaengDa from "../components/assets/redkratom.png";
import greenKratom from "../components/assets/greenkratom.png";
import whiteKratom from "../components/assets/whitekratom.png";
import purpleKratom from "../components/assets/purplekratom.png";
// Using the same image for powder since redkratompowder.png is not available
import redMaengDaPowder from "../components/assets/redkratom.png";

// Define product data
const productData = [
  {
    id: 1,
    name: "Red Maeng Da Kratom",
    description: "Excellent GoPure Red Maeng Da Kratom is grown in a special area in Indonesia. Our expert botanical exploration team went through a lot of sampling and research to find this unique pimp grade kratom strain. We are proud of this latest discovery for its quality, potency, and special qualities. This super green powder is naturally grown and harvested in a sustainable manner. Every batch is lab-tested for safety and potency.",
    image: redMaengDa,
    infoImage: redMaengDa,
    rating: 5,
    reviews: 123,
    reference: "GOPSORD",
    manufacturer: "GoPure Botanicals",
    strainColor: "Red",
    type: "Powder",
    origin: "Borneo",
    effect: "Euphoric",
    isNew: true,
    isBestSeller: true
  },
  {
    id: 2,
    name: "Green Maeng Da Kratom",
    description: "Excellent GoPure Red Maeng Da Kratom is grown in a special area in Indonesia. Our expert botanical exploration team went through a lot of sampling and research to find this unique pimp grade kratom strain. We are proud of this latest discovery for its quality, potency, and special qualities. This super green powder is naturally grown and harvested in a sustainable manner. Every batch is lab-tested for safety and potency.",
    image: greenKratom,
    infoImage: greenKratom,
    rating: 4,
    reviews: 98,
    reference: "GOPSGRD",
    manufacturer: "GoPure Botanicals",
    strainColor: "Green",
    type: "Powder",
    origin: "Thailand",
    effect: "Energy",
    isNew: false,
    isBestSeller: true
  },
  {
    id: 3,
    name: "White Maeng Da Kratom",
    description: "Excellent GoPure Red Maeng Da Kratom is grown in a special area in Indonesia. Our expert botanical exploration team went through a lot of sampling and research to find this unique pimp grade kratom strain. We are proud of this latest discovery for its quality, potency, and special qualities. This super green powder is naturally grown and harvested in a sustainable manner. Every batch is lab-tested for safety and potency.",
    image: whiteKratom,
    infoImage: whiteKratom,
    rating: 5,
    reviews: 87,
    reference: "GOPSWRD",
    manufacturer: "GoPure Botanicals",
    strainColor: "White",
    type: "Powder",
    origin: "Indonesia",
    effect: "Focus",
    isNew: true,
    isBestSeller: false
  },
  {
    id: 4,
    name: "Purple Maeng Da Kratom",
    description: "Excellent GoPure Red Maeng Da Kratom is grown in a special area in Indonesia. Our expert botanical exploration team went through a lot of sampling and research to find this unique pimp grade kratom strain. We are proud of this latest discovery for its quality, potency, and special qualities. This super green powder is naturally grown and harvested in a sustainable manner. Every batch is lab-tested for safety and potency.",
    image: purpleKratom,
    infoImage: purpleKratom,
    rating: 4,
    reviews: 65,
    reference: "GOPSPRD",
    manufacturer: "GoPure Botanicals",
    strainColor: "Purple",
    type: "Powder",
    origin: "Malaysia",
    effect: "Relax/Sedation",
    isNew: false,
    isBestSeller: false
  },
];

// Review data
const reviewsData = [
  {
    id: 1,
    name: "Cristina",
    location: "Belgium",
    rating: 5,
    title: "Relaxation at it's finest",
    comment: "Thanks for good quality kratom. I had a knee injury and lots of pain. Nothing really worked until I ordered kratom from you.",
    useful: 1,
    date: "2025-03-15"
  },
  {
    id: 2,
    name: "John",
    location: "United States",
    rating: 5,
    title: "Great product, fast shipping",
    comment: "This is my second order and I'm very pleased with the quality. The effects are consistent and the shipping was faster than expected.",
    useful: 3,
    date: "2025-04-02"
  },
  {
    id: 3,
    name: "Cristina",
    location: "Belgium",
    rating: 5,
    title: "Relaxation at it's finest",
    comment: "Thanks for good quality kratom. I had a knee injury and lots of pain. Nothing really worked until I ordered kratom from you.",
    useful: 1,
    date: "2025-03-10"
  },
];

export default function ProductInfo() {
  const searchParams = useSearchParams();
  const [product, setProduct] = useState(productData[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState("50g");
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const [activeReviewIndex, setActiveReviewIndex] = useState(1);
  const [isReviewHelpful, setIsReviewHelpful] = useState<number | null>(null);

  useEffect(() => {
    // Get product ID from URL query parameters
    const productId = searchParams.get('id');
    if (productId) {
      // Find the product with the matching ID
      const foundProduct = productData.find(p => p.id === parseInt(productId));
      // If found, update the product state
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [searchParams]);

  // Product pricing options
  const weightOptions = [
    { weight: "50g", price: 14.45 },
    { weight: "100g", price: 23.83 },
    { weight: "250g", price: 52.74 },
    { weight: "500g", price: 94.45 }
  ];

  // Find current price based on selected weight
  const currentPrice = weightOptions.find(option => option.weight === selectedWeight)?.price || 14.45;

  // Handle quantity changes
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Toggle FAQ accordion
  const toggleFaq = (index: number) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Product Section */}
      <div className="w-full mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          {/* Product Image - Mobile adjustments */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative flex justify-center items-center bg-[#f9f5ea] py-4">
              {/* Mobile: Hide navigation arrows */}
              <button className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md z-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18l-6-6 6-6" stroke="#0E8044" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-auto h-auto max-h-[200px] md:max-h-[300px] object-contain"
              />
              <button className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md z-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18l6-6-6-6" stroke="#0E8044" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="absolute top-2 right-2 flex gap-2">
                <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Product Details - Mobile adjustments */}
          <div className="w-full md:w-1/2">
            <div className="mb-6">
              <div className="flex gap-2 mb-2">
                {product.isNew && (
                  <span className="bg-[#0E8044] text-white text-[14px] font-[700] px-[10px] py-[5px] rounded-[5px]">NEW PRODUCT</span>
                )}
                {product.isBestSeller && (
                  <span className="bg-[#F18700] text-white text-[14px] font-[700] px-[10px] py-[5px] rounded-[5px]">SALE 10% OFF</span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-[34px] font-[700] mb-2">{product.name}</h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-4 h-4 ${star <= product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.reviews})</span>
                <button className="flex items-center text-sm text-gray-600 hover:text-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Write a review
                </button>
              </div>
              <p className="w-full md:w-[532px] text-[16px] md:text-[18px] font-[500] mb-4">
                {product.description}
              </p>
            </div>

            {/* Weight Selection - Mobile adjustments */}
            <div className="mb-6 w-[532px] h-[96px] flex flex-row ">
              <div className="font-[700] text-[18px] mb-2 mx-auto py-[30px] ">Weight:</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-[20px]">
                {weightOptions.map((option) => (
                  <button
                    key={option.weight}
                    className={`border ${selectedWeight === option.weight ? 'text-[16px] md:text-[18px] font-[700] h-[70px] md:h-[96px] border-green-700 bg-[#0E8044] text-white' : 'h-[70px] md:h-[96px] border-gray-300'} rounded-[10px] py-2 px-2 md:px-4 text-center hover:border-green-700 transition-colors`}
                    onClick={() => setSelectedWeight(option.weight)}
                  >
                    <div className="text-[16px] md:text-[18px] font-[700]">${option.price.toFixed(2)}</div>
                    <div className="text-[14px] md:text-[18px] font-[500]">{option.weight}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart - Mobile adjustments */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-[25px]">
              <div className="w-full md:w-[162px] h-[58px] flex flex-row md:flex-col items-center justify-between md:justify-center gap-[11px] mb-6 border-[#0E8044]">
                <div className="flex border-[#0E8044] border-2 rounded-[8px] w-full md:w-auto">
                  <button
                    className="px-3 py-2 border-r border-gray-300 hover:bg-gray-100"
                    onClick={decreaseQuantity}
                  >
                    <svg width="32" height="32" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.5 1.86719C9.59004 1.86719 2.36719 9.09011 2.36719 18C2.36719 26.9099 9.59004 34.1328 18.5 34.1328C27.41 34.1328 34.6328 26.9099 34.6328 18C34.6328 9.09011 27.41 1.86719 18.5 1.86719Z" stroke="#0E8044" stroke-width="3" stroke-miterlimit="10" />
                      <path d="M12.3477 17.9988H24.6523" stroke="#0E8044" stroke-width="3" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <span className="text-[18px] font-[700] text-[#0E8044] px-4 py-3 flex-grow text-center">{quantity}</span>
                  <button
                    className="px-3 py-2 border-l border-gray-300 hover:bg-gray-100"
                    onClick={increaseQuantity}
                  >
                    <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.6328 10.1356V25.8644M25.4972 18H9.76841M17.6328 34C8.79627 34 1.63281 26.8365 1.63281 18C1.63281 9.16346 8.79627 2 17.6328 2C26.4694 2 33.6328 9.16346 33.6328 18C33.6328 26.8365 26.4694 34 17.6328 34Z" stroke="#0E8044" stroke-width="3" stroke-miterlimit="10" />
                    </svg>
                  </button>
                </div>
              </div>

              <button className="w-full md:w-[341] h-[58px] bg-[#DE7A22] text-white py-3 rounded-[10px] text-[18px] font-[700] hover:bg-[#e07c00] transition-colors mb-4">
                Add to cart
              </button>
            </div>

            {/* Product Quick Facts - Mobile adjustments */}
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h3 className="text-xl md:text-[24px] font-[700] mb-4">Product Quick Facts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <span className="text-[16px] md:text-[18px] font-[700] text-black min-w-24">Reference:</span>
                  <span className="text-[16px] md:text-[18px] font-[500]">{product.reference}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[16px] md:text-[18px] font-[700] text-black min-w-24">Manufacturer:</span>
                  <span className="text-[16px] md:text-[18px] font-[500]">{product.manufacturer}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full ${product.strainColor === 'Red' ? 'bg-red-600' : product.strainColor === 'Green' ? 'bg-green-600' : product.strainColor === 'White' ? 'bg-gray-200' : 'bg-purple-600'}`}></div>
                  <span className="text-[16px] md:text-[18px] font-[700] text-black min-w-20">Strain Color:</span>
                  <span className="text-[16px] md:text-[18px] font-[500]">{product.strainColor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 text-green-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[16px] md:text-[18px] font-[700] text-black min-w-20">Type:</span>
                  <span className="text-[16px] md:text-[18px] font-[500]">{product.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 text-green-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[16px] md:text-[18px] font-[700] text-black min-w-20">Strain Origin:</span>
                  <span className="text-[16px] md:text-[18px] font-[500]">{product.origin}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 text-green-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                    </svg>
                  </div>
                  <span className="text-[16px] md:text-[18px] font-[700] text-black min-w-20">Effect:</span>
                  <span className="text-[16px] md:text-[18px] font-[500]">{product.effect}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Information Section - Mobile adjustments */}
      <div className="max-w-7xl mx-auto p-4 md:p-6 mt-8">
        <h2 className="text-2xl md:text-[34px] font-[700] text-center">Basic information</h2>

        <div className="flex flex-col md:flex-row gap-8 mt-[30px]">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl md:text-[24px] font-[700]">What is {product.strainColor} Maeng Da Kratom?</h3>

            <p className="text-[16px] md:text-[18px] font-[500] mt-4 md:mt-[30px]">
              Maeng Da Thai Kratom is one of the most well-known and sought-after kratom strains, originating from Southeast Asia, primarily Thailand and Indonesia. This particular strain is recognized for its highly refined content, resulting in stronger effects compared to other Kratom varieties.
            </p>

            <p className="text-[16px] md:text-[18px] font-[500] mt-4 md:mt-[30px]">Benefits of {product.strainColor} Maeng Da Kratom</p>

            <ul className="text-[16px] md:text-[18px] font-[500] mt-4 md:mt-[30px] list-disc pl-5">
              <li>High alkaloid content — More potent than other strains</li>
              <li>Balanced effects — Ideal for active lifestyles</li>
              <li>Fresh & Dry — We offer high-quality packaging for maximum freshness</li>
            </ul>

            <button className="text-[#0E8044] text-[16px] md:text-[18px] font-[700] hover:underline mt-4 md:mt-[20px]">
              Read more
            </button>
          </div>

          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={maengdakratom}
                alt={`${product.name} Powder`}
                width={500}
                height={400}
                className="w-full h-auto md:w-[441px] md:h-[440px] rounded-[10px] md:rounded-[30px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section - Mobile adjustments */}
      <div className="max-w-7xl mx-auto p-4 md:p-6 mt-8 mb-16">
        <h2 className="text-2xl md:text-[34px] font-[700] text-center">Product FAQ</h2>

        {[
          { question: "What is kratom?", answer: "Kratom (Mitragyna speciosa) is a tropical tree native to Southeast Asia. Its leaves contain compounds that can have psychotropic effects. People have used kratom as a traditional remedy for pain and other conditions for centuries." },
          { question: "What Do People Use Kratom For?", answer: "People use kratom for managing pain, boosting energy, improving mood, and helping with opioid withdrawal symptoms. Some also use it for relaxation and recreational purposes." },
          { question: "How Do I Choose the Right Kratom Strain?", answer: "Choose based on your desired effects: red strains for relaxation and pain relief, white strains for energy and focus, and green strains for a balance of both. Start with a low dose to assess your sensitivity." },
          { question: "Is Kratom Legal?", answer: "Kratom's legality varies by location. It's legal in most U.S. states but banned in some. Always check your local laws before purchasing or using kratom products." },
          { question: "Why Buy from GoPure?", answer: "GoPure offers lab-tested, high-quality kratom sourced directly from Southeast Asia. We ensure product purity, potency, and safety with transparent testing and sustainable farming practices." },
          { question: "Can I Use Kratom Safely?", answer: "Use kratom responsibly by following recommended dosages, avoiding daily use, not mixing with other substances, staying hydrated, and consulting healthcare providers if you have medical conditions or take medications." }
        ].map((faq, index) => (
          <div key={index} className="bg-[#E9E3D8] py-2 md:py-4 text-[14px] font-[500] rounded-[20px] md:rounded-[100px] mt-2">
            <button
              className="w-full flex justify-between items-center p-4 md:p-[30px] text-[18px] md:text-[24px] font-[700] hover:text-green-700 transition-colors"
              onClick={() => toggleFaq(index)}
            >
              <span className="text-left mr-2">{faq.question}</span>
              <svg width="24" height="24" className=" md:w-[28] md:h-[26]" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 26C6.54441 26 0.5 20.1795 0.5 13C0.5 5.82055 6.54441 0 14 0C21.4556 0 27.5 5.82055 27.5 13C27.5 20.1795 21.4556 26 14 26ZM21.3828 12.2581C21.3827 12.0122 21.2812 11.7764 21.1006 11.6026C20.9201 11.4287 20.6752 11.331 20.4199 11.3308H15.7334V6.81789C15.7332 6.57201 15.6317 6.33623 15.4512 6.16236C15.2706 5.9885 15.0258 5.89076 14.7704 5.89062H13.2296C12.9742 5.89076 12.7294 5.9885 12.5488 6.16236C12.3683 6.33623 12.2668 6.57201 12.2666 6.81789V11.3308H7.58012C7.32477 11.331 7.07993 11.4287 6.89938 11.6026C6.71882 11.7764 6.61733 12.0122 6.61719 12.2581V13.7419C6.61733 13.9878 6.71882 14.2236 6.89938 14.3974C7.07993 14.5713 7.32477 14.669 7.58012 14.6692H12.2666V19.1821C12.2668 19.428 12.3683 19.6638 12.5488 19.8376C12.7294 20.0115 12.9742 20.1092 13.2296 20.1094H14.7704C15.0258 20.1092 15.2706 20.0115 15.4512 19.8376C15.6317 19.6638 15.7332 19.428 15.7334 19.1821V14.6692H20.4199C20.6752 14.669 20.9201 14.5713 21.1006 14.3974C21.2812 14.2236 21.3827 13.9878 21.3828 13.7419V12.2581Z" fill="#0E8044" />
              </svg>
            </button>
            {faqOpenIndex === index && (
              <div className="mt-2 text-gray-700 px-4 pb-4 text-[14px] md:text-[16px]">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Reviews Section - Mobile adjustments */}
      <div className="max-w-7xl mx-auto p-4 md:p-6 mt-8 mb-16">
        <h2 className="text-2xl md:text-[34px] font-[700] text-center mb-6 md:mb-10">Reviews</h2>
        
        <div className="relative flex justify-center">
          {/* Center Review (Main) - Mobile full width */}
          <div className="w-full max-w-[600px] bg-white rounded-lg p-4 md:p-6 shadow-md">
            <div className="flex mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <h3 className="font-bold mb-2">{reviewsData[activeReviewIndex].title}</h3>
            <p className="text-gray-700 mb-4">{reviewsData[activeReviewIndex].comment}</p>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
              <div className="flex flex-col">
                <span className="font-semibold">{reviewsData[activeReviewIndex].name}</span>
                <span className="text-sm text-gray-500">{reviewsData[activeReviewIndex].location}</span>
              </div>
              <div className="text-sm text-gray-500">
                {reviewsData[activeReviewIndex].useful}/1 people find this comment useful
              </div>
              <button className="text-sm text-gray-500 hover:underline">Report abuse</button>
            </div>

            <div className="border-t pt-4">
              <p className="mb-2 font-medium">Was this comment useful to you?</p>
              <div className="flex gap-2">
                <button 
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${isReviewHelpful === 1 ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                  onClick={() => setIsReviewHelpful(1)}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                  </svg>
                </button>
                <button 
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${isReviewHelpful === 0 ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                  onClick={() => setIsReviewHelpful(0)}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Review Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2, 3, 4, 5, 6].map((index) => (
            <button 
              key={index} 
              className={`w-3 h-3 rounded-full ${activeReviewIndex === index ? 'bg-green-700' : 'bg-gray-300'}`}
              onClick={() => setActiveReviewIndex(index % reviewsData.length)}
              aria-label={`View review ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Learn More Section - Mobile adjustments */}
      <div className="max-w-7xl mx-auto p-4 md:p-6 mb-16">
        <h2 className="text-2xl md:text-[34px] font-[700] text-center mb-6 md:mb-10">Learn more about Kratom</h2>
        
        <div className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden">
          <Image 
            src={maengdakratom} 
            alt="Kratom Plant" 
            width={800} 
            height={450} 
            className="w-full h-auto md:w-[800px] md:h-[450px] object-cover rounded-[10px]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-12 h-12 md:w-16 md:h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
