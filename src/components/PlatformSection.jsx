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
                <div className=" border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]
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
                        <div className="flex-1 w-full max-w-2xl relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[1, 2, 3, 4].map((item) => (
                                    <div
                                        key={item}
                                        className="bg-[#1c222e]/90 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-[#232a38] transition-colors"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-gradient-to-br from-[#ef4444] to-[#f97316] rounded-lg">
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
                                <button className="group relative px-8 py-3 rounded-full border border-gray-600 text-sm text-white font-medium overflow-hidden transition-all hover:border-white hover:bg-white/5">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Explore all Features <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right: Phone Mockup */}
                        <div className="w-full lg:w-[400px] flex justify-center items-center relative z-10 perspective-[1000px]">
                            {/* Hand Image Placeholder - using a div with gradient to simulate for now, or just the phone */}
                            {/* In a real scenario, we'd use <img src="/hand-mockup.png" draggable={false} className="absolute inset-0 w-full h-full object-cover" /> */}

                            {/* Hand/Arm Shadow/Gradient */}
                            <div className="absolute right-[-50px] bottom-[-100px] w-[500px] h-[500px] bg-[#dfae9d] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>

                            <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-[#2d2d2d] shadow-2xl overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                                {/* Top Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20"></div>

                                {/* Screen Content */}
                                <div className="w-full h-full bg-white text-gray-800 pt-10 px-4 pb-6 overflow-hidden flex flex-col">
                                    {/* Status Bar */}
                                    <div className="flex justify-between items-center mb-6 px-1">
                                        <h3 className="text-xs font-bold text-gray-900">9:30</h3>
                                        <div className="flex gap-1 items-center">
                                            <div className="w-3 h-3 text-black"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8 8 8z" /></svg></div>
                                        </div>
                                    </div>

                                    {/* Profile Card */}
                                    <div className="relative mb-6">
                                        <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 blur-xl opacity-50"></div>
                                        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-sm text-center">
                                            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 border-2 border-white shadow-md relative overflow-hidden">
                                                <User className="w-full h-full p-2 text-gray-400" />
                                            </div>
                                            <h4 className="font-bold text-gray-900 text-sm">Aparna Jain</h4>
                                            <p className="text-[10px] text-gray-500 mb-4">@aparna.jain</p>

                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="bg-blue-50/50 p-2 rounded-xl">
                                                    <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Class</span>
                                                    <span className="font-bold text-blue-600 text-sm">12</span>
                                                </div>
                                                <div className="bg-purple-50/50 p-2 rounded-xl">
                                                    <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Section</span>
                                                    <span className="font-bold text-purple-600 text-sm">A</span>
                                                </div>
                                                <div className="bg-cyan-50/50 p-2 rounded-xl">
                                                    <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Father</span>
                                                    <span className="font-bold text-cyan-600 text-[10px] truncate">Yash Jain</span>
                                                </div>
                                                <div className="bg-pink-50/50 p-2 rounded-xl">
                                                    <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Mother</span>
                                                    <span className="font-bold text-pink-600 text-[10px] truncate">Simi Jain</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Status Card */}
                                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3 mb-4 border border-green-100/50 flex justify-between items-center shadow-sm">
                                        <div>
                                            <span className="block text-xs font-bold text-gray-800">Today's School</span>
                                            <span className="text-[9px] text-gray-500">07:00 AM to 12:30 PM</span>
                                        </div>
                                        <span className="text-[10px] bg-white text-green-600 px-2 py-1 rounded-full font-bold shadow-sm">Open</span>
                                    </div>

                                    {/* Warning/Alert */}
                                    <div className="bg-red-50 rounded-xl p-3 mb-6 border border-red-100/50">
                                        <p className="text-[10px] text-red-500 font-medium">Alert: <span className="text-red-400">Upcoming exam schedule released.</span></p>
                                    </div>


                                    {/* Homework Section */}
                                    <div className="mt-auto">
                                        <div className="flex justify-between items-center mb-3">
                                            <h5 className="text-xs font-bold text-gray-800">Latest Homeworks</h5>
                                            <span className="text-[10px] text-blue-500 bg-blue-50 px-2 py-1 rounded-full">View All</span>
                                        </div>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="bg-white border border-gray-100 rounded-xl p-2 flex flex-col items-center gap-2 shadow-sm">
                                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                                                        <BookOpen size={14} className="text-gray-400" />
                                                    </div>
                                                    <div className="w-12 h-1 bg-gray-100 rounded-full"></div>
                                                    <div className="w-8 h-1 bg-gray-100 rounded-full"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}