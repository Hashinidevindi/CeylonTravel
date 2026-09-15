import React, { useState } from 'react';
import { MAP_DESTINATIONS } from '../data/travelData';
import { MapDestinationData } from '../types';

interface InteractiveMapProps {
  onInquireRegion: (regionTitle: string) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onInquireRegion }) => {
  const [selectedKey, setSelectedKey] = useState<string>('sigiriya');
  const [isFading, setIsFading] = useState<boolean>(false);

  const activeData: MapDestinationData =
    MAP_DESTINATIONS[selectedKey] || MAP_DESTINATIONS['sigiriya'];

  const handleSelectPin = (key: string) => {
    if (key === selectedKey) return;
    setIsFading(true);
    setTimeout(() => {
      setSelectedKey(key);
      setIsFading(false);
    }, 150);
  };

  return (
    <section className="py-24 bg-white relative" id="map">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#167D9A]">
            Island Cartography
          </span>
          <h2 className="font-serif-hero text-3xl sm:text-5xl font-bold text-[#0B3D2E] mt-2">
            One Island. Endless Experiences.
          </h2>
          <p className="font-body text-base text-[#494551] mt-3">
            Discover key destinations across the pearl of the Indian Ocean and check regional
            seasons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF9F5] p-6 sm:p-10 rounded-3xl border border-[#cbc4d2]/30 shadow-xs">
          {/* Map Graphics with Clickable Interactive Pins */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[440px] bg-[#e1d4fd]/15 rounded-2xl overflow-hidden p-6 border border-[#cbc4d2]/20">
            {/* Stylized Island Shape SVG Canvas Representation */}
            <div className="relative w-full max-w-md h-[420px]">
              {/* Sri Lanka Island Outline Path Graphic */}
              <svg
                className="w-full h-full drop-shadow-md"
                viewBox="0 0 320 440"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main Island Body */}
                <path
                  d="M160 30 C 180 35, 195 60, 200 90 C 215 130, 240 180, 240 230 C 240 290, 210 360, 180 395 C 150 415, 130 405, 110 380 C 85 350, 75 290, 75 220 C 75 160, 110 90, 140 50 Z"
                  fill="#e1d4fd"
                  stroke="#4f378a"
                  strokeWidth="2"
                  className="opacity-80"
                />
                {/* Northern Jaffna Islands Topography */}
                <path
                  d="M140 45 C 135 30, 150 15, 160 15 C 170 15, 175 25, 168 35 Z"
                  fill="#c9a74d"
                  opacity="0.7"
                />
                <circle cx="120" cy="40" r="6" fill="#c9a74d" opacity="0.6" />
              </svg>

              {/* Interactive Destination Pins */}
              {/* Jaffna */}
              <button
                type="button"
                onClick={() => handleSelectPin('jaffna')}
                className="absolute top-[8%] left-[48%] -translate-x-1/2 group flex items-center gap-1 focus:outline-hidden cursor-pointer z-10"
              >
                <span
                  className={`w-3.5 h-3.5 rounded-full border-2 border-white transition-all ${
                    selectedKey === 'jaffna'
                      ? 'bg-[#D9A441] ring-4 ring-[#D9A441]/40 scale-125'
                      : 'bg-[#0B3D2E] ring-2 ring-[#0B3D2E]/30 animate-pulse'
                  }`}
                />
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded shadow-xs transition-colors ${
                    selectedKey === 'jaffna'
                      ? 'bg-[#0B3D2E] text-white'
                      : 'bg-white/95 text-[#1d1b20] group-hover:bg-[#0B3D2E] group-hover:text-white'
                  }`}
                >
                  Jaffna
                </span>
              </button>

              {/* Sigiriya */}
              <button
                type="button"
                onClick={() => handleSelectPin('sigiriya')}
                className="absolute top-[32%] left-[46%] -translate-x-1/2 group flex items-center gap-1 focus:outline-hidden cursor-pointer z-10"
              >
                <span
                  className={`w-4 h-4 rounded-full border-2 border-white transition-all ${
                    selectedKey === 'sigiriya'
                      ? 'bg-[#D9A441] ring-4 ring-[#D9A441]/50 scale-125'
                      : 'bg-[#D9A441] ring-2 ring-[#D9A441]/40'
                  }`}
                />
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full shadow-md transition-colors ${
                    selectedKey === 'sigiriya'
                      ? 'bg-[#D9A441] text-[#241a00] ring-2 ring-[#241a00]'
                      : 'bg-white/95 text-[#1d1b20] group-hover:bg-[#D9A441] group-hover:text-[#241a00]'
                  }`}
                >
                  Sigiriya
                </span>
              </button>

              {/* Kandy */}
              <button
                type="button"
                onClick={() => handleSelectPin('kandy')}
                className="absolute top-[52%] left-[48%] -translate-x-1/2 group flex items-center gap-1 focus:outline-hidden cursor-pointer z-10"
              >
                <span
                  className={`w-3.5 h-3.5 rounded-full border-2 border-white transition-all ${
                    selectedKey === 'kandy'
                      ? 'bg-[#D9A441] ring-4 ring-[#D9A441]/40 scale-125'
                      : 'bg-[#4f378a] ring-2 ring-[#4f378a]/30'
                  }`}
                />
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded shadow-xs transition-colors ${
                    selectedKey === 'kandy'
                      ? 'bg-[#4f378a] text-white'
                      : 'bg-white/95 text-[#1d1b20] group-hover:bg-[#4f378a] group-hover:text-white'
                  }`}
                >
                  Kandy
                </span>
              </button>

              {/* Ella */}
              <button
                type="button"
                onClick={() => handleSelectPin('ella')}
                className="absolute top-[63%] left-[53%] -translate-x-1/2 group flex items-center gap-1 focus:outline-hidden cursor-pointer z-10"
              >
                <span
                  className={`w-3.5 h-3.5 rounded-full border-2 border-white transition-all ${
                    selectedKey === 'ella'
                      ? 'bg-[#D9A441] ring-4 ring-[#D9A441]/40 scale-125'
                      : 'bg-[#0B3D2E] ring-2 ring-[#0B3D2E]/40'
                  }`}
                />
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded shadow-xs transition-colors ${
                    selectedKey === 'ella'
                      ? 'bg-[#0B3D2E] text-white'
                      : 'bg-white/95 text-[#1d1b20] group-hover:bg-[#0B3D2E] group-hover:text-white'
                  }`}
                >
                  Ella
                </span>
              </button>

              {/* Colombo */}
              <button
                type="button"
                onClick={() => handleSelectPin('colombo')}
                className="absolute top-[58%] left-[24%] -translate-x-1/2 group flex items-center gap-1 focus:outline-hidden cursor-pointer z-10"
              >
                <span
                  className={`w-3 h-3 rounded-full border-2 border-white transition-all ${
                    selectedKey === 'colombo'
                      ? 'bg-[#D9A441] ring-4 ring-[#D9A441]/40 scale-125'
                      : 'bg-[#494551]'
                  }`}
                />
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded shadow-xs transition-colors ${
                    selectedKey === 'colombo'
                      ? 'bg-[#1d1b20] text-white'
                      : 'bg-white/95 text-[#1d1b20] group-hover:bg-[#1d1b20] group-hover:text-white'
                  }`}
                >
                  Colombo
                </span>
              </button>

              {/* Yala */}
              <button
                type="button"
                onClick={() => handleSelectPin('yala')}
                className="absolute top-[75%] left-[64%] -translate-x-1/2 group flex items-center gap-1 focus:outline-hidden cursor-pointer z-10"
              >
                <span
                  className={`w-3.5 h-3.5 rounded-full border-2 border-white transition-all ${
                    selectedKey === 'yala'
                      ? 'bg-[#D9A441] ring-4 ring-[#D9A441]/40 scale-125'
                      : 'bg-[#E67E45] ring-2 ring-[#E67E45]/40'
                  }`}
                />
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded shadow-xs transition-colors ${
                    selectedKey === 'yala'
                      ? 'bg-[#E67E45] text-white'
                      : 'bg-white/95 text-[#1d1b20] group-hover:bg-[#E67E45] group-hover:text-white'
                  }`}
                >
                  Yala
                </span>
              </button>

              {/* Galle & Mirissa */}
              <button
                type="button"
                onClick={() => handleSelectPin('galle')}
                className="absolute top-[84%] left-[34%] -translate-x-1/2 group flex items-center gap-1 focus:outline-hidden cursor-pointer z-10"
              >
                <span
                  className={`w-3.5 h-3.5 rounded-full border-2 border-white transition-all ${
                    selectedKey === 'galle'
                      ? 'bg-[#D9A441] ring-4 ring-[#D9A441]/40 scale-125'
                      : 'bg-[#167D9A] ring-2 ring-[#167D9A]/40'
                  }`}
                />
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded shadow-xs transition-colors ${
                    selectedKey === 'galle'
                      ? 'bg-[#167D9A] text-white'
                      : 'bg-white/95 text-[#1d1b20] group-hover:bg-[#167D9A] group-hover:text-white'
                  }`}
                >
                  Galle & Mirissa
                </span>
              </button>

              {/* Arugam Bay */}
              <button
                type="button"
                onClick={() => handleSelectPin('arugam')}
                className="absolute top-[60%] left-[76%] -translate-x-1/2 group flex items-center gap-1 focus:outline-hidden cursor-pointer z-10"
              >
                <span
                  className={`w-3 h-3 rounded-full border-2 border-white transition-all ${
                    selectedKey === 'arugam'
                      ? 'bg-[#D9A441] ring-4 ring-[#D9A441]/40 scale-125'
                      : 'bg-[#167D9A]'
                  }`}
                />
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded shadow-xs transition-colors ${
                    selectedKey === 'arugam'
                      ? 'bg-[#167D9A] text-white'
                      : 'bg-white/95 text-[#1d1b20] group-hover:bg-[#167D9A] group-hover:text-white'
                  }`}
                >
                  Arugam Bay
                </span>
              </button>
            </div>
          </div>

          {/* Selected Destination Dynamic Preview Drawer */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div
              className={`bg-white p-6 sm:p-8 rounded-2xl border border-[#cbc4d2]/30 shadow-xs transition-opacity duration-200 ${
                isFading ? 'opacity-40' : 'opacity-100'
              }`}
              id="destPreviewCard"
            >
              {/* Thumbnail image */}
              <div className="h-36 rounded-xl overflow-hidden mb-4 relative">
                <img
                  src={activeData.image}
                  alt={activeData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 left-3 text-white text-xs font-semibold">
                  {activeData.region}
                </span>
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D9A441]">
                  {activeData.region}
                </span>
                <span className="text-[11px] font-medium bg-[#f2ecf4] px-2.5 py-1 rounded-full text-[#494551] flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-[#4f378a]">wb_sunny</span>{' '}
                  {activeData.season}
                </span>
              </div>

              <h3 className="font-serif-hero text-2xl font-bold text-[#0B3D2E] mb-2">
                {activeData.title}
              </h3>
              <p className="font-body text-xs text-[#494551] leading-relaxed mb-5">
                {activeData.desc}
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#4f378a] text-base shrink-0">
                    check
                  </span>
                  <span className="text-xs text-[#1d1b20] font-medium">{activeData.h1}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#4f378a] text-base shrink-0">
                    check
                  </span>
                  <span className="text-xs text-[#1d1b20] font-medium">{activeData.h2}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#4f378a] text-base shrink-0">
                    check
                  </span>
                  <span className="text-xs text-[#1d1b20] font-medium">{activeData.h3}</span>
                </div>
              </div>

              <button
                onClick={() => onInquireRegion(activeData.title)}
                className="w-full bg-[#0B3D2E] hover:bg-[#082a1f] text-white py-3 rounded-xl font-headline font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Inquire About {activeData.title}</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            {/* Monsoonal Travel Helper Note */}
            <div className="mt-4 p-4 rounded-xl bg-[#ffdf93]/30 border border-[#ffdf93] flex items-start gap-3">
              <span className="material-symbols-outlined text-[#765b00] text-xl mt-0.5 shrink-0">
                info
              </span>
              <p className="text-xs text-[#594400] leading-relaxed">
                <strong className="font-semibold text-[#241a00]">Year-Round Sun:</strong> Sri Lanka
                benefits from two opposing monsoons. When it rains on the southwest coast
                (May–Sep), the east coast (Arugam Bay & Trincomalee) is delightfully sunny and dry!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
