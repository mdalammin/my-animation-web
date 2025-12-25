'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Upload, ChevronRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import careerfaq from "@/assets/careerForm.png"

export default function ApplyNowModal({ isOpen, onClose, jobTitle }) {
    if (!isOpen) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl
                        px-4 py-2
                        [background:linear-gradient(106.76deg,rgba(31,185,232,0.6)_11.57%,rgba(222,70,70,0.6)_88.65%)]
                        backdrop-blur-xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-30 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full bg-black/20"
                        >
                            <X className="w-5 h-5 md:w-6 md:h-6 cursor-pointer" />
                        </button>

                        <div className="flex flex-col md:flex-row min-h-[400px] md:min-h-[500px]">
                            {/* Left Side - Info */}
                            <div className="flex-1 p-6 md:p-12 flex flex-col justify-center relative">
                                <div className="relative z-10">
                                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                                        Ready to Join Schooldeeds
                                    </h2>
                                    <p className="text-white/70 text-base md:text-lg mb-6 md:mb-8">
                                        Fill this form and schedule an Interview
                                    </p>

                                    {/* Illustration */}
                                    <div className="hidden md:flex justify-center items-center">
                                        <div className="relative w-[280px] h-[280px]">
                                            <Image
                                                src={careerfaq}
                                                alt="Application illustration"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Background glow */}
                                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#1FB9E8]/20 blur-[100px] pointer-events-none" />
                            </div>

                            {/* Right Side - Form */}
                            <div className="flex-1 p-6 md:p-12 flex flex-col justify-center">
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    {/* Name */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Your Full Name"
                                            className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-[#1FB9E8]/70 focus:bg-white/15 transition-all shadow-lg"
                                        />
                                    </div>

                                    {/* Dropdown for Position */}
                                    <div className="relative group">
                                        <select
                                            defaultValue={jobTitle || ""}
                                            className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white/80 appearance-none focus:outline-none focus:border-[#1FB9E8]/70 focus:bg-white/15 transition-all cursor-pointer shadow-lg pr-12"
                                        >
                                            <option value="" disabled className="bg-slate-900 text-white">Select Position</option>
                                            <option value="Software Developer – Full Stack (React / Node.js)" className="bg-slate-900 text-white">Software Developer – Full Stack (React / Node.js)</option>
                                            <option value="Mobile App Developer (Flutter / React Native)" className="bg-slate-900 text-white">Mobile App Developer (Flutter / React Native)</option>
                                            <option value="UI/UX Designer" className="bg-slate-900 text-white">UI/UX Designer</option>
                                            <option value="QA Tester / Software Quality Analyst" className="bg-slate-900 text-white">QA Tester / Software Quality Analyst</option>
                                            <option value="Customer Support Executive" className="bg-slate-900 text-white">Customer Support Executive</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
                                            <ChevronDown className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                                        </div>
                                    </div>

                                    {/* Resume Upload */}
                                    <div className="relative">
                                        <label className="flex items-center gap-3 w-full bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white/60 cursor-pointer hover:bg-white/15 hover:text-white transition-all shadow-lg">
                                            <Upload className="w-5 h-5" />
                                            <span>Upload Resume</span>
                                            <input type="file" className="hidden" />
                                        </label>
                                    </div>

                                    {/* Email */}
                                    <div className="relative">
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-[#1FB9E8]/70 focus:bg-white/15 transition-all shadow-lg"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-[#1FB9E8]/70 focus:bg-white/15 transition-all shadow-lg"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full cursor-pointer group relative flex items-center justify-between bg-white text-black rounded-full px-8 py-4 font-semibold overflow-hidden transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#EA3D34] to-[#1FB9E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="relative z-10 group-hover:text-white transition-colors duration-300 font-bold">Submit</span>
                                        <ChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1 text-black group-hover:text-white" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
