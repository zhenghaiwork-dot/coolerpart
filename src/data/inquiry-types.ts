// ── Inquiry / Content Map Data Types ──

export interface SystemArea {
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  icon: string; // tabler icon name
}

export interface ProductType {
  slug: string;
  name: string;
  shortDesc: string;
  areaSlug: string;
  systemSlug: string;
  keySpecs: string[];
}

export interface System {
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  icon: string;
  color: string; // Tailwind color class for accent
  heroImage?: string; // CDN URL for hero banner composite image
  areas: SystemArea[];
  priority: number; // for ordering
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface BasketItem {
  slug: string;
  name: string;
  category: string;
  moq: string;
  priceRange: string;
  image: string;
  addedAt: number;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  areaSlug: string;
  systemSlug: string;
  productTypeSlug: string;
  moq: string;
  priceRange: string;
  image: string;
  gallery?: string[];
  description: string;
  longDescription: string;
  compatibility: string[];
  specs: ProductSpec[];
  features: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}
