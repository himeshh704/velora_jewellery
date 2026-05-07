"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { products, Product } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { Filter, SlidersHorizontal } from "lucide-react";

const categories = ["All", "Rings", "Earrings", "Bracelets", "Necklaces"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="pt-32 pb-20 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-screen-2xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif mb-6"
        >
          Our Collection
        </motion.h1>
        <p className="text-foreground/50 max-w-xl">
          Explore our meticulously crafted jewellery, where tradition meets contemporary design. Each piece tells a story of elegance and craftsmanship.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-screen-2xl mx-auto flex flex-wrap items-center justify-between gap-8 mb-12 border-b border-foreground/5 pb-8">
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm uppercase tracking-widest px-6 py-2 rounded-full border transition-all ${
                activeCategory === cat 
                ? "bg-foreground text-background border-foreground" 
                : "border-foreground/10 hover:border-foreground/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold">
          <SlidersHorizontal size={18} />
          Sort & Filter
        </button>
      </div>

      {/* Product Grid */}
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filteredProducts.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="group"
          >
            <Link href={`/product/${product.id}`}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-card mb-6">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 right-6">
                  <span className="bg-background/80 backdrop-blur-md px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-serif mb-1">{product.name}</h3>
                  <p className="text-foreground/40 text-sm">{product.material}</p>
                </div>
                <p className="text-gold font-medium font-serif">${product.price}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
