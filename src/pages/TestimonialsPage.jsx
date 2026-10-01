import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      quote: "The most restorative hair appointment I’ve had in Abuja. My dimensional colour and Olaplex treatment look radiant, healthy, and natural.",
      author: "Amina K.",
      neighborhood: "Maitama, Abuja",
      service: "Dimensional Balayage & Bond Care",
      initials: "AK",
      avatarBg: "bg-rose/20 text-rose",
      rating: 5,
    },
    {
      id: 2,
      quote: "They listened attentively to my texture needs. My precision silk press lasted through humidity without losing its bounce or shine.",
      author: "Chioma E.",
      neighborhood: "Wuse II, Abuja",
      service: "Signature Silk Press & Steam Hydration",
      initials: "CE",
      avatarBg: "bg-amber-100 text-amber-800",
      rating: 5,
    },
    {
      id: 3,
      quote: "Clean, peaceful, and private VIP suite. My lace frontal install was melted seamlessly with zero tension on my edges.",
      author: "Zainab M.",
      neighborhood: "Asokoro, Abuja",
      service: "Luxury Lace Frontal & Wig Install",
      initials: "ZM",
      avatarBg: "bg-stone-200 text-stone-800",
      rating: 5,
    },
    {
      id: 4,
      quote: "Hair Masters Salon is my sanctuary before executive dinners. The blowout was effortless, voluminous, and held for four days.",
      author: "Hauwa B.",
      neighborhood: "Guzape, Abuja",
      service: "Precision Cuts & Styling",
      initials: "HB",
      avatarBg: "bg-emerald-100 text-emerald-800",
      rating: 5,
    },
    {
      id: 5,
      quote: "The keratin smoothing formula restored my curl elasticity without harsh fumes. Truly top-tier salon expertise in Wuse II.",
      author: "Ngozi O.",
      neighborhood: "Jabi, Abuja",
      service: "Keratin & Deep Moisture Hydration",
      initials: "NO",
      avatarBg: "bg-rose/20 text-rose",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev + testimonials.length - 1) % testimonials.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 bg-background space-y-16">
      
      {/* Header */}
      <div className="border-b border-stone-300 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
            Client Reviews
          </p>
          <h1 className="mt-2 font-serif text-4xl sm:text-6xl text-[#1C1917] font-normal">
            In their words
          </h1>
          <p className="mt-3 text-sm font-medium text-[#1C1917]">
            Verified reviews and notes from guests in our styling chairs across Abuja.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="grid size-11 place-items-center rounded-full ring-1 ring-ink/20 transition-colors hover:bg-ink/5 text-[#1C1917] font-bold"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="grid size-11 place-items-center rounded-full ring-1 ring-ink/20 transition-colors hover:bg-ink/5 text-[#1C1917] font-bold"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>

      {/* Featured Testimonial Hero Slider */}
      <div className="rounded-2xl bg-card p-8 sm:p-12 border border-stone-300 shadow-xs relative">
        <Quote className="w-12 h-12 text-rose/20 absolute top-6 right-6 pointer-events-none" />
        
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="flex items-center gap-0.5 text-amber-500">
            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/90 px-2.5 py-0.5 rounded-full">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            <span>Verified Visit</span>
          </span>
        </div>

        <blockquote className="font-serif text-2xl sm:text-4xl text-[#1C1917] leading-snug mb-8 font-normal">
          “{testimonials[activeIndex].quote}”
        </blockquote>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-200 pt-6">
          <div className="flex items-center gap-3.5">
            <div className={`w-11 h-11 rounded-full font-serif font-bold text-sm flex items-center justify-center shadow-xs ${testimonials[activeIndex].avatarBg}`}>
              {testimonials[activeIndex].initials}
            </div>
            <div>
              <span className="font-semibold text-[#1C1917] text-base block font-serif">
                {testimonials[activeIndex].author} · <span className="font-sans text-xs font-normal text-stone-600">{testimonials[activeIndex].neighborhood}</span>
              </span>
              <span className="text-xs text-stone-500 font-medium">
                {testimonials[activeIndex].service}
              </span>
            </div>
          </div>

          <Link
            to="/book"
            className="text-xs font-semibold text-white bg-[#1C1917] hover:bg-stone-800 px-5 py-2.5 rounded-full inline-block shadow-xs transition-colors"
          >
            Book your appointment →
          </Link>
        </div>
      </div>

      {/* All Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {testimonials.map((t, idx) => (
          <div
            key={t.id}
            onClick={() => setActiveIndex(idx)}
            className={`cursor-pointer rounded-2xl bg-card p-6 border transition-all flex flex-col justify-between ${
              idx === activeIndex
                ? 'border-rose ring-2 ring-rose/30 shadow-md'
                : 'border-stone-300 hover:border-stone-400'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/90 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                  <span>Verified</span>
                </span>
              </div>
              <p className="font-serif text-base text-[#1C1917] leading-relaxed mb-6 font-normal">
                “{t.quote}”
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-stone-200/80">
              <div className={`w-8 h-8 rounded-full font-serif font-bold text-xs flex items-center justify-center shrink-0 ${t.avatarBg}`}>
                {t.initials}
              </div>
              <div>
                <p className="text-xs font-bold text-[#1C1917]">{t.author}</p>
                <p className="text-[11px] text-stone-500">{t.neighborhood}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
