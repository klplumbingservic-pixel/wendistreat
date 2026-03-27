import { Utensils, Heart, ShieldCheck } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const values = [
  { icon: Utensils, title: "Fresh Daily", desc: "Every meal prepared fresh from scratch each morning" },
  { icon: ShieldCheck, title: "Top Hygiene", desc: "We maintain the highest standards of cleanliness" },
  { icon: Heart, title: "Made with Love", desc: "Authentic recipes passed down through generations" },
];

const AboutSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="section-padding bg-secondary" ref={ref}>
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Our Story</span>
          <h2 className={`text-3xl md:text-4xl font-bold mt-3 mb-6 ${isInView ? "animate-fade-in" : "opacity-0"}`}>
            A Taste of Lagos, <span className="text-primary">Right Here</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            At Wendis Treat, we believe every meal should be a celebration. Born from a passion for authentic Nigerian flavors, we serve dishes that bring people together — fresh ingredients, bold spices, and unforgettable taste.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`text-center p-8 rounded-2xl bg-background hover-lift ${isInView ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <v.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
