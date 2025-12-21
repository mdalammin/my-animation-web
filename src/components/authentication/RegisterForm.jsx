"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function RegisterForm() {
    return (
        <div className="flex items-center justify-center relative overflow-hidden font-sans py-20">
            <div className="relative z-10 w-full max-w-3xl p-[1px] rounded-[48px] bg-gradient-to-br from-[#1FB9E8]/20 to-[#EA3D34]/20 overflow-hidden">
                <div className="bg-[linear-gradient(106.76deg,rgba(31,185,232,0.4)_11.57%,rgba(222,70,70,0.4)_88.65%)] backdrop-blur-[20px] rounded-[47px] p-8 md:p-16 text-center">
                    <h1 className="text-3xl md:text-4xl font-semibold text-white mb-2">
                        Register to Schooldeeds
                    </h1>
                    <p className="text-gray-400 text-sm mb-12">Welcome Back!</p>

                    <form className="max-w-md mx-auto flex flex-col gap-3">
                        {/* Email Address */}
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white placeholder-gray-300 focus:outline-none focus:bg-white/10 focus:border-[#1FB9E8]/50 transition-all text-lg"
                            />
                        </div>

                        {/* Mobile Number */}
                        <div className="relative group">
                            <input
                                type="tel"
                                placeholder="Mobile Number"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white placeholder-gray-300 focus:outline-none focus:bg-white/10 focus:border-[#1FB9E8]/50 transition-all text-lg"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative group">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white placeholder-gray-300 focus:outline-none focus:bg-white/10 focus:border-[#EA3D34]/50 transition-all text-lg"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="relative group">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white placeholder-gray-300 focus:outline-none focus:bg-white/10 focus:border-[#EA3D34]/50 transition-all text-lg"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="group relative w-full h-16 flex items-center justify-center p-[1px] rounded-full overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {/* Gradient Border */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#EA3D34] to-[#1FB9E8]"></div>

                            {/* Button Content Background */}
                            <div className="relative w-full h-full bg-[#1A1F26] rounded-full flex items-center justify-between px-10 group-hover:bg-transparent transition-colors duration-500">
                                <span className="text-white font-medium text-lg">Submit</span>
                                <ArrowRight className="text-white w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
