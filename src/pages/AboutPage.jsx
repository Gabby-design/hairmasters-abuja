import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, ShieldCheck, Sun, Check, MapPin, Clock, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 bg-background space-y-16">
      
      {/* Header */}
      <div className="border-b border-stone-300 pb-8 text-center max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
          Our Philosophy & Story
        </p>
        <h1 className="mt-2 font-serif text-4xl sm:text-6xl text-[#1C1917] font-normal">
          Calm, refined & bespoke beauty.
        </h1>
        <p className="mt-4 text-base font-medium text-[#1C1917] leading-relaxed">
          Founded in the heart of Wuse, Abuja, Hair Masters Salon is built as a peaceful sanctuary for considered haircutting, custom balayage, and restorative hair wellness.
        </p>
      </div>

      {/* Grid Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="relative rounded-2xl overflow-hidden border border-stone-300 shadow-md">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
            alt="Hair Masters Salon Wuse Studio Interior"
            className="w-full h-[460px] object-cover"
          />
          {/* Docked Glassmorphism Badge */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 backdrop-blur-md bg-white/90 border border-white/60 p-4 rounded-xl shadow-lg max-w-xs">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-rose/20 text-rose rounded-full shrink-0">
                <Award className="w-5 h-5 text-rose" />
              </div>
              <div>
                <h4 className="text-sm font-serif font-bold text-[#1C1917] tracking-wider uppercase">Senior Stylists</h4>
                <p className="text-xs text-[#1C1917]/80 font-medium">Bespoke Hair & Scalp Care · Wuse II</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917]">
            Designed around natural light and quiet attention.
          </h2>

          <p className="text-sm sm:text-base font-medium text-[#1C1917] leading-relaxed">
            Located at <strong className="font-bold text-[#1C1917]">53b Euphrates Crescent, off Aguiyi Ironsi St, Wuse II, Abuja</strong>, our studio offers a calm, unhurried space where your hair receives thoughtful, expert care.
          </p>

          <p className="text-sm font-medium text-[#1C1917] leading-relaxed">
            From precision textured cuts to dimensional balayage and restorative silk presses, our senior stylists operate on an attentive schedule: <strong className="font-bold text-[#1C1917]">Monday – Saturday: 9:00 AM – 7:30 PM</strong>, and <strong className="font-bold text-[#1C1917]">Sunday: 12:00 PM – 6:00 PM (By Appointment Only)</strong>.
          </p>

          {/* Key Amenities in Warm-Tinted Bordered Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {[
              { title: 'Sulfate-Free Organic Cleansers', desc: 'Gentle, pH-balanced botanical washes' },
              { title: 'Private VIP Styling Suites', desc: 'Discreet, calm private styling rooms' },
              { title: 'K18 & Olaplex Bond Care', desc: 'Structural hair strengthening treatments' },
              { title: 'Complimentary Herbal Teas', desc: 'Fresh organic refreshments on arrival' },
            ].map((amenity) => (
              <div key={amenity.title} className="flex items-start gap-3 p-3.5 rounded-xl border border-rose/20 bg-rose/5 shadow-2xs">
                <div className="mt-0.5 rounded-full bg-rose/20 p-1 text-rose shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1C1917]">{amenity.title}</p>
                  <p className="text-[11px] text-stone-600 mt-0.5">{amenity.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-[#1C1917] px-6 py-3 text-xs font-semibold text-white hover:bg-stone-800"
            >
              <span>Book your studio visit</span>
              <span>→</span>
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
