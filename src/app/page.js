import BenefitsAndRoles from "@/components/BenefitsAndRoles";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/common/HeroSection";
import NavigationMenu from "@/components/common/NavigationMenuDemo";
import DownloadApp from "@/components/DownloadApp";
import HomeFaq from "@/components/HomeFaq";
import SeeVideos from "@/components/SeeVideos";
import SimplePricing from "@/components/SimplePricing";
import Testimonials from "@/components/Testimonials";
import TransformForm from "@/components/TransformForm";
import TrustedBySlider from "@/components/TrustedBySlider";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto">
      <div className="mt-[20px]">
        <NavigationMenu />
      </div>

      <div>
        <HeroSection />
        <TrustedBySlider />
        <BenefitsAndRoles />
      </div>

      <div>
        <Testimonials />
      </div>

      <div>
        <SeeVideos />
      </div>

      <div>
        <SimplePricing />
      </div>

      <div>
        <DownloadApp />
      </div>

      <div>
        <HomeFaq />
      </div>

      <div>
        <TransformForm />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}