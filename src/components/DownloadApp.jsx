import React from "react";
import Image from "next/image";
import mobileAppHand from "../assets/right-hand-color.png";

export default function DownloadApp() {
    return (
        <div className="mt-[210px] py-20 px-4 md:px-8 font-sans flex items-center justify-center relative">
            {/* Background decoration (optional lines integration would go here, kept simple for now) */}

            <div className="md:max-w-4xl lg:max-w-6xl w-full relative">
                <div
                    className="rounded-[30px] bg-[linear-gradient(106.76deg,rgba(31,185,232,0.4)_11.57%,rgba(222,70,70,0.4)_88.65%)] backdrop-blur-[20px] relative flex flex-col md:flex-row items-center justify-center lg:justify-between gap-5 p-8 md:p-16 min-h-[400px]"
                    style={{ clipPath: "inset(-200px -200px 0px -200px)" }}
                >

                    {/* Text Content */}
                    <div className="z-10 md:w-1/2 text-center md:text-center lg:text-left mb-10 md:mb-0">
                        <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-4">
                            Download Schooldeeds
                        </h2>
                        <p className="text-gray-200 md:text-md lg:text-lg mb-8">
                            Try it yourself and discover the ease
                        </p>

                        <div className="flex flex-col lg:flex-row gap-4 justify-start items-center">
                            {/* Play Store Button */}
                            <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-[linear-gradient(270deg,#EA3D34_0%,#1FB9E8_98.7%)] hover:brightness-110 transition-all text-white shadow-lg">
                                <svg
                                    className="w-8 h-8 fill-current"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.84L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.16L16.81,8.88L14.54,11.15L3.84,2.16H6.05Z" />
                                </svg>
                                <div className="flex flex-col items-start leading-tight">
                                    <span className="text-xs font-medium opacity-90">GET IT ON</span>
                                    <span className="md:text-md lg:text-lg font-bold">Play Store</span>
                                </div>
                            </button>

                            {/* App Store Button */}
                            <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-[linear-gradient(270deg,#EA3D34_0%,#1FB9E8_98.7%)] hover:brightness-110 transition-all text-white shadow-lg">
                                <svg
                                    className="w-8 h-8 fill-current"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.04,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" />
                                </svg>
                                <div className="flex flex-col items-start leading-tight">
                                    <span className="text-xs font-medium opacity-90">Download on the</span>
                                    <span className="md:text-md lg:text-lg font-bold">App Store</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Image - Floating out of container */}
                    <div className="hidden lg:block lg:absolute bottom-0 md:-right-16 md:-top-12 lg:-right-17 lg:-top-32 z-20 w-64 md:w-[500px] lg:w-[550px] overflow-hidden">
                        <Image
                            src={mobileAppHand}
                            alt="Hand holding phone demonstrating the app"
                            className="w-full h-auto"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}
