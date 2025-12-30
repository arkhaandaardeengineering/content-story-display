import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sun, Zap, Shield, Settings, Droplets, Factory, Building2, Waves, TreeDeciduous, Home, Sprout, Droplet } from "lucide-react";

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

const motorSpecs = {
  motor: [
    { label: "Motor Type", value: "BLDC" },
    { label: "Voltage Max", value: "650 VDC / 425 VAC" },
    { label: "Speed", value: "2850 RPM" },
    { label: "Bore Size", value: "150 mm or above" },
    { label: "H.P", value: "5.0 / 7.5" },
    { label: "kW", value: "3.7 / 5.5" },
  ],
  construction: [
    { label: "Motor Body", value: "SS" },
    { label: "Motor Shaft", value: "SS" },
    { label: "Stamping", value: "CRNO" },
    { label: "Rotor", value: "Permanent Magnet" },
    { label: "Winding", value: "Copper" },
  ],
};

const features = [
  "High efficiency, Permanent magnet brushless Technology",
  "Minimal Maintenance, Motor burnout prevented",
  "Special non-contaminating anti rust solution prefilled",
  "Journal bearings with Hydrodynamics",
  "Constructional Requirements as per IS: 9283: 2013",
  "Complete SS motor with Nema coupling",
];

const applications = [
  { icon: Sprout, label: "Agriculture" },
  { icon: Factory, label: "Industrial Corridors" },
  { icon: Droplets, label: "Water Supply Systems" },
  { icon: Waves, label: "Pressure Boostings" },
  { icon: Droplet, label: "Fountains" },
  { icon: Building2, label: "Multi Storied Buildings" },
  { icon: TreeDeciduous, label: "Sprinkler Irrigation" },
  { icon: Droplet, label: "Drip Irrigation" },
  { icon: Waves, label: "Flow Irrigation" },
  { icon: Factory, label: "Washing Plants" },
  { icon: Home, label: "Modern Townships" },
  { icon: Home, label: "Residential Villas" },
];

export const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-12 sm:py-16 md:py-24 bg-gradient-section">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4 sm:mb-6 px-2">
            Hybrid Submersible BLDC Pumping Technology
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2">
            A revolutionary solution that smoothly integrates electrical and solar power, 
            bringing about an evolutionary jump in agricultural technology. Our pumpsets 
            revolutionize the irrigating of farms while offering benefits for both farmers 
            and governments.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-card rounded-xl p-4 sm:p-6 shadow-card border border-border text-center hover:shadow-soft transition-shadow"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <highlight.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm sm:text-base mb-2">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Motor Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-6 sm:mb-8">
            BLDC Motor Specifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Motor Specs */}
            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-card border border-border">
              <h4 className="font-display font-bold text-base sm:text-lg md:text-xl text-foreground mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                Motor
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {motorSpecs.motor.map((spec, index) => (
                  <div key={index} className="flex justify-between py-1.5 sm:py-2 border-b border-border last:border-0">
                    <span className="text-muted-foreground text-xs sm:text-sm">{spec.label}</span>
                    <span className="font-medium text-foreground text-xs sm:text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Construction Specs */}
            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-card border border-border">
              <h4 className="font-display font-bold text-base sm:text-lg md:text-xl text-foreground mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-foreground" />
                </div>
                Construction
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {motorSpecs.construction.map((spec, index) => (
                  <div key={index} className="flex justify-between py-1.5 sm:py-2 border-b border-border last:border-0">
                    <span className="text-muted-foreground text-xs sm:text-sm">{spec.label}</span>
                    <span className="font-medium text-foreground text-xs sm:text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-6 sm:mb-8">
            Features
          </h3>
          <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-card border border-border max-w-3xl mx-auto">
            <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-xs sm:text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Applications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-6 sm:mb-8">
            Applications
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-card rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 shadow-card border border-border flex items-center gap-2 sm:gap-3 hover:border-primary/30 transition-colors"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <app.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground text-xs sm:text-sm">{app.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
