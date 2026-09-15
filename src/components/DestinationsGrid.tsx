import React from 'react';
import { DESTINATIONS } from '../data/travelData';
import { Destination } from '../types';

interface DestinationsGridProps {
  onSelectDestination: (dest: Destination) => void;
  onToggleWishlist: (item: {
    id: string;
    type: 'destination';
    title: string;
    subtitle: string;
    image: string;
  }) => void;
  isWishlisted: (id: string) => boolean;
  onOpenPlannerForDest?: (destName: string) => void;
}

export const DestinationsGrid: React.FC<DestinationsGridProps> = ({
  onSelectDestination,
  onToggleWishlist,
  isWishlisted,
}) => {
  const sigiriya = DESTINATIONS.find((d) => d.id === 'sigiriya') || DESTINATIONS[0];
  const ella = DESTINATIONS.find((d) => d.id === 'ella') || DESTINATIONS[1];
  const galle = DESTINATIONS.find((d) => d.id === 'galle') || DESTINATIONS[2];
  const yala = DESTINATIONS.find((d) => d.id === 'yala') || DESTINATIONS[3];
  const mirissa = DESTINATIONS.find((d) => d.id === 'mirissa') || DESTINATIONS[4];
  const kandy = DESTINATIONS.find((d) => d.id === 'kandy') || DESTINATIONS[5];

  const handleWishlistClick = (e: React.MouseEvent, dest: Destination) => {
    e.stopPropagation();
    onToggleWishlist({
      id: dest.id,
      type: 'destination',
      title: dest.name,
      subtitle: dest.region,
      image: dest.image,
    });
  };

  return (
    <section className="py-24 bg-white" id="destinations">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#167D9A]">
              Iconic Ceylon
            </span>
            <h2 className="font-serif-hero text-3xl sm:text-5xl font-bold text-[#0B3D2E] mt-2">
              Explore Sri Lanka
            </h2>
            <p className="font-body text-base text-[#494551] mt-2 max-w-xl">
              From misty mountains to golden palm-fringed beaches, discover the places that make
              this tear-shaped island unforgettable.
            </p>
          </div>
          <button
            onClick={() => onSelectDestination(sigiriya)}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#4f378a] font-headline font-bold text-sm hover:underline cursor-pointer"
          >
            <span>View All Highlights</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
          {/* Large Featured Card: Sigiriya (2 cols, 2 rows) */}
          <div
            onClick={() => onSelectDestination(sigiriya)}
            className="md:col-span-2 lg:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group shadow-md cursor-pointer"
            id="card-sigiriya"
          >
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url('${sigiriya.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

            {/* Top Badges & Wishlist */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
              <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full">
                UNESCO World Heritage
              </span>
              <button
                onClick={(e) => handleWishlistClick(e, sigiriya)}
                className={`w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer ${
                  isWishlisted(sigiriya.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-black/30 text-white hover:bg-white/30'
                }`}
                title="Save to Wishlist"
              >
                <span
                  className="material-symbols-outlined text-lg"
                  style={{ fontVariationSettings: isWishlisted(sigiriya.id) ? "'FILL' 1" : "'FILL' 0" }}
                >
                  favorite
                </span>
              </button>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <span className="text-xs uppercase tracking-wider text-[#ffdf93] font-semibold">
                {sigiriya.region}
              </span>
              <h3 className="font-serif-hero text-2xl sm:text-4xl font-bold text-white mt-1 mb-2">
                {sigiriya.name}
              </h3>
              <p className="text-sm text-white/85 line-clamp-2 mb-4 font-body">
                {sigiriya.shortDesc}
              </p>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 bg-[#D9A441] hover:bg-[#c99530] text-[#241a00] font-headline font-bold text-xs px-4 py-2 rounded-full transition-all">
                  <span>Explore Sigiriya</span>
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </span>
                <span className="text-xs text-white/80 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-[#ffdf93]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  {sigiriya.rating}
                </span>
              </div>
            </div>
          </div>

          {/* Ella Highland Card */}
          <div
            onClick={() => onSelectDestination(ella)}
            className="md:col-span-1 lg:col-span-2 relative rounded-3xl overflow-hidden group shadow-md cursor-pointer"
            id="card-ella"
          >
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url('${ella.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={(e) => handleWishlistClick(e, ella)}
                className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer ${
                  isWishlisted(ella.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-black/30 text-white hover:bg-white/30'
                }`}
              >
                <span
                  className="material-symbols-outlined text-base"
                  style={{ fontVariationSettings: isWishlisted(ella.id) ? "'FILL' 1" : "'FILL' 0" }}
                >
                  favorite
                </span>
              </button>
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white z-10">
              <span className="text-[11px] uppercase tracking-wider text-[#ffdf93] font-semibold">
                {ella.region}
              </span>
              <h3 className="font-serif-hero text-xl font-bold">{ella.name}</h3>
              <p className="text-xs text-white/80 mt-1 font-body line-clamp-1">{ella.shortDesc}</p>
            </div>
          </div>

          {/* Galle Fort Card */}
          <div
            onClick={() => onSelectDestination(galle)}
            className="relative rounded-3xl overflow-hidden group shadow-md cursor-pointer"
            id="card-galle"
          >
            <img
              src={galle.image}
              alt="Colonial Galle Fort lighthouse and ocean bastion"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={(e) => handleWishlistClick(e, galle)}
                className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer ${
                  isWishlisted(galle.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-black/30 text-white hover:bg-white/30'
                }`}
              >
                <span
                  className="material-symbols-outlined text-base"
                  style={{ fontVariationSettings: isWishlisted(galle.id) ? "'FILL' 1" : "'FILL' 0" }}
                >
                  favorite
                </span>
              </button>
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white z-10">
              <span className="text-[10px] uppercase tracking-wider text-[#ffdf93] font-semibold">
                {galle.region}
              </span>
              <h3 className="font-serif-hero text-lg font-bold">{galle.name}</h3>
              <p className="text-xs text-white/80 mt-0.5 line-clamp-2">{galle.shortDesc}</p>
            </div>
          </div>

          {/* Yala Safari Card */}
          <div
            onClick={() => onSelectDestination(yala)}
            className="relative rounded-3xl overflow-hidden group shadow-md cursor-pointer"
            id="card-yala"
          >
            <img
              src={yala.image}
              alt="Wild leopard in Yala National Park"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={(e) => handleWishlistClick(e, yala)}
                className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer ${
                  isWishlisted(yala.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-black/30 text-white hover:bg-white/30'
                }`}
              >
                <span
                  className="material-symbols-outlined text-base"
                  style={{ fontVariationSettings: isWishlisted(yala.id) ? "'FILL' 1" : "'FILL' 0" }}
                >
                  favorite
                </span>
              </button>
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white z-10">
              <span className="text-[10px] uppercase tracking-wider text-[#ffdf93] font-semibold">
                {yala.region}
              </span>
              <h3 className="font-serif-hero text-lg font-bold">{yala.name}</h3>
              <p className="text-xs text-white/80 mt-0.5 line-clamp-2">{yala.shortDesc}</p>
            </div>
          </div>

          {/* Mirissa Card (Spans 2 cols) */}
          <div
            onClick={() => onSelectDestination(mirissa)}
            className="md:col-span-1 lg:col-span-2 relative rounded-3xl overflow-hidden group shadow-md cursor-pointer"
            id="card-mirissa"
          >
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url('${mirissa.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={(e) => handleWishlistClick(e, mirissa)}
                className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer ${
                  isWishlisted(mirissa.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-black/30 text-white hover:bg-white/30'
                }`}
              >
                <span
                  className="material-symbols-outlined text-base"
                  style={{ fontVariationSettings: isWishlisted(mirissa.id) ? "'FILL' 1" : "'FILL' 0" }}
                >
                  favorite
                </span>
              </button>
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white z-10">
              <span className="text-[11px] uppercase tracking-wider text-[#ffdf93] font-semibold">
                {mirissa.region}
              </span>
              <h3 className="font-serif-hero text-xl font-bold">{mirissa.name}</h3>
              <p className="text-xs text-white/80 mt-1 font-body">{mirissa.shortDesc}</p>
            </div>
          </div>

          {/* Kandy Card (Spans 2 cols) */}
          <div
            onClick={() => onSelectDestination(kandy)}
            className="md:col-span-2 lg:col-span-2 relative rounded-3xl overflow-hidden group shadow-md cursor-pointer"
            id="card-kandy"
          >
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url('${kandy.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={(e) => handleWishlistClick(e, kandy)}
                className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer ${
                  isWishlisted(kandy.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-black/30 text-white hover:bg-white/30'
                }`}
              >
                <span
                  className="material-symbols-outlined text-base"
                  style={{ fontVariationSettings: isWishlisted(kandy.id) ? "'FILL' 1" : "'FILL' 0" }}
                >
                  favorite
                </span>
              </button>
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white z-10">
              <span className="text-[11px] uppercase tracking-wider text-[#ffdf93] font-semibold">
                {kandy.region}
              </span>
              <h3 className="font-serif-hero text-xl font-bold">{kandy.name}</h3>
              <p className="text-xs text-white/80 mt-1 font-body">{kandy.shortDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
