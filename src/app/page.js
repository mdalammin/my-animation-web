import NavigationMenu from "@/components/common/NavigationMenuDemo";
import ProductShowcaseSection from "@/components/ProductShowcaseSection";

export default function HeaderWithNavigation() {
  return (
    <div className="min-h-screen bg-gray-400 mx-auto">
<NavigationMenu/>
<ProductShowcaseSection/>
    </div>
  );
}