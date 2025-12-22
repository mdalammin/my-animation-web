import BenefitsAndRoles from '@/components/BenefitsAndRoles'
import HeroSection from '@/components/common/HeroSection'
import NavigationMenu from '@/components/common/NavigationMenu'
import HomeFaq from '@/components/HomeFaq'
import SimplePricing from '@/components/SimplePricing'
import Transformform from '@/components/TransformForm'
import Footer from "@/components/common/Footer";
import React from 'react'

export default function Subscription() {
    return (
        <div>
            <div className="mt-[20px]">
                <NavigationMenu />
            </div>

            <div>
                <HeroSection />
                <BenefitsAndRoles />
            </div>

            <div>
                <SimplePricing showButton="true" centerButton="false" />
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
