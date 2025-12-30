import heroBg from "@/assets/hero-bg-new.png";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden"
    >
      {/* Responsive hero image */}
      <img
        src={heroBg}
        alt="Arkha & Aarde DOMEQ hero background"
        className="absolute inset-0 h-full w-full object-cover object-[center_35%] sm:object-[center_32%] md:object-[center_30%]"
        loading="eager"
        decoding="async"
      />
    </section>
  );
};
