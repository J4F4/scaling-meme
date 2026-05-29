export type PropertyType = 'villa' | 'apartment' | 'land' | 'commercial' | 'duplex' | 'compound';
export type PropertyStatus = 'for-sale' | 'for-rent' | 'sold' | 'rented';
export type PropertyCategory = 'residential' | 'commercial' | 'investment';

export interface PropertyImage {
  url: string;
  alt: string;
}

export interface PropertyLocation {
  lat: number;
  lng: number;
  district: string;
  city: string;
  address: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  priceUnit: 'ريال' | 'ريال/شهر' | 'ريال/سنة';
  type: PropertyType;
  status: PropertyStatus;
  category: PropertyCategory;
  area: number;
  bedrooms: number;
  bathrooms: number;
  floors?: number;
  parkingSpots?: number;
  images: PropertyImage[];
  location: PropertyLocation;
  features: string[];
  yearBuilt?: number;
  isFeatured: boolean;
  createdAt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  totalUnits: number;
  completedUnits: number;
  status: 'under-construction' | 'completed' | 'upcoming';
  completionDate: string;
  type: PropertyType;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FilterState {
  type: string;
  status: string;
  district: string;
  minPrice: number;
  maxPrice: number;
  minBedrooms: number;
  search: string;
}
