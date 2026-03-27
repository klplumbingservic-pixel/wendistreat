import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, CalendarDays } from "lucide-react";

const BookingPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    type: "dine-in",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Wendis Treat! I'd like to make a reservation:\n\nName: ${form.name}\nPhone: ${form.phone}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}\nType: ${form.type}`
    );
    window.open(`https://wa.me/2348000000000?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-tight px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Reservations</span>
          <h1 className="text-3xl md:text-5xl font-bold mt-3">
            Book a <span className="text-primary">Table</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Reserve your spot at Wendis Treat and enjoy a premium dining experience.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 bg-secondary p-8 md:p-10 rounded-3xl">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-body">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="rounded-xl bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-body">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+234 800 000 0000"
                required
                className="rounded-xl bg-background"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date" className="font-body">Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="rounded-xl bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time" className="font-body">Time</Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className="rounded-xl bg-background"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="guests" className="font-body">Number of Guests</Label>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="20"
                  value={form.guests}
                  onChange={handleChange}
                  required
                  className="rounded-xl bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type" className="font-body">Type</Label>
                <select
                  id="type"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-xl bg-background border border-input text-sm font-body"
                >
                  <option value="dine-in">Dine-in</option>
                  <option value="pickup">Pickup</option>
                </select>
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full font-body gap-2">
              <MessageCircle size={20} />
              Book via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
