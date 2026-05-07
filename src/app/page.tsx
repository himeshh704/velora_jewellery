"use client";

import Hero from "@/components/Hero";
import OurWorks from "@/components/OurWorks";
import ProductGrid from "@/components/ProductGrid";
import AboutUs from "@/components/AboutUs";
import BentoGrid from "@/components/BentoGrid";
import { MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textX = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const ringRotate = useTransform(scrollYProgress, [0, 0.8], [0, 360]);
  const ringScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1.2, 1.2, 0.8]);
  const ringOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const titleOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const titleBlur = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [20, 0, 20]);

  return (
    <main className="min-h-screen">
      <Hero />
      <BentoGrid />
      <OurWorks />
      <ProductGrid />
      
      {/* Featured Detail Section - Pinned Scroll Experience */}
      <section ref={containerRef} className="relative h-[300vh] bg-black">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          {/* Large Parallax Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <motion.h2 
              style={{ x: textX, opacity: 0.1 }}
              className="text-[25vw] font-bold text-white tracking-tighter whitespace-nowrap leading-none"
            >
              ROSELINE ROSELINE ROSELINE
            </motion.h2>
          </div>

          {/* Glassy Product Name Reveal */}
          <motion.div
            style={{ 
              opacity: titleOpacity,
              filter: `blur(${titleBlur}px)`,
            }}
            className="absolute top-1/4 z-30"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-[0.2em] uppercase">
              The <span className="text-gold italic">Roseline</span> Ring
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute top-12 text-gold font-serif italic text-2xl z-30"
          >
            Elegance in Every Detail
          </motion.p>
          
          {/* Cut-out Hero Image with Pinned Spin */}
          <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
            <motion.div
              style={{ 
                rotate: ringRotate,
                scale: ringScale,
                opacity: ringOpacity
              }}
              className="relative w-72 md:w-[40rem] h-72 md:h-[40rem] z-20"
            >
              <Image 
                src="/luxury-ring-cutout.png" 
                alt="Luxury Ring" 
                fill 
                className="object-contain"
                priority
              />
            </motion.div>
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 md:w-[35rem] h-80 md:h-[35rem] bg-gold/20 blur-[150px] rounded-full z-10" />
          </div>

          {/* Glassy Bottom Fade */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-40" />
        </div>
      </section>

      <AboutUs />

      {/* Sticky Conversion Elements */}
      <a 
        href="https://wa.me/8824962843" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95"
      >
        <MessageCircle size={28} className="text-white" fill="currentColor" />
      </a>
    </main>
  );
}
