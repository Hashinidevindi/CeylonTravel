import React, { useState } from 'react';
import { ASSETS } from '../data/travelData';

interface NavbarProps {
  wishlistCount: number;
  onOpenWishlist: () => void;
  onOpenPlanner: () => void;
  currency: string;
  setCurrency: (c: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  wishlistCount,
  onOpenWishlist,
  onOpenPlanner,
  currency,
  setCurrency,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-[#fdf7ff]/90 backdrop-blur-md border-b border-[#cbc4d2]/30 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="flex items-center gap-3 group"
          id="nav-logo"
        >
          <img
            src={ASSETS.logo}
            alt="Travel Ceylon Brand Logo"
            className="w-11 h-11 object-contain rounded-lg p-0.5 bg-white shadow-xs group-hover:scale-105 transition-transform duration-200"
          />
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-2xl tracking-tight text-[#4f378a] leading-none">
              Travel Ceylon
            </span>
            <span className="text-[10px] tracking-widest text-[#765b00] uppercase font-semibold mt-1">
              Sri Lanka Concierge
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 font-headline text-sm text-[#1d1b20] font-medium">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-[#4f378a] font-bold border-b-2 border-[#4f378a] pb-1 transition-colors hover:opacity-80"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('destinations')}
            className="text-[#494551] hover:text-[#4f378a] transition-colors"
          >
            Destinations
          </button>
          <button
            onClick={() => scrollToSection('experiences')}
            className="text-[#494551] hover:text-[#4f378a] transition-colors"
          >
            Experiences
          </button>
          <button
            onClick={() => scrollToSection('packages')}
            className="text-[#494551] hover:text-[#4f378a] transition-colors"
          >
            Tour Packages
          </button>
          <button
            onClick={() => scrollToSection('map')}
            className="text-[#494551] hover:text-[#4f378a] transition-colors"
          >
            Interactive Map
          </button>
          <button
            onClick={() => scrollToSection('journal')}
            className="text-[#494551] hover:text-[#4f378a] transition-colors"
          >
            Journal
          </button>
        </nav>

        {/* Trailing Action Cluster */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Currency Switcher */}
          <div className="hidden md:flex items-center gap-1 bg-white/70 border border-[#cbc4d2]/40 rounded-full px-2.5 py-1 text-xs font-semibold text-[#494551]">
            <span className="material-symbols-outlined text-sm text-[#4f378a]">payments</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent border-0 text-xs font-bold text-[#1d1b20] cursor-pointer focus:outline-hidden p-0 pr-1"
              id="currency-select"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="AUD">AUD (A$)</option>
            </select>
          </div>

          {/* Map Shortcut */}
          <button
            onClick={() => scrollToSection('map')}
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#f2ecf4] transition-colors text-[#494551] cursor-pointer"
            title="Island Map View"
            id="nav-map-btn"
          >
            <span className="material-symbols-outlined text-xl">map</span>
          </button>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#f2ecf4] transition-colors text-[#494551] cursor-pointer"
            title="Saved Wishlist"
            id="nav-wishlist-btn"
          >
            <span className="material-symbols-outlined text-xl text-[#ba1a1a]">favorite</span>
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#ba1a1a] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onOpenPlanner}
            className="inline-flex items-center gap-2 bg-[#0B3D2E] hover:bg-[#07291f] text-[#FAF9F5] px-4 sm:px-5 py-2.5 rounded-full font-headline text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md active:scale-95 transition-all duration-150 group cursor-pointer"
            id="nav-plan-trip-btn"
          >
            <span>Plan Your Journey</span>
            <span className="material-symbols-outlined text-base text-[#D9A441] group-hover:translate-x-0.5 transition-transform">
              east
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#f2ecf4] text-[#1d1b20] cursor-pointer"
            id="nav-mobile-toggle"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden bg-[#fdf7ff] border-t border-[#cbc4d2]/30 px-6 py-5 shadow-lg animate-in fade-in duration-200"
          id="mobile-drawer"
        >
          <div className="flex flex-col gap-4 font-headline text-base">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left text-[#4f378a] font-bold py-1"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('destinations')}
              className="text-left text-[#494551] hover:text-[#4f378a] py-1"
            >
              Destinations
            </button>
            <button
              onClick={() => scrollToSection('experiences')}
              className="text-left text-[#494551] hover:text-[#4f378a] py-1"
            >
              Experiences
            </button>
            <button
              onClick={() => scrollToSection('packages')}
              className="text-left text-[#494551] hover:text-[#4f378a] py-1"
            >
              Tour Packages
            </button>
            <button
              onClick={() => scrollToSection('map')}
              className="text-left text-[#494551] hover:text-[#4f378a] py-1"
            >
              Interactive Map
            </button>
            <button
              onClick={() => scrollToSection('journal')}
              className="text-left text-[#494551] hover:text-[#4f378a] py-1"
            >
              Travel Journal
            </button>

            <div className="pt-3 border-t border-[#cbc4d2]/30 flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-[#494551]">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">payments</span>
                  Currency: {currency}
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">language</span>
                  English
                </span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanner();
                }}
                className="text-xs font-bold text-[#0B3D2E] bg-[#ffdf93] px-3 py-1.5 rounded-full"
              >
                Plan Tour →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
