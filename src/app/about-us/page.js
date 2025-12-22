import BenefitsAndRoles from '@/components/BenefitsAndRoles'
import Footer from '@/components/common/Footer'
import HeroSection from '@/components/common/HeroSection'
import NavigationMenu from '@/components/common/NavigationMenu'
import HomeFaq from '@/components/HomeFaq'
import Transformform from '@/components/TransformForm'
import AboutUsCard from '@/components/aboutus/AboutUsCard'
import React from 'react'


import about1 from "@/assets/aboutUs/about1.png"
import about2 from "@/assets/aboutUs/about2.png"
import about3 from "@/assets/aboutUs/about3.png"
import about4 from "@/assets/aboutUs/about4.png"

export default function AboutUs() {
    return (
        <div>
            <div className="mt-[20px]">
                <NavigationMenu />
            </div>

            <div>
                <HeroSection />
            </div>

            <div>
                <AboutUsCard
                    title="Who We Are"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    image={about1}
                    reverse={false}
                />
                <AboutUsCard
                    title="Our Mission"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    image={about2}
                    reverse={true}
                /><AboutUsCard
                    title="Our Vision"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    image={about3}
                    reverse={false}
                /><AboutUsCard
                    title="Why We Built SchoolDeeds"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    image={about4}
                    reverse={true}
                />
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
