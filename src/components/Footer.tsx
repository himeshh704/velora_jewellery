import { Instagram, X, Facebook, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pt-32 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl md:text-6xl font-serif mb-8">Veloura</h2>
            <p className="text-white/50 max-w-sm leading-relaxed mb-8">
              Crafting timeless elegance for the modern individual. Our pieces are more than jewellery; they are stories of beauty and craftsmanship.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <X size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Facebook size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-8">Collections</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-gold transition-colors">Engagement Rings</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Classic Necklaces</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Artisan Bracelets</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Luxury Earrings</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Summer 2025</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-8">Newsletter</h4>
            <p className="text-sm text-white/50 mb-6">Join our mailing list for exclusive previews and offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-white/10 pb-2 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button className="absolute right-0 bottom-2">
                <ArrowUpRight size={18} className="text-white/50" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-[10px] uppercase tracking-widest text-white/30">
          <p>© 2025 Veloura Jewellery. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Shipping & Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
