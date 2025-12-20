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

export default function CareersFaq() {

    const [openIndex, setOpenIndex] = useState(0)

    return (
        <div className='bg-[linear-gradient(132.62deg,rgba(31,185,232,0.1)_0%,rgba(222,70,70,0.1)_100%)]'>
            <div className='pt-10'>
                <div className='text-center text-gray-200'>
                    <h2 className='text-3xl font-semibold mb-3'>Openings at Schooldeeds!</h2>
                    <p>You’ll be part of a supportive environment that values innovation, continuous learning, and the freedom to take ownership of your work.</p>
                </div>
                {/* Right Column - Accordion */}
                <div className="max-w-4xl mx-auto flex flex-col gap-4 pt-9 pb-24 text-white">
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
        </div>
    )
}
