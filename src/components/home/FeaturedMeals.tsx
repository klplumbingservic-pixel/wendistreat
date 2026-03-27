import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import jollofImg from "@/assets/jollof-rice.jpg";
import friedRiceImg from "@/assets/fried-rice.jpg";
import amalaImg from "@/assets/amala.jpg";
import suyaImg from "@/assets/suya.jpg";

const meals = [
  { name: "Jollof Rice Special", price: "₦2,500", image: jollofImg, desc: "Smoky party jollof with chicken & plantain" },
  { name: "Fried Rice Combo", price: "₦2,800", image: friedRiceImg, desc: "Colorful fried rice with grilled fish" },
  { name: "Amala & Ewedu", price: "₦2,000", image: amalaImg, desc: "Smooth amala with rich ewedu & gbegiri" },
  { name: "Chicken Suya", price: "₦1,500", image: suyaImg, desc: "Spicy grilled chicken skewers with onions" },
];

const FeaturedMeals = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-tight">
        <div className="text-center mb-14">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Our Specials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Featured <span className="text-primary">Meals</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {meals.map((meal, i) => (
            <div
              key={meal.name}
              className={`group rounded-2xl overflow-hidden bg-secondary hover-lift ${isInView ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={meal.image}
                  alt={meal.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg">{meal.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{meal.desc}</p>
                <p className="text-primary font-bold text-lg mt-3">{meal.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/menu">
            <Button size="lg" className="rounded-full px-10 font-body">
              Explore Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMeals;
