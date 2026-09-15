import React, { useState } from 'react';
import { ASSETS } from '../data/travelData';

interface HeroProps {
  onSearch: (params: {
    destination: string;
    dates: string;
    travelers: string;
    style: string;
  }) => void;
  onOpenPlanner: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onOpenPlanner }) => {
  const [destination, setDestination] = useState('All Sri Lanka');
  const [dates, setDates] = useState('Nov - Apr (Peak Season)');
  const [travelers, setTravelers] = useState('2 Adults, Honeymoon');
  const [style, setStyle] = useState('Luxury Wildlife & Beach');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      destination,
      dates,
      travelers,
      style,
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center bg-[#ded8e0] overflow-hidden"
      id="hero"
    >
      {/* Background Photography of Ella Train Viaduct */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('${ASSETS.heroTrain}')` }}
      />

      {/* Subtle Dark Gradient Vignette for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#202522]/60 via-[#202522]/40 to-[#0B3D2E]/85" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-32 sm:pb-36 text-center flex flex-col items-center">
        {/* Tag Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-headline font-medium tracking-wide shadow-xs mb-6">
          <span>🌴 Curated Sri Lankan Journeys</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif-hero text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 drop-shadow-md">
          Discover the Magic of <span className="italic text-[#ffdf93]">Sri Lanka</span>
        </h1>

        {/* Supporting Text */}
        <p className="max-w-2xl text-base sm:text-xl text-white/90 font-body font-normal leading-relaxed mb-10 text-balance drop-shadow">
          Explore breathtaking landscapes, ancient UNESCO culture, tropical palm beaches, and
          unforgettable bespoke adventures with Travel Ceylon.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection('destinations')}
            className="bg-[#0B3D2E] hover:bg-[#082e23] border border-[#D9A441]/50 text-white px-8 py-4 rounded-full font-headline font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-3 group cursor-pointer"
            id="hero-explore-btn"
          >
            <span>Explore Sri Lanka</span>
            <span className="material-symbols-outlined text-[#D9A441] group-hover:translate-x-1 transition-transform">
              explore
            </span>
          </button>
          <button
            onClick={onOpenPlanner}
            className="bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/40 px-8 py-4 rounded-full font-headline font-semibold text-base shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
            id="hero-plan-btn"
          >
            Plan Your Journey
          </button>
        </div>
      </div>

      {/* Interactive Travel Search & Planner Card anchored at bottom */}
      <div className="absolute -bottom-1 left-0 right-0 z-20 max-w-5xl mx-auto px-6 translate-y-1/2">
        <div className="bg-white rounded-2xl shadow-xl border border-[#cbc4d2]/30 p-4 sm:p-6 backdrop-blur-lg">
          <form
            onSubmit={handleSearchSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center"
            id="hero-search-form"
          >
            {/* Field 1: Destination */}
            <div className="flex flex-col border-b sm:border-b-0 sm:border-r border-[#cbc4d2]/30 pb-3 sm:pb-0 sm:pr-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#494551] flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#4f378a]">
                  location_on
                </span>{' '}
                Destination
              </span>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="bg-transparent border-0 font-headline font-semibold text-sm text-[#1d1b20] focus:ring-0 focus:outline-hidden p-0 mt-1 cursor-pointer"
                id="search-destination"
              >
                <option value="All Sri Lanka">All Sri Lanka</option>
                <option value="Sigiriya & Cultural Triangle">Sigiriya & Cultural Triangle</option>
                <option value="Ella & Hill Country">Ella & Hill Country</option>
                <option value="Yala & Southern Coast">Yala & Southern Coast</option>
                <option value="Galle & Mirissa Beach">Galle & Mirissa Beach</option>
                <option value="Arugam Bay East Coast">Arugam Bay East Coast</option>
              </select>
            </div>

            {/* Field 2: Dates */}
            <div className="flex flex-col border-b sm:border-b-0 lg:border-r border-[#cbc4d2]/30 pb-3 sm:pb-0 sm:pr-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#494551] flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#4f378a]">
                  calendar_month
                </span>{' '}
                Travel Dates
              </span>
              <select
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                className="bg-transparent border-0 font-headline font-semibold text-sm text-[#1d1b20] focus:ring-0 focus:outline-hidden p-0 mt-1 cursor-pointer"
                id="search-dates"
              >
                <option value="Nov - Apr (Peak Season)">Nov - Apr (Peak Season)</option>
                <option value="May - Aug (Summer & East)">May - Aug (Summer & East)</option>
                <option value="Sep - Oct (Shoulder Season)">Sep - Oct (Shoulder Season)</option>
                <option value="Festive Season (Dec - Jan)">Festive Season (Dec - Jan)</option>
                <option value="Custom Dates">Custom Dates</option>
              </select>
            </div>

            {/* Field 3: Travelers */}
            <div className="flex flex-col border-b sm:border-b-0 sm:border-r border-[#cbc4d2]/30 pb-3 sm:pb-0 sm:pr-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#494551] flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#4f378a]">group</span>{' '}
                Travelers
              </span>
              <select
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="bg-transparent border-0 font-headline font-semibold text-sm text-[#1d1b20] focus:ring-0 focus:outline-hidden p-0 mt-1 cursor-pointer"
                id="search-travelers"
              >
                <option value="2 Adults, Honeymoon">2 Adults, Honeymoon</option>
                <option value="Solo Traveler">Solo Traveler</option>
                <option value="Couple Getaway">Couple Getaway</option>
                <option value="Family (2 Adults, 2 Kids)">Family (2 Adults, 2 Kids)</option>
                <option value="Private Group (5+)">Private Group (5+)</option>
              </select>
            </div>

            {/* Field 4: Travel Style */}
            <div className="flex flex-col pb-3 sm:pb-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#494551] flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#4f378a]">sailing</span>{' '}
                Travel Style
              </span>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="bg-transparent border-0 font-headline font-semibold text-sm text-[#1d1b20] focus:ring-0 focus:outline-hidden p-0 mt-1 cursor-pointer"
                id="search-style"
              >
                <option value="Luxury Wildlife & Beach">Luxury Wildlife & Beach</option>
                <option value="Cultural Heritage & Temples">Cultural Heritage & Temples</option>
                <option value="Highlands & Scenic Train">Highlands & Scenic Train</option>
                <option value="Boutique Wellness & Ayurveda">Boutique Wellness & Ayurveda</option>
                <option value="Active Ocean Surfing">Active Ocean Surfing</option>
              </select>
            </div>

            {/* CTA Button */}
            <div className="lg:pl-2">
              <button
                type="submit"
                className="w-full bg-[#D9A441] hover:bg-[#c49235] text-[#241a00] font-headline font-bold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                id="search-submit-btn"
              >
                <span className="material-symbols-outlined text-lg">search</span>
                <span>Find Adventure</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
