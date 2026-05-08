"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, Heart, Share2, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/lib/store";
import { ProductData } from "@/types/sanity";

interface ProductClientProps {
  product: ProductData;
}

export default function ProductClient({ product }: ProductClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const addItem = useCart((state) => state.addItem);

  const handleAddToBag = () => {
    // Map Sanity product to Store product structure if needed
    // The store expects 'id' and 'price' as number, but Sanity has '_id' and 'price' as string
    // Let's normalize it for the cart
    const cartProduct: any = {
      ...product,
      id: product._id,
      price: parseFloat(product.price.replace(/[^0-9.]/g, '')),
      images: product.images
    };
    
    addItem(cartProduct);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Link 
        href="/shop" 
        className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold mb-12 hover:gap-4 transition-all"
      >
        <ArrowLeft size={16} /> Back to Collection
      </Link>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Image Gallery */}
        <div className="flex-1">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-square rounded-[3rem] overflow-hidden bg-card mb-6"
          >
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="flex gap-4">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative w-24 aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                  selectedImage === idx ? "border-gold" : "border-transparent opacity-50"
                }`}
              >
                <Image src={img} alt={`${product.name} ${idx}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-foreground/40 mb-4">{product.category}</p>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">{product.name}</h1>
            <p className="text-3xl text-gold font-serif mb-8">${product.price}</p>
            
            <div className="w-full h-[1px] bg-foreground/5 mb-8" />
            
            <p className="text-foreground/60 leading-relaxed mb-10 text-lg">
              {product.description}
            </p>

            {/* Actions */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAddToBag}
                  className={`flex-1 py-5 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all ${
                    isAdded 
                    ? "bg-green-600 text-white" 
                    : "bg-foreground text-background hover:bg-gold hover:text-white"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check size={20} /> Added to Bag
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={20} /> Add to Bag
                    </>
                  )}
                </button>
                <button className="w-full sm:w-16 h-16 rounded-full border border-foreground/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                  <Heart size={20} />
                </button>
                <button className="w-full sm:w-16 h-16 rounded-full border border-foreground/10 flex items-center justify-center hover:border-foreground/40 transition-all">
                  <Share2 size={20} />
                </button>
              </div>
              
              <button
                onClick={() => {
                  const phoneNumber = "8824962843";
                  const message = `Hello! I'm interested in purchasing "${product.name}" ($${product.price}). Could you provide more details on how to proceed?`;
                  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="w-full border border-gold/40 text-gold py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all flex items-center justify-center gap-3"
              >
                Buy Now via WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
