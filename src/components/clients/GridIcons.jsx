"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { MapPin } from "lucide-react";
import image from "@/assets/slider_icon.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const organizations = [
    {
        id: 1,
        name: "Abadpura",
        location: "Punjab",
        // Placeholder for logo - using text/icon for now
        logoText: "Abadpura Logo",
    },
    {
        id: 2,
        name: "Amritsar",
        location: "Punjab",
        logoText: "Amritsar Logo",
    },
    {
        id: 3,
        name: "Tejpur",
        location: "Assam",
        logoText: "Tejpur Logo",
    },
    {
        id: 4,
        name: "Begussarai",
        location: "Bihar",
        logoText: "Begussarai Logo",
    },
    {
        id: 5,
        name: "Katihar",
        location: "Bihar",
        logoText: "Katihar Logo",
    },
    {
        id: 6,
        name: "Delhi",
        location: "Delhi",
        logoText: "Delhi Logo",
    },
    {
        id: 7,
        name: "Tejpur",
        location: "Assam",
        logoText: "Tejpur Logo",
    },
    {
        id: 8,
        name: "Begussarai",
        location: "Bihar",
        logoText: "Begussarai Logo",
    },
    {
        id: 9,
        name: "Katihar",
        location: "Bihar",
        logoText: "Katihar Logo",
    },
    {
        id: 10,
        name: "Delhi",
        location: "Delhi",
        logoText: "Delhi Logo",
    },
    {
        id: 11,
        name: "Delhi",
        location: "Delhi",
        logoText: "Delhi Logo",
    },
    {
        id: 12,
        name: "Tejpur",
        location: "Assam",
        logoText: "Tejpur Logo",
    },
    {
        id: 13,
        name: "Begussarai",
        location: "Bihar",
        logoText: "Begussarai Logo",
    },
    {
        id: 14,
        name: "Katihar",
        location: "Bihar",
        logoText: "Katihar Logo",
    },
    {
        id: 15,
        name: "Delhi",
        location: "Delhi",
        logoText: "Delhi Logo",
    },
    {
        id: 16,
        name: "Delhi",
        location: "Delhi",
        logoText: "Delhi Logo",
    },
    {
        id: 17,
        name: "Tejpur",
        location: "Assam",
        logoText: "Tejpur Logo",
    },
    {
        id: 18,
        name: "Begussarai",
        location: "Bihar",
        logoText: "Begussarai Logo",
    },
    {
        id: 19,
        name: "Katihar",
        location: "Bihar",
        logoText: "Katihar Logo",
    },
    {
        id: 20,
        name: "Delhi",
        location: "Delhi",
        logoText: "Delhi Logo",
    },
    {
        id: 21,
        name: "Delhi",
        location: "Delhi",
        logoText: "Delhi Logo",
    },
    {
        id: 22,
        name: "Delhi",
        location: "Delhi",
        logoText: "Delhi Logo",
    },
    {
        id: 23,
        name: "Delhi",
        location: "Delhi",
        logoText: "Delhi Logo",
    },
    {
        id: 24,
        name: "Delhi",
        location: "Delhi",
        logoText: "Delhi Logo",
    },
    {
        id: 25,
        name: "Delhi",
        location: "Delhi",
        logoText: "Delhi Logo",
    },
];

export default function GridIcons() {
    return (
        <div className="w-full py-7  text-white" style={{
            background:
                "linear-gradient(99.58deg, rgba(31, 185, 232, 0.2) 0%, rgba(222, 70, 70, 0.2) 88.2%, rgba(219, 72, 73, 0.2) 100%)",
        }}>
            {/* <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold">Schooldeeds is Trusted by</h2>
            </div> */}

            <div className="max-w-4xl mx-auto my-14">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-3">
                    {organizations.map((org) => (
                        <SwiperSlide key={org.id}>
                            <div
                                className="group relative p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 border border-[#FFFFFF1A] hover:border-[#FFFFFF80] hover:bg-[#FFFFFF1A] w-[130px] mx-auto h-[208px] cursor-pointer mb-3"

                            >
                                {/* Logo Placeholder */}
                                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                                    <Image
                                        src={image}
                                        alt="icon"
                                    />
                                </div>

                                <div className="text-center">
                                    <h3 className="font-medium text-lg mb-1">{org.name}</h3>
                                    <p className="text-sm text-gray-300">{org.location}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </div>
        </div>
    );
}
