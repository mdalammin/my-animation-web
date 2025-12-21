import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import errorImage from "@/assets/404.png";
import NavigationMenu from "@/components/common/NavigationMenuDemo";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0b0f19] flex flex-col items-center justify-center px-4 text-white font-sans relative overflow-hidden">
            {/* Background Decorative Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1FB9E8]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#EA3D34]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full absolute top-10">
                <NavigationMenu />
            </div>
            <div className="max-w-2xl w-full text-center z-10 mt-24">
                {/* Error Image */}
                <div className="relative w-full max-w-md mx-auto mb-8 animate-pulse-slow">
                    <Image
                        src={errorImage}
                        alt="404 Not Found"
                        width={500}
                        height={500}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>

                {/* Text Content */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1FB9E8] to-[#EA3D34]">
                    Oops! Page Not Found
                </h1>
                <p className="text-gray-400 text-lg mb-6 max-w-md mx-auto leading-relaxed">
                    You’re Lost
                </p>

                {/* Back to Home Button */}
                <div className="flex justify-center">
                    <Link href="/">
                        <button className="group relative px-8 py-4 rounded-full text-base text-white font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95 cursor-pointer">
                            {/* Gradient border */}
                            <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#1FB9E8] to-[#EA3D34]">
                                <div className="w-full h-full bg-[#0b0f19] rounded-full transition-colors group-hover:bg-[#1A1F26]" />
                            </div>

                            {/* Content */}
                            <span className="relative z-10 flex items-center gap-3">
                                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                                Back to Home
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
