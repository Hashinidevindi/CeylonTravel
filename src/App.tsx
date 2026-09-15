/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DestinationsGrid } from './components/DestinationsGrid';
import { ExperiencesGrid } from './components/ExperiencesGrid';
import { PackagesSection } from './components/PackagesSection';
import { HoneymoonShowcase } from './components/HoneymoonShowcase';
import { TravelerPersonas } from './components/TravelerPersonas';
import { InteractiveMap } from './components/InteractiveMap';
import { JournalSection } from './components/JournalSection';
import { Testimonials } from './components/Testimonials';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';

// Modals and Drawers
import { DestinationModal } from './components/DestinationModal';
import { PackageModal } from './components/PackageModal';
import { ArticleModal } from './components/ArticleModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { BespokePlannerModal } from './components/BespokePlannerModal';
import { ConciergeModal } from './components/ConciergeModal';

// Types & Data
import { Destination, TourPackage, Experience, Article, TravelerPersona, WishlistItem } from './types';
import { DESTINATIONS, TOUR_PACKAGES, ARTICLES } from './data/travelData';

export default function App() {
  // Wishlist state with localStorage persistence
  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    try {
      const saved = localStorage.getItem('travel_ceylon_wishlist');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    // Default 2 saved items to delight user immediately
    return [
      {
        id: 'sigiriya',
        type: 'destination',
        title: 'Sigiriya Rock Fortress',
        subtitle: 'Cultural Triangle',
        image: DESTINATIONS[0].image,
      },
      {
        id: 'luxe',
        type: 'package',
        title: 'Tropical Sri Lanka Luxe',
        subtitle: '10 Days / 9 Nights',
        image: TOUR_PACKAGES[1].image,
        priceUSD: 1890,
      },
    ];
  });

  const [currency, setCurrency] = useState<string>('USD');
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [isPlannerOpen, setIsPlannerOpen] = useState<boolean>(false);
  const [plannerPrefillDest, setPlannerPrefillDest] = useState<string | undefined>(undefined);
  const [isConciergeOpen, setIsConciergeOpen] = useState<boolean>(false);

  // Selected modals
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Active filter for packages
  const [activePackageFilter, setActivePackageFilter] = useState<string>('All');

  useEffect(() => {
    try {
      localStorage.setItem('travel_ceylon_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  // Wishlist actions
  const handleToggleWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      const exists = prev.some((x) => x.id === item.id);
      if (exists) {
        return prev.filter((x) => x.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const isWishlisted = (id: string) => wishlist.some((x) => x.id === id);

  const handleRemoveWishlistItem = (id: string) => {
    setWishlist((prev) => prev.filter((x) => x.id !== id));
  };

  const handleClearWishlist = () => {
    setWishlist([]);
  };

  // Hero search handler
  const handleHeroSearch = (params: {
    destination: string;
    dates: string;
    travelers: string;
    style: string;
  }) => {
    if (params.style.includes('Wildlife')) {
      setActivePackageFilter('Wildlife');
    } else if (params.style.includes('Honeymoon') || params.travelers.includes('Honeymoon')) {
      setActivePackageFilter('Honeymoon');
    } else if (params.style.includes('Cultural')) {
      setActivePackageFilter('Culture');
    } else {
      setActivePackageFilter('Luxury');
    }

    const pkgEl = document.getElementById('packages');
    if (pkgEl) {
      pkgEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Traveler persona selection
  const handleSelectPersona = (persona: TravelerPersona) => {
    if (persona.id === 'wildlife') {
      setActivePackageFilter('Wildlife');
    } else if (persona.id === 'romantic') {
      setActivePackageFilter('Honeymoon');
    } else if (persona.id === 'culture') {
      setActivePackageFilter('Culture');
    } else if (persona.id === 'luxury') {
      setActivePackageFilter('Luxury');
    } else {
      setActivePackageFilter('Adventure');
    }

    const pkgEl = document.getElementById('packages');
    if (pkgEl) {
      pkgEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Inquire region from map
  const handleInquireRegion = (regionTitle: string) => {
    setPlannerPrefillDest(regionTitle);
    setIsPlannerOpen(true);
  };

  // Honeymoon explore
  const handleExploreHoneymoon = () => {
    setActivePackageFilter('Honeymoon');
    const pkgEl = document.getElementById('packages');
    if (pkgEl) {
      pkgEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Experience click
  const handleSelectExperience = (exp: Experience) => {
    const matchingPkg =
      TOUR_PACKAGES.find(
        (p) =>
          p.category.toLowerCase() === exp.category.toLowerCase() ||
          p.highlights.some((h) => h.toLowerCase().includes(exp.category.toLowerCase())),
      ) || TOUR_PACKAGES[0];
    setSelectedPackage(matchingPkg);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf7ff] text-[#1d1b20] selection:bg-[#ffdf93] selection:text-[#241a00]">
      {/* Top Navigation */}
      <Navbar
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenPlanner={() => {
          setPlannerPrefillDest(undefined);
          setIsPlannerOpen(true);
        }}
        currency={currency}
        setCurrency={setCurrency}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero
          onSearch={handleHeroSearch}
          onOpenPlanner={() => {
            setPlannerPrefillDest(undefined);
            setIsPlannerOpen(true);
          }}
        />

        {/* Why Travel Ceylon (Features) */}
        <Features />

        {/* Popular Destinations (Bento Grid) */}
        <DestinationsGrid
          onSelectDestination={(dest) => setSelectedDestination(dest)}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={isWishlisted}
          onOpenPlannerForDest={(name) => {
            setPlannerPrefillDest(name);
            setIsPlannerOpen(true);
          }}
        />

        {/* Signature Experiences */}
        <ExperiencesGrid onSelectExperience={handleSelectExperience} />

        {/* Featured Tour Packages */}
        <PackagesSection
          onSelectPackage={(pkg) => setSelectedPackage(pkg)}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={isWishlisted}
          currency={currency}
          activeFilter={activePackageFilter}
        />

        {/* Honeymoon Showcase */}
        <HoneymoonShowcase
          onExploreHoneymoon={handleExploreHoneymoon}
          onOpenPlanner={() => {
            setPlannerPrefillDest('Bentota & Southern Coves');
            setIsPlannerOpen(true);
          }}
        />

        {/* What Kind of Traveler Are You? */}
        <TravelerPersonas onSelectPersona={handleSelectPersona} />

        {/* Interactive Sri Lanka Map */}
        <InteractiveMap onInquireRegion={handleInquireRegion} />

        {/* Travel Journal / Articles */}
        <JournalSection onSelectArticle={(article) => setSelectedArticle(article)} />

        {/* Testimonials */}
        <Testimonials />

        {/* Call to Action Banner */}
        <CtaBanner
          onOpenPlanner={() => {
            setPlannerPrefillDest(undefined);
            setIsPlannerOpen(true);
          }}
          onOpenConcierge={() => setIsConciergeOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPlanner={() => {
          setPlannerPrefillDest(undefined);
          setIsPlannerOpen(true);
        }}
        onOpenArticle={() => setSelectedArticle(ARTICLES[0])}
      />

      {/* Modals and Drawers */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onPlanTrip={(destName) => {
          setPlannerPrefillDest(destName);
          setIsPlannerOpen(true);
        }}
        isWishlisted={selectedDestination ? isWishlisted(selectedDestination.id) : false}
        onToggleWishlist={() => {
          if (selectedDestination) {
            handleToggleWishlist({
              id: selectedDestination.id,
              type: 'destination',
              title: selectedDestination.name,
              subtitle: selectedDestination.region,
              image: selectedDestination.image,
            });
          }
        }}
      />

      <PackageModal
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        currency={currency}
        isWishlisted={selectedPackage ? isWishlisted(selectedPackage.id) : false}
        onToggleWishlist={() => {
          if (selectedPackage) {
            handleToggleWishlist({
              id: selectedPackage.id,
              type: 'package',
              title: selectedPackage.title,
              subtitle: selectedPackage.duration,
              image: selectedPackage.image,
              priceUSD: selectedPackage.priceUSD,
            });
          }
        }}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onPlanTrip={() => {
          setPlannerPrefillDest(undefined);
          setIsPlannerOpen(true);
        }}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlist}
        onRemoveItem={handleRemoveWishlistItem}
        onClearAll={handleClearWishlist}
        onRequestQuote={() => {
          setIsWishlistOpen(false);
          setPlannerPrefillDest(wishlist.map((w) => w.title).join(', '));
          setIsPlannerOpen(true);
        }}
      />

      <BespokePlannerModal
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
        prefillDestination={plannerPrefillDest}
      />

      <ConciergeModal isOpen={isConciergeOpen} onClose={() => setIsConciergeOpen(false)} />
    </div>
  );
}
