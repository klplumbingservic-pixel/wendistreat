import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="container-tight">
      <div className="text-center mb-14">
        <span className="text-accent font-medium text-sm tracking-widest uppercase">Get in Touch</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          Contact <span className="text-primary">Us</span>
        </h2>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {[
            { icon: Phone, label: "Call Us", value: "+234 800 000 0000" },
            { icon: Mail, label: "Email", value: "hello@wendistreat.com" },
            { icon: MapPin, label: "Address", value: "Kosofe Complex, Ogudu Rd" },
            { icon: MessageCircle, label: "WhatsApp", value: "+234 800 000 0000" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 p-5 rounded-2xl bg-secondary">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="font-medium text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full px-10 font-body gap-2">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
