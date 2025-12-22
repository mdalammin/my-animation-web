import BenefitsAndRoles from '@/components/BenefitsAndRoles'
import CareersFaq from '@/components/careers/CareersFaq'
import HeroSection from '@/components/common/HeroSection'
import NavigationMenu from '@/components/common/NavigationMenu'
import Footer from '@/components/Footer'
import HomeFaq from '@/components/HomeFaq'
import Transformform from '@/components/TransformForm'
import React from 'react'

export default function Careers() {
    return (
        <div>
            <div className="mt-[20px]">
                <NavigationMenu />
            </div>

            <div>
                <HeroSection />
            </div>

            <div>
                <CareersFaq />
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
