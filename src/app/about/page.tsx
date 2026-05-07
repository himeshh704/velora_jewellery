"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 mb-32">
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.5em] text-gold mb-6"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-serif leading-tight mb-12"
          >
            Handcrafting <br /> <span className="italic text-foreground/40">Since 1995</span>
          </motion.h1>
          <div className="relative w-full aspect-[21/9] rounded-[3rem] overflow-hidden mb-20">
            <Image 
              src="https://images.unsplash.com/photo-1573408302185-9127ff5f6070?auto=format&fit=crop&q=80&w=2000" 
              alt="Atelier" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="px-6 md:px-12 lg:px-24 mb-32">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden">
             <Image 
              src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&q=80&w=1000" 
              alt="Craftsmanship" 
              fill 
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-8">The Art of <br /> Perfection</h2>
            <div className="space-y-6 text-foreground/60 text-lg leading-relaxed">
              <p>
                Founded in the heart of Paris, Veloura began as a small atelier dedicated to the pursuit of pure beauty. Our founders believed that jewellery should be more than an accessory—it should be an extension of the soul.
              </p>
              <p>
                Every piece in our collection is designed and handcrafted by master artisans who have spent decades perfecting their craft. We source only the finest materials, from conflict-free diamonds to sustainably harvested pearls.
              </p>
              <p>
                Today, Veloura is recognized globally for its commitment to excellence, tradition, and contemporary design. We continue to push the boundaries of jewellery making while staying true to our roots of handcrafted perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-card py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Bespoke Design", desc: "Every piece starts as a unique vision, sketched and refined to perfection." },
            { title: "Ethical Sourcing", desc: "We are committed to full transparency and ethical sourcing in our supply chain." },
            { title: "Master Craft", desc: "Our artisans combine traditional techniques with modern innovation." }
          ].map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-12 glass rounded-[2rem] text-center"
            >
              <h3 className="text-2xl font-serif mb-4">{val.title}</h3>
              <p className="text-foreground/50">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
