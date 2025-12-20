import BenefitsAndRoles from '@/components/BenefitsAndRoles'
import GridIcons from '@/components/clients/GridIcons'
import Footer from '@/components/common/Footer'
import HeroSection from '@/components/common/HeroSection'
import NavigationMenu from '@/components/common/NavigationMenuDemo'
import HomeFaq from '@/components/HomeFaq'
import Transformform from '@/components/TransformForm'
import React from 'react'

export default function Clients() {
    return (
        <div>
            <div className="mt-[20px]">
                <NavigationMenu />
            </div>

            <div>
                <HeroSection />
            </div>

            <div>
                <GridIcons />
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
