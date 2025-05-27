import React from "react";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="sm:w-full sm:h-[245px] w-[748px] h-[171px] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: 'linear-gradient(rgba(34, 34, 34, 0.4), rgba(34, 34, 34, 0.4)), url("/blogs/contact-bg.png")' }}
      >
        <h1 className="text-white sm:text-[42px] sm:font-[700] text-[32px] font-[700] ">Contact Us</h1>
      </div>  
      {/* Contact Options */}
      <div className="w-full max-w-5xl mx-auto px-4 mt-8 relative z-10">
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-5 gap-1 bg-white py-4 px-2 shadow-md text-center border border-gray-200 rounded">
          <div className="flex flex-col items-center p-2 border-r border-gray-200 md:last:border-r-0 even:border-r-0 md:even:border-r col-span-1">
            <div className="bg-[#0E8044] rounded-full p-3 sm:w-[76px] sm:h-[76px] w-[52px] h-[52px] flex items-center justify-center mb-2">
              <svg width="77" height="76" viewBox="0 0 77 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="76" height="76" rx="38" fill="#0E8044" />
                <mask id="mask0_0_2212" maskUnits="userSpaceOnUse" x="19" y="25" width="38" height="26">
                  <path d="M56.5 25H19.5V51H56.5V25Z" fill="white" />
                </mask>
                <g mask="url(#mask0_0_2212)">
                  <path d="M48.4263 32.0679H21.1113C20.559 32.0679 20.1113 32.5156 20.1113 33.0679V49.3899C20.1113 49.9422 20.559 50.3899 21.1113 50.3899H48.4263C48.9786 50.3899 49.4263 49.9422 49.4263 49.3899V33.0679C49.4263 32.5156 48.9786 32.0679 48.4263 32.0679Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M26.2188 31.4609V27.2919C26.2294 27.098 26.2797 26.9083 26.3666 26.7346C26.4536 26.5609 26.5752 26.4068 26.7241 26.2821C26.873 26.1573 27.0459 26.0644 27.2321 26.0092C27.4183 25.9539 27.6139 25.9375 27.8067 25.9609H53.9948C54.1851 25.9372 54.3783 25.9538 54.5618 26.0095C54.7453 26.0651 54.9151 26.1587 55.0602 26.2842C55.2053 26.4097 55.3224 26.5642 55.404 26.7378C55.4856 26.9114 55.5298 27.1002 55.5337 27.2919V42.6919C55.5352 43.1051 55.3751 43.5025 55.0875 43.7992C54.8 44.0959 54.4078 44.2685 53.9948 44.2799H49.4268" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20.5117 32.4141L33.0337 42.1731C33.5395 42.5104 34.1338 42.6904 34.7417 42.6904C35.3497 42.6904 35.944 42.5104 36.4497 42.1731L48.9727 32.4141" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M32.6817 41.897L20.5107 49.883" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M48.9807 49.876L36.8037 41.897" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>


            </div>
            <div className="font-semibold text-sm">Email us</div>
            <div className="text-xs">support@gopure.shop</div>
          </div>

          <div className="flex flex-col items-center p-2 border-r-0 md:border-r border-b border-gray-200 md:border-b-0">
            <div className="bg-[#0E8044] rounded-full p-3 sm:w-[76px] sm:h-[76px] w-[52px] h-[52px] flex items-center justify-center mb-2">
              <svg width="77" height="76" viewBox="0 0 77 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="76" height="76" rx="38" fill="#0E8044" />
                <mask id="mask0_0_2226" maskUnits="userSpaceOnUse" x="26" y="19" width="25" height="38">
                  <path d="M50.4997 19.053H26.5V56.9472H50.4997V19.053Z" fill="white" />
                </mask>
                <g mask="url(#mask0_0_2226)">
                  <path d="M49.8674 27.2634H27.1309" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M38.4985 52.5263C39.1961 52.5263 39.7616 51.9608 39.7616 51.2631C39.7616 50.5655 39.1961 50 38.4985 50C37.8009 50 37.2354 50.5655 37.2354 51.2631C37.2354 51.9608 37.8009 52.5263 38.4985 52.5263Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M35.9727 23.4739H41.0252" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M47.3411 19.6846H29.6571C28.2619 19.6846 27.1309 20.8156 27.1309 22.2109V53.7894C27.1309 55.1846 28.2619 56.3157 29.6571 56.3157H47.3411C48.7363 56.3157 49.8674 55.1846 49.8674 53.7894V22.2109C49.8674 20.8156 48.7363 19.6846 47.3411 19.6846Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M27.1309 46.2104H49.8674" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>

            </div>
            <div className="font-semibold text-sm">Call us</div>
            <div className="text-xs">+31685160989</div>
          </div>

          <div className="flex flex-col items-center p-2 border-r border-gray-200 md:border-r border-b border-gray-200 md:border-b-0">
            <div className="bg-[#0E8044] rounded-full p-3 sm:w-[76px] sm:h-[76px] w-[52px] h-[52px] flex items-center justify-center mb-2">
              <svg width="77" height="76" viewBox="0 0 77 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="76" height="76" rx="38" fill="#0E8044" />
                <mask id="mask0_0_2241" maskUnits="userSpaceOnUse" x="20" y="20" width="37" height="36">
                  <path d="M56.5 20H20.5V56H56.5V20Z" fill="white" />
                </mask>
                <g mask="url(#mask0_0_2241)">
                  <path d="M28.2996 48.2001H22.8996C22.4222 48.2001 21.9644 48.0105 21.6268 47.6729C21.2893 47.3353 21.0996 46.8775 21.0996 46.4001V36.2001C21.1025 35.2462 21.4827 34.3322 22.1572 33.6577C22.8317 32.9831 23.7457 32.6029 24.6996 32.6001H52.2996C53.2535 32.6029 54.1675 32.9831 54.842 33.6577C55.5166 34.3322 55.8968 35.2462 55.8996 36.2001V46.4001C55.8996 46.8775 55.71 47.3353 55.3724 47.6729C55.0348 48.0105 54.577 48.2001 54.0996 48.2001H48.6996" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M48.6998 42.2002H28.2998V55.4002H48.6998V42.2002Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M48.6998 20.6001H28.2998V32.6001H48.6998V20.6001Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M31.8994 50.6001H45.0994" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M31.8994 45.8H45.0994" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>

            </div>
            <div className="font-semibold text-sm">Fax</div>
            <div className="text-xs">+31685160989</div>
          </div>

          <div className="flex flex-col items-center p-2 col-span-1 border-r-0 md:border-r border-b border-gray-200 md:border-b-0 sm:col-span-2 md:col-span-1">
            <div className="bg-[#0E8044] rounded-full p-3 sm:w-[76px] sm:h-[76px] w-[52px] h-[52px] flex items-center justify-center mb-2">
              <svg width="77" height="76" viewBox="0 0 77 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="76" height="76" rx="38" fill="#0E8044" />
                <mask id="mask0_0_2255" maskUnits="userSpaceOnUse" x="23" y="23" width="31" height="30">
                  <path d="M53.5 23H23.5V53H53.5V23Z" fill="white" />
                </mask>
                <g mask="url(#mask0_0_2255)">
                  <path d="M49 42.5V48.5L42.913 42.5H30C29.4696 42.5 28.9609 42.2893 28.5858 41.9142C28.2107 41.5391 28 41.0304 28 40.5V25.5C28 24.9696 28.2107 24.4609 28.5858 24.0858C28.9609 23.7107 29.4696 23.5 30 23.5H51C51.5304 23.5 52.0391 23.7107 52.4142 24.0858C52.7893 24.4609 53 24.9696 53 25.5V40.5C53 41.0304 52.7893 41.5391 52.4142 41.9142C52.0391 42.2893 51.5304 42.5 51 42.5H49Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M26 27.5C25.4696 27.5 24.9609 27.7107 24.5858 28.0858C24.2107 28.4609 24 28.9696 24 29.5V44.5C24 45.0304 24.2107 45.5391 24.5858 45.9142C24.9609 46.2893 25.4696 46.5 26 46.5H28V52.5L34.087 46.5H43" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>

            </div>
            <div className="font-semibold text-sm">General Question</div>
            <div className="text-xs">+31685160989</div>
          </div>

          <div className="flex flex-col items-center p-2 md:col-span-1 border-b-0">
            <div className="bg-[#0E8044] rounded-full p-3 sm:w-[76px] sm:h-[76px] w-[52px] h-[52px] flex items-center justify-center mb-2">
              <svg width="77" height="76" viewBox="0 0 77 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="76" height="76" rx="38" fill="#0E8044" />
                <mask id="mask0_0_2267" maskUnits="userSpaceOnUse" x="23" y="23" width="31" height="30">
                  <path d="M53.5 23.5H23.5V52.5H53.5V23.5Z" fill="white" />
                </mask>
                <g mask="url(#mask0_0_2267)">
                  <path d="M51.8 39.011C52.2829 38.6861 52.6498 38.2159 52.8474 37.6684C53.045 37.121 53.0631 36.5249 52.8991 35.9664C52.7351 35.408 52.3974 34.9164 51.9351 34.5628C51.4728 34.2092 50.9099 34.0121 50.328 34H41.653C42.3542 32.2427 42.7793 30.3874 42.913 28.5C42.913 26.135 40.93 24 39.826 24C39.1507 24.0104 38.502 24.2652 38 24.717V29.3L34.24 37.5L33 38.13V37C33 36.4696 32.7893 35.9609 32.4142 35.5858C32.0391 35.2107 31.5304 35 31 35H26C25.4696 35 24.9609 35.2107 24.5858 35.5858C24.2107 35.9609 24 36.4696 24 37V50C24 50.5304 24.2107 51.0391 24.5858 51.4142C24.9609 51.7893 25.4696 52 26 52H30.3C30.6311 52 30.959 51.9348 31.265 51.808C31.5709 51.6812 31.8489 51.4955 32.083 51.2613C32.3171 51.0271 32.5028 50.749 32.6294 50.4431C32.756 50.1371 32.8211 49.8091 32.821 49.478V49.608C33.9092 50.4528 35.2327 50.9392 36.609 51H48.061C48.4628 51.0078 48.8602 50.9146 49.2167 50.7288C49.5731 50.5431 49.8772 50.2708 50.101 49.937C50.3949 49.4851 50.5236 48.9456 50.4655 48.4097C50.4074 47.8738 50.1659 47.3744 49.782 46.996C50.2017 46.9445 50.5981 46.7746 50.925 46.5063C51.2518 46.238 51.4955 45.8822 51.6277 45.4805C51.76 45.0788 51.7752 44.6478 51.6716 44.2378C51.5681 43.8278 51.3501 43.4557 51.043 43.165C51.5156 43.1144 51.959 42.9121 52.307 42.5884C52.655 42.2647 52.8888 41.8371 52.9735 41.3694C53.0582 40.9018 52.9891 40.4193 52.7767 39.9941C52.5642 39.569 52.2198 39.2241 51.795 39.011H51.8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>

            </div>
            <div className="font-semibold text-sm">Follow us</div>
            <div className="flex justify-center space-x-2 mt-1">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-xl mt-12 px-4">
        <div className="text-center p-6">
          <div className="flex justify-center mb-4">
            <div className=" flex items-center justify-center w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] ">
              <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.3962 25.3078L49.1928 24.6075C48.1144 20.8687 45.8582 17.5779 42.7596 15.2241C39.661 12.8704 35.8855 11.5795 31.9945 11.5434C31.16 11.5424 30.3264 11.6001 29.4999 11.7162C28.0949 11.9007 26.7276 12.3053 25.4484 12.9152C20.7495 15.2303 18.2491 20.0946 18.0143 27.3848L17.9242 30.3044L20.943 31.2032C23.4205 31.8658 25.9745 32.1994 28.5392 32.1954C30.2526 32.2014 31.9622 32.0352 33.6424 31.6993C35.8455 31.3196 37.9484 30.4958 39.8232 29.2781C41.6981 28.0604 43.3057 26.4741 44.5484 24.6158L44.6617 25.0383C46.0028 30.0043 45.3232 34.7412 42.8054 38.0312C40.568 40.9533 37.1292 42.4962 32.8594 42.4962C32.6287 42.4962 32.3972 42.4912 32.1615 42.4821C20.1327 42.0141 8.32209 30.2374 7.86154 18.2673C7.79953 13.183 9.12826 9.2291 11.8105 6.51293C15.4544 2.82605 20.6809 2.27455 23.469 2.27455C23.8468 2.27455 24.1668 2.28447 24.4149 2.29853C24.5801 2.30694 24.7429 2.25572 24.8736 2.15419C25.0042 2.05267 25.0941 1.90759 25.1268 1.74537V1.73297C25.1617 1.55939 25.1291 1.37902 25.0355 1.22871C24.9419 1.07841 24.7944 0.969528 24.6232 0.924321C22.4579 0.325757 20.2228 0.017133 17.9763 0.00652872C13.4561 -0.11535 9.05636 1.47298 5.65636 4.4541C2.32172 7.544 0.560547 11.9618 0.560547 17.2296C0.560547 33.6217 16.7046 49.7087 33.1537 49.7087C39.112 49.7087 43.9027 47.5209 47.0132 43.3817C50.5108 38.7233 51.3798 32.1367 49.3962 25.3053M33.9343 22.2163C35.4932 20.1369 37.7029 18.6389 40.2117 17.9605C40.5443 17.8749 40.8958 17.9007 41.2124 18.0339C41.529 18.1671 41.7932 18.4004 41.9646 18.6981C42.1025 18.9373 42.1741 19.209 42.1721 19.4851C42.1701 19.7613 42.0944 20.0319 41.953 20.2691C39.823 23.8873 36.4131 26.1148 31.8167 26.8904C30.635 27.085 29.4391 27.181 28.2415 27.1773C26.8246 27.1746 25.4102 27.0574 24.0122 26.8267L23.4251 26.7308L23.4839 26.1388C23.9279 21.6391 25.6593 18.5112 28.6268 16.8426C30.4505 15.8829 32.4829 15.3879 34.5437 15.4015L36.2238 15.3651L34.9885 16.5003C34.881 16.6012 32.8172 18.6129 33.9343 22.2163Z" fill="#0E8044" />
              </svg>

            </div>
          </div>
          <h2 className="sm:text-[34px] text-[27px] font-[700] text-[#222222] mb-2">Leave us a message</h2>
          <p className="text-[14px] sm:text-[18px] font-[500] text-[#222222] mb-6">Please send us a message by filling out the contact form and we will get back to you soon.</p>

          <form className="flex flex-col space-y-4 border-1 border-[#C7D8C6] py-[23px] px-[20px] rounded-[20px] ">
            <div>
              <label className="block text-left text-[14px] sm:text-[18px] font-[700] text-[#222222] mb-1">Subject</label>
              <select className="w-full h-[42px] sm:h-[48px] p-2 rounded-[5px] bg-[#E9E3D8] text-[#A69C89] text-[18px] font-[500] ">
                <option>Customer service</option>
                <option>Technical support</option>
                <option>Sales inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-left text-[14px] sm:text-[18px] font-[700] text-[#222222] mb-1">Email address</label>
              <input
                type="email"
                placeholder="yourname@example.com"
                className="w-full h-[42px] sm:h-[48px] p-2 rounded-[5px] bg-[#E9E3D8] text-[#A69C89] text-[18px] font-[500]"
              />
            </div>

            <div>
              <label className="block text-left text-[14px] sm:text-[18px] font-[700] text-[#222222] mb-1">Your message</label>
              <textarea
                placeholder="Write your message here"
                rows={4}
                className="w-full h-[127px] sm:h-[161px] p-2 rounded-[5px] bg-[#E9E3D8] text-[#A69C89] text-[18px] font-[500]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#DE7A22] text-white px-4 py-2 rounded-[10px] h-[58px] w-full text-[18px] font-[700] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Image */}
      <div className="w-full h-[428px] bg-cover bg-center mt-16"
        style={{ backgroundImage: 'url("/blogs/decoration-bg.png")' }}>
      </div>
    </div>
  );
}