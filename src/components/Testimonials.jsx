"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import GurditSingh from "@/assets/GurditSingh.png";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "Jay Shah",
        title: "Education Minister",
        image: GurditSingh,
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id: 2,
        name: "Sarah Johnson",
        title: "School Principal",
        image: GurditSingh,
        quote: "Schooldeeds has revolutionized how we manage our administrative tasks. The platform is intuitive, powerful, and has saved us countless hours of work. Highly recommended for any educational institution.",
    },
    {
        id: 3,
        name: "Michael Chen",
        title: "IT Administrator",
        image: GurditSingh,
        quote: "The technical support and stability of the platform are outstanding. Integration was smooth, and the feature set covers everything we need from student tracking to financial management.",
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="bg-[linear-gradient(127.14deg,rgba(31,185,232,0.1)_0%,rgba(222,70,70,0.1)_100%)] text-white py-10 px-4 font-sans">
            <div className="max-w-6xl mx-auto py-24">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Trusted by Leading 100+ schools across India in 10+ States
                    </h2>
                    <p className="text-gray-400">
                        Tailored tools and dashboard to empower everyone in your school community
                    </p>
                </div>

                {/* Content Area */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12">

                    {/* Left Column: User Profile & Nav */}
                    <div className="flex flex-col items-center md:items-center w-full md:w-1/3">

                        {/* User Image Frame */}
                        <div className="w-[200px] h-[200px] mb-6 rounded-[20px] p-[1px] bg-gradient-to-b from-[#EA3D34] to-[#1FB9E8]">
                            <div className="w-full h-full rounded-[19px] overflow-hidden">
                                <Image
                                    src={currentTestimonial.image}
                                    alt={currentTestimonial.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Name & Title */}
                        <div className="text-center mb-12">
                            <h3 className="text-xl font-semibold mb-1">{currentTestimonial.name}</h3>
                            <p className="text-gray-400 text-sm">{currentTestimonial.title}</p>
                        </div>
                    </div>


                    {/* Right Column: Quote Card */}
                    <div className="w-full flex flex-col items-center md:items-start gap-8">
                        <div className="bg-[#1a1f2e] rounded-3xl p-12 relative min-h-[300px] flex flex-col justify-center">

                            {/* Quote Icon */}
                            <div className="mb-6">
                                <Quote size={48} className="text-[#0ea5e9] fill-[#0ea5e9]/10" strokeWidth={1} />
                            </div>

                            {/* Quote Text */}
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {currentTestimonial.quote}
                            </p>

                        </div>

                        {/* Navigation Buttons (positioned at bottom relative to column) */}
                        <div className="flex gap-4 mt-auto">
                            <button
                                onClick={handlePrev}
                                className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition-colors group"
                            >
                                <ArrowLeft size={20} className="text-gray-400 group-hover:text-white" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition-colors group"
                            >
                                <ArrowRight size={20} className="text-gray-400 group-hover:text-white" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
