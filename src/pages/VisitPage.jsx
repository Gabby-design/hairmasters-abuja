import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ExternalLink, Navigation as NavIcon } from 'lucide-react';

export default function VisitPage() {
  const addressString = "53b Euphrates Crescent, off Aguiyi Ironsi St, Wuse II, Abuja, Nigeria";
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressString)}`;
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressString)}`;

  const hoursList = [
    ['Monday – Thursday', '9:00 AM – 7:30 PM'],
    ['Friday – Saturday', '9:00 AM – 7:30 PM'],
    ['Sunday', '12:00 PM – 6:00 PM (By Appointment Only)'],
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 bg-background space-y-16">
      
      {/* Header */}
      <div className="border-b border-stone-300 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
            Studio & Location
          </p>
          <h1 className="mt-2 font-serif text-4xl sm:text-6xl text-[#1C1917] font-normal">
            Visit our Wuse II studio
          </h1>
          <p className="mt-3 text-sm font-medium text-[#1C1917]">
            Located on Euphrates Crescent in Wuse II, Abuja. Designed as a calm, private sanctuary for beauty clients.
          </p>
        </div>

        <a
          href="tel:08173445612"
          className="rounded-full bg-[#1C1917] px-6 py-2.5 text-xs font-semibold text-white hover:bg-stone-800 flex items-center gap-2 shadow-xs transition-colors self-start sm:self-auto"
        >
          <Phone className="w-3.5 h-3.5 text-rose" />
          <span>Call Reception: 0817 344 5612</span>
        </a>
      </div>

      {/* Main Grid */}
      <div className="grid max-w-6xl gap-12 lg:grid-cols-12 items-start">
        
        {/* Left Column: Location & Google Maps Embed Preview */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-md bg-stone-100 relative">
            <iframe
              title="Hair Masters Salon Location Map"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=53b%20Euphrates%20Crescent,%20Wuse%20II,%20Abuja,%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full"
            ></iframe>
          </div>

          {/* Quick Mobile Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href="tel:08173445612"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#1C1917] px-5 py-3 text-xs font-semibold text-white shadow-xs hover:bg-stone-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-rose" />
              <span>Call Reception (0817 344 5612)</span>
            </a>
            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3 text-xs font-semibold text-[#1C1917] shadow-xs hover:border-stone-400 transition-colors"
            >
              <NavIcon className="w-4 h-4 text-rose" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Right Column: Address Details & Hours Schedule */}
        <div className="lg:col-span-5 space-y-8 bg-card border border-stone-300 p-8 rounded-2xl shadow-xs">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose block mb-1">
              Physical Address
            </span>
            <h2 className="font-serif text-2xl text-[#1C1917]">
              53b Euphrates Crescent, Wuse II
            </h2>
            <p className="mt-2 text-sm text-[#1C1917] font-medium leading-relaxed">
              Off Aguiyi Ironsi Street, Wuse II, Abuja, Federal Capital Territory, Nigeria.
            </p>
            <p className="text-xs text-stone-500 mt-1">
              Quiet private cul-de-sac with dedicated security and private on-site parking.
            </p>
            <a
              href={mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-rose hover:underline"
            >
              <span>View full map view</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Crisp Two-Column Hours Table */}
          <div className="border-t border-stone-200 pt-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1C1917] mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-rose" />
              <span>Operating Hours</span>
            </h3>
            <dl className="divide-y divide-stone-200 text-xs sm:text-sm">
              {hoursList.map(([day, time]) => (
                <div key={day} className="flex justify-between py-3">
                  <dt className="text-[#1C1917] font-medium">{day}</dt>
                  <dd className="text-[#1C1917] font-bold text-right">{time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="pt-2 border-t border-stone-200">
            <Link
              to="/book"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#1C1917] px-6 py-3.5 text-xs font-semibold text-white hover:bg-stone-800 shadow-xs transition-colors"
            >
              <span>Book Appointment</span>
              <span>→</span>
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
