import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Lightbulb, Leaf, Zap } from "lucide-react";

const stats = [
  { value: "36+", label: "Years Experience" },
  { value: "1000+", label: "Pumps Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Partners" },
];

const features = [
  {
    icon: Award,
    title: "Proven Legacy",
    description: "Decades of precision, reliability, and quality in the pumping industry.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pioneering hybrid technology that combines solar and electric power.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to environmental responsibility and greener solutions.",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description: "Smart power management for optimal energy usage and cost savings.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
            About Arkha & Aarde
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Welcome to Arkha & Aarde, where decades of conventional pump manufacturing 
            experience combine with innovation. We have a long 36-year legacy in the pumping 
            industry and are known for our precision, reliability, and quality.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-card border border-border"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-soft transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 bg-gradient-hero rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
            Our Commitment
          </h3>
          <p className="text-primary-foreground/90 text-lg max-w-3xl mx-auto leading-relaxed">
            As pioneers in the traditional pump industry, we continually improve our skills 
            and have an in-depth understanding of water solutions. Our Hybrid Submersible 
            BLDC Pumpsets seamlessly combine electric and solar power, showing our commitment 
            to environmental sustainability.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
