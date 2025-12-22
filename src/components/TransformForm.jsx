'use client'
import React from 'react'
import { ArrowRight, Globe } from 'lucide-react'
import Image from 'next/image'
import worldImage from "@/assets/transform_world.png"

export default function Transformform() {
    return (
        <section className="bg-[#05070A] py-16 px-4 md:px-12 lg:px-24 flex justify-center items-center w-full">
            <div className="w-full max-w-7xl relative overflow-hidden rounded-[40px] p-[1px]">
                {/* Main Content Container with Gradient Background */}
                <div className="bg-gradient-to-r from-[#0B3B4B] to-[#4B1A1A] rounded-[40px] p-6 sm:p-10 md:p-16 lg:p-20">

                    {/* Left Content */}
                    <div className=" h-full">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-4 leading-tight">
                                Ready to transform your school operations?
                            </h2>
                            <p className="text-gray-300 text-base sm:text-lg mb-8 md:mb-12">
                                Schedule a demo today and get started within minutes.
                            </p>
                        </div>

                    </div>

                    <div className="w-full">
                        <div className='flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12'>
                            <div className="relative w-full max-w-[300px] sm:max-w-[400px] aspect-square mx-auto mb-8 lg:mb-0">
                                {/* Simplified Globe representation with Image */}
                                <Image
                                    src={worldImage}
                                    alt='world'
                                    fill
                                    className='object-contain'
                                    priority
                                />
                            </div>
                            <div className='w-full max-w-xl'>
                                <form className="flex flex-col gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Full Name"
                                        className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:bg-white/10 transition-colors"
                                    />
                                    <input
                                        type="text"
                                        placeholder="School Name"
                                        className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:bg-white/10 transition-colors"
                                    />
                                    <input
                                        type="text"
                                        placeholder="School Location"
                                        className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:bg-white/10 transition-colors"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:bg-white/10 transition-colors"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:bg-white/10 transition-colors"
                                    />

                                    <button className="group mt-4 relative w-full flex items-center justify-between px-6 py-4 rounded-full text-white overflow-hidden transition-all hover:brightness-110">
                                        {/* Gradient Border for button */}
                                        <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-red-400 to-blue-400 opacity-70">
                                            <div className="w-full h-full bg-[#3a1a1a]/50 rounded-full backdrop-blur-sm"></div>
                                        </div>

                                        {/* Button Content */}
                                        <span className="relative z-10 font-medium pl-2">Submit</span>
                                        <span className="relative z-10 pr-2">
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
