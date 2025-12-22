import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin, X, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero_bg.png"


const HeroSection = ({ isImage }) => {
  return (
    <div className="relative w-full bg-[#050505] overflow-hidden flex flex-col items-center justify-start pt-20">
      {/* Background patterns could go here (e.g. wireframe mesh) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent"></div>

      {/* Wireframe lines (Simulated with SVG or CSS) */}
      <div className="absolute top-0 left-0 w-full h-[600px] opacity-30 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="cyan" strokeWidth="0.5" />
            </pattern>
          </defs>
          {/* Abstract curves could be drawn here, simpler to just have a subtle grid or gradient for now */}
          <rect width="100%" height="100%" fill="url(#grid)" mask="url(#mask)" />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 flex flex-col items-center text-center mt-10 md:mt-20">

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
          <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#1FB9E8_32.69%,#DE4646_54.33%)]">
            Manage your school
          </span>
          <br className="hidden md:block" />
          <span className="text-white"> with one secure, cloud-based platform</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mb-10 leading-relaxed">
          From fees to attendance, from parents to transport
          <br className="hidden md:block" />
          SchoolDeeds gives you full control, anywhere, any device.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-20">
          <button className="group relative px-8 py-3 rounded-full text-sm text-white font-medium overflow-hidden transition-all hover:bg-white/5">
            {/* Gradient border using pseudo-element */}
            <div className="absolute inset-0 rounded-full p-[0px]">
              <div className="w-full h-full bg-gradient-to-r from-[#EA3D34] to-[#1FB9E8] rounded-full"></div>
            </div>

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
              Request For Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>

            {/* Button background (optional) */}
            <div className="absolute inset-[1px] rounded-full bg-transparent group-hover:bg-gray-800/50 transition-colors"></div>
          </button>

          <button className="group relative px-8 py-3 rounded-full text-sm text-white font-medium overflow-hidden transition-all hover:bg-white/5">
            {/* Gradient border using pseudo-element */}
            <div className="absolute inset-0 rounded-full p-[0px]">
              <div className="w-full h-full bg-gradient-to-r from-[#EA3D34] to-[#1FB9E8] rounded-full"></div>
            </div>

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
              Explore Our Plans <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>

            {/* Button background (optional) */}
            <div className="absolute inset-[1px] rounded-full bg-gray-900 group-hover:bg-gray-800/50 transition-colors"></div>
          </button>
        </div>

        {/* Illustration Area */}
        {
          isImage &&
          <>
            <div className="w-full max-w-5xl">
              {/* Displaying generated image if possible, otherwise placeholder */}
              <div className="w-full  flex items-end justify-center">
                {/* This img tag sources the artifact locally for preview if supported, otherwise explicit path needed */}
                <Image
                  src={heroBg}
                  alt="hero"
                ></Image>
                {/* Overlay to fade bottom into dark if needed */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050505] to-transparent"></div>
              </div>
            </div>
          </>
        }

      </div>

      {/* Sidebar (Socials) */}
      <div className={`hidden lg:flex absolute left-25 ${isImage ? "bottom-0" : "-bottom-30"}  -translate-y-1/2 flex-col items-center gap-8 z-50`}>
        {/* <div className="w-[1px] h-24 bg-gray-700"></div> */}
        <span className="text-gray-500 uppercase tracking-[0.2em] text-xs [writing-mode:vertical-lr] rotate-180">
          Follow Us
        </span>
        <div className="w-[1px] h-12 bg-gray-700"></div>

        <div className="flex flex-col gap-6">
          <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></Link>
          <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></Link>
          <Link href="#" className="text-gray-500 hover:text-white transition-colors"><X className="w-5 h-5" /></Link>
          <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></Link>
          <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
