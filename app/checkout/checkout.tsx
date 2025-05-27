"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function CheckoutPage() {
    const [formData, setFormData] = useState({
        title: 'Mr',
        fullName: 'Jan Kowalski',
        email: 'yourname@example.com',
        address: '',
        additionalInfo: '',
        zip: '123456',
        country: '',
        state: '',
        city: '',
        phone: '',
        invoiceAddress: true,
        shipping: 'standard',
        payment: 'crypto',
        termsAgreed: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="bg-gray-50 text-[#222222] min-h-screen p-4">
            <div className="max-w-6xl mx-auto">
                {/* Login reminder */}
                <div className="bg-amber-50 p-3 mb-6 rounded-md border border-amber-100">
                    <p className="text-[18px] font-[700] ">
                        Are you already registered? <a href="#" className="text-[#DE7A22]">Login now</a>
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left column - Forms */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Personal Information */}
                        <div className="bg-white rounded-md shadow-sm p-5 relative">
                            <div className="flex items-center mb-4">
                                <div className="bg-[#0E8044] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                                    <span>1</span>
                                </div>
                                <h2 className="text-lg font-medium">Personal Information</h2>
                                <div className="absolute right-4 top-4">
                                    <div className="w-6 h-6 bg-[#0E8044] rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[18px] font-[700] mb-1">Social title</label>
                                    <div className="flex space-x-2">
                                        <button 
                                            className={`px-[85px] py-[10px] rounded-[5px] ${formData.title === 'Mr' ? 'bg-[#C7D8C6] ' : ' border-2 border-black'}`}
                                            onClick={() => setFormData({...formData, title: 'Mr'})}
                                        >
                                            Mr
                                        </button>
                                        <button 
                                            className={`px-[85px] py-[10px] rounded-[5px] ${formData.title === 'Mrs' ? 'bg-[#C7D8C6] ' : ' border-2 border-black'}`}
                                            onClick={() => setFormData({...formData, title: 'Mrs'})}
                                        >
                                            Mrs
                                        </button>
                                        <button 
                                            className={`px-[85px] py-[10px] rounded-[5px] ${formData.title === 'Ms' ? 'bg-[#C7D8C6] ' : ' border-2 border-black'}`}
                                            onClick={() => setFormData({...formData, title: 'Ms'})}
                                        >
                                            Ms
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[18px] font-[700] mb-1">Full name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full p-2 border-2 border-[#0E8044] rounded-[5px] bg-[#E9E3D8] "
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[18px] font-[700] mb-1">Email address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full p-2 border-2 border-[#0E8044] rounded-[5px] bg-[#E9E3D8] "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Address details */}
                        <div className="bg-white rounded-md shadow-sm p-5 relative">
                            <div className="flex items-center mb-4">
                                <div className="bg-[#0E8044] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                                    <span>2</span>
                                </div>
                                <h2 className="text-lg font-medium">Address details</h2>
                                <div className="absolute right-4 top-4">
                                    <div className="w-6 h-6 bg-[#0E8044] rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[18px] font-[700] mb-1">Street address*</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Street name and number"
                                        className="w-full p-2 text-[18px] font-[500] text-[#A69C89] rounded-[5px] bg-[#E9E3D8] focus:outline-none"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-[18px] font-[700] mb-1">Additional Address Info</label>
                                    <input
                                        type="text"
                                        name="additionalInfo"
                                        value={formData.additionalInfo}
                                        onChange={handleChange}
                                        placeholder="Landmarks"
                                        className="w-full p-2 text-[18px] font-[500] text-[#A69C89] rounded-[5px] bg-[#E9E3D8] focus:outline-none"
                                    />
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[18px] font-[700] mb-1">Zip postal code*</label>
                                        <input
                                            type="text"
                                            name="zip"
                                            value={formData.zip}
                                            onChange={handleChange}
                                            className="w-full p-2 text-[18px] font-[500] text-[#A69C89] rounded-[5px] bg-[#E9E3D8] focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[18px] font-[700] mb-1">Country*</label>
                                        <div className="relative">
                                            <select
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                                className="w-full p-2 text-[18px] font-[500] text-[#A69C89] rounded-[5px] bg-[#E9E3D8] appearance-none pr-8 focus:outline-none"
                                            >
                                                <option value="">Select</option>
                                                <option value="UK">United Kingdom</option>
                                                <option value="US">United States</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[18px] font-[700] mb-1">State*</label>
                                        <div className="relative">
                                            <select
                                                name="state"
                                                value={formData.state}
                                                onChange={handleChange}
                                                className="w-full p-2 text-[18px] font-[500] text-[#A69C89] rounded-[5px] bg-[#E9E3D8] appearance-none pr-8 focus:outline-none"
                                            >
                                                <option value="">Select</option>
                                                <option value="London">London</option>
                                                <option value="Manchester">Manchester</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[18px] font-[700] mb-1">City*</label>
                                        <div className="relative">
                                            <select
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className="w-full p-2 text-[18px] font-[500] text-[#A69C89] rounded-[5px] bg-[#E9E3D8] appearance-none pr-8 focus:outline-none"
                                            >
                                                <option value="">Select</option>
                                                <option value="Central London">Central London</option>
                                                <option value="North London">North London</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-[18px] font-[700] mb-1">Phone number*</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        className="w-full p-2 text-[18px] font-[500] text-[#A69C89] rounded-[5px] bg-[#E9E3D8] focus:outline-none"
                                    />
                                </div>
                                
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="invoiceAddress"
                                        name="invoiceAddress"
                                        onChange={handleChange}
                                        className="text-[#0E8044] w-[21px] h-[21px] border-2 border-[#0E8044] bg-white rounded-[3px] focus:ring-0 focus:ring-offset-0 focus:ring-[#0E8044]"
                                    />
                                    <label htmlFor="invoiceAddress" className="ml-2 text-[18px] font-[500] ">
                                        Use this address for invoice too
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        {/* Shipping methods */}
                        <div className="bg-white rounded-md shadow-sm p-5 relative">
                            <div className="flex items-center mb-4">
                                <div className="bg-[#0E8044] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                                    <span>3</span>
                                </div>
                                <h2 className="text-lg font-medium">Shipping methods</h2>
                                <div className="absolute right-4 top-4">
                                    <div className="w-6 h-6 bg-[#0E8044] rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <div className={`p-3 rounded-md flex items-center ${formData.shipping === 'standard' ? 'bg-green-100' : 'border border-gray-300'}`}>
                                    <input
                                        type="radio"
                                        id="standard"
                                        name="shipping"
                                        value="standard"
                                        checked={formData.shipping === 'standard'}
                                        onChange={handleChange}
                                        className="text-green-500 border-gray-300"
                                    />
                                    <label htmlFor="standard" className="ml-2 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                        </svg>
                                        <span>Standard delivery 2-3 business days</span>
                                    </label>
                                </div>
                                
                                <div className={`p-3 rounded-md flex items-center ${formData.shipping === 'express' ? 'bg-green-100' : 'border border-gray-300'}`}>
                                    <input
                                        type="radio"
                                        id="express"
                                        name="shipping"
                                        value="express"
                                        checked={formData.shipping === 'express'}
                                        onChange={handleChange}
                                        className="text-green-500 border-gray-300"
                                    />
                                    <label htmlFor="express" className="ml-2 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <span>Express delivery 1-2 business days</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        {/* Payment */}
                        <div className="bg-white rounded-md shadow-sm p-5 relative">
                            <div className="flex items-center mb-4">
                                <div className="bg-[#0E8044] text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                                    <span>4</span>
                                </div>
                                <h2 className="text-lg font-medium">Payment</h2>
                                <div className="absolute right-4 top-4">
                                    <div className="w-6 h-6 bg-[#0E8044] rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <div className={`p-3 rounded-md ${formData.payment === 'crypto' ? 'bg-green-100' : 'border border-gray-300'}`}>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="crypto"
                                            name="payment"
                                            value="crypto"
                                            checked={formData.payment === 'crypto'}
                                            onChange={handleChange}
                                            className="text-green-500 border-gray-300"
                                        />
                                        <label htmlFor="crypto" className="ml-2 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>Pay with Bitcoin or other cryptocurrencies</span>
                                        </label>
                                    </div>
                                    
                                    {formData.payment === 'crypto' && (
                                        <div className="mt-3 bg-white p-3 rounded-md border border-gray-200">
                                            <div className="flex items-center mb-2">
                                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-2">C</div>
                                                <span className="font-medium">CoinPayments</span>
                                            </div>
                                            <p className="text-sm text-gray-600 mb-2">Cryptocurrency payments by CoinPayments.net</p>
                                            <p className="text-sm text-gray-600 mb-3">Accepted currencies: BTC, ETH, LTC, and many other alt coins.</p>
                                            <a href="#" className="text-green-600 text-sm font-medium">Quick and secure payment</a>
                                        </div>
                                    )}
                                </div>
                                
                                <div className={`p-3 rounded-md flex items-center ${formData.payment === 'card' ? 'bg-green-100' : 'border border-gray-300'}`}>
                                    <input
                                        type="radio"
                                        id="card"
                                        name="payment"
                                        value="card"
                                        checked={formData.payment === 'card'}
                                        onChange={handleChange}
                                        className="text-green-500 border-gray-300"
                                    />
                                    <label htmlFor="card" className="ml-2 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                        <span>Pay with a credit card or online payment</span>
                                    </label>
                                </div>
                                
                                <div className={`p-3 rounded-md flex items-center ${formData.payment === 'bank' ? 'bg-green-100' : 'border border-gray-300'}`}>
                                    <input
                                        type="radio"
                                        id="bank"
                                        name="payment"
                                        value="bank"
                                        checked={formData.payment === 'bank'}
                                        onChange={handleChange}
                                        className="text-green-500 border-gray-300"
                                    />
                                    <label htmlFor="bank" className="ml-2 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                        </svg>
                                        <span>Pay by bank transfer</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right column - Order summary */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-md shadow-sm p-5">
                            <h2 className="text-lg font-medium mb-4">Order summary</h2>
                            
                            <div className="space-y-4">
                                {/* Product 1 */}
                                <div className="flex justify-between">
                                    <div className="flex">
                                        <div className="w-12 h-12 bg-gray-200 rounded-md mr-3 relative overflow-hidden">
                                            <Image 
                                                src="/images/kratom-product.jpg" 
                                                alt="White Malay Kratom"
                                                width={48}
                                                height={48}
                                                className="object-cover"
                                                unoptimized
                                            />
                                        </div>
                                        <div>
                                            <p className="text-sm">White Malay Kratom</p>
                                            <div className="flex items-center mt-1">
                                                <select 
                                                    className="border border-gray-300 rounded text-xs p-1"
                                                    defaultValue="1"
                                                >
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm">£10.99</p>
                                        <button className="text-orange-500 text-xs mt-1">Delete</button>
                                    </div>
                                </div>
                                
                                {/* Product 2 */}
                                <div className="flex justify-between">
                                    <div className="flex">
                                        <div className="w-12 h-12 bg-gray-200 rounded-md mr-3 relative overflow-hidden">
                                            <Image 
                                                src="/images/kratom-product.jpg" 
                                                alt="White Malay Kratom"
                                                width={48}
                                                height={48}
                                                className="object-cover"
                                                unoptimized
                                            />
                                        </div>
                                        <div>
                                            <p className="text-sm">White Malay Kratom</p>
                                            <div className="flex items-center mt-1">
                                                <select 
                                                    className="border border-gray-300 rounded text-xs p-1"
                                                    defaultValue="2"
                                                >
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm">£10.99</p>
                                        <button className="text-orange-500 text-xs mt-1">Delete</button>
                                    </div>
                                </div>
                                
                                <div className="border-t border-gray-200 pt-3 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Delivery</span>
                                        <span>£11.98</span>
                                    </div>
                                    <div className="flex justify-between font-medium">
                                        <span>Total</span>
                                        <span>£33.97</span>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        You have any voucher? <a href="#" className="text-orange-500">Click to apply</a>
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Estimated date of delivery<br />
                                        25-27 May 2025
                                    </p>
                                </div>
                                
                                <div className="pt-2">
                                    <label className="flex items-start text-sm">
                                        <input
                                            type="checkbox"
                                            name="termsAgreed"
                                            checked={formData.termsAgreed}
                                            onChange={handleChange}
                                            className="mt-1 mr-2"
                                        />
                                        <span>
                                            I agree to the <a href="#" className="text-orange-500">terms of service</a> and will adhere to them unconditionally
                                        </span>
                                    </label>
                                    
                                    <button className="w-full bg-orange-500 text-white font-medium py-3 rounded-md mt-4 hover:bg-orange-600 transition">
                                        Place order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}