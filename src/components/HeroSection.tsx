import heroBg from "@/assets/hero-bg-new.png";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image - Full width hero */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center calc(30% - 30px)',
        }}
      />
    </section>
  );
};
