"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BentoBlock {
  title: string;
  imageUrl: string;
  link: string;
}

interface BentoGridProps {
  blocks?: BentoBlock[];
}

export default function BentoGrid({ blocks }: BentoGridProps) {
  // Fallback data
  const defaultBlocks = [
    { title: "Summer Collections", imageUrl: "/hero-1.png", link: "/shop" },
    { title: "Earrings", imageUrl: "/hero-2.png", link: "/shop" },
    { title: "Necklace", imageUrl: "/hero-3.png", link: "/shop" },
    { title: "Bespoke Craftsmanship", imageUrl: "/hero-5.png", link: "/shop" },
  ];

  const b = blocks && blocks.length > 0 ? blocks : defaultBlocks;

  return (
    <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[80vh]">
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="md:col-span-2 md:row-span-2 relative min-h-[400px] md:min-h-0 rounded-3xl overflow-hidden group cursor-pointer"
        >
          <Image src={b[0]?.imageUrl} alt={b[0]?.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/5" />
          <div className="absolute top-8 left-8">
             <span className="bg-accent px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-background">New</span>
          </div>
          <div className="absolute bottom-8 left-8">
            <h3 className="text-4xl font-serif text-white whitespace-pre-line">{b[0]?.title}</h3>
            <p className="text-sm text-white/80 mt-2 font-display">2025</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="md:col-span-1 md:row-span-1 relative min-h-[200px] md:min-h-0 rounded-3xl overflow-hidden group cursor-pointer"
        >
          <Image src={b[1]?.imageUrl || "/hero-2.png"} alt={b[1]?.title || "Collection"} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
        </motion.div>

        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="md:col-span-1 md:row-span-1 relative min-h-[200px] md:min-h-0 rounded-3xl overflow-hidden group cursor-pointer"
        >
          <Image src={b[2]?.imageUrl || "/hero-3.png"} alt={b[2]?.title || "Collection"} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
        </motion.div>

        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="md:col-span-2 md:row-span-1 relative min-h-[250px] md:min-h-0 rounded-3xl overflow-hidden group cursor-pointer bg-card p-8 flex flex-col justify-end border border-foreground/5"
        >
          <Image src={b[3]?.imageUrl || b[0]?.imageUrl} alt={b[3]?.title || "Bespoke"} fill className="object-cover opacity-10 transition-transform duration-700 group-hover:scale-110" />
          <h3 className="text-3xl font-serif relative z-10 text-foreground whitespace-pre-line">{b[3]?.title || b[0]?.title}</h3>
        </motion.div>
      </div>
    </section>
  );
}
