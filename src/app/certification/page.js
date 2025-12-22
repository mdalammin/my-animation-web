import CertificateImage from '@/components/certification/CertificateImage'
import Footer from '@/components/common/Footer'
import HeroSection from '@/components/common/HeroSection'
import NavigationMenu from '@/components/common/NavigationMenu'
import HomeFaq from '@/components/HomeFaq'
import Transformform from '@/components/TransformForm'
import React from 'react'

export default function Certificate() {
    return (
        <div>
            <div className="mt-[20px]">
                <NavigationMenu />
            </div>

            <div>
                <HeroSection />
            </div>

            <div>
                <CertificateImage />
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
