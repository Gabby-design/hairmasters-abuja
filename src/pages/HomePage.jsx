import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getStoredServices } from '../utils/serviceStore';
import { Clock, MapPin, Sparkles, ArrowRight, Heart, Star, MessageCircle } from 'lucide-react';

export default function HomePage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(getStoredServices().slice(0, 4));
  }, []);

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute right-8 top-24 hidden lg:block" aria-hidden="true">
          <div className="h-28 w-px bg-rose/50"></div>
          <div className="mt-2 h-16 w-px bg-rose/40"></div>
          <div className="mt-2 h-10 w-px bg-rose/30"></div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-12 lg:grid-cols-12 lg:py-18">
          
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
              <Link
                to="/book"
                className="rounded-full bg-[#1C1917] px-7 py-3.5 text-sm font-semibold text-white shadow-md ring-2 ring-[#1C1917]/10 transition-all hover:bg-stone-800"
              >
                Book your appointment
              </Link>
              <a
                href="https://wa.me/2348173445612?text=Hello%20Hair%20Masters%20Salon,%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-white/90 px-5 py-3.5 text-sm font-medium text-[#1C1917] shadow-xs transition-colors hover:border-stone-400 hover:bg-white"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
              <Link
                to="/services"
                className="text-sm font-semibold text-[#1C1917] transition-colors hover:text-rose"
              >
                Explore services →
              </Link>
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

          {/* Right Balanced Photo Showcase */}
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

      {/* Featured Services Teaser Section */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6 border-b border-ink/10 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
              The Menu
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#1C1917]">
              Services, quietly priced
            </h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-[#1C1917] hover:text-rose">
            View full menu →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-12 md:grid-cols-2">
          {services.map((svc) => (
            <div key={svc.id} className="flex items-baseline justify-between gap-4 border-b border-stone-200 py-4">
              <div>
                <h3 className="font-serif text-lg text-[#1C1917] font-semibold">{svc.title}</h3>
                <p className="mt-1 text-xs text-[#1C1917] font-normal leading-relaxed">{svc.description}</p>
              </div>
              <span className="shrink-0 text-sm font-bold text-[#1C1917]">{svc.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="bg-rose/10 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
            Boutique Philosophy
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1917]">
            Careful hands, quiet luxury.
          </h2>
          <p className="text-sm sm:text-base text-[#1C1917] font-medium max-w-2xl mx-auto leading-relaxed">
            Located at 53b Euphrates Crescent, Wuse, Abuja. We open 24 hours daily to offer uninterrupted, private hair consultations with senior stylists.
          </p>
          <div className="pt-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-[#1C1917] px-6 py-3 text-xs font-semibold text-white hover:bg-stone-800"
            >
              <span>Learn about our story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
