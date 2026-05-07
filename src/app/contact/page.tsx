"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 2000);
  };

  if (formState === "success") {
    return (
      <main className="pt-32 pb-20 px-6 md:px-12 min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} className="text-green-500" />
          </div>
          <h1 className="text-4xl font-serif mb-4">Message Sent</h1>
          <p className="text-foreground/50 mb-10 leading-relaxed">
            Thank you for reaching out. Our concierge team will review your inquiry and get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setFormState("idle")}
            className="text-sm uppercase tracking-widest font-bold border-b-2 border-gold pb-1 hover:text-gold transition-colors"
          >
            Send another message
          </button>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Contact Info */}
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-serif mb-12"
            >
              Get in <br /> <span className="italic text-foreground/40">Touch</span>
            </motion.h1>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-card flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-bold mb-2">Email Us</h4>
                  <p className="text-xl text-foreground/60">concierge@veloura.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-card flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-bold mb-2">Call Us</h4>
                  <p className="text-xl text-foreground/60">+33 (0) 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-card flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-bold mb-2">Visit Us</h4>
                  <p className="text-xl text-foreground/60">24 Place Vendôme, 75001 Paris, France</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 lg:p-12 glass rounded-[3rem]">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-40">First Name</label>
                  <input required type="text" className="w-full bg-transparent border-b border-foreground/10 py-4 focus:border-gold outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-40">Last Name</label>
                  <input required type="text" className="w-full bg-transparent border-b border-foreground/10 py-4 focus:border-gold outline-none transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold opacity-40">Email Address</label>
                <input required type="email" className="w-full bg-transparent border-b border-foreground/10 py-4 focus:border-gold outline-none transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold opacity-40">Message</label>
                <textarea required rows={4} className="w-full bg-transparent border-b border-foreground/10 py-4 focus:border-gold outline-none transition-colors resize-none" />
              </div>

              <button 
                disabled={formState === "loading"}
                className="w-full bg-foreground text-background py-6 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gold hover:text-white transition-all group disabled:opacity-50"
              >
                {formState === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <MessageSquare size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
