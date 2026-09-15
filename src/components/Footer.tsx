import React, { useState } from 'react';
import { ASSETS } from '../data/travelData';

interface FooterProps {
  onOpenPlanner: () => void;
  onOpenArticle: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPlanner, onOpenArticle }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#ece6ee] border-t border-[#cbc4d2]/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#cbc4d2]/30">
          {/* Brand Info Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={ASSETS.logo}
                alt="Travel Ceylon Brand Logo"
                className="w-10 h-10 object-contain rounded-lg p-0.5 bg-white shadow-xs"
              />
              <span className="font-display font-bold text-xl text-[#4f378a]">Travel Ceylon</span>
            </div>
            <p className="font-body text-sm text-[#494551] mb-6 max-w-sm leading-relaxed">
              Discover Sri Lanka. Experience Ceylon. We curate extraordinary bespoke expeditions
              across ancient kingdoms, misty tea highlands, and golden tropical coasts.
            </p>
            <div className="space-y-2 text-xs text-[#494551] font-medium">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#4f378a] text-sm shrink-0">
                  location_on
                </span>
                <span>Level 14, West Tower, World Trade Center, Colombo 01, Sri Lanka</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#4f378a] text-sm shrink-0">call</span>
                <span>+94 (11) 234 5678 / WhatsApp Concierge: +94 77 123 4567</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#4f378a] text-sm shrink-0">mail</span>
                <span>concierge@travelceylon.com</span>
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-6 pt-6 border-t border-[#cbc4d2]/20">
              <span className="text-xs font-bold text-[#1d1b20] uppercase tracking-wider block mb-2">
                The Ceylon Dispatch Newsletter
              </span>
              {subscribed ? (
                <div className="bg-[#e1d4fd] text-[#4f378a] text-xs font-semibold px-3 py-2 rounded-xl flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Thank you! You'll receive our monthly curated island dispatch.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white border border-[#cbc4d2]/50 rounded-xl px-3 py-2 text-xs text-[#1d1b20] placeholder:text-[#494551]/60 focus:outline-hidden focus:border-[#4f378a] flex-1"
                  />
                  <button
                    type="submit"
                    className="bg-[#0B3D2E] hover:bg-[#07291f] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Links Column 1: Destinations */}
          <div>
            <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-[#1d1b20] mb-4">
              Destinations
            </h4>
            <ul className="space-y-2.5 font-body text-sm text-[#494551]">
              <li>
                <button
                  onClick={() => scrollTo('destinations')}
                  className="hover:text-[#4f378a] transition-colors text-left cursor-pointer"
                >
                  Sigiriya & Dambulla
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('destinations')}
                  className="hover:text-[#4f378a] transition-colors text-left cursor-pointer"
                >
                  Ella & Nuwara Eliya
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('destinations')}
                  className="hover:text-[#4f378a] transition-colors text-left cursor-pointer"
                >
                  Galle & South Coast
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('destinations')}
                  className="hover:text-[#4f378a] transition-colors text-left cursor-pointer"
                >
                  Yala & Udawalawe
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('destinations')}
                  className="hover:text-[#4f378a] transition-colors text-left cursor-pointer"
                >
                  Mirissa & Weligama
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('destinations')}
                  className="hover:text-[#4f378a] transition-colors text-left cursor-pointer"
                >
                  Kandy & Knuckles
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Travel Styles */}
          <div>
            <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-[#1d1b20] mb-4">
              Travel Styles
            </h4>
            <ul className="space-y-2.5 font-body text-sm text-[#494551]">
              <li>
                <button
                  onClick={() => scrollTo('experiences')}
                  className="hover:text-[#4f378a] transition-colors text-left cursor-pointer"
                >
                  Wildlife Safaris
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('experiences')}
                  className="hover:text-[#4f378a] transition-colors text-left cursor-pointer"
                >
                  Honeymoon Escapes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('experiences')}
                  className="hover:text-[#4f378a] transition-colors text-left cursor-pointer"
                >
                  Cultural Heritage
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('experiences')}
                  className="hover:text-[#4f378a] transition-colors text-left cursor-pointer"
                >
                  Scenic Train Tours
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('experiences')}
                  className="hover:text-[#4f378a] transition-colors text-left cursor-pointer"
                >
                  Ayurveda & Wellness
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('experiences')}
                  className="hover:text-[#4f378a] transition-colors text-left cursor-pointer"
                >
                  Ocean & Surfing
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Company & Care */}
          <div>
            <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-[#1d1b20] mb-4">
              Company & Care
            </h4>
            <ul className="space-y-2.5 font-body text-sm text-[#494551]">
              <li>
                <button
                  onClick={() => scrollTo('why-us')}
                  className="hover:text-[#4f378a] transition-colors text-left cursor-pointer"
                >
                  About Travel Ceylon
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenArticle}
                  className="hover:text-[#4f378a] transition-colors text-left cursor-pointer"
                >
                  Sustainable Tourism
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenArticle}
                  className="hover:text-[#4f378a] transition-colors text-left cursor-pointer"
                >
                  Sri Lanka Visa Guidelines
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenArticle}
                  className="hover:text-[#4f378a] transition-colors text-left cursor-pointer"
                >
                  Travel Insurance Guide
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPlanner}
                  className="text-[#4f378a] font-semibold hover:underline text-left cursor-pointer"
                >
                  Contact Concierge →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[#494551]">
            © {new Date().getFullYear()} Travel Ceylon Ltd. All rights reserved. Crafted for island
            explorers.
          </p>
          <div className="flex items-center gap-6 text-xs text-[#494551]">
            <span className="hidden md:inline">
              Sri Lanka Tourism Development Authority (SLTDA) Licensed
            </span>
            <div className="flex items-center gap-3 text-[#494551]">
              <a
                href="#hero"
                className="w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
                title="Global"
              >
                <span className="material-symbols-outlined text-base">public</span>
              </a>
              <a
                href="#hero"
                className="w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
                title="Photography"
              >
                <span className="material-symbols-outlined text-base">photo_camera</span>
              </a>
              <a
                href="#hero"
                className="w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
                title="Share"
              >
                <span className="material-symbols-outlined text-base">share</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
