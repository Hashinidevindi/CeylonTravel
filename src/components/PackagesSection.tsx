import React, { useState } from 'react';
import { TOUR_PACKAGES } from '../data/travelData';
import { TourPackage } from '../types';

interface PackagesSectionProps {
  onSelectPackage: (pkg: TourPackage) => void;
  onToggleWishlist: (item: {
    id: string;
    type: 'package';
    title: string;
    subtitle: string;
    image: string;
    priceUSD?: number;
  }) => void;
  isWishlisted: (id: string) => boolean;
  currency: string;
  activeFilter?: string;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onSelectPackage,
  onToggleWishlist,
  isWishlisted,
  currency,
  activeFilter,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(activeFilter || 'All');

  const categories = ['All', 'Adventure', 'Luxury', 'Honeymoon', 'Family', 'Culture', 'Wildlife'];

  // Currency multiplier helper
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

  const filteredPackages =
    selectedCategory === 'All'
      ? TOUR_PACKAGES
      : TOUR_PACKAGES.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section className="py-24 bg-[#FAF9F5]" id="packages">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B3D2E]">
            Curated Itineraries
          </span>
          <h2 className="font-serif-hero text-3xl sm:text-5xl font-bold text-[#0B3D2E] mt-2">
            Find Your Perfect Journey
          </h2>
          <p className="font-body text-base text-[#494551] mt-3">
            Thoughtfully paced travel packages with private vehicles, dedicated chauffeurs, and
            premier boutique stays.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-headline text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0B3D2E] text-white shadow-xs'
                  : 'bg-[#ece6ee] hover:bg-[#e1d4fd] text-[#494551] hover:text-[#4f378a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => {
            const isSaved = isWishlisted(pkg.id);
            return (
              <div
                key={pkg.id}
                className={`bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col relative group ${
                  pkg.isPopular ? 'border-2 border-[#D9A441]' : 'border border-[#cbc4d2]/30'
                }`}
                id={`package-card-${pkg.id}`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-4 right-14 bg-[#D9A441] text-[#241a00] font-headline text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-xs z-10">
                    Most Popular
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist({
                      id: pkg.id,
                      type: 'package',
                      title: pkg.title,
                      subtitle: pkg.duration,
                      image: pkg.image,
                      priceUSD: pkg.priceUSD,
                    });
                  }}
                  className={`absolute top-4 right-4 z-10 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer ${
                    isSaved ? 'bg-red-500 text-white' : 'bg-black/30 text-white hover:bg-white/30'
                  }`}
                  title="Save Tour"
                >
                  <span
                    className="material-symbols-outlined text-base"
                    style={{ fontVariationSettings: isSaved ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    favorite
                  </span>
                </button>

                {/* Image & Header tags */}
                <div
                  className="relative h-60 overflow-hidden cursor-pointer"
                  onClick={() => onSelectPackage(pkg)}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${pkg.image}')` }}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-[#4f378a] flex items-center gap-1 shadow-xs">
                    <span className="material-symbols-outlined text-sm">schedule</span>{' '}
                    {pkg.duration}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xs text-[#ffdf93] px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <span
                      className="material-symbols-outlined text-sm text-[#ffdf93]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span>{pkg.rating}</span>
                    <span className="text-[10px] text-white/80 font-normal">
                      ({pkg.reviewsCount})
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => onSelectPackage(pkg)}
                      className="font-serif-hero text-xl font-bold text-[#0B3D2E] mb-2 cursor-pointer hover:text-[#4f378a] transition-colors"
                    >
                      {pkg.title}
                    </h3>

                    {/* Route Breadcrumbs */}
                    <div className="flex items-center gap-1.5 text-xs text-[#494551] font-medium mb-4 flex-wrap">
                      {pkg.route.map((stop, i) => (
                        <React.Fragment key={stop}>
                          <span className="bg-[#f2ecf4] px-2 py-0.5 rounded text-[11px] font-semibold text-[#1d1b20]">
                            {stop}
                          </span>
                          {i < pkg.route.length - 1 && (
                            <span className="text-[#cbc4d2] text-xs">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Key Highlights */}
                    <ul className="space-y-2 text-xs text-[#494551] mb-6">
                      {pkg.highlights.slice(0, 3).map((hl) => (
                        <li key={hl} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#4f378a] text-sm mt-0.5">
                            check_circle
                          </span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Action */}
                  <div className="pt-4 border-t border-[#cbc4d2]/30 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#494551]">From</span>
                      <p className="font-headline font-bold text-xl text-[#4f378a]">
                        {formatPrice(pkg.priceUSD)}{' '}
                        <span className="text-xs font-normal text-[#494551]">/ person</span>
                      </p>
                    </div>
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className={`px-4 py-2.5 rounded-xl font-headline font-semibold text-xs transition-colors cursor-pointer ${
                        pkg.isPopular
                          ? 'bg-[#D9A441] hover:bg-[#c99530] text-[#241a00] font-bold'
                          : 'bg-[#0B3D2E] hover:bg-[#082b20] text-white'
                      }`}
                      id={`view-pkg-btn-${pkg.id}`}
                    >
                      View Package
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
