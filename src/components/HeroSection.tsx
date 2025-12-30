import heroBg from "@/assets/hero-bg-new.png";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background Image - Full width hero */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />
    </section>
  );
};
