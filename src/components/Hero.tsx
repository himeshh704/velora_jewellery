"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const heroImages = [
  { id: 1, src: "/hero-1.png", title: "Royal Collection" },
  { id: 2, src: "/hero-2.png", title: "Golden Essence" },
  { id: 3, src: "/hero-3.png", title: "Eternal Sparkle" },
  { id: 4, src: "/hero-4.png", title: "Timeless Pearls" },
  { id: 5, src: "/hero-5.png", title: "Diamond Dreams" },
];

interface HeroProps {
  title?: string;
  subtitle?: string;
  italicTitle?: string;
}

export default function Hero({ title, subtitle, italicTitle }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center justify-center">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

      {/* Hero Text */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs md:text-sm font-medium tracking-[0.3em] text-foreground/50 uppercase mb-4"
        >
          {subtitle || "Curated Excellence Since 1995"}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl font-serif leading-[1.1] tracking-tight mb-8"
        >
          {title || "View our"} <br />
          <span className="italic text-[#D4AF37]">{italicTitle || "latest works"}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-sm md:text-base text-foreground/40 max-w-lg mx-auto leading-relaxed"
        >
          We tried to design a new style to view our new jewelrys to be more different than ever. Discover the intersection of tradition and avant-garde.
        </motion.p>
      </div>

      {/* Sliding Cards Container */}
      <div className="relative w-full max-w-screen-2xl mx-auto h-[50vh] md:h-[60vh] flex items-center justify-center gap-4 md:gap-8 overflow-visible">
        {heroImages.map((image, idx) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, x: 100, rotateY: 30 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              rotateY: 0,
              y: idx % 2 === 0 ? 0 : 40 // Staggered height effect
            }}
            transition={{ 
              duration: 1.2, 
              delay: 0.2 + idx * 0.1,
              ease: [0.22, 1, 0.36, 1] 
            }}
            whileHover={{ y: -20, scale: 1.05 }}
            className="relative flex-shrink-0 w-40 md:w-64 h-[80%] md:h-full rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority={idx < 3}
            />
            <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xs font-medium tracking-widest uppercase mb-1">{image.title}</p>
              <button className="flex items-center gap-2 text-white/70 text-[10px] uppercase font-bold tracking-tighter">
                Explore <ArrowRight size={12} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
        <span className="text-[10px] text-foreground/30 tracking-[0.4em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
