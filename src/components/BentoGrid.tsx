"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BentoGrid() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[100vh] md:h-[80vh]">
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer"
        >
          <Image src="/hero-1.png" alt="Summer Collection" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-8 left-8">
             <span className="bg-accent px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">New</span>
          </div>
          <div className="absolute bottom-8 left-8">
            <h3 className="text-4xl font-serif">Summer<br />Collections</h3>
            <p className="text-sm text-white/60 mt-2 font-display">2025</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden group cursor-pointer"
        >
          <Image src="/hero-2.png" alt="Earrings" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
        </motion.div>

        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden group cursor-pointer"
        >
          <Image src="/hero-3.png" alt="Necklace" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
        </motion.div>

        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden group cursor-pointer bg-[#1A1A1A] p-8 flex flex-col justify-end"
        >
          <Image src="/hero-5.png" alt="Bracelets" fill className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-110" />
          <h3 className="text-3xl font-serif relative z-10">Bespoke<br />Craftsmanship</h3>
        </motion.div>
      </div>
    </section>
  );
}
