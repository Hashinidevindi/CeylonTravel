import React from 'react';

export const Features: React.FC = () => {
  return (
    <>
      {/* Spacer to accommodate floating search bar */}
      <div className="h-28 sm:h-20 bg-[#FAF9F5]" />

      {/* ==================== WHY TRAVEL CEYLON ==================== */}
      <section className="py-20 bg-[#FAF9F5] relative overflow-hidden" id="why-us">
        {/* Soft tropical leaf watermark styling */}
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#e1d4fd]/20 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-[#ffdf93]/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9A441] bg-[#ece6ee] px-3 py-1 rounded-full">
              Distinction in Travel
            </span>
            <h2 className="font-serif-hero text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3D2E] mt-3">
              Your Journey. Our Passion.
            </h2>
            <p className="font-body text-base text-[#494551] mt-3">
              We create unforgettable Sri Lankan experiences designed around your distinct rhythm,
              taste, and pace.
            </p>
          </div>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl border border-[#cbc4d2]/30 hover:border-[#4f378a]/40 hover:shadow-md transition-all group">
              <div className="w-14 h-14 rounded-xl bg-[#e1d4fd] text-[#4f378a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-[#1d1b20] mb-2">Local Expertise</h3>
              <p className="font-body text-sm text-[#494551] leading-relaxed">
                Discover Sri Lanka through the intimate knowledge of native guides, naturalists, and
                island historians.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl border border-[#cbc4d2]/30 hover:border-[#4f378a]/40 hover:shadow-md transition-all group">
              <div className="w-14 h-14 rounded-xl bg-[#ffdf93] text-[#241a00] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">edit_calendar</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-[#1d1b20] mb-2">Tailor-Made Journeys</h3>
              <p className="font-body text-sm text-[#494551] leading-relaxed">
                Personalized itineraries designed entirely around your desires, from private tea
                bungalows to beachfront villas.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl border border-[#cbc4d2]/30 hover:border-[#4f378a]/40 hover:shadow-md transition-all group">
              <div className="w-14 h-14 rounded-xl bg-[#e9ddff] text-[#4f378a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">temple_buddhist</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-[#1d1b20] mb-2">Authentic Experiences</h3>
              <p className="font-body text-sm text-[#494551] leading-relaxed">
                Experience the real Sri Lanka beyond the typical tourist routes, with private access
                to ancient heritage and artisan rituals.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl border border-[#cbc4d2]/30 hover:border-[#4f378a]/40 hover:shadow-md transition-all group">
              <div className="w-14 h-14 rounded-xl bg-[#e1d4fd] text-[#4b4263] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">support_agent</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-[#1d1b20] mb-2">24/7 Concierge Support</h3>
              <p className="font-body text-sm text-[#494551] leading-relaxed">
                Travel confidently with our dedicated on-island concierge team available via private
                chauffeur and direct WhatsApp line.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
