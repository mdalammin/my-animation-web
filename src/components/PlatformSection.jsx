"use client";

import React, { useState } from "react";
import {
    Users,
    LayoutDashboard,
    Wallet,
    Settings,
    BookOpen,
    User,
    Calculator,
    BarChart3,
    ArrowRight
} from "lucide-react";
import Image from "next/image";
import mobileAppHand from "../assets/right-hand-color.png";

export default function PlatformSection() {
    const [activeRole, setActiveRole] = useState("Principal");

    const roles = [
        { name: "Principal", icon: <LayoutDashboard size={30} /> },
        { name: "Teacher", icon: <BookOpen size={30} /> },
        { name: "Parents", icon: <User size={30} /> },
        { name: "Accountant", icon: <Calculator size={30} /> },
        // { name: "Students", icon: <User size={34} /> },
    ];

    return (
        <div className="relative w-full py-20 px-4 overflow-hidden bg-[#0b0f19]">

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

            <div className="max-w-7xl mx-auto relative z-10 text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                    A Powerful, Unified Platform for Every Role
                </h2>
                <p className="text-gray-400 text-lg">
                    Tailored tools and dashboard to empower everyone in your school community
                </p>
            </div>

            {/* Main Container */}
            <div className="max-w-[1300px] mx-auto relative ">
                <div className="border-[1.5px] border-solid border-[#FFFFFF80] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]
                bg-[linear-gradient(106.76deg,rgba(31,185,232,0.1)_11.57%,rgba(222,70,70,0.1)_88.65%)]">

                    {/* Left Sidebar */}
                    <div className=" lg:w-40 flex flex-row lg:flex-col justify-between gap-0 ">

                        {roles.map((role) => (
                            <button
                                key={role.name}
                                onClick={() => setActiveRole(role.name)}
                                className={`py-1 flex-1 flex flex-col items-center justify-center gap-3 transition-colors duration-300 relative group
                                    ${activeRole === role.name ? "bg-transparent text-white" : "bg-[#0a0c10] text-gray-500 hover:text-gray-300"}`}
                            >
                                <div className={`p-3 rounded-xl transition-all duration-300 ${activeRole === role.name ? "bg-white/10" : "group-hover:bg-white/5"}`}>
                                    {role.icon}
                                </div>
                                <span className="text-xs font-medium tracking-wide">{role.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-8 lg:p-12 relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center">
                        {/* Background Glows */}
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none"></div>

                        {/* Center: Analytics Cards */}
                        <div className="flex-1 w-full max-w-xl relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[1, 2, 3, 4].map((item) => (
                                    <div
                                        key={item}
                                        className="bg-[#FFFFFF1A] backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-[#232a38] transition-colors"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-gradient-to-br from-[#ef4444] to-transparent rounded-lg">
                                                <BarChart3 size={18} className="text-white" />
                                            </div>
                                            <h4 className="font-semibold text-white text-sm">
                                                Realtime Analytics
                                            </h4>
                                        </div>
                                        <p className="text-xs text-gray-400 leading-relaxed font-light">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 flex justify-center">
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
                        </div>

                        {/* Right: Phone Mockup */}
                        <div className="hidden lg:block lg:absolute bottom-0 md:-right-16 md:-top-12 lg:-right-17 lg:top-30 z-20 w-64 md:w-[500px] lg:w-[450px] overflow-hidden">
                            <Image
                                src={mobileAppHand}
                                alt="Hand holding phone demonstrating the app"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}