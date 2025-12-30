import arkhaLogo from "@/assets/arkha-logo.jpeg";

const footerLinks = {
  company: [
    { label: "Vision", href: "#vision" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  products: [
    { label: "Hybrid BLDC Pumpsets", href: "#products" },
    { label: "BLDC Motors", href: "#products" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <img 
                src={arkhaLogo} 
                alt="Arkha & Aarde" 
                className="h-10 sm:h-12 w-auto rounded"
              />
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-sm text-xs sm:text-sm">
              With 36 years of expertise in pump manufacturing, we are redefining 
              the future of sustainable pumping technology with our Hybrid 
              Submersible BLDC Pumpsets.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-sm sm:text-base mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-display font-semibold text-sm sm:text-base mb-3 sm:mb-4">Products</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-primary-foreground/60 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Arkha & Aarde Engineering Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-xs sm:text-sm">
            Innovating for a sustainable future
          </p>
        </div>
      </div>
    </footer>
  );
};
