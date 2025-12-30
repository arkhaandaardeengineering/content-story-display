import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Vision Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-10 sm:mb-16 md:mb-20"
        >
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider block text-center mb-3 sm:mb-4">
            Our Vision
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-4 sm:mb-6 md:mb-8 px-2">
            Empowering Agriculture,
            <br />
            <span className="text-gradient">Energizing Nations</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed text-center px-2">
            Arkha & Aarde committed to redefine the future of agriculture where innovation 
            meets sustainability. At the forefront of our technological breakthrough stands 
            the Hybrid Submersible pumping system, a pioneering solution designed to elevate 
            efficiency, reduce costs, and empower farmers and Governments alike.
          </p>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed text-center mt-4 sm:mt-6 px-2">
            This cutting-edge technology offers a dynamic power-sharing solution that not 
            only reduces the load on governments but also enhances agricultural productivity.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground mb-4 px-2">
              Hybrid Solar BLDC Submersible Pumping Systems
            </h3>
          </div>
          <div className="aspect-video max-w-4xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-card border border-border">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/eh8vfEcVxDo"
              title="Arkha & Aarde Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
