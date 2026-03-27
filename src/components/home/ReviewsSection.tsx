import { Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const reviews = [
  { name: "Adaeze O.", text: "Best jollof rice in Lagos! The chicken is always perfectly grilled. My family's favourite spot.", rating: 5 },
  { name: "Tunde B.", text: "Clean environment, amazing food, and very affordable. Wendis Treat never disappoints!", rating: 5 },
  { name: "Funmi A.", text: "I order from here every week. The amala and ewedu is divine. Fast delivery too!", rating: 5 },
];

const ReviewsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-tight">
        <div className="text-center mb-14">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`p-8 rounded-2xl bg-secondary hover-lift ${isInView ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={18} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{review.text}"</p>
              <p className="font-display font-semibold">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
