import React from 'react';
import { ASSETS } from '../data/travelData';

interface HoneymoonShowcaseProps {
  onExploreHoneymoon: () => void;
  onOpenPlanner: () => void;
}

export const HoneymoonShowcase: React.FC<HoneymoonShowcaseProps> = ({
  onExploreHoneymoon,
  onOpenPlanner,
}) => {
  return (
    <section className="relative py-32 overflow-hidden" id="honeymoon-section">
      {/* Full-width Romantic Editorial Visual */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${ASSETS.honeymoonDinner}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-xl bg-white/15 backdrop-blur-xl border border-white/20 p-8 sm:p-12 rounded-3xl shadow-2xl text-white">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#ffdf93] mb-4">
            <span className="material-symbols-outlined text-base">favorite</span>
            <span>Romantic Escapes</span>
          </div>
          <h2 className="font-serif-hero text-3xl sm:text-5xl font-bold leading-tight mb-4">
            Begin Your Forever in Sri Lanka
          </h2>
          <p className="font-body text-sm sm:text-base text-white/90 leading-relaxed mb-8">
            From secluded private cove beaches and candlelit ocean banquets to misty tea-country
            heritage bungalows with roaring fireplaces, let us handcraft a honeymoon journey you
            will cherish forever.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={onExploreHoneymoon}
              className="bg-[#D9A441] hover:bg-[#c49235] text-[#241a00] px-7 py-3.5 rounded-full font-headline font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
              id="honeymoon-explore-btn"
            >
              <span>Explore Honeymoon Packages</span>
              <span className="material-symbols-outlined text-base group-hover:scale-110 transition-transform">
                favorite
              </span>
            </button>
            <button
              onClick={onOpenPlanner}
              className="text-xs text-white/90 hover:text-white font-medium underline underline-offset-4 cursor-pointer"
            >
              Bespoke Romance Perks Included →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
