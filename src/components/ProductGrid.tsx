"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useCart } from "@/lib/store";
import { ProductData } from "@/types/sanity";

interface ProductGridProps {
  products?: ProductData[];
}

export default function ProductGrid({ products = [] }: ProductGridProps) {
  const { addItem } = useCart();

  // Map Sanity product to the cart item format if needed
  const handleAddToCart = (product: ProductData) => {
    addItem({
      id: product._id,
      name: product.name,
      price: parseFloat(product.price.replace(/[^0-9.]/g, '')),
      images: product.images,
      category: product.category || "Jewellery",
      description: product.description || "",
      slug: product.slug,
    } as any);
  };

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
            key={product._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="relative aspect-[4/5] bg-card rounded-2xl overflow-hidden mb-4">
              <Link href={`/product/${product.slug}`}>
                <Image
                  src={product.images[0] || "/placeholder.png"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </Link>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart(product);
                }}
                className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hover:bg-gold hover:text-white"
              >
                <Plus size={20} />
              </button>
            </div>
            <Link href={`/product/${product.slug}`} className="space-y-1">
              <p className="text-xs text-foreground/50 uppercase tracking-widest">{product.category}</p>
              <h3 className="text-lg font-serif">{product.name}</h3>
              <p className="text-sm font-medium text-gold">{product.price}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
