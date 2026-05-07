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
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <main className="min-h-screen">
      <Hero />
      <BentoGrid />
      <OurWorks />
      <ProductGrid />
      
      {/* Featured Detail Section */}
      <section ref={containerRef} className="relative min-h-[150vh] py-32 bg-black flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Large Parallax Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            transition={{ duration: 1.5 }}
            style={{ x: textX }}
            className="text-[25vw] font-bold text-white tracking-tighter whitespace-nowrap leading-none"
          >
            ROSELINE ROSELINE ROSELINE
          </motion.h2>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold font-serif italic text-2xl mb-8 z-30"
        >
          Elegance in Every Detail
        </motion.p>
        
        {/* Cut-out Hero Image with Scroll-bound Rotation */}
        <div className="relative w-full max-w-2xl aspect-square mb-12 flex items-center justify-center">
          <motion.div
            style={{ rotate: ringRotate }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-64 md:w-[32rem] h-64 md:h-[32rem] z-20"
          >
            <Image 
              src="/luxury-ring-cutout.png" 
              alt="Luxury Ring" 
              fill 
              className="object-contain"
            />
          </motion.div>
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-gold/30 blur-[120px] rounded-full z-10" />
        </div>

        <div className="relative w-full max-w-4xl aspect-video rounded-[3rem] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-diamond-ring-in-a-box-43183-large.mp4" type="video/mp4" />
          </video>
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
