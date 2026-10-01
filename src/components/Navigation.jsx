import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, MapPin, Phone } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Studio', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Visit', path: '/visit' },
  ];

  return (
    <header className="border-b border-ink/15 sticky top-0 z-50 bg-background/98 backdrop-blur-md shadow-xs">
      {/* Top Utility Ribbon */}
      <div className="border-b border-stone-200/60 bg-[#1C1917] px-4 py-1.5 text-[11px] text-stone-300 sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-stone-200">
              <MapPin className="h-3 w-3 text-rose" />
              <span>53b Euphrates Crescent, off Aguiyi Ironsi St, Wuse II, Abuja</span>
            </span>
            <span className="hidden sm:inline text-stone-600">|</span>
            <span className="hidden sm:inline-block text-stone-300 font-medium">
              Mon – Sat: 9:00 AM – 7:30 PM · Sun: 12:00 PM – 6:00 PM (By Appt)
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:08173445612"
              className="flex items-center gap-1.5 font-medium hover:text-white transition-colors"
            >
              <Phone className="h-3 w-3 text-rose" />
              <span>0817 344 5612</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4">
        
        {/* Brand Title */}
        <Link to="/" className="font-serif text-2xl sm:text-3xl tracking-normal text-[#1C1917] font-normal">
          Hair Masters <span className="italic text-rose font-serif">Salon</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-[#1C1917] md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors hover:text-rose font-medium py-1 px-1 border-b-2 ${
                  isActive ? 'border-rose text-rose font-semibold' : 'border-transparent text-[#1C1917]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/book"
            className="rounded-full bg-[#1C1917] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 shadow-xs sm:px-5"
          >
            Book a visit
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[#1C1917] hover:text-rose md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="border-t border-ink/10 bg-background px-6 py-5 md:hidden space-y-3 shadow-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block text-base py-2 font-medium border-b border-stone-100 ${
                  isActive ? 'text-rose font-semibold' : 'text-[#1C1917]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
