import BenefitsAndRoles from '@/components/BenefitsAndRoles'
import Footer from '@/components/common/Footer'
import HeroSection from '@/components/common/HeroSection'
import NavigationMenu from '@/components/common/NavigationMenu'
import HomeFaq from '@/components/HomeFaq'
import SeeVideos from '@/components/SeeVideos'
import Transformform from '@/components/TransformForm'
import React from 'react'

export default function VideoTutorials() {
    return (
        <div>
            <div className="mt-[20px]">
                <NavigationMenu />
            </div>

            <div>
                <HeroSection />
            </div>

            <div>
                <SeeVideos />
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
