export interface Product {
  id: string;
  name: string;
  category: "Rings" | "Earrings" | "Bracelets" | "Necklaces";
  price: number;
  description: string;
  images: string[];
  details: string[];
  material: string;
}

export const products: Product[] = [
  {
    id: "roseline-ring",
    name: "The Roseline Ring",
    category: "Rings",
    price: 1250,
    description: "A timeless masterpiece featuring a delicate rose gold band set with a brilliant-cut center diamond.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544733005-52317135e807?auto=format&fit=crop&q=80&w=800"
    ],
    details: ["18k Rose Gold", "0.5ct Diamond", "Conflict-free"],
    material: "Rose Gold"
  },
  {
    id: "zoe-earrings",
    name: "The Zoe Earrings",
    category: "Earrings",
    price: 850,
    description: "Elegant drop earrings that capture the light with every movement.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800"
    ],
    details: ["14k White Gold", "Freshwater Pearls"],
    material: "White Gold"
  },
  {
    id: "hibiscus-ring",
    name: "The Hibiscus Ring II",
    category: "Rings",
    price: 2100,
    description: "Bold and intricate, the Hibiscus Ring is a statement of handcrafted luxury.",
    images: [
      "https://images.unsplash.com/photo-1603561591411-0e7320b97d33?auto=format&fit=crop&q=80&w=800"
    ],
    details: ["24k Yellow Gold", "Emerald setting"],
    material: "Yellow Gold"
  },
  {
    id: "chubby-hoops",
    name: "The Chubby Hoops",
    category: "Earrings",
    price: 450,
    description: "Modern, minimalist hoops designed for effortless daily elegance.",
    images: [
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=800"
    ],
    details: ["Sterling Silver", "High-polish finish"],
    material: "Silver"
  },
  {
    id: "eternal-bracelet",
    name: "Eternal Gold Bracelet",
    category: "Bracelets",
    price: 3200,
    description: "A solid gold bracelet that symbolizes timeless connection and strength.",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800"
    ],
    details: ["18k Solid Gold", "Hand-engraved patterns"],
    material: "Solid Gold"
  },
  {
    id: "luna-necklace",
    name: "Luna Pearl Necklace",
    category: "Necklaces",
    price: 1800,
    description: "A celestial-inspired necklace featuring a single, luminous south sea pearl.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800"
    ],
    details: ["Gold Vermeil", "South Sea Pearl"],
    material: "Gold Vermeil"
  }
];
