import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-background">
      {/* Decorative vertical lines on desktop */}
      <div className="pointer-events-none absolute right-8 top-24 hidden lg:block" aria-hidden="true">
        <div className="h-28 w-px bg-rose/40"></div>
        <div className="mt-2 h-16 w-px bg-rose/30"></div>
        <div className="mt-2 h-10 w-px bg-rose/20"></div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-12 lg:grid-cols-12 lg:py-18">
        
        {/* Left Text Column */}
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
            A full-service boutique salon
          </p>

          <h1 className="mt-6 max-w-[13ch] font-serif text-5xl leading-[1.04] sm:text-6xl text-[#1C1917]">
            Where your hair <span className="italic text-rose">feels at home.</span>
          </h1>

          <p className="mt-6 max-w-[42ch] font-medium leading-relaxed text-[#1C1917]">
            Considered cuts, dimensional colour, and restorative treatments—created in soft natural light at our calm, welcoming studio in Wuse, Abuja.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/book"
              className="rounded-full bg-[#1C1917] px-7 py-3.5 text-sm font-semibold text-white shadow-md ring-2 ring-[#1C1917]/10 transition-all hover:bg-stone-800"
            >
              Book your appointment
            </a>
            <a
              href="https://wa.me/2348173445612?text=Hello%20Hair%20Masters%20Salon,%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-white/90 px-5 py-3.5 text-sm font-medium text-[#1C1917] shadow-xs transition-colors hover:border-stone-400 hover:bg-white"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
            <a
              href="/services"
              className="text-sm font-semibold text-[#1C1917] transition-colors hover:text-rose"
            >
              Explore services →
            </a>
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#1C1917]">
            Cuts · Colour · Treatments · Bridal · Kids
          </p>

          {/* Social Proof Bar */}
          <div className="mt-4 flex flex-wrap items-center gap-2.5 pt-1">
            <div className="flex items-center gap-0.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#1C1917]">
              4.9 Rating (120+ Abuja Clients)
            </span>
            <span className="text-xs text-stone-300">·</span>
            <span className="text-xs font-medium text-stone-600">
              Open 24/7 in Wuse
            </span>
          </div>
        </div>

        {/* Right Photo Showcase */}
        <div className="w-full lg:col-span-7">
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            {/* Card 1: Warm boutique salon ambiance */}
            <div className="space-y-3">
              <div className="overflow-hidden rounded-2xl border border-stone-200/90 bg-white p-2.5 shadow-sm transition-transform hover:scale-[1.01]">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80"
                  alt="Warm boutique hair studio in Wuse, Abuja"
                  className="aspect-[4/5] w-full rounded-xl object-cover object-center"
                  loading="eager"
                />
                <div className="px-1.5 pt-3 pb-1">
                  <p className="font-serif text-sm font-semibold text-[#1C1917]">Studio Sanctuary</p>
                  <p className="text-xs text-stone-500">Warm ambient lighting & private stations</p>
                </div>
              </div>
            </div>

            {/* Card 2: Luxury hair styling & texture artistry */}
            <div className="space-y-3 sm:mt-6">
              <div className="overflow-hidden rounded-2xl border border-stone-200/90 bg-white p-2.5 shadow-sm transition-transform hover:scale-[1.01]">
                <img
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
                  alt="Precision silk press and blowout artistry"
                  className="aspect-[4/5] w-full rounded-xl object-cover object-center"
                  loading="eager"
                />
                <div className="px-1.5 pt-3 pb-1">
                  <p className="font-serif text-sm font-semibold text-[#1C1917]">Artisan Styling</p>
                  <p className="text-xs text-stone-500">Silk press, luxury installs & treatments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
