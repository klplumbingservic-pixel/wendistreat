import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-tight section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Wendis<span className="text-accent">Treat</span>
          </h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Serving delicious, fresh Nigerian meals with love and care in Lagos. Quality food, affordable luxury.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "Menu", path: "/menu" },
              { name: "Book a Table", path: "/booking" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
          <div className="space-y-3 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-accent shrink-0" />
              <span>Kosofe Complex, Ogudu Road, Lagos State</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-accent shrink-0" />
              <span>+234 800 000 0000</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-accent shrink-0" />
              <span>hello@wendistreat.com</span>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Wendis Treat. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
