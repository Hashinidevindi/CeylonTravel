export interface Destination {
  id: string;
  name: string;
  region: string;
  tag?: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  bestSeason: string;
  highlights: string[];
  recommendedStay: string;
  rating: number;
}

export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  rating: number;
  reviewsCount: number;
  image: string;
  route: string[];
  highlights: string[];
  priceUSD: number;
  category: 'All' | 'Adventure' | 'Luxury' | 'Honeymoon' | 'Family' | 'Culture' | 'Wildlife';
  isPopular?: boolean;
  detailedDays: {
    day: number;
    title: string;
    description: string;
    stay: string;
  }[];
  inclusions: string[];
}

export interface Experience {
  id: string;
  title: string;
  category: string;
  badgeBg: string;
  image: string;
  description: string;
  tagline: string;
  duration: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  tagline: string;
  image: string;
  summary: string;
  content: string[];
}

export interface TravelerPersona {
  id: string;
  title: string;
  emoji: string;
  subtitle: string;
  suggestedPackageId: string;
  description: string;
}

export interface MapDestinationData {
  key: string;
  title: string;
  region: string;
  season: string;
  desc: string;
  image: string;
  h1: string;
  h2: string;
  h3: string;
}

export interface WishlistItem {
  id: string;
  type: 'destination' | 'package';
  title: string;
  subtitle: string;
  image: string;
  priceUSD?: number;
}

export interface BespokePlanRequest {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  travelStyle: string;
  travelers: string;
  durationDays: number;
  accommodationTier: string;
  dates: string;
  specialWishes: string;
}
