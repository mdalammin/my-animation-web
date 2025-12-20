import React from 'react'
import Image from 'next/image'

export default function AboutUsCard({
    title = "",
    description = "",
    image,
    reverse
}) {
    return (
        <section className="w-full py-12 px-4 md:px-8 lg:px-12 relative overflow-hidden bg-[linear-gradient(132.62deg,rgba(31,185,232,0.1)_0%,rgba(222,70,70,0.1)_100%)]">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Gradient Border Container */}
                <div className="rounded-[20px] bg-[linear-gradient(106.76deg,rgba(31,185,232,0.1)_11.57%,rgba(222,70,70,0.1)_88.65%)] border-[#FFFFFF80] border-[1.5px]">
                    <div className="bg-[linear-gradient(132.62deg,rgba(31,185,232,0.1)_0%,rgba(222,70,70,0.1)_100%)] rounded-[20px] relative overflow-hidden p-8 md:p-12 lg:p-16">

                        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>

                            {/* Text Section */}
                            <div className="flex-1 space-y-6">
                                <h2 className="text-3xl md:text-4xl font-medium text-white">
                                    {title}
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-base font-light opacity-80">
                                    {description}
                                </p>
                            </div>

                            {/* Image Section */}
                            <div className="flex-1 w-full relative">
                                <div className="rounded-3xl overflow-hidden relative h-[300px] md:h-[400px] w-full">
                                    <Image
                                        src={image}
                                        alt={title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
