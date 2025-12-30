import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { VisionSection } from "@/components/VisionSection";
import { ProductsSection } from "@/components/ProductsSection";
import { TeamSection } from "@/components/TeamSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <ProductsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
