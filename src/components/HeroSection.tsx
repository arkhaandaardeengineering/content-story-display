import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-contain bg-no-repeat bg-[position:center_30%]"
        style={{ backgroundImage: `url(${heroBg})`, backgroundColor: "hsl(var(--foreground))" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/25 to-foreground/90" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-28 pb-20 min-h-screen flex flex-col justify-end text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 mb-6 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium backdrop-blur-sm border border-primary-foreground/20"
          >
            36 Years of Excellence in Pump Manufacturing
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight"
          >
            Sustainable Pumping
            <br />
            <span className="text-accent">Technology</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the breakthrough of our Hybrid Submersible BLDC Pumpsets — 
            seamlessly combining solar and electric power for a greener, 
            more efficient future in agriculture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow"
              asChild
            >
              <a href="#products">Explore Products</a>
            </Button>
            <Button
              size="lg"
              variant="hero"
              className="px-8 py-6 text-lg"
              asChild
            >
              <a href="#about">Learn More</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};
