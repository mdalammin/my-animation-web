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
                {/* Background Wave Effect (Simplified CSS/SVG representation) */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 50 Q 50 20 100 50 T 200 50" stroke="white" fill="transparent" strokeWidth="0.5" />
                        <path d="M0 60 Q 50 30 100 60 T 200 60" stroke="white" fill="transparent" strokeWidth="0.5" />
                        <path d="M0 70 Q 50 40 100 70 T 200 70" stroke="red" fill="transparent" strokeWidth="0.5" />
                    </svg>
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

                {/* Main Interface Container */}
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm p-6 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Left Sidebar: Roles */}
                        <div className="lg:col-span-2 flex flex-col gap-2 border-r border-white/10 pr-6">
                            {roles.map((role) => (
                                <button
                                    key={role.name}
                                    onClick={() => setActiveRole(role.name)}
                                    className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 gap-2 ${activeRole === role.name
                                            ? "bg-white/10 text-white shadow-lg"
                                            : "text-gray-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {role.icon}
                                    <span className="text-sm font-medium">{role.name}</span>
                                </button>
                            ))}
                        </div>

                        {/* Center: Analytics Grid */}
                        <div className="lg:col-span-6 flex flex-col justify-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[1, 2, 3, 4].map((item) => (
                                    <div
                                        key={item}
                                        className="bg-[#1e2532]/80 border border-white/10 rounded-2xl p-6 hover:shadow-xl transition-shadow backdrop-blur-md"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg">
                                                <BarChart3 size={20} className="text-white" />
                                            </div>
                                            <h4 className="font-semibold text-white">
                                                Realtime Analytics
                                            </h4>
                                        </div>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 flex justify-center md:justify-start">
                                <button className="px-6 py-3 rounded-full border border-gray-600 text-sm font-medium hover:bg-white hoer:text-black hover:border-white transition-colors flex items-center gap-2">
                                    Explore all Features <span className="text-lg">→</span>
                                </button>
                            </div>
                        </div>

                        {/* Right: Phone Mockup */}
                        <div className="lg:col-span-4 flex justify-center items-center relative">
                            {/* Hand Mockup (Simulated with CSS shapes/gradients or simplified) */}
                            {/* Since I can't easily draw a hand with CSS, I'll focus on the phone frame and screen */}

                            <div className="relative w-[280px] h-[580px] bg-black rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                {/* Top Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>

                                {/* Screen Content */}
                                <div className="w-full h-full bg-white text-gray-800 overflow-y-auto pt-8 pb-4 px-4">
                                    {/* Header */}
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-sm font-bold">9:30</h3>
                                        <div className="flex gap-1">
                                            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                                            <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
                                        </div>
                                    </div>

                                    {/* Profile */}
                                    <div className="bg-pink-50 rounded-2xl p-4 mb-4 text-center">
                                        <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 border-2 border-white shadow-sm"></div>
                                        <h4 className="font-bold text-sm">Aparna Jain</h4>
                                        <p className="text-xs text-gray-500">@aparna.jain</p>

                                        <div className="grid grid-cols-2 gap-2 mt-4 text-left">
                                            <div className="bg-white p-2 rounded-lg text-[10px]">
                                                <span className="block text-gray-400">Class</span>
                                                <span className="font-bold">12</span>
                                            </div>
                                            <div className="bg-white p-2 rounded-lg text-[10px]">
                                                <span className="block text-gray-400">Section</span>
                                                <span className="font-bold">A</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sections */}
                                    <div className="bg-gray-50 rounded-xl p-3 mb-2">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-xs font-bold">Today's School</span>
                                            <span className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full">Open</span>
                                        </div>
                                        <p className="text-[10px] text-gray-500">07:00 AM to 12:30 PM</p>
                                    </div>

                                    {/* Icons Grid */}
                                    <div className="grid grid-cols-3 gap-2 mt-4">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="aspect-square bg-white rounded-xl shadow-sm flex flex-col items-center justify-center p-2">
                                                <div className="w-8 h-8 bg-purple-50 rounded-full mb-1"></div>
                                                <div className="h-2 w-12 bg-gray-100 rounded"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
