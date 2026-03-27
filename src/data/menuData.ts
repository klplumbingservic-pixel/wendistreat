import jollofImg from "@/assets/jollof-rice.jpg";
import friedRiceImg from "@/assets/fried-rice.jpg";
import amalaImg from "@/assets/amala.jpg";
import suyaImg from "@/assets/suya.jpg";
import snacksImg from "@/assets/snacks.jpg";
import pepperSoupImg from "@/assets/pepper-soup.jpg";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const categories = [
  "Rice Dishes",
  "Swallow & Soups",
  "Proteins",
  "Snacks",
  "Drinks",
];

export const menuItems: MenuItem[] = [
  { id: "1", name: "Jollof Rice", description: "Smoky party-style jollof rice with tomato base", price: 2500, image: jollofImg, category: "Rice Dishes" },
  { id: "2", name: "Fried Rice", description: "Colorful fried rice with mixed vegetables", price: 2800, image: friedRiceImg, category: "Rice Dishes" },
  { id: "3", name: "Coconut Rice", description: "Fragrant rice cooked in coconut milk", price: 2500, image: jollofImg, category: "Rice Dishes" },
  { id: "4", name: "Ofada Rice", description: "Local rice served with ofada stew", price: 2200, image: friedRiceImg, category: "Rice Dishes" },
  { id: "5", name: "Amala & Ewedu", description: "Smooth amala with ewedu and gbegiri soup", price: 2000, image: amalaImg, category: "Swallow & Soups" },
  { id: "6", name: "Pounded Yam & Egusi", description: "Fluffy pounded yam with rich egusi soup", price: 2500, image: amalaImg, category: "Swallow & Soups" },
  { id: "7", name: "Eba & Okro Soup", description: "Garri with delicious okro soup", price: 1800, image: pepperSoupImg, category: "Swallow & Soups" },
  { id: "8", name: "Pepper Soup", description: "Spicy catfish pepper soup", price: 3000, image: pepperSoupImg, category: "Swallow & Soups" },
  { id: "9", name: "Grilled Chicken", description: "Perfectly seasoned grilled chicken", price: 2000, image: suyaImg, category: "Proteins" },
  { id: "10", name: "Chicken Suya", description: "Spicy suya-marinated chicken skewers", price: 1500, image: suyaImg, category: "Proteins" },
  { id: "11", name: "Fried Fish", description: "Crispy fried croaker fish", price: 2500, image: pepperSoupImg, category: "Proteins" },
  { id: "12", name: "Assorted Meat", description: "Mixed assorted meat plate", price: 1800, image: suyaImg, category: "Proteins" },
  { id: "13", name: "Meat Pie", description: "Golden baked meat pie", price: 800, image: snacksImg, category: "Snacks" },
  { id: "14", name: "Puff Puff", description: "Sweet deep-fried dough balls", price: 500, image: snacksImg, category: "Snacks" },
  { id: "15", name: "Spring Roll", description: "Crispy vegetable spring rolls", price: 600, image: snacksImg, category: "Snacks" },
  { id: "16", name: "Chapman", description: "Classic Nigerian Chapman cocktail", price: 1200, image: jollofImg, category: "Drinks" },
  { id: "17", name: "Zobo", description: "Refreshing hibiscus drink", price: 500, image: jollofImg, category: "Drinks" },
  { id: "18", name: "Fresh Juice", description: "Freshly squeezed fruit juice", price: 800, image: jollofImg, category: "Drinks" },
];
