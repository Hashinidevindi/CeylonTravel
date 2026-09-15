import React, { useState } from 'react';

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConciergeModal: React.FC<ConciergeModalProps> = ({ isOpen, onClose }) => {
  const [callbackRequested, setCallbackRequested] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackRequested(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-[#cbc4d2]/30 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#e1d4fd] text-[#4f378a] flex items-center justify-center">
              <span className="material-symbols-outlined text-base">support_agent</span>
            </span>
            <h3 className="font-serif-hero text-xl font-bold text-[#0B3D2E]">24/7 Island Concierge</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#ece6ee] flex items-center justify-center text-[#494551] cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        <p className="font-body text-xs text-[#494551] leading-relaxed mb-6">
          Connect directly with our senior Sri Lankan destination specialists for instant travel advice,
          resort bookings, and chauffeur reservations.
        </p>

        {/* Direct Channels */}
        <div className="space-y-3 mb-6">
          <a
            href="https://wa.me/94771234567?text=Ayubowan!%20I%20would%20like%20to%20inquire%20about%20a%20private%20Sri%20Lankan%20tour."
            target="_blank"
            rel="noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-2xl flex items-center justify-between font-headline font-bold text-xs shadow-xs transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-lg">chat</span>
              <div className="text-left">
                <span className="block leading-tight">Chat on WhatsApp</span>
                <span className="text-[10px] opacity-80 font-normal">Typical reply time: 3 mins</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>

          <a
            href="tel:+94112345678"
            className="w-full bg-[#FAF9F5] hover:bg-[#f2ecf4] text-[#1d1b20] border border-[#cbc4d2]/40 p-3.5 rounded-2xl flex items-center justify-between font-headline font-semibold text-xs transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-lg text-[#0B3D2E]">call</span>
              <div className="text-left">
                <span className="block leading-tight font-bold">+94 (11) 234 5678</span>
                <span className="text-[10px] text-[#494551]">Colombo World Trade Center HQ</span>
              </div>
            </div>
            <span className="text-[11px] text-[#0B3D2E] font-bold">Call Now</span>
          </a>
        </div>

        {/* Callback Form */}
        <div className="pt-4 border-t border-[#cbc4d2]/30">
          <span className="text-[11px] uppercase font-bold text-[#494551] block mb-2">
            Request an Instant Callback
          </span>
          {callbackRequested ? (
            <div className="bg-[#e1d4fd] text-[#4f378a] p-3 rounded-xl text-xs font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              Thank you {name}! Our team will call {phone} shortly.
            </div>
          ) : (
            <form onSubmit={handleCallbackSubmit} className="space-y-2.5">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#FAF9F5] border border-[#cbc4d2]/50 rounded-xl px-3 py-2 text-xs text-[#1d1b20] focus:outline-hidden"
              />
              <input
                type="tel"
                required
                placeholder="Your Phone / WhatsApp"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#FAF9F5] border border-[#cbc4d2]/50 rounded-xl px-3 py-2 text-xs text-[#1d1b20] focus:outline-hidden"
              />
              <button
                type="submit"
                className="w-full bg-[#0B3D2E] hover:bg-[#07291f] text-white py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Request Concierge Callback
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
