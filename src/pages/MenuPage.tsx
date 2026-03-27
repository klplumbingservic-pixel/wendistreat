import { useState } from "react";
import { ShoppingCart, Plus, Minus, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuItems, categories, type MenuItem } from "@/data/menuData";

interface CartItem extends MenuItem {
  quantity: number;
}

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("Rice Dishes");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const filtered = menuItems.filter((m) => m.category === activeCategory);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) return prev.map((c) => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c);
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((c) => c.id === id ? { ...c, quantity: Math.max(0, c.quantity + delta) } : c).filter((c) => c.quantity > 0)
    );
  };

  const total = cart.reduce((s, c) => s + c.price * c.quantity, 0);
  const totalItems = cart.reduce((s, c) => s + c.quantity, 0);

  const orderViaWhatsApp = () => {
    const msg = cart.map((c) => `${c.name} x${c.quantity} - ₦${(c.price * c.quantity).toLocaleString()}`).join("\n");
    const text = encodeURIComponent(`Hello Wendis Treat! I'd like to order:\n\n${msg}\n\nTotal: ₦${total.toLocaleString()}`);
    window.open(`https://wa.me/2348000000000?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-tight px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Our Menu</span>
          <h1 className="text-3xl md:text-5xl font-bold mt-3">
            Explore Our <span className="text-primary">Dishes</span>
          </h1>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-foreground/70 hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filtered.map((item) => {
            const inCart = cart.find((c) => c.id === item.id);
            return (
              <div key={item.id} className="rounded-2xl overflow-hidden bg-secondary hover-lift group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width={640}
                    height={480}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg">{item.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-primary font-bold text-lg">₦{item.price.toLocaleString()}</span>
                    {inCart ? (
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQty(item.id, -1)} className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                          <Minus size={14} className="text-primary" />
                        </button>
                        <span className="font-semibold w-6 text-center">{inCart.quantity}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                          <Plus size={14} className="text-primary-foreground" />
                        </button>
                      </div>
                    ) : (
                      <Button size="sm" className="rounded-full font-body" onClick={() => addToCart(item)}>
                        <Plus size={16} className="mr-1" /> Add
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Cart Button */}
        {totalItems > 0 && (
          <button
            onClick={() => setShowCart(true)}
            className="fixed bottom-24 right-6 z-40 bg-primary text-primary-foreground rounded-full px-6 py-3 shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <ShoppingCart size={20} />
            <span className="font-semibold">{totalItems} items</span>
            <span className="font-bold">₦{total.toLocaleString()}</span>
          </button>
        )}

        {/* Cart Drawer */}
        {showCart && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowCart(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-background shadow-2xl p-6 overflow-y-auto animate-fade-in-right">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-bold">Your Order</h2>
                <button onClick={() => setShowCart(false)} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <X size={20} />
                </button>
              </div>
              {cart.length === 0 ? (
                <p className="text-muted-foreground text-center py-12">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-8">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-3 rounded-xl bg-secondary">
                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">{item.name}</h4>
                          <p className="text-primary font-bold text-sm">₦{(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                            <Minus size={12} className="text-primary" />
                          </button>
                          <span className="font-semibold text-sm w-5 text-center">{item.quantity}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                            <Plus size={12} className="text-primary-foreground" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">₦{total.toLocaleString()}</span>
                    </div>
                  </div>
                  <Button onClick={orderViaWhatsApp} size="lg" className="w-full rounded-full font-body gap-2">
                    <MessageCircle size={20} />
                    Order via WhatsApp
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
