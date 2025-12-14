import BenefitsAndRoles from "@/components/BenefitsAndRoles";
import HeroSection from "@/components/common/HeroSection";
import NavigationMenu from "@/components/common/NavigationMenuDemo";
import TrustedBySlider from "@/components/TrustedBySlider";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto">
        <div className="mt-[20px]">
          <NavigationMenu/>
        </div>

        <div>
          <HeroSection/>
          <TrustedBySlider/>
          <BenefitsAndRoles/>
        </div>
        
    </div>
  );
}