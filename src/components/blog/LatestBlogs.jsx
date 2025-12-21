import React from "react";
import { ArrowRight } from "lucide-react";
import blogImage from "../../assets/aboutUs/about1.png";

const articles = [
    {
        id: 1,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
        date: "03 Dec 2025",
        image: blogImage,
    },
    {
        id: 2,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
        date: "03 Dec 2025",
        image: blogImage,
    },
    {
        id: 3,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
        date: "03 Dec 2025",
        image: blogImage,
    },
    {
        id: 4,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
        date: "03 Dec 2025",
        image: blogImage,
    },
    {
        id: 5,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
        date: "03 Dec 2025",
        image: blogImage,
    },
    {
        id: 6,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
        date: "03 Dec 2025",
        image: blogImage,
    },
];

export default function LatestBlogs() {
    return (
        <div className="bg-[linear-gradient(132.62deg,rgba(31,185,232,0.1)_0%,rgba(222,70,70,0.1)_100%)] backdrop-blur-[20px] text-white py-20 px-4 md:px-8 font-sans min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        Latest from the Blog
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                        Stay updated with new articles every week—from platform improvements
                        to education technology trends.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {articles.map((article) => (
                        <div
                            key={article.id}
                            className="group relative rounded-3xl p-[1px] bg-transparent hover:bg-[linear-gradient(90deg,#EA3D34_0%,#1FB9E8_100%)] transition-all duration-300"
                        >
                            {/* Inner Card content with dark background to mask the center of the gradient border */}
                            <div className="bg-[#1A1F26] rounded-[23px] h-full overflow-hidden flex flex-col">
                                {/* Image Container */}
                                <div className="h-56 w-[90%] mx-auto overflow-hidden group-hover:w-full mt-5 group-hover:mt-0">
                                    <img
                                        src={article.image.src || article.image}
                                        alt="Blog Cover"
                                        className="w-full h-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-medium mb-3 leading-snug">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm font-light mb-auto leading-relaxed">
                                        {article.description}
                                    </p>
                                    <p className="text-gray-500 text-xs mt-6">{article.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="flex justify-center">
                    <button className="group relative px-8 py-3 rounded-full text-sm text-white font-medium overflow-hidden transition-all hover:bg-white/5 cursor-pointer">
                        {/* Gradient border using pseudo-element */}
                        <div className="absolute inset-0 rounded-full p-[0px]">
                            <div className="w-full h-full bg-gradient-to-r from-[#EA3D34] to-[#1FB9E8] rounded-full"></div>
                        </div>

                        {/* Content */}
                        <span className="relative z-10 flex items-center gap-2">
                            Load More Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>

                        {/* Button background (optional) */}
                        <div className="absolute inset-[1px] rounded-full bg-gray-900 group-hover:bg-gray-800/50 transition-colors"></div>
                    </button>
                </div>
            </div>
        </div>
    );
}
