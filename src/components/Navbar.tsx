import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Book a Table", path: "/booking" },
  ];

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") return;
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-tight flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-display text-2xl font-bold text-primary">
          Wendis<span className="text-accent">Treat</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-foreground/70"
              }`}
            >
              {link.name}
            </Link>
          ))}
          {location.pathname === "/" && (
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              Contact
            </button>
          )}
          <Link to="/menu">
            <Button size="sm" className="rounded-full font-body">
              Order Now
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-base font-medium text-foreground/80 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/menu">
              <Button className="w-full rounded-full font-body mt-2">
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
