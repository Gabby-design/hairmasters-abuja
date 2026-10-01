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
            Considered cuts, dimensional colour, and restorative treatments—created in soft natural light at our calm, welcoming studio in Wuse II, Abuja.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/book"
              className="rounded-full bg-[#1C1917] px-8 py-3.5 text-sm font-semibold text-white shadow-md ring-2 ring-[#1C1917]/10 transition-all hover:bg-stone-800"
            >
              Book Appointment
            </a>
            <a
              href="https://wa.me/2348173445612?text=Hello%20Hair%20Masters%20Salon,%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-stone-300 bg-white/95 px-6 py-3.5 text-sm font-semibold text-[#1C1917] shadow-xs transition-colors hover:border-stone-400 hover:bg-white"
            >
              <svg className="h-4 w-4 fill-[#25D366]" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Social Proof Strip Right Below Primary CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-1">
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
              Mon – Sat: 9:00 AM – 7:30 PM
            </span>
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#1C1917]/80">
            Cuts · Colour · Treatments · Silk Press · Lace Installs
          </p>
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
