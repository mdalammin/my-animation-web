'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
    {
        question: "What is special about Schooldeeds?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        question: "What is special about Schooldeeds?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        question: "What is special about Schooldeeds?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        question: "What is special about Schooldeeds?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        question: "What is special about Schooldeeds?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
]

export default function HomeFaq() {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section className="bg-[#05070A] text-white py-16 px-4 md:px-12 lg:px-24 w-full relative overflow-hidden">
            {/* Background Gradient Effect - top right */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">

                {/* Left Column */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-medium mb-4">Why Schooldeeds?</h2>
                    <p className="text-gray-400 mb-12 text-lg">We are here to answer all your questions</p>

                    <div className="relative overflow-hidden rounded-3xl">
                        {/* Gradient Border/Background for the card */}
                        <div className="absolute inset-0 bg-[linear-gradient(106.76deg,rgba(31,185,232,0.4)_11.57%,rgba(222,70,70,0.4)_88.65%)]  backdrop-[blur(20px)]" />

                        <div className="relative bg-[#1a1f2e]/40 backdrop-blur-md p-8 md:p-10 rounded-3xl h-full flex flex-col justify-center items-center text-center overflow-hidden">
                            {/* Inner Gradient Overlay for the rich color effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-red-500/20" />

                            <h3 className="text-lg md:text-xl font-medium mb-6 relative z-10">Still got Questions?</h3>

                            <div>
                                <button className="group relative px-8 py-3 rounded-full text-sm text-white font-medium overflow-hidden transition-all hover:bg-white/5 cursor-pointer">
                                    {/* Gradient border using pseudo-element */}
                                    <div className="absolute inset-0 rounded-full p-[0px]">
                                        <div className="w-full h-full bg-gradient-to-r from-[#EA3D34] to-[#1FB9E8] rounded-full"></div>
                                    </div>

                                    {/* Content */}
                                    <span className="relative z-10 flex items-center gap-2">
                                        Contact Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </span>

                                    {/* Button background (optional) */}
                                    <div className="absolute inset-[1px] rounded-full bg-gray-900 group-hover:bg-gray-800/50 transition-colors"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Accordion */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="group cursor-pointer bg-[#FFFFFF1A] rounded-3xl"
                                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                            >
                                {/* Question - Rounded Full (Pill) with Gradient Border */}
                                <div className={`relative p-[1px] rounded-full transition-all duration-300 ${isOpen
                                    ? 'bg-gradient-to-r from-[#EA3D34] to-[#1FB9E8]'
                                    : 'bg-gradient-to-r from-[#EA3D34] to-[#1FB9E8]'
                                    }`}>
                                    <div className="relative bg-[#18181b] rounded-full px-6 py-4 flex justify-between items-center w-full">
                                        <h3 className="text-base md:text-lg font-medium pr-8 select-none">{faq.question}</h3>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-white' : 'text-gray-400'}`} />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Answer */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-gray-100 leading-relaxed text-sm md:text-base px-6 py-4 ">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
