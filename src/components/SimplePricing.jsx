import React from "react";
import { Check, ArrowRight } from "lucide-react";

export default function SimplePricing({ showButton, centerButton }) {
    const plans = [
        {
            name: "Micro",
            price: "25000",
            description: "Excluding GST 18%",
        },
        {
            name: "MEGA",
            price: "25000",
            description: "Excluding GST 18%",
        },
        {
            name: "GIGA",
            price: "25000",
            description: "Excluding GST 18%",
        },
    ];

    const features = [
        "Fees Records",
        "Admission Records",
        "Attendance Records",
        "Exam Records",
        "Visitor Records",
        "Student Records",
        "Books Management",
        "Transportation Management",
        "Accounts Management",
    ];

    return (
        <div className="bg-[linear-gradient(132.62deg,rgba(31,185,232,0.1)_0%,rgba(222,70,70,0.1)_100%)] backdrop-blur-xl text-white py-16 px-4 md:px-8 font-sans min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-3">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                        Choose the plan that's right for your school, No hidden fees ever
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="rounded-3xl overflow-hidden bg-[#1A1F26] border border-gray-800 shadow-xl"
                        >
                            {/* Card Header with Gradient */}
                            <div
                                className={`bg-[linear-gradient(0deg,rgba(30,30,30,0.4),rgba(30,30,30,0.4)),linear-gradient(106.76deg,rgba(31,185,232,0.4)_11.57%,rgba(222,70,70,0.4)_88.65%)] backdrop-blur-xl p-8 text-center h-48 flex flex-col justify-center items-center relative`}
                            >
                                {/* Overlay for a softer look if needed, but gradient-to-r handles most */}
                                <div className="absolute inset-0 bg-white/5"></div>

                                <h3 className="text-white font-bold text-lg tracking-wider mb-2 z-10">
                                    {plan.name}
                                </h3>
                                <div className="text-white z-10">
                                    <span className="text-2xl font-bold italic">{plan.price}/</span>{" "}
                                    <span className="text-xl italic font-medium">1Year</span>
                                </div>
                                <p className="text-gray-300 text-sm mt-1 z-10">{plan.description}</p>
                            </div>

                            {/* Card Body */}
                            <div className="p-8 bg-[#1f242c]">
                                <ul className="space-y-6">
                                    {features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-300 text-sm font-medium">

                                            {/* Check Icon Style */}
                                            <div className="bg-transparent border border-red-500/30 rounded-full p-0.5 mr-3">
                                                <Check className="w-5 h-5 text-red-400" strokeWidth={3} />
                                            </div>

                                            {/* Using a custom check approximation to match the thick reddish check in image */}
                                            {/* Alternatively using Lucide Check directly but ensuring style match */}

                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {
                                showButton &&
                                <div className="flex justify-center bg-[#1f242c] py-6">
                                    <button className="group relative px-8 py-3 rounded-full text-sm text-white font-medium overflow-hidden transition-all hover:bg-white/5">
                                        {/* Gradient border using pseudo-element */}
                                        <div className="absolute inset-0 rounded-full p-[0px]">
                                            <div className="w-full h-full bg-gradient-to-r from-[#EA3D34] to-[#1FB9E8] rounded-full"></div>
                                        </div>

                                        {/* Content */}
                                        <span className="relative z-10 flex items-center gap-2">
                                            Explore all Features <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </span>

                                        {/* Button background (optional) */}
                                        <div className="absolute inset-[1px] rounded-full bg-gray-900 group-hover:bg-gray-800/50 transition-colors"></div>
                                    </button>
                                </div>
                            }
                        </div>
                    ))}
                </div>

                {
                    !centerButton &&
                    <div className="flex justify-center">
                        <button className="group relative px-8 py-3 rounded-full text-sm text-white font-medium overflow-hidden transition-all hover:bg-white/5">
                            {/* Gradient border using pseudo-element */}
                            <div className="absolute inset-0 rounded-full p-[0px]">
                                <div className="w-full h-full bg-gradient-to-r from-[#EA3D34] to-[#1FB9E8] rounded-full"></div>
                            </div>

                            {/* Content */}
                            <span className="relative z-10 flex items-center gap-2">
                                Explore all Features <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </span>

                            {/* Button background (optional) */}
                            <div className="absolute inset-[1px] rounded-full bg-gray-900 group-hover:bg-gray-800/50 transition-colors"></div>
                        </button>
                    </div>
                }
            </div>
        </div>
    );
}
