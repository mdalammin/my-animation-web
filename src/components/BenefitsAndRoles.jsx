"use client";

import React, { useState } from "react";
import {
    Users,
    LayoutDashboard,
    Wallet,
    Settings,
    MonitorPlay,
    Share2,
    BookOpen,
    User,
    Calculator,
    BarChart3,
    Search,
} from "lucide-react";
import PlatformSection from "./PlatformSection";

export default function BenefitsAndRoles() {
    const [activeRole, setActiveRole] = useState("Principal");

    const roles = [
        { name: "Principal", icon: <LayoutDashboard size={24} /> },
        { name: "Teacher", icon: <BookOpen size={24} /> },
        { name: "Parents", icon: <User size={24} /> },
        { name: "Accountant", icon: <Calculator size={24} /> },
    ];

    return (
        <div className="bg-[#0b0f19] text-white min-h-screen font-sans">
            {/* -------------------- BENEFITS SECTION -------------------- */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-2">
                    Benefits of Using Schooldeeds
                </h2>
                <p className="text-gray-400 mb-12">
                    Packed with Features that makes your school management easy
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 h-[400px]">
                    {/* Card 1: Access Anywhere (Gradient & Text) */}
                    <div className="col-span-1 md:col-span-1 relative overflow-hidden group ">
                        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(30,30,30,0.4),rgba(30,30,30,0.4)),linear-gradient(106.76deg,rgba(31,185,232,0.4)_11.57%,rgba(222,70,70,0.4)_88.65%)] backdrop-blur-[20px] opacity-90 transition-opacity group-hover:opacity-100"></div>
                        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6">
                            <div className="mb-4 text-white">
                                <Share2 size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Access Anywhere</h3>
                            <p className="text-sm text-gray-300 mt-6 leading-relaxed group-hover:opacity-100 transition-opacity duration-300 absolute bottom-12 px-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Unlimited Users (Image Placeholder) */}
                    <div className="col-span-1 md:col-span-1 relative overflow-hidden group">
                        {/* Placeholder for Image */}
                        <div className="absolute inset-0 bg-gray-800">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            {/* Simulated Image Content */}
                            <div className="w-full h-full flex items-center justify-center bg-[#2a303c]">
                                <span className="text-gray-600">Image: Office/People</span>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#9333ea]/60 to-transparent opacity-60"></div>

                        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6 pointer-events-none">
                            <div className="mb-4">
                                <Users size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-semibold">Unlimited Users</h3>
                        </div>
                    </div>

                    {/* Card 3: Transparent Pricing (Image Placeholder) */}
                    <div className="col-span-1 md:col-span-1 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gray-800">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="w-full h-full flex items-center justify-center bg-[#252b36]">
                                <span className="text-gray-600">Image: Calculator/Finance</span>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0ea5e9]/60 to-transparent opacity-60"></div>

                        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6 pointer-events-none">
                            <div className="mb-4">
                                <Wallet size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-semibold">Transparent Pricing</h3>
                        </div>
                    </div>


                    {/* Card 4: Full-feature Included (Image Placeholder with specific curve) */}
                    <div className="col-span-1 md:col-span-1 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gray-800">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="w-full h-full flex items-center justify-center bg-[#1e2330]">
                                <span className="text-gray-600">Image: Dashboard</span>
                            </div>
                        </div>

                        {/* The curved overlay effect at bottom right */}
                        <div className="absolute bottom-0 right-0 w-full h-[60%] bg-gradient-to-tl from-[#e11d48]/80 to-transparent rounded-tl-[100px]"></div>


                        <div className="relative z-10 h-full flex flex-col justify-end items-center text-center p-6 pb-12 pointer-events-none">
                            <div className="mb-4">
                                <Settings size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-semibold">Full-feature Included</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* -------------------- UNIFIED PLATFORM SECTION -------------------- */}
            <section className="py-24 px-4 relative overflow-hidden">
                {/* Background Mesh/Wave Effect */}
                <div className="absolute inset-0 pointer-events-none">
                    <svg className="absolute w-full h-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Red/Blue Mesh Lines - Simulated */}
                        <path d="M0 20 Q 50 0 100 20" stroke="#ef4444" fill="transparent" strokeWidth="0.1" />
                        <path d="M0 25 Q 50 5 100 25" stroke="#3b82f6" fill="transparent" strokeWidth="0.1" />
                        <path d="M0 30 Q 50 10 100 30" stroke="#ef4444" fill="transparent" strokeWidth="0.1" />
                        <path d="M0 35 Q 50 15 100 35" stroke="#3b82f6" fill="transparent" strokeWidth="0.1" />

                        <path d="M0 40 Q 50 60 100 40" stroke="#ef4444" fill="transparent" strokeWidth="0.1" />
                        <path d="M0 45 Q 50 65 100 45" stroke="#3b82f6" fill="transparent" strokeWidth="0.1" />
                        <path d="M0 50 Q 50 70 100 50" stroke="#ef4444" fill="transparent" strokeWidth="0.1" />

                        {/* Vertical-ish lines for mesh effect */}
                        <path d="M20 0 Q 30 50 20 100" stroke="#ffffff" strokeOpacity="0.05" fill="transparent" strokeWidth="0.1" />
                        <path d="M40 0 Q 50 50 40 100" stroke="#ffffff" strokeOpacity="0.05" fill="transparent" strokeWidth="0.1" />
                        <path d="M60 0 Q 70 50 60 100" stroke="#ffffff" strokeOpacity="0.05" fill="transparent" strokeWidth="0.1" />
                        <path d="M80 0 Q 90 50 80 100" stroke="#ffffff" strokeOpacity="0.05" fill="transparent" strokeWidth="0.1" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-[#0b0f19]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-transparent to-[#0b0f19]"></div>
                </div>


                <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        A Powerful, Unified Platform for Every Role
                    </h2>
                    <p className="text-gray-400">
                        Tailored tools and dashboard to empower everyone in your school
                        community
                    </p>
                </div>
                <PlatformSection />
            </section>
        </div>
    );
}
