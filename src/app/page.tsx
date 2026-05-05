import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurWorks from "@/components/OurWorks";
import ProductGrid from "@/components/ProductGrid";
import AboutUs from "@/components/AboutUs";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <OurWorks />
      <ProductGrid />
      
      {/* Featured Detail Section */}
      <section className="py-32 bg-black flex flex-col items-center text-center">
        <p className="text-gold font-serif italic text-2xl mb-4">Elegance in Every Detail</p>
        <div className="relative w-full max-w-4xl aspect-video rounded-[3rem] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-diamond-ring-in-a-box-43183-large.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <AboutUs />
      <BentoGrid />
      <Footer />

      {/* Sticky Conversion Elements */}
      <a 
        href="https://wa.me/yournumber" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95"
      >
        <MessageCircle size={28} className="text-white" fill="currentColor" />
      </a>
    </main>
  );
}
