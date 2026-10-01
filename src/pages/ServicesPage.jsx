import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getStoredServices } from '../utils/serviceStore';
import { Clock, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setServices(getStoredServices());
  }, []);

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  const handleBookClick = (title) => {
    toast.info(`Selected "${title}" for booking!`);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 bg-background space-y-12">
      
      {/* Page Header */}
      <div className="border-b border-stone-300 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
          The Salon Menu
        </p>
        <h1 className="mt-2 font-serif text-4xl sm:text-6xl text-[#1C1917] font-normal">
          Services, quietly priced
        </h1>
        <p className="mt-3 max-w-xl text-sm font-medium text-[#1C1917] leading-relaxed">
          Every session at Hair Masters Salon includes a personal hair assessment, organic botanical shampoo wash, and tailored finish styling.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 pt-2">
        {[
          { label: 'All Services', value: 'all' },
          { label: 'Cuts & Styling', value: 'cuts' },
          { label: 'Balayage & Color', value: 'color' },
          { label: 'Treatments', value: 'treatments' },
          { label: 'Silk Press & Blowout', value: 'blowout' },
          { label: 'Bridal Updos', value: 'bridal' },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveCategory(tab.value)}
            className={`px-4 py-2 text-xs font-semibold rounded-full transition-all ${
              activeCategory === tab.value
                ? 'bg-[#1C1917] text-white shadow-xs'
                : 'bg-card text-[#1C1917] border border-stone-300 hover:border-rose'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Modern Visual Services List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-4">
        {filteredServices.map((svc) => (
          <article
            key={svc.id}
            className="rounded-2xl bg-card border border-stone-300 shadow-xs flex flex-col justify-between overflow-hidden transition-all hover:border-stone-400 hover:shadow-md"
          >
            <div>
              {/* 16:9 Thumbnail Image */}
              <div className="aspect-[16/9] w-full overflow-hidden bg-stone-100 relative">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 text-sm font-bold text-[#1C1917] bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full border border-stone-200/90 shadow-xs">
                  {svc.price}
                </span>
              </div>

              <div className="p-6 pb-2 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1C1917]/80">
                  <Clock className="w-3.5 h-3.5 text-rose" />
                  <span>{svc.duration}</span>
                </div>

                <h2 className="font-serif text-2xl text-[#1C1917] font-normal leading-snug">
                  {svc.title}
                </h2>

                <p className="text-sm font-medium text-[#1C1917]/90 leading-relaxed">
                  {svc.description}
                </p>

                {svc.details && (
                  <div className="p-3 rounded-xl bg-background border border-stone-200/80 text-xs font-normal text-[#1C1917] space-y-1">
                    <span className="font-semibold text-rose block">Stylist Note:</span>
                    <p className="line-clamp-2">{svc.details}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 pt-4 flex items-center justify-between border-t border-stone-200/80">
              <span className="text-xs font-semibold text-stone-500">Wuse II, Abuja</span>
              <Link
                to={`/book?service=${svc.id}`}
                onClick={() => handleBookClick(svc.title)}
                className="text-xs font-semibold text-white bg-[#1C1917] hover:bg-stone-800 px-4 py-2 rounded-full flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <span>Book This Service</span>
                <ArrowRight className="w-3.5 h-3.5 text-rose" />
              </Link>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
