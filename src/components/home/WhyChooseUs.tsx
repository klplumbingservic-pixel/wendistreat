import { Leaf, Zap, Gem } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const reasons = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "We source the freshest produce daily from local markets" },
  { icon: Zap, title: "Fast Service", desc: "Quick preparation without compromising on quality" },
  { icon: Gem, title: "Affordable Luxury", desc: "Premium dining experience at prices that make you smile" },
];

const WhyChooseUs = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-primary text-primary-foreground" ref={ref}>
      <div className="container-tight">
        <div className="text-center mb-14">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Why Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Why Choose <span className="text-accent">Wendis Treat</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`text-center p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 ${isInView ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5">
                <r.icon className="text-accent" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{r.title}</h3>
              <p className="text-primary-foreground/70 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
