"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from 'next-auth/react';

const LoginPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Check if user just registered
        const registered = searchParams.get("registered");
        if (registered === "true") {
            setSuccess("Registration successful! Please login with your credentials.");
        }
    }, [searchParams]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Reset states
        setError("");
        setSuccess("");
        
        // Validate form
        if (!email || !password) {
            setError("Please fill in all required fields");
            return;
        }
        
        try {
            setLoading(true);
            
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || "Failed to login");
            }
            
            // Redirect to home page on successful login
            router.push("/");
        } catch (err: any) {
            setError(err.message || "An error occurred during login");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen text-[#222222] flex items-center justify-center bg-[#f6fafd]">
            <form
                className="bg-white w-[572px] h-[610px] border-1 border-[#E4E4E4] rounded-[30px] shadow-md p-[30px] flex flex-col gap-4"
                onSubmit={handleLogin}
                aria-label="Login form"
                style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.07))' }}
            >
                <h2 className="font-[700] text-[42px] mb-0">Login</h2>
                
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}
                
                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <span className="block sm:inline">{success}</span>
                    </div>
                )}
                
                <label htmlFor="email" className="text-[18px] font-[700] ">Email address</label>
                <input
                    id="email"
                    type="email"
                    placeholder="yourname@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="p-3 w-full rounded-[5px] border-none bg-[#E9E3D8] text-base text-[18px] text-[#A69C89] font-[500] outline-none mb-0"
                    autoComplete="email"
                />
                <label htmlFor="password" className="text-[18px] font-[700] ">Password</label>
                <div className="relative">
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="**********"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        minLength={8}
                        className="p-3 w-full rounded-[5px] border-none bg-[#E9E3D8] text-base text-[18px] text-[#A69C89] font-[500] outline-none"
                        autoComplete="current password"
                    />
                    <button
                        type="button"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        onClick={() => setShowPassword(v => !v)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer p-0"
                        tabIndex={0}
                    >
                        <span role="img" aria-label="eye" className="text-lg text-gray-400">
                            {showPassword ? <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0.75C3.45734 0.75 0.213594 6.45375 0.07875 6.69641C-0.02625 6.88531 -0.02625 7.11484 0.07875 7.30375C0.213594 7.54625 3.45734 13.25 10 13.25C16.5427 13.25 19.7864 7.54625 19.9212 7.30359C20.0263 7.11469 20.0263 6.88516 19.9212 6.69625C19.7864 6.45375 16.5427 0.75 10 0.75ZM1.36047 7.00094C2.10391 5.87422 5.02281 2 10 2C14.993 2 17.8989 5.87109 18.6395 6.99906C17.8961 8.12578 14.9772 12 10 12C5.00703 12 2.10109 8.12891 1.36047 7.00094ZM10 3.25C7.93219 3.25 6.25 4.93219 6.25 7C6.25 9.06781 7.93219 10.75 10 10.75C12.0678 10.75 13.75 9.06781 13.75 7C13.75 4.93219 12.0678 3.25 10 3.25ZM10 9.5C8.62156 9.5 7.5 8.37844 7.5 7C7.5 5.62156 8.62156 4.5 10 4.5C11.3784 4.5 12.5 5.62156 12.5 7C12.5 8.37844 11.3784 9.5 10 9.5Z" fill="#222222" />
                            </svg>
                                : <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0.75C3.45734 0.75 0.213594 6.45375 0.07875 6.69641C-0.02625 6.88531 -0.02625 7.11484 0.07875 7.30375C0.213594 7.54625 3.45734 13.25 10 13.25C16.5427 13.25 19.7864 7.54625 19.9212 7.30359C20.0263 7.11469 20.0263 6.88516 19.9212 6.69625C19.7864 6.45375 16.5427 0.75 10 0.75ZM1.36047 7.00094C2.10391 5.87422 5.02281 2 10 2C14.993 2 17.8989 5.87109 18.6395 6.99906C17.8961 8.12578 14.9772 12 10 12C5.00703 12 2.10109 8.12891 1.36047 7.00094ZM10 3.25C7.93219 3.25 6.25 4.93219 6.25 7C6.25 9.06781 7.93219 10.75 10 10.75C12.0678 10.75 13.75 9.06781 13.75 7C13.75 4.93219 12.0678 3.25 10 3.25ZM10 9.5C8.62156 9.5 7.5 8.37844 7.5 7C7.5 5.62156 8.62156 4.5 10 4.5C11.3784 4.5 12.5 5.62156 12.5 7C12.5 8.37844 11.3784 9.5 10 9.5Z" fill="#222222" />
                                </svg>
                            }
                        </span>
                    </button>
                </div>
                <div className="text-sm text-gray-500 mb-0">
                    It must be a combination of minimum 8 letters, numbers, and symbols.
                </div>
                <div className="flex items-center justify-between mb-0">
                    <label className="flex items-center text-base gap-1.5 text-[18px] font-[700]">
                        <input
                            type="checkbox"
                            checked={remember}
                            onChange={e => setRemember(e.target.checked)}
                            className="accent-[#d97b1a] w-[21px] h-[21px] text-[18px] font-[700] "
                        />
                        Remember me
                    </label>
                    <a href="#" className="text-[#222] text-[18px] font-[700] no-underline">Forgot password?</a>
                </div>
                <button
                    type="submit"
                    className="bg-[#DE7A22] w-[226px] h-[58px] text-white border-none rounded-[10px] p-3 font-[700] text-[18px] text-base cursor-pointer mt-0 mb-0 transition-colors duration-200 flex items-center justify-center"
                    disabled={loading}
                >
                    {loading ? "Processing..." : "Login"}
                </button>
                <button
                    type="button"
                    onClick={() => signIn('google', { callbackUrl: '/' })}
                    className="flex items-center justify-center w-[226px] h-[58px] bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
                >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                            <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.28426 53.749 C -8.52426 55.159 -9.21574 56.389 -10.2257 57.289 L -10.2257 60.609 L -5.46424 60.609 C -3.81424 57.349 -3.264 53.359 -3.264 51.509 Z"/>
                            <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.80451 62.159 -6.71451 60.619 L -10.2345 57.289 C -11.2345 58.049 -12.5235 58.489 -14.0045 58.489 C -16.9245 58.489 -19.4045 56.379 -20.2045 53.689 L -25.0745 53.689 L -25.0745 57.129 C -23.0845 61.119 -19.264 63.239 -14.754 63.239 Z"/>
                            <path fill="#FBBC05" d="M -20.2045 53.689 C -20.4645 52.909 -20.605 52.069 -20.605 51.239 C -20.605 50.409 -20.4645 49.569 -20.2045 48.789 L -20.2045 45.349 L -25.0745 45.349 C -25.9445 47.159 -26.4245 49.159 -26.4245 51.239 C -26.4245 53.319 -25.9445 55.319 -25.0745 57.129 L -20.2045 53.689 Z"/>
                            <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.4045 44.599 -10.0845 45.789 L -6.76451 42.469 C -8.80451 40.589 -11.514 39.239 -14.754 39.239 C -19.264 39.239 -23.0845 41.359 -25.0745 45.349 L -20.2045 48.789 C -19.4045 46.089 -16.9245 43.989 -14.754 43.989 Z"/>
                        </g>
                    </svg>
                    Continue with Google
                </button>
                <div className="text-start text-[18px] font-[700] text-base mt-0">
                    No account yet?{' '}
                    <a href="/signups" className="text-[#0E8044] font-semibold no-underline">Sign up</a>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;