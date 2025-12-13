import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Battery, Wallet, Building2, TreeDeciduous } from "lucide-react";

const benefits = [
  {
    icon: Battery,
    title: "Energy Efficiency",
    description:
      "By intelligently changing between electrical power and solar energy, our hybrid pumpsets enhance energy usage and ensure farms have a consistent and dependable power source.",
  },
  {
    icon: Wallet,
    title: "Cost-Effective Farming",
    description:
      "Farmers will significantly reduce their dependency on conventional electricity sources by utilizing solar power, which will decrease operating expenses and improve profitability.",
  },
  {
    icon: Building2,
    title: "Government Collaboration",
    description:
      "Farmers and governments can now work together. Excess solar energy produced during times of low demand can be fed into the grid, contributing to the nation's power supply.",
  },
  {
    icon: TreeDeciduous,
    title: "Environmental Management",
    description:
      "We are committed to sustainable methods that help farms both economically and environmentally. Our technology helps global efforts to reduce climate change and carbon emissions.",
  },
];

export const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Vision
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
              Empowering Agriculture,
              <br />
              <span className="text-gradient">Energizing Nations</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Arkha & Aarde, we witness every day when green energy methods 
              coexist peacefully with agricultural activities. Our goal is to 
              completely change the agricultural sector with our innovative 
              Hybrid Submersible BLDC Pumpsets that combine solar and electrical 
              power sources seamlessly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This cutting-edge technology offers a dynamic power-sharing solution 
              that not only reduces the load on governments but also enhances 
              agricultural productivity.
            </p>
          </motion.div>

          {/* Right - Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              See Our Technology in Action
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch how our Hybrid Submersible BLDC Pumpsets are transforming 
              agricultural irrigation across the nation.
            </p>
          </div>
          <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-card border border-border">
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
