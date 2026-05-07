"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full md:w-[450px] bg-background border-l border-foreground/5 z-[101] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-8 border-b border-foreground/5 flex items-center justify-between">
              <h2 className="text-2xl font-serif">Shopping Bag</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-foreground/5 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-foreground/5 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag size={32} className="text-foreground/20" />
                  </div>
                  <p className="text-foreground/40 mb-8">Your bag is empty</p>
                  <Link
                    href="/shop"
                    onClick={onClose}
                    className="bg-foreground text-background px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gold transition-colors"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-8">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-6">
                      <div className="relative w-24 aspect-[4/5] rounded-2xl overflow-hidden bg-card flex-shrink-0">
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-serif text-lg leading-tight">{item.name}</h3>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-foreground/30 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-sm text-foreground/40 mb-4">{item.material}</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center border border-foreground/10 rounded-full px-2 py-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:text-gold transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:text-gold transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <p className="font-serif text-gold">${item.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-8 border-t border-foreground/5 bg-card/30 backdrop-blur-md">
                <div className="flex justify-between items-end mb-8">
                  <p className="text-foreground/40 uppercase tracking-widest text-xs font-bold">Subtotal</p>
                  <p className="text-3xl font-serif text-gold">${getTotalPrice()}</p>
                </div>
                <button 
                  onClick={() => {
                    const phoneNumber = "8824962843"; // Updated with user number
                    const message = `Hello Veloura! I'd like to place an order:\n\n` + 
                      items.map(item => `- ${item.name} (${item.quantity}x) - $${item.price * item.quantity}`).join('\n') + 
                      `\n\nTotal: $${getTotalPrice()}\n\nPlease let me know the next steps!`;
                    
                    const encodedMessage = encodeURIComponent(message);
                    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
                  }}
                  className="w-full bg-foreground text-background py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition-all flex items-center justify-center gap-3"
                >
                  Checkout via WhatsApp
                </button>
                <p className="text-center text-[10px] text-foreground/30 uppercase tracking-[0.2em] mt-6">
                  Items will be sent to our team via WhatsApp for confirmation
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
