import { useInView } from "@/hooks/useInView";
import jollofImg from "@/assets/jollof-rice.jpg";
import friedRiceImg from "@/assets/fried-rice.jpg";
import amalaImg from "@/assets/amala.jpg";
import suyaImg from "@/assets/suya.jpg";
import snacksImg from "@/assets/snacks.jpg";
import pepperSoupImg from "@/assets/pepper-soup.jpg";

const images = [
  { src: jollofImg, alt: "Jollof Rice" },
  { src: friedRiceImg, alt: "Fried Rice" },
  { src: amalaImg, alt: "Amala" },
  { src: suyaImg, alt: "Suya" },
  { src: snacksImg, alt: "Meat Pie" },
  { src: pepperSoupImg, alt: "Pepper Soup" },
];

const GallerySection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="container-tight">
        <div className="text-center mb-14">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Our <span className="text-primary">Kitchen</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={img.alt}
              className={`aspect-square rounded-2xl overflow-hidden group ${isInView ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={640}
                height={640}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
