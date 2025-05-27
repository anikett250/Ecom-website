"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TrustBadges() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Section Title */}
      <h2 className="text-[34px] font-[700] text-center mb-16 text-black">Why Choose GoPure?</h2>
      
      {/* Trust Badges Grid - First Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Badge 1 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <svg className="w-full h-full text-green-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 22V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.92993 19.0703L8.99993 15.0003" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 9.00024L19.07 4.93024" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.07 19.0703L15 15.0003" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.99993 9.00024L4.92993 4.93024" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-[22px] font-[700] mb-2 text-center text-black">Quality Controlled from Source to Shelf</h3>
          <p className="text-center text-[16px] font-[500] text-black">
            We take product quality seriously! Every batch we purchase has to pass strict testing before it even leaves the farm. If any part of it doesn't meet our standards, we reject it on the spot.
          </p>
          <p className="text-center text-[16px] font-[500] mt-4 text-black">
            Only clean, consistent, and properly handled products make it through. That's how we keep things reliable from start to finish.
          </p>
          <Link href="/quality-control" className="text-green-700 font-[700] mt-4 hover:underline">
            Learn how we source and test our kratom
          </Link>
        </div>

        {/* Badge 2 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <svg className="w-full h-full text-green-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-[22px] font-[700] mb-2 text-center text-black">Offered for Botanical and Research Use</h3>
          <p className="text-center text-[16px] font-[500] text-black">
            GoPure Kratom is offered exclusively for botanical research, study and collection. That's the official reason it's available here.
          </p>
          <p className="text-center text-[16px] font-[500] mt-4 text-black">
            Some countries don't allow kratom to be sold for human use, so we follow the rules and stay on the safe side. That doesn't change our focus. We care about making sure you get a clean, trustworthy product that's handled with care.
          </p>
          <Link href="/terms" className="text-green-700 font-[700] mt-4 hover:underline">
            Read our Terms and Conditions
          </Link>
        </div>

        {/* Badge 3 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <svg className="w-full h-full text-green-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-[22px] font-[700] mb-2 text-center text-black">Handled in Clean, Food-Grade Facilities</h3>
          <p className="text-center text-[16px] font-[500] text-black">
            Our kratom is processed and packaged in food-grade facilities, following the same hygiene and safety standards used for quality food products.
          </p>
          <p className="text-center text-[16px] font-[500] mt-4 text-black">
            While we don't sell it for consumption due to legal regulations, it's handled with the same care and quality you'd expect from any product made to food-grade standards.
          </p>
          <Link href="/safety" className="text-green-700 font-[700] mt-4 hover:underline">
            See how we handle product safety
          </Link>
        </div>
      </div>

      {/* Trust Badges Grid - Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Badge 4 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <svg className="w-full h-full text-green-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-[22px] font-[700] mb-2 text-center text-black">We Encourage Informed Decisions</h3>
          <p className="text-center text-[16px] font-[500] text-black">
            Kratom isn't well understood by everyone, and the information out there can be all over the place. That's why we believe it's important to take the time to learn from sources that are known for accuracy and depth.
          </p>
          <p className="text-center text-[16px] font-[500] mt-4 text-black">
            If you want to explore further, we recommend checking independent reviews, scientific research, and trusted organizations like the American Kratom Association and PubMed. We also post educational content on our blog to help you navigate this space with clarity and confidence.
          </p>
          <div className="flex flex-col items-center mt-4">
            <Link href="https://pubmed.ncbi.nlm.nih.gov/" className="text-green-700 font-[700] hover:underline">
              PubMed - U.S. National Library of Medicine
            </Link>
            <Link href="https://www.americankratom.org/" className="text-green-700 font-[700] hover:underline mt-1">
              American Kratom Association
            </Link>
          </div>
        </div>

        {/* Badge 5 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <svg className="w-full h-full text-green-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 17V17.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 13.5C11.9816 13.3562 12.0312 13.2147 12.1396 13.1101C12.2479 13.0055 12.3972 12.9456 12.5528 12.9426C12.6595 12.9359 12.7667 12.9555 12.8651 12.9997C12.9636 13.044 13.0505 13.112 13.1181 13.1979C13.1856 13.2837 13.2321 13.3848 13.2539 13.4921C13.2757 13.5994 13.2722 13.7102 13.244 13.816C13.1842 14.0235 13.0677 14.2115 12.906 14.3602C12.7443 14.5089 12.5438 14.6126 12.328 14.6599C12.2361 14.6853 12.1548 14.7389 12.0945 14.8136C12.0343 14.8883 11.9981 14.9803 11.99 15.077V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-[22px] font-[700] mb-2 text-center text-black">People Trust Us. And That Trust Is Earned.</h3>
          <p className="text-center text-[16px] font-[500] text-black">
            We're one of the highest rated kratom shops in Europe, with a 4.82 average rating and over 1,737 verified reviews on TrustMate. Customers often thank us for our friendly service and the care we put into every order.
          </p>
          <p className="text-center text-[16px] font-[500] mt-4 text-black">
            If a product doesn't meet your expectations, our Happiness Guarantee means we'll make it right. No fiction, no fine print. We've built that trust by doing things properly and staying consistent from day one.
          </p>
          <div className="flex flex-col items-center mt-4">
            <Link href="/reviews" className="text-green-700 font-[700] hover:underline">
              Read our verified customer reviews on TrustMate
            </Link>
            <Link href="/guarantee" className="text-green-700 font-[700] hover:underline mt-1">
              Learn more about our Happiness Guarantee
            </Link>
          </div>
        </div>

        {/* Badge 6 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <svg className="w-full h-full text-green-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 8L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 8L10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-[22px] font-[700] mb-2 text-center text-black">We Control the Supply Chain. Others Rely on It.</h3>
          <p className="text-center text-[16px] font-[500] text-black">
            We don't just buy kratom. We manage the supply chain ourselves. Since 2015, we've been visiting suppliers and vetting locations regularly to make sure everything meets our standards, whether it's wild-grown or cultivated.
          </p>
          <p className="text-center text-[16px] font-[500] mt-4 text-black">
            Most vendors depend on importers or brokers who offer whatever is available at the time. That often leads to big differences in quality from one batch to the next. Many smaller sellers don't have the resources to explore sourcing regions or vet their suppliers directly.
          </p>
          <p className="text-center text-[16px] font-[500] mt-4 text-black">
            We built our own system so we don't have to take those risks. And neither do you.
          </p>
          <Link href="/our-story" className="text-green-700 font-[700] mt-4 hover:underline">
            Read the story of GoPure
          </Link>
        </div>
      </div>

      {/* Trust Badges Grid - Third Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Badge 7 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <svg className="w-full h-full text-green-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-[22px] font-[700] mb-2 text-center text-black">We Keep It Clear and Honest</h3>
          <p className="text-center text-[16px] font-[500] text-black">
            Our kratom products are not intended to diagnose, treat, cure, or prevent any disease or health condition. That's also why we can't give any related recommendations or answer questions about effects.
          </p>
          <p className="text-center text-[16px] font-[500] mt-4 text-black">
            No food or drug authority in the UK, EU, or elsewhere has approved kratom for medical use, so we don't position it that way. If you have health-related questions, it's always best to speak with a qualified medical professional.
          </p>
          <Link href="https://www.ema.europa.eu/" className="text-green-700 font-[700] mt-4 hover:underline">
            European Medicines Agency – Herbal Medicinal Products
          </Link>
          <p className="text-center text-[12px] text-gray-500 mt-1">
            (Reputable EU-specific, non-commercial)
          </p>
        </div>

        {/* Badge 8 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <svg className="w-full h-full text-green-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8L8 12H12L12 16L16 12H12L12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-[22px] font-[700] mb-2 text-center text-black">Know Your Local Regulations</h3>
          <p className="text-center text-[16px] font-[500] text-black">
            In most countries, it's fully ok to order and own kratom, but in some, the laws can be a bit more complicated.
          </p>
          <p className="text-center text-[16px] font-[500] mt-4 text-black">
            We do our best to follow the rules when it comes to shipping, but we always recommend checking your local regulations to make sure everything stays safe and legal on your end. If you're unsure, our blog has helpful posts that go over this in more detail.
          </p>
          <div className="flex flex-col items-center mt-4">
            <Link href="/legality-uk" className="text-green-700 font-[700] hover:underline">
              Is Kratom legal in the UK?
            </Link>
            <Link href="/legality-europe" className="text-green-700 font-[700] hover:underline mt-1">
              The Fight for Kratom Legality in Europe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
