import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sun, Zap, Settings, Shield } from "lucide-react";

const motorFeatures = [
  "High-efficiency permanent magnet brushless technology",
  "Minimal maintenance required",
  "Low running costs with lower winding temperatures",
  "Motor burnout prevented by intelligent controller",
  "IP68 protection rating",
  "Pressure-balanced structure",
  "Hydrodynamic journal and thrust bearings",
  "IS8034:2018 compliant",
];

const pumpFeatures = [
  "Designed for years of reliability and durability",
  "Increased efficiency",
  "Sturdy robust connection for easy management",
  "Superior shaft bearings with low friction",
  "Stainless steel/cast iron impellers and diffusers",
  "Stainless steel strainer for sand prevention",
];

const controllerFeatures = [
  "Robust electronic components for longevity",
  "Efficient fan-cooled power electronics",
  "Built-in fault protection mechanisms",
  "Minimizes energy loss",
  "Secure outdoor installation features",
  "AC power input: 240-450V",
  "Emergency supply disconnect switch",
  "Digital display with user-friendly interface",
];

const highlights = [
  {
    icon: Sun,
    title: "Flexible Power Sources",
    description:
      "Operates on both solar and electrical energy for continuous water access while saving energy.",
  },
  {
    icon: Zap,
    title: "Smart Power Management",
    description:
      "Automatically switches between power sources for maximum efficiency and reduced costs.",
  },
  {
    icon: Shield,
    title: "Reducing Government Burden",
    description:
      "Surplus solar electricity can be transmitted to the grid during off-peak hours.",
  },
  {
    icon: Settings,
    title: "Cost-effective Agriculture",
    description:
      "Water your fields throughout the day without high electricity costs.",
  },
];

export const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
            Hybrid Submersible BLDC Pumping Technology
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            A revolutionary solution that smoothly integrates electrical and solar power, 
            bringing about an evolutionary jump in agricultural technology. Our pumpsets 
            revolutionize the irrigating of farms while offering benefits for both farmers 
            and governments.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border text-center hover:shadow-soft transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Feature Sections */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Motor Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">
                BLDC Motor
              </h3>
            </div>
            <ul className="space-y-3">
              {motorFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pump Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Settings className="w-5 h-5 text-secondary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">
                Pump Features
              </h3>
            </div>
            <ul className="space-y-3">
              {pumpFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Controller Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">
                Controller
              </h3>
            </div>
            <ul className="space-y-3">
              {controllerFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
