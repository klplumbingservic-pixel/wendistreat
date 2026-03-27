import { MapPin, Clock } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const LocationSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="location" className="section-padding bg-secondary" ref={ref}>
      <div className="container-tight">
        <div className="text-center mb-14">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Find Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Availability & <span className="text-primary">Location</span>
          </h2>
        </div>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isInView ? "animate-fade-in" : "opacity-0"}`}>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-background rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">Opening Hours</h3>
                <p className="text-muted-foreground">Monday – Saturday</p>
                <p className="text-primary font-semibold text-lg">8:00 AM – 6:00 PM</p>
                <p className="text-muted-foreground text-sm mt-1">Closed on Sundays</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-background rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">Our Address</h3>
                <p className="text-muted-foreground">Kosofe Complex, Ogudu Road</p>
                <p className="text-muted-foreground">Lagos State, Nigeria</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg min-h-[300px]">
            <iframe
              title="Wendis Treat Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3!2d3.38!3d6.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzUnMjQuMCJOIDPCsDIyJzQ4LjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
