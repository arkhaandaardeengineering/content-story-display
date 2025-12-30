import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
export const HeroSection = () => {
  return <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-contain bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundColor: "#ffffff",
      backgroundPosition: "center calc(30% - 30px)"
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/25 to-foreground/90" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 min-h-screen text-center items-center justify-start flex flex-col">
        {/* Top Badge - positioned above the background "Each pump" text */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2
      }} style={{
        paddingTop: "calc(7rem + 30px)"
      }}>
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-primary-foreground/20 mt-[40px] bg-[#042f1b] text-primary-foreground">
            36 Years of Excellence in Pump Manufacturing
          </span>
        </motion.div>

        {/* Spacer to push bottom content down */}
        <div className="flex-1" />

        {/* Bottom Content - positioned on the background image */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="max-w-4xl mx-auto pb-32">
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5,
          duration: 0.6
        }} className="text-lg max-w-2xl mx-auto leading-relaxed text-center font-semibold md:text-lg mb-[150px] text-foreground">
            Experience the breakthrough of our Hybrid Submersible BLDC Pumpsets — seamlessly combining solar and electric power for a greener, more efficient future in agriculture.
          </motion.p>

          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.6
        }} className="text-3xl md:text-5xl font-display font-bold text-primary-foreground leading-tight mb-[60px] lg:text-6xl">
            Sustainable Pumping
            <br />
            <span className="text-accent">Technology</span>
          </motion.h1>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.7,
          duration: 0.6
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow" asChild>
              <a href="#products">Explore Products</a>
            </Button>
            <Button size="lg" variant="hero" className="px-8 py-6 text-lg" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a href="#about" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1,
        duration: 0.6
      }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          repeat: Infinity,
          duration: 1.5
        }}>
            <ChevronDown size={32} />
          </motion.div>
        </motion.a>
      </div>
    </section>;
};