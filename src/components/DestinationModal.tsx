import React from 'react';
import { Destination } from '../types';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onPlanTrip: (destName: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onPlanTrip,
  isWishlisted,
  onToggleWishlist,
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl max-h-[90vh] flex flex-col border border-[#cbc4d2]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-64 sm:h-72 shrink-0">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>

          {/* Wishlist Button */}
          <button
            onClick={onToggleWishlist}
            className={`absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isWishlisted
                ? 'bg-red-500 text-white'
                : 'bg-black/50 text-white hover:bg-black/80'
            }`}
          >
            <span
              className="material-symbols-outlined text-lg"
              style={{ fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0" }}
            >
              favorite
            </span>
          </button>

          {/* Badges and Title */}
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#ffdf93] bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                {destination.region}
              </span>
              {destination.tag && (
                <span className="text-[11px] font-medium text-white/90 bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                  {destination.tag}
                </span>
              )}
            </div>
            <h2 className="font-serif-hero text-2xl sm:text-3xl font-bold">{destination.name}</h2>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Quick Meta Row */}
          <div className="grid grid-cols-3 gap-3 bg-[#FAF9F5] p-3.5 rounded-2xl border border-[#cbc4d2]/30 text-center">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#494551] block">Rating</span>
              <span className="font-headline font-bold text-sm text-[#1d1b20] flex items-center justify-center gap-1 mt-0.5">
                <span
                  className="material-symbols-outlined text-xs text-[#ffdf93]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                {destination.rating}
              </span>
            </div>
            <div className="border-x border-[#cbc4d2]/30">
              <span className="text-[10px] uppercase font-bold text-[#494551] block">
                Best Weather
              </span>
              <span className="font-headline font-bold text-xs text-[#0B3D2E] block mt-0.5">
                {destination.bestSeason}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#494551] block">
                Ideal Stay
              </span>
              <span className="font-headline font-bold text-xs text-[#4f378a] block mt-0.5">
                {destination.recommendedStay}
              </span>
            </div>
          </div>

          {/* History / Description */}
          <div>
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-[#1d1b20] mb-2">
              About This Destination
            </h4>
            <p className="font-body text-sm text-[#494551] leading-relaxed">
              {destination.fullDesc}
            </p>
          </div>

          {/* Highlights Checklist */}
          <div>
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-[#1d1b20] mb-3">
              Curated Highlights & Insider Access
            </h4>
            <ul className="space-y-2.5">
              {destination.highlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#1d1b20]">
                  <span className="material-symbols-outlined text-[#0B3D2E] text-base shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span className="leading-relaxed font-medium">{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-[#cbc4d2]/30 bg-[#f8f2fa] flex items-center justify-between gap-4 shrink-0">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#494551] hover:text-[#1d1b20] px-4 py-2 cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onPlanTrip(destination.name);
            }}
            className="bg-[#0B3D2E] hover:bg-[#07291f] text-white text-xs font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <span>Plan Journey to {destination.name}</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
