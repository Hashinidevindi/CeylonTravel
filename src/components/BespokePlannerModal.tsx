import React, { useState } from 'react';

interface BespokePlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillDestination?: string;
}

export const BespokePlannerModal: React.FC<BespokePlannerModalProps> = ({
  isOpen,
  onClose,
  prefillDestination,
}) => {
  const [step, setStep] = useState<number>(1);

  // Form states
  const [selectedRegions, setSelectedRegions] = useState<string[]>(
    prefillDestination ? [prefillDestination] : ['Sigiriya & Cultural Triangle', 'Ella & Tea Country'],
  );
  const [duration, setDuration] = useState<string>('8 - 10 Days');
  const [travelers, setTravelers] = useState<string>('2 Adults, Couple');
  const [travelStyle, setTravelStyle] = useState<string>('Luxury Wildlife & Beach');
  const [accommodation, setAccommodation] = useState<string>('4-Star Heritage & Boutique');
  const [travelMonth, setTravelMonth] = useState<string>('December – April');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  if (!isOpen) return null;

  const regionOptions = [
    'Sigiriya & Cultural Triangle',
    'Ella & Tea Country',
    'Yala Safari & Wildlife',
    'Galle Fort & Heritage',
    'Mirissa Beach & Whales',
    'Sacred Kandy',
    'Jaffna & North',
    'Arugam Bay & Surf',
  ];

  const toggleRegion = (region: string) => {
    if (selectedRegions.includes(region)) {
      if (selectedRegions.length > 1) {
        setSelectedRegions(selectedRegions.filter((r) => r !== region));
      }
    } else {
      setSelectedRegions([...selectedRegions, region]);
    }
  };

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl max-h-[92vh] flex flex-col border border-[#cbc4d2]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#0B3D2E] text-white flex items-center justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold text-[#ffdf93] tracking-widest mb-1">
              <span>Bespoke Concierge</span>
            </div>
            <h3 className="font-serif-hero text-xl sm:text-2xl font-bold">
              Plan Your Tailor-Made Journey
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Progress steps bar */}
        {step < 4 && (
          <div className="px-6 py-3 bg-[#FAF9F5] border-b border-[#cbc4d2]/30 flex items-center justify-between text-xs font-headline font-semibold">
            <div className="flex items-center gap-2">
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  step >= 1 ? 'bg-[#0B3D2E] text-white' : 'bg-[#ece6ee] text-[#494551]'
                }`}
              >
                1
              </span>
              <span className={step === 1 ? 'text-[#0B3D2E] font-bold' : 'text-[#494551]'}>
                Destinations
              </span>
            </div>
            <span className="text-[#cbc4d2]">―</span>
            <div className="flex items-center gap-2">
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  step >= 2 ? 'bg-[#0B3D2E] text-white' : 'bg-[#ece6ee] text-[#494551]'
                }`}
              >
                2
              </span>
              <span className={step === 2 ? 'text-[#0B3D2E] font-bold' : 'text-[#494551]'}>
                Dates & Style
              </span>
            </div>
            <span className="text-[#cbc4d2]">―</span>
            <div className="flex items-center gap-2">
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  step >= 3 ? 'bg-[#0B3D2E] text-white' : 'bg-[#ece6ee] text-[#494551]'
                }`}
              >
                3
              </span>
              <span className={step === 3 ? 'text-[#0B3D2E] font-bold' : 'text-[#494551]'}>
                Your Details
              </span>
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {/* STEP 1: Destinations */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h4 className="font-headline font-bold text-sm text-[#1d1b20]">
                  Where would you like to travel in Sri Lanka?
                </h4>
                <p className="text-xs text-[#494551] mt-1">
                  Select one or more destinations. Our concierges will string them into a smooth,
                  unrushed private route.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {regionOptions.map((region) => {
                  const isSelected = selectedRegions.includes(region);
                  return (
                    <button
                      key={region}
                      type="button"
                      onClick={() => toggleRegion(region)}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#0B3D2E] bg-[#0B3D2E]/5 text-[#0B3D2E]'
                          : 'border-[#cbc4d2]/40 hover:border-[#0B3D2E]/30 text-[#1d1b20]'
                      }`}
                    >
                      <span>{region}</span>
                      <span className="material-symbols-outlined text-base">
                        {isSelected ? 'check_box' : 'check_box_outline_blank'}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-2">
                <label className="block text-xs font-bold text-[#1d1b20] mb-1">
                  Expected Duration
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['5 - 7 Days', '8 - 10 Days', '11 - 14 Days', '15+ Days'].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDuration(d)}
                      className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-colors cursor-pointer ${
                        duration === d
                          ? 'bg-[#0B3D2E] text-white border-[#0B3D2E]'
                          : 'bg-white border-[#cbc4d2]/40 text-[#494551]'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Style & Accommodation */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h4 className="font-headline font-bold text-sm text-[#1d1b20]">
                  Travel Preferences & Comfort
                </h4>
                <p className="text-xs text-[#494551] mt-1">
                  Tell us your party size and preferred style of accommodation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1d1b20] mb-1">Travelers</label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full bg-white border border-[#cbc4d2]/60 rounded-xl px-3.5 py-2.5 text-xs text-[#1d1b20]"
                  >
                    <option value="Solo Explorer">Solo Explorer</option>
                    <option value="2 Adults, Couple">2 Adults, Couple</option>
                    <option value="Honeymoon Couple">Honeymoon Couple</option>
                    <option value="Family (2 Adults, 1-2 Kids)">Family (2 Adults, 1-2 Kids)</option>
                    <option value="Friends Group (3-6 Guests)">Friends Group (3-6 Guests)</option>
                    <option value="Large Private Group (7+)">Large Private Group (7+)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1d1b20] mb-1">
                    Ideal Season / Month
                  </label>
                  <select
                    value={travelMonth}
                    onChange={(e) => setTravelMonth(e.target.value)}
                    className="w-full bg-white border border-[#cbc4d2]/60 rounded-xl px-3.5 py-2.5 text-xs text-[#1d1b20]"
                  >
                    <option value="December – April (Peak West/South)">
                      December – April (Peak West/South)
                    </option>
                    <option value="May – August (East Coast/Arugam)">
                      May – August (East Coast/Arugam)
                    </option>
                    <option value="September – November (Shoulder)">
                      September – November (Shoulder)
                    </option>
                    <option value="Flexible / As soon as possible">
                      Flexible / As soon as possible
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1d1b20] mb-1">
                  Accommodation Standard
                </label>
                <div className="space-y-2">
                  {[
                    {
                      id: '3-Star Boutique & Eco-Lodges',
                      desc: 'Charming character lodges, clean rooms, authentic village charm ($)',
                    },
                    {
                      id: '4-Star Heritage & Boutique',
                      desc: 'Restored colonial tea bungalows, stylish beachfront hotels ($$)',
                    },
                    {
                      id: '5-Star Ultra-Luxury & Villas',
                      desc: 'Private plunge pool villas, Relais & Châteaux properties, top-tier luxury ($$$)',
                    },
                  ].map((acc) => (
                    <div
                      key={acc.id}
                      onClick={() => setAccommodation(acc.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        accommodation === acc.id
                          ? 'border-[#0B3D2E] bg-[#0B3D2E]/5'
                          : 'border-[#cbc4d2]/30 hover:border-[#cbc4d2]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <strong className="text-xs text-[#1d1b20]">{acc.id}</strong>
                        <span className="material-symbols-outlined text-sm text-[#0B3D2E]">
                          {accommodation === acc.id
                            ? 'radio_button_checked'
                            : 'radio_button_unchecked'}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#494551] mt-0.5">{acc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Contact details */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h4 className="font-headline font-bold text-sm text-[#1d1b20]">
                  Where should we send your bespoke itinerary proposal?
                </h4>
                <p className="text-xs text-[#494551] mt-1">
                  Our Colombo concierge will draft a day-by-day route with verified boutique hotel
                  rates within 24 hours.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1d1b20] mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white border border-[#cbc4d2]/60 rounded-xl px-3.5 py-2.5 text-xs text-[#1d1b20] focus:outline-hidden focus:border-[#0B3D2E]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1d1b20] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#cbc4d2]/60 rounded-xl px-3.5 py-2.5 text-xs text-[#1d1b20] focus:outline-hidden focus:border-[#0B3D2E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1d1b20] mb-1">
                    WhatsApp / Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +44 7700 900077"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-[#cbc4d2]/60 rounded-xl px-3.5 py-2.5 text-xs text-[#1d1b20] focus:outline-hidden focus:border-[#0B3D2E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1d1b20] mb-1">
                  Specific Hopes, Dietary or Special Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. We love bird watching, want a private candlelit dinner on day 5, and need child car seats."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white border border-[#cbc4d2]/60 rounded-xl px-3.5 py-2.5 text-xs text-[#1d1b20] focus:outline-hidden focus:border-[#0B3D2E]"
                />
              </div>
            </form>
          )}

          {/* STEP 4: Success confirmation */}
          {step === 4 && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#e1d4fd] text-[#0B3D2E] rounded-full flex items-center justify-center mx-auto text-3xl">
                <span className="material-symbols-outlined text-3xl">done_all</span>
              </div>
              <h3 className="font-serif-hero text-2xl font-bold text-[#0B3D2E]">
                Proposal In Progress!
              </h3>
              <p className="text-xs sm:text-sm text-[#494551] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{fullName || 'Traveler'}</strong>. Your custom inquiry has been
                routed to our senior destination specialist.
              </p>

              <div className="bg-[#FAF9F5] p-5 rounded-2xl border border-[#cbc4d2]/30 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#494551]">Regions:</span>
                  <strong className="text-[#1d1b20] text-right truncate max-w-[200px]">
                    {selectedRegions.join(', ')}
                  </strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#494551]">Duration:</span>
                  <strong className="text-[#1d1b20]">{duration}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#494551]">Party:</span>
                  <strong className="text-[#1d1b20]">{travelers}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#494551]">Accommodation:</span>
                  <strong className="text-[#0B3D2E]">{accommodation}</strong>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <button
                  onClick={onClose}
                  className="bg-[#0B3D2E] text-white px-6 py-2.5 rounded-full text-xs font-semibold cursor-pointer"
                >
                  Return to Island Guide
                </button>
                <a
                  href={`https://wa.me/?text=Hello%20Travel%20Ceylon,%20I%20just%20submitted%20a%20tailor-made%20trip%20plan%20request%20for%20${encodeURIComponent(
                    selectedRegions.join(', '),
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] text-white px-6 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Instant WhatsApp Connect</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer step buttons */}
        {step < 4 && (
          <div className="p-4 sm:p-6 border-t border-[#cbc4d2]/30 bg-[#FAF9F5] flex items-center justify-between shrink-0">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="text-xs font-bold text-[#494551] hover:text-[#1d1b20] px-4 py-2 cursor-pointer"
              >
                ← Back
              </button>
            ) : (
              <span />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-[#0B3D2E] hover:bg-[#07291f] text-white text-xs font-semibold px-6 py-3 rounded-full flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span>Continue</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-[#D9A441] hover:bg-[#c99530] text-[#241a00] font-headline font-bold text-xs px-6 py-3 rounded-full flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span>Request My Custom Plan</span>
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
