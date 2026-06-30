import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ValueChainSection from "@/components/sections/ValueChainSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ImpactSection from "@/components/sections/ImpactSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ValueChainSection />
        <ProductsSection />
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
