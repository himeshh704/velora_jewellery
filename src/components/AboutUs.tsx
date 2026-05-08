"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

interface AboutUsProps {
  title?: string;
  content?: any;
  image?: any;
}

export default function AboutUs({ title, content, image }: AboutUsProps) {
  return (
    <section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden"
        >
          <Image
            src={image ? urlForImage(image).url() : "/hero-3.png"}
            alt={title || "About Veloura"}
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-accent p-8 md:p-16 rounded-[3rem] text-foreground flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-8">{title || "About Us"}</h2>
          <div className="space-y-6 text-foreground/80 leading-relaxed text-sm md:text-base prose prose-invert max-w-none">
            {content ? (
              <PortableText value={content} />
            ) : (
              <>
                <p>
                  At Veloura, we believe that jewelry is more than just adornment — it is an intimate expression of elegance, confidence, and timeless beauty. Born from a passion for artistry and refined craftsmanship, Veloura creates pieces that are as meaningful as they are exquisite.
                </p>
                <p>
                  Every design is thoughtfully crafted with precision, combining luxurious materials and modern sophistication to capture the essence of understated glamour. From the sleek lines of contemporary design to the enduring allure of classic forms, Veloura reflects a harmony between tradition and innovation.
                </p>
                <p className="hidden md:block">
                  Our mission is to celebrate individuality through jewelry that tells a story — a story of grace, empowerment, and allure. Each piece is more than an accessory; it is a lasting symbol of elegance designed to be cherished for generations.
                </p>
                <p className="font-serif italic text-xl md:text-2xl mt-8">
                  Veloura is not just jewelry. It is the art of wearing elegance.
                </p>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
