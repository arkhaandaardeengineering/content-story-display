import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Mallaiah",
    role: "Founder & Director",
    bio: "The creative force behind Arkha & Aarde. Started his distinguished career at ECIL as an engineer (1981-1991), then led Medha Vision Pvt. Ltd. as Director (1991-1996). Founded Sri Balaji Motors in 1996. His innovative management blends technological innovation with a strong dedication to sustainable agriculture.",
  },
  {
    name: "Durga Prasada Rao",
    role: "Director",
    bio: "A renowned industry veteran with 36 years in the pump manufacturing sector. With his wide range of expertise, he provides vital ideas that help develop agricultural technology. His tireless commitment to creativity and superior craftsmanship is crucial in driving Arkha & Aarde to new heights.",
  },
  {
    name: "Kiran Kumar",
    role: "Director",
    bio: "A seasoned professional with over a decade of experience in Electrical Services. Also the founder of Solaris Electrical Services, showcasing his entrepreneurial spirit. His leadership, technical proficiency, and strategic vision have contributed to the success of both ventures.",
  },
];

export const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Core Team
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
            Leadership That Drives Innovation
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the visionaries behind Arkha & Aarde who bring decades of experience 
            and passion for sustainable agriculture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card border border-border group hover:shadow-soft transition-shadow"
            >
              {/* Avatar Placeholder */}
              <div className="h-48 bg-gradient-hero flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary-foreground/20 flex items-center justify-center border-4 border-primary-foreground/30">
                  <span className="font-display font-bold text-3xl text-primary-foreground">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-xl text-foreground mb-3">
              Technological Innovation
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We are at the cutting-edge of this sector, constantly pushing boundaries 
              to provide solutions that satisfy the ever-evolving needs of the agricultural sector.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-xl text-foreground mb-3">
              Reliability
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Long lifespan and minimal maintenance requirements are ensured by the 
              quality and durability from which our Hybrid Submersible BLDC Pumpsets are manufactured.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-xl text-foreground mb-3">
              Partnerships for Development
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We encourage establishing partnerships with governments, farmers, and 
              various organizations to create an integrated ecosystem that drives progress.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
