import React, { useState } from 'react';
import { TourPackage } from '../types';

interface PackageModalProps {
  pkg: TourPackage | null;
  onClose: () => void;
  currency: string;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}

export const PackageModal: React.FC<PackageModalProps> = ({
  pkg,
  onClose,
  currency,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [travelers, setTravelers] = useState<number>(2);
  const [activeDay, setActiveDay] = useState<number>(1);
  const [bookingStep, setBookingStep] = useState<'details' | 'booking' | 'confirmed'>('details');

  // Booking Form State
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [travelDate, setTravelDate] = useState('2026-11-15');
  const [specialNotes, setSpecialNotes] = useState('');

  if (!pkg) return null;

  const formatPrice = (usd: number) => {
    switch (currency) {
      case 'EUR':
        return `€${Math.round(usd * 0.92).toLocaleString()}`;
      case 'GBP':
        return `£${Math.round(usd * 0.79).toLocaleString()}`;
      case 'AUD':
        return `A$${Math.round(usd * 1.54).toLocaleString()}`;
      default:
        return `$${usd.toLocaleString()}`;
    }
  };

  const totalPriceUSD = pkg.priceUSD * travelers;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStep('confirmed');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl max-h-[92vh] flex flex-col border border-[#cbc4d2]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-56 sm:h-64 shrink-0">
          <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

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
              isWishlisted ? 'bg-red-500 text-white' : 'bg-black/50 text-white hover:bg-black/80'
            }`}
          >
            <span
              className="material-symbols-outlined text-lg"
              style={{ fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0" }}
            >
              favorite
            </span>
          </button>

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="bg-[#D9A441] text-[#241a00] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
                {pkg.category} Tour
              </span>
              <span className="bg-white/20 backdrop-blur-xs text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {pkg.duration}
              </span>
              <span className="flex items-center gap-1 text-xs text-[#ffdf93]">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                {pkg.rating} ({pkg.reviewsCount} reviews)
              </span>
            </div>
            <h2 className="font-serif-hero text-2xl sm:text-3xl font-bold">{pkg.title}</h2>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#cbc4d2]/30 px-6 bg-[#FAF9F5] shrink-0 text-xs font-headline font-semibold">
          <button
            onClick={() => setBookingStep('details')}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer ${
              bookingStep === 'details'
                ? 'border-[#0B3D2E] text-[#0B3D2E] font-bold'
                : 'border-transparent text-[#494551] hover:text-[#1d1b20]'
            }`}
          >
            Itinerary & Inclusions
          </button>
          <button
            onClick={() => setBookingStep('booking')}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer ${
              bookingStep === 'booking' || bookingStep === 'confirmed'
                ? 'border-[#0B3D2E] text-[#0B3D2E] font-bold'
                : 'border-transparent text-[#494551] hover:text-[#1d1b20]'
            }`}
          >
            Book / Inquire
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {bookingStep === 'details' && (
            <>
              {/* Route Summary */}
              <div>
                <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-[#494551] mb-2">
                  Complete Tour Route
                </h4>
                <div className="flex items-center gap-2 flex-wrap text-xs">
                  {pkg.route.map((city, idx) => (
                    <React.Fragment key={city}>
                      <span className="bg-[#e1d4fd]/50 text-[#4f378a] font-bold px-2.5 py-1 rounded-lg">
                        {city}
                      </span>
                      {idx < pkg.route.length - 1 && (
                        <span className="text-[#cbc4d2] font-bold">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Day-by-Day Accordion / Selector */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-[#1d1b20]">
                    Day-by-Day Journey
                  </h4>
                  <span className="text-xs text-[#494551]">
                    {pkg.detailedDays.length} Days Planned
                  </span>
                </div>

                <div className="space-y-3">
                  {pkg.detailedDays.map((d) => (
                    <div
                      key={d.day}
                      className={`p-4 rounded-2xl border transition-all ${
                        activeDay === d.day
                          ? 'border-[#0B3D2E] bg-[#0B3D2E]/5 shadow-xs'
                          : 'border-[#cbc4d2]/30 hover:border-[#cbc4d2] cursor-pointer'
                      }`}
                      onClick={() => setActiveDay(d.day)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                              activeDay === d.day
                                ? 'bg-[#0B3D2E] text-white'
                                : 'bg-[#e9ddff] text-[#4f378a]'
                            }`}
                          >
                            {d.day}
                          </span>
                          <span className="font-headline font-bold text-xs sm:text-sm text-[#1d1b20]">
                            {d.title}
                          </span>
                        </div>
                        <span className="material-symbols-outlined text-base text-[#494551]">
                          {activeDay === d.day ? 'expand_less' : 'expand_more'}
                        </span>
                      </div>

                      {activeDay === d.day && (
                        <div className="mt-3 pt-3 border-t border-[#cbc4d2]/20 text-xs text-[#494551] space-y-2">
                          <p className="leading-relaxed">{d.description}</p>
                          <div className="flex items-center gap-1.5 text-[11px] text-[#0B3D2E] font-semibold pt-1">
                            <span className="material-symbols-outlined text-sm">hotel</span>
                            <span>Overnight Stay: {d.stay}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div>
                <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-[#1d1b20] mb-3">
                  What’s Included in This Experience
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {pkg.inclusions.map((inc, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-[#1d1b20] bg-[#FAF9F5] p-3 rounded-xl border border-[#cbc4d2]/20"
                    >
                      <span className="material-symbols-outlined text-[#0B3D2E] text-base shrink-0">
                        check_circle
                      </span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {bookingStep === 'booking' && (
            <form onSubmit={handleBookingSubmit} className="space-y-5">
              <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#cbc4d2]/30 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#494551] block">Selected Itinerary</span>
                  <strong className="text-sm text-[#0B3D2E]">{pkg.title}</strong>
                  <span className="text-xs text-[#494551] block mt-0.5">{pkg.duration}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#494551] block">Total Estimate</span>
                  <strong className="text-lg text-[#4f378a]">{formatPrice(totalPriceUSD)}</strong>
                  <span className="text-[10px] text-[#494551] block">
                    ({travelers} {travelers === 1 ? 'traveler' : 'travelers'})
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1d1b20] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-white border border-[#cbc4d2]/60 rounded-xl px-3.5 py-2.5 text-xs text-[#1d1b20] focus:outline-hidden focus:border-[#0B3D2E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1d1b20] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. eleanor@example.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-white border border-[#cbc4d2]/60 rounded-xl px-3.5 py-2.5 text-xs text-[#1d1b20] focus:outline-hidden focus:border-[#0B3D2E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1d1b20] mb-1">
                    Desired Start Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-white border border-[#cbc4d2]/60 rounded-xl px-3.5 py-2.5 text-xs text-[#1d1b20] focus:outline-hidden focus:border-[#0B3D2E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1d1b20] mb-1">
                    Number of Guests
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setTravelers(Math.max(1, travelers - 1))}
                      className="w-9 h-9 rounded-xl border border-[#cbc4d2] flex items-center justify-center font-bold text-sm hover:bg-slate-100"
                    >
                      -
                    </button>
                    <span className="font-bold text-sm w-8 text-center">{travelers}</span>
                    <button
                      type="button"
                      onClick={() => setTravelers(travelers + 1)}
                      className="w-9 h-9 rounded-xl border border-[#cbc4d2] flex items-center justify-center font-bold text-sm hover:bg-slate-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1d1b20] mb-1">
                  Special Requests / Dietary / Room Preferences
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g., Honeymoon bed decoration, vegetarian food, private pool upgrade, or domestic flight request."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full bg-white border border-[#cbc4d2]/60 rounded-xl px-3.5 py-2.5 text-xs text-[#1d1b20] focus:outline-hidden focus:border-[#0B3D2E]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#0B3D2E] hover:bg-[#07291f] text-white py-3.5 rounded-full font-headline font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Reservation Request</span>
                  <span className="material-symbols-outlined text-base">send</span>
                </button>
                <p className="text-[11px] text-center text-[#494551] mt-2">
                  No payment charged now. Our island concierge will verify boutique availability and
                  confirm via WhatsApp/Email.
                </p>
              </div>
            </form>
          )}

          {bookingStep === 'confirmed' && (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#e1d4fd] text-[#4f378a] rounded-full flex items-center justify-center mx-auto text-3xl">
                <span className="material-symbols-outlined text-3xl text-[#0B3D2E]">
                  check_circle
                </span>
              </div>
              <h3 className="font-serif-hero text-2xl font-bold text-[#0B3D2E]">
                Ayubowan, {guestName || 'Traveler'}!
              </h3>
              <p className="text-xs sm:text-sm text-[#494551] max-w-md mx-auto leading-relaxed">
                Your reservation request for <strong>{pkg.title}</strong> has been registered with
                reference <strong>#TC-{Math.floor(100000 + Math.random() * 900000)}</strong>.
              </p>
              <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#cbc4d2]/30 max-w-md mx-auto text-left text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#494551]">Travelers:</span>
                  <strong className="text-[#1d1b20]">{travelers} Guests</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#494551]">Expected Date:</span>
                  <strong className="text-[#1d1b20]">{travelDate}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#494551]">Estimated Price:</span>
                  <strong className="text-[#4f378a]">{formatPrice(totalPriceUSD)}</strong>
                </div>
              </div>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <button
                  onClick={onClose}
                  className="bg-[#0B3D2E] text-white px-6 py-2.5 rounded-full text-xs font-semibold cursor-pointer"
                >
                  Done
                </button>
                <a
                  href={`https://wa.me/?text=Hello%20Travel%20Ceylon,%20I%20just%20reserved%20the%20${encodeURIComponent(
                    pkg.title,
                  )}%20package!`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] text-white px-6 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        {bookingStep === 'details' && (
          <div className="p-4 sm:p-6 border-t border-[#cbc4d2]/30 bg-[#f8f2fa] flex items-center justify-between gap-4 shrink-0">
            <div>
              <span className="text-[10px] text-[#494551] uppercase font-bold">Estimated Cost</span>
              <p className="font-headline font-bold text-lg text-[#4f378a]">
                {formatPrice(totalPriceUSD)}{' '}
                <span className="text-xs font-normal text-[#494551]">
                  ({travelers} {travelers === 1 ? 'traveler' : 'travelers'})
                </span>
              </p>
            </div>
            <button
              onClick={() => setBookingStep('booking')}
              className="bg-[#0B3D2E] hover:bg-[#07291f] text-white text-xs font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <span>Book / Customize Itinerary</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
