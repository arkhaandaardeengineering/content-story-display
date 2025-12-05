import { motion } from "framer-motion";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Vision", href: "#vision" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  products: [
    { label: "Hybrid BLDC Pumpsets", href: "#products" },
    { label: "BLDC Motors", href: "#products" },
    { label: "Controllers", href: "#products" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-xl">A</span>
              </div>
              <span className="font-display font-bold text-xl">Arkha & Aarde</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-sm">
              With 36 years of expertise in pump manufacturing, we are redefining 
              the future of sustainable pumping technology with our Hybrid 
              Submersible BLDC Pumpsets.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Arkha & Aarde. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Innovating for a sustainable future
          </p>
        </div>
      </div>
    </footer>
  );
};
