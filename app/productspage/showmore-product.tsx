"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';

interface ShowMoreProductProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShowMoreProduct: React.FC<ShowMoreProductProps> = ({ isOpen, onClose }) => {
  // Effect to disable body scrolling when modal is open
  useEffect(() => {
    const disableScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY;
      
      // Apply styles to lock the body at current position
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'scroll'; // Prevent layout shift
    };
    
    const enableScroll = () => {
      // Get the scroll position from the body's top property
      const scrollY = document.body.style.top;
      
      // Reset the styles
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      
      // Scroll back to the original position
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
    
    if (isOpen) {
      disableScroll();
      return enableScroll;
    }
  }, [isOpen]);
  
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 backdrop-blur-[3px] bg-black/30 z-40 flex items-center justify-center p-4"
      onClick={(e) => {
        // Close modal when clicking on backdrop (outside the modal)
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="p-8 ">
          {/* Modal content */}
          <div className="flex flex-col gap-[10px] ">
            <div>
              <Image
                src="/products/productpage-hero.png"
                alt="Kratom Benefits"
                width={742}
                height={211}
                className="rounded-[5px] object-cover w-full h-[211px] "
              />
            </div>
            <div className="w-full">
              <h2 className="text-[34px] font-[700] mb-4">Key Benefit</h2>
              <div className="text-[18px] font-[500] space-y-4">
                <p>
                  The
                  <span className="text-[#0E8044] font-[700]"> region where a kratom strain</span> originates plays a significant role in determining its<br /> effects. Over time, these strains have adapted to the local climate and soil conditions,<br /> resulting in unique characteristics. 
                </p>
                <p>
                The traditional use of kratom in herbal medicine varies from region to region, with different cultures cultivating and refining native strains to suit their preferences. Today, while most kratom available on the market is cultivated in Indonesia, the distinct traits of each strain have remained consistent as the industry standard. 
                </p>
                <p>
                Thai Kratom refers to kratom (Mitragyna speciosa) that originates from Thailand. It is known for its distinct effects, which can vary depending on the vein color (red, green, or white).Discover Kratom from other regions, like <span className="text-[#0E8044] font-[700]">Borneo Kratom</span>, <span className="text-[#0E8044] font-[700]">Sumatra Kratom</span> and <span className="text-[#0E8044] font-[700]">Malay Kratom</span>.
                </p>

                <div className="mt-4">
                  <h3 className="font-bold mb-2">Sources:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-[16px]">
                    <li>
                      <a href="https://ccle.info/pdf-traditional-and-non-traditional-uses-of-mitragynine-kratom-a-survey-of-the-literature.html" className="text-[#DE7A22] hover:underline">
                        Traditional and non-traditional uses of mitragynine kratom: a survey of the literature
                      </a>
                    </li>
                    <li>
                      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4657101" className="text-[#DE7A22] hover:underline">
                        PMC4657101
                      </a>
                    </li>
                    <li>
                      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10337929/" className="text-[#DE7A22] hover:underline">
                        PMC10337929
                      </a>
                    </li>
                    <li>
                      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8924431/" className="text-[#DE7A22] hover:underline">
                        PMC8924431
                      </a>
                    </li>
                    <li>
                      <a href="https://www.chula.ac.th/en/highlight/" className="text-[#DE7A22] hover:underline">
                        Chula University Research
                      </a>
                    </li>
                    <li>
                      <a href="https://kratomorg/dronin/thailand/" className="text-[#DE7A22] hover:underline">
                        Kratom.org Thailand Information
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMoreProduct;
