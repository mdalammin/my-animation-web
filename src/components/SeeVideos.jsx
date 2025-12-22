"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";

const videos = [
    {
        id: "1",
        title: "French Greetings (Day - 1) || French from Hindi || By Kahkasha || Schooldeeds ||",
        channel: "Schooldeeds",
        videoUrl: "https://www.youtube.com/embed/z1_jCQX3AtM?si=fXgyidjeqPheAnQ-", // Demo Placeholder
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        duration: "7:13",
        views: "24 views",
        time: "37 hours ago"
    },
    {
        id: "2",
        title: "French Greetings (Day - 2) || French from Hindi || By Kahkasha || Schooldeeds ||",
        channel: "Schooldeeds",
        videoUrl: "https://www.youtube.com/embed/pOKVVLnvs3s?si=lbtKZFO6tAR8RHmi", // Demo Placeholder
        thumbnail: "https://img.youtube.com/vi/M7lc1UVf-VE/maxresdefault.jpg",
        duration: "3:14",
        views: "20 views",
        time: "8 days ago"
    },
    {
        id: "3",
        title: "Student's Documents || Maintain your Student Data",
        channel: "Schooldeeds",
        videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY", // Demo Placeholder
        thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/maxresdefault.jpg",
        duration: "4:39",
        views: "50 views",
        time: "9 days ago"
    },
    {
        id: "4",
        title: "Present Conditional Tense in French (Day...)",
        channel: "Schooldeeds",
        videoUrl: "https://www.youtube.com/embed/L_jWHffIx5E", // Demo Placeholder
        thumbnail: "https://img.youtube.com/vi/L_jWHffIx5E/maxresdefault.jpg",
        duration: "5:20",
        views: "40 views",
        time: "6 months ago"
    },
    {
        id: "5",
        title: "Future Perfect Tense in French (Day - 21)...",
        channel: "Schooldeeds",
        videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4", // Demo Placeholder
        thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg",
        duration: "5:51",
        views: "7 views",
        time: "6 months ago"
    }
];

export default function SeeVideos() {
    const [currentVideo, setCurrentVideo] = useState(videos[0]);

    return (
        <section className="bg-[#060A0F] text-white py-24 px-4 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        See our Platform in Action
                    </h2>
                    <p className="text-gray-400">
                        Watch a quick overview of how Schooldeeds can simplify your daily operations
                    </p>
                </div>

                {/* Video Player Container */}
                <div className="w-full max-w-[1124px] bg-black flex flex-col lg:flex-row overflow-hidden shadow-2xl border border-gray-800 lg:h-[500px]">

                    {/* Main Video Player Area (Left) */}
                    <div className="w-full lg:w-[350px] aspect-video lg:h-full lg:flex-1 bg-black relative">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`${currentVideo.videoUrl}?autoplay=0`}
                            title={currentVideo.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    {/* Playlist Sidebar (Right) */}
                    <div className="w-full lg:w-[360px] bg-[#1f1f1f] flex flex-col flex-shrink-0 border-t lg:border-t-0 lg:border-l border-gray-700">

                        {/* Playlist Header */}
                        <div className="p-4 border-b border-gray-700">
                            <h3 className="text-sm font-semibold text-gray-300 mb-2">#schooldeeds.com</h3>
                            <div className="flex gap-4 text-xs text-gray-400">
                                <button className="hover:text-white transition-colors">Prev</button>
                                <button className="hover:text-white transition-colors">Next</button>
                            </div>
                        </div>

                        {/* Playlist Items */}
                        <div className="flex-1 overflow-y-auto max-h-[300px] lg:max-h-none custom-scrollbar">
                            {videos.map((video) => (
                                <div
                                    key={video.id}
                                    onClick={() => setCurrentVideo(video)}
                                    className={`flex gap-3 p-3 cursor-pointer transition-colors hover:bg-[#303030] ${currentVideo.id === video.id ? 'bg-[#303030]' : ''}`}
                                >
                                    {/* Thumbnail */}
                                    <div className="relative w-[120px] h-[68px] flex-shrink-0 bg-gray-800 rounded overflow-hidden">
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-1 right-1 bg-black/80 text-[10px] px-1 font-medium rounded">
                                            {video.duration}
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex flex-col justify-between py-0.5 overflow-hidden">
                                        <h4 className="text-sm font-medium text-white line-clamp-2 leading-tight">
                                            {video.title}
                                        </h4>
                                        <div className="text-[11px] text-gray-400">
                                            <p>{video.channel}</p>
                                            <p>{video.views} • {video.time}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
