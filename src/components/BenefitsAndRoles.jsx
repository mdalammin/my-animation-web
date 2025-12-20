"use client";

import React, { useState } from "react";
import bg1 from "../assets/bg-benefits/bg1.png";
import bg2 from "../assets/bg-benefits/bg2.png";
import bg3 from "../assets/bg-benefits/bg3.png";
import bg4 from "../assets/bg-benefits/bg4.png";

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

export default function BenefitsAndRoles({ isMenuSection }) {
    const [activeRole, setActiveRole] = useState("Principal");

    const roles = [
        { name: "Principal", icon: <LayoutDashboard size={24} /> },
        { name: "Teacher", icon: <BookOpen size={24} /> },
        { name: "Parents", icon: <User size={24} /> },
        { name: "Accountant", icon: <Calculator size={24} /> },
    ];

    return (
        <div className="bg-transparent text-white font-sans">
            {/* -------------------- BENEFITS SECTION -------------------- */}
            <section className="py-16 mx-auto">
                <div className="max-w-7xl mx-auto px-4 mb-12">
                    <h2 className="text-3xl font-bold mb-2">
                        Benefits of Using Schooldeeds
                    </h2>
                    <p className="text-gray-400">
                        Packed with Features that makes your school management easy
                    </p>
                </div>

                {/* Main Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[500px] max-w-7xl mx-auto">

                    {/* ---------------- CARD 1: Access Anywhere ---------------- */}
                    <div className="relative group overflow-hidden border-r border-gray-800/30 w-[325px] h-[345px] z-10">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${bg1.src || bg1})` }}
                        ></div>

                        {/* Overlay: Dark Red/Brown Gradient */}
                        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(30,30,30,0.4),rgba(30,30,30,0.4)),linear-gradient(106.76deg,rgba(31,185,232,0.4)_11.57%,rgba(222,70,70,0.4)_88.65%)] backdrop-blur-lg"></div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6 text-white py-[40px]">
                            <div className="mb-4">
                                <Share2 size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-semibold leading-tight mb-4">
                                Access<br />Anywhere
                            </h3>
                            <p className="text-sm font-light leading-relaxed max-w-[200px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                            </p>
                        </div>
                    </div>

                    {/* ---------------- CARD 2: Unlimited Users ---------------- */}
                    <div className="relative group overflow-hidden border-r border-gray-800/30 w-[325px] h-[345px] z-20">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${bg2.src || bg2})` }}
                        ></div>

                        {/* Overlay: Left-side Teal/Cyan curve effect 
                            Using a radial gradient shifted to the left to simulate the curve */}
                        <div className="absolute top-0 left-0 w-[60%] h-[50%] rounded-br-[81px] bg-[linear-gradient(0deg,rgba(30,30,30,0.4),rgba(30,30,30,0.4)),linear-gradient(106.76deg,rgba(31,185,232,0.4)_11.57%,rgba(222,70,70,0.4)_88.65%)] backdrop-blur-[30px] opacity-95"></div>

                        {/* Content */}
                        <div className="absolute bottom-23 left-7 z-10 h-full flex flex-col justify-center items-center text-center p-6">
                            <div className="mb-2">
                                <Users size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-semibold leading-tight">
                                Unlimited<br />Users
                            </h3>
                        </div>
                    </div>

                    {/* ---------------- CARD 3: Transparent Pricing ---------------- */}
                    <div className="relative group overflow-hidden border-r border-gray-800/30 w-[325px] h-[345px] z-30">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${bg3.src || bg3})` }}
                        ></div>

                        {/* Overlay: Right-side Blue curve effect 
                             Simulating the "bubble" from the right side */}
                        <div className="absolute top-0 right-0 w-[60%] h-[50%] rounded-bl-[81px] bg-[linear-gradient(0deg,rgba(30,30,30,0.4),rgba(30,30,30,0.4)),linear-gradient(106.76deg,rgba(31,185,232,0.4)_11.57%,rgba(222,70,70,0.4)_88.65%)] backdrop-blur-[30px] opacity-95"></div>

                        {/* Content */}
                        <div className="absolute -top-24 right-4 z-10 h-full flex flex-col justify-center items-center text-center p-6">
                            <div className="mb-2">
                                <Wallet size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-semibold leading-tight">
                                Transparent<br />Pricing
                            </h3>
                        </div>
                    </div>

                    {/* ---------------- CARD 4: Full-feature Included ---------------- */}
                    <div className="relative group overflow-hidden w-[325px] h-[345px] z-90">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${bg4.src || bg4})` }}
                        ></div>

                        {/* Overlay: Bottom-Right Rounded Shape */}
                        <div className="absolute bottom-0 right-0 w-[60%] h-[50%] rounded-tl-[81px] bg-[linear-gradient(0deg,rgba(30,30,30,0.4),rgba(30,30,30,0.4)),linear-gradient(106.76deg,rgba(31,185,232,0.4)_11.57%,rgba(222,70,70,0.4)_88.65%)] backdrop-blur-[30px] opacity-95"></div>


                        {/* Content */}
                        <div className="absolute right-2 top-6 z-10 h-full flex flex-col justify-end items-center text-center p-8 pb-16">
                            <div className="mb-2">
                                <Settings size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-semibold leading-tight">
                                Full-feature<br />Included
                            </h3>
                        </div>
                    </div>

                </div>
            </section>

            {/* -------------------- UNIFIED PLATFORM SECTION -------------------- */}
            {
                isMenuSection &&
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
            }
        </div>
    );
}
