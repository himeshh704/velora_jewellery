"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/store";
import CartDrawer from "./CartDrawer";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const totalItems = useCart((state) => state.getTotalItems());

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-6 md:px-12",
        isScrolled ? "py-4 glass border-b border-foreground/5" : "bg-transparent"
      )}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-serif tracking-tight z-50">
          Veloura
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 z-50">
          <button className="text-foreground/80 hover:text-foreground transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="text-foreground/80 hover:text-foreground transition-colors relative"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {isMounted && totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
          <button className="hidden md:block text-foreground/80 hover:text-foreground transition-colors">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button
            className="md:hidden text-foreground/80"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 h-screen bg-background flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
