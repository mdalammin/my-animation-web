import BenefitsAndRoles from '@/components/BenefitsAndRoles'
import NavigationMenu from '@/components/common/NavigationMenuDemo'
import Footer from '@/components/Footer'
import HomeFaq from '@/components/HomeFaq'
import Transformform from '@/components/TransformForm'
import React from 'react'

import articleBg from "@/assets/articles.png"
import ArticleDes from '@/components/articles/ArticleDes'

export default function Articles() {
    return (
        <div>
            <div className="relative h-[80vh] min-h-[500px] w-full flex flex-col items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${articleBg.src || articleBg})` }}
                >
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[0px]"></div>
                </div>

                {/* Navigation Positioning */}
                <div className="absolute top-0 left-0 w-full z-20 mt-4 px-4">
                    <div className="max-w-7xl mx-auto backdrop-blur-md bg-white/5 rounded-[20px] border border-white/10">
                        <NavigationMenu bgTransparent="true" />
                    </div>
                </div>

                {/* Hero Content */}
                <div className="absolute bottom-30 z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-tight drop-shadow-lg">
                        Streamlining School Operations with School Management Software
                    </h1>
                    <p className="text-gray-300 text-sm md:text-base font-medium">
                        03 Dec 2025
                    </p>
                </div>
            </div>

            <div>
                <ArticleDes />
            </div>

            <div>
                <BenefitsAndRoles />
            </div>

            <div>
                <HomeFaq />
            </div>

            <div>
                <Transformform />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}
