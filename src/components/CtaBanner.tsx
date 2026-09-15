import React from 'react';

interface CtaBannerProps {
  onOpenPlanner: () => void;
  onOpenConcierge: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenPlanner, onOpenConcierge }) => {
  return (
    <section className="py-24 bg-[#0B3D2E] text-white relative overflow-hidden" id="plan-trip">
      {/* Decorative radial highlights */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D9A441]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#167D9A]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#ffdf93] text-xs font-headline font-semibold mb-6">
          <span>✨ Private Island Tailoring</span>
        </div>
        <h2 className="font-serif-hero text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Ready to Discover Sri Lanka?
        </h2>
        <p className="font-body text-base sm:text-lg text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          Your dream journey starts here. Tell us what you want to experience, and our local travel
          specialists will craft an itinerary made just for you with uncompromised attention to detail.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenPlanner}
            className="bg-[#D9A441] hover:bg-[#c99530] text-[#241a00] font-headline font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 group cursor-pointer"
            id="cta-plan-btn"
          >
            <span>Plan My Tailor-Made Trip</span>
            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
              east
            </span>
          </button>
          <button
            onClick={onOpenConcierge}
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-headline font-semibold text-base px-8 py-4 rounded-full backdrop-blur-md transition-all duration-200 flex items-center gap-2 cursor-pointer"
            id="cta-concierge-btn"
          >
            <span className="material-symbols-outlined text-lg text-emerald-400">chat</span>
            <span>Speak With a Concierge</span>
          </button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-white/70">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-[#D9A441]">check_circle</span>{' '}
            100% Tailor-Made & Flexible
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-[#D9A441]">check_circle</span>{' '}
            Licensed Chauffeur Guides
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-[#D9A441]">check_circle</span>{' '}
            24/7 Island Assistance
          </span>
        </div>
      </div>
    </section>
  );
};
