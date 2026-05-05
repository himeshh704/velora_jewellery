"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const works = [
  { name: "THE ROSELINE RING", image: "/hero-4.png" },
  { name: "THE ZOE EARRINGS", image: "/hero-2.png" },
  { name: "THE HIBISCUS RING II", image: "/hero-5.png" },
  { name: "THE CHUBBY HOOPS", image: "/hero-2.png" },
];

export default function OurWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-card">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" />
      
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <p className="text-sm text-foreground/50 leading-relaxed max-w-xs">
              Velora combination of statement and simplistic style helps create a look that's as unique as you are.
            </p>
          </div>
          <div className="w-full md:w-2/3">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-7xl md:text-[12rem] font-display font-bold leading-none tracking-tighter text-foreground"
            >
              OUR WORKS
            </motion.h2>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 px-6 md:px-12 overflow-x-auto no-scrollbar pb-12"
      >
        {works.map((work, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex-shrink-0 w-72 md:w-96 aspect-[3/4] relative rounded-3xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={work.image}
              alt={work.name}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-xl font-display font-bold text-foreground">{work.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button 
          onClick={() => scroll("left")}
          className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={() => scroll("right")}
          className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}

