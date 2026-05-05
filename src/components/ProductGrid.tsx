"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
}

const products: Product[] = [
  { id: "1", name: "Queen Ring", price: "$669", category: "Rings", image: "/hero-4.png" },
  { id: "2", name: "Laura Bracelet", price: "$250", category: "Bracelets", image: "/hero-3.png" },
  { id: "3", name: "Diamond Necklace", price: "$399", category: "Necklaces", image: "/hero-1.png" },
  { id: "4", name: "Yuna Bracelet", price: "$220", category: "Bracelets", image: "/hero-5.png" },
  { id: "5", name: "Occa Earrings", price: "$180", category: "Earrings", image: "/hero-2.png" },
];

export default function ProductGrid() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif leading-tight"
          >
            From Classic to Contemporary— <br />
            <span className="text-foreground/50 italic">Your Perfect Piece Awaits</span>
          </motion.h2>
        </div>
        <Link href="/shop" className="text-sm font-bold tracking-widest uppercase border-b border-foreground/20 pb-1 hover:border-gold transition-colors">
          See All Collections
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="relative aspect-[4/5] bg-card rounded-2xl overflow-hidden mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <button className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Plus size={20} />
              </button>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-foreground/50 uppercase tracking-widest">{product.category}</p>
              <h3 className="text-lg font-serif">{product.name}</h3>
              <p className="text-sm font-medium text-gold">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
