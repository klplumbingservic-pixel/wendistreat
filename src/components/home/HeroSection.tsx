import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Delicious Nigerian food spread"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
    </div>
    <div className="relative container-tight px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-2xl animate-fade-in">
        <span className="inline-block text-accent font-medium text-sm tracking-widest uppercase mb-4">
          Welcome to Wendis Treat
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Delicious Meals,{" "}
          <span className="text-accent">Made Fresh</span> Every Day
        </h1>
        <p className="text-lg text-white/80 mb-8 max-w-lg">
          Serving quality food in Lagos from 8AM to 6PM. Experience the taste of authentic Nigerian cuisine made with love.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/menu">
            <Button size="lg" className="rounded-full text-base px-8 font-body">
              Order Food
            </Button>
          </Link>
          <Link to="/booking">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base px-8 font-body border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
