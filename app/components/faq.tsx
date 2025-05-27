"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { IoIosAdd } from 'react-icons/io'

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
    return (
        <div className="mb-3 sm:mb-4">
            <div 
                className="flex justify-between items-center bg-[#F2EBDC] py-3 sm:py-4 px-4 sm:px-6 rounded-full cursor-pointer"
                onClick={toggleOpen}
            >
                <h3 className="text-[16px] sm:text-[24px] font-[700] pr-2">{question}</h3>
                <button className="bg-[#0E8044] text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                    <IoIosAdd size={20} className="sm:text-2xl" />
                </button>
            </div>
            {isOpen && (
                <div className="py-3 sm:py-4 px-4 sm:px-6">
                    <p className="text-sm sm:text-base">{answer}</p>
                </div>
            )}
        </div>
    )
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqItems = [
        {
            question: "What is kratom?",
            answer: "Kratom (Mitragyna speciosa) is a tropical tree native to Southeast Asia. Its leaves contain compounds that can have psychotropic effects. People have used kratom as a traditional remedy for pain and other conditions."
        },
        {
            question: "What Do People Use Kratom For?",
            answer: "People use kratom for pain relief, energy boost, mood enhancement, and to help manage opioid withdrawal symptoms. Different strains and dosages can produce different effects."
        },
        {
            question: "How Do I Choose the Right Kratom Strain?",
            answer: "Choosing the right kratom strain depends on your desired effects. Red strains are typically more sedating and better for pain relief, white strains are more energizing, and green strains offer a balance between the two."
        },
        {
            question: "Is Kratom Legal?",
            answer: "Kratom's legality varies by location. It's legal in many U.S. states but banned in others. It's important to check your local laws before purchasing or using kratom products."
        },
        {
            question: "Why Buy from GoPure?",
            answer: "GoPure offers lab-tested, high-quality kratom products with transparent sourcing. We ensure purity, potency, and safety in all our products, with excellent customer service and competitive pricing."
        },
        {
            question: "Can I Use Kratom Safely?",
            answer: "When used responsibly, kratom can be used safely. It's important to start with low doses, avoid mixing with other substances, stay hydrated, and consult with a healthcare provider, especially if you have underlying health conditions."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="relative py-8 sm:py-16 px-4 md:px-8 lg:px-16 max-w-[1200px] mx-auto">
            {/* Left leaf decoration - hidden on mobile */}
            <div className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2">
                <Image 
                    src="/products/hero-topleaf.png" 
                    alt="Decorative leaf" 
                    width={100} 
                    height={150}
                />
            </div>
            
            {/* Right leaf decoration - hidden on mobile */}
            <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 scale-x-[-1]">
                <Image 
                    src="/products/hero-topleaf.png" 
                    alt="Decorative leaf" 
                    width={100} 
                    height={150}
                />
            </div>
            
            <div className="text-center mb-6 sm:mb-10">
                <h2 className="text-[24px] sm:text-[34px] font-bold text-black">New to Kratom? Start Here!</h2>
            </div>
            
            <div className="max-w-3xl mx-auto text-black font-[400]">
                {faqItems.map((item, index) => (
                    <FAQItem 
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openIndex === index}
                        toggleOpen={() => toggleFAQ(index)}
                    />
                ))}
            </div>
        </div>
    )
}