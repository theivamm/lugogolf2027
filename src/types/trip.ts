export type TripStatus =
  | "available"
  | "last_places"
  | "waitlist"
  | "sold_out"
  | "completed"
  | "coming_soon";

export interface SEOFields {
  title: string;
  description: string;
  ogImage?: string;
}

export interface Hotel {
  name: string;
  stars?: number;
  location: string;
  nights: number;
  highlights: string[];
  images: string[];
}

export interface GolfCourse {
  name: string;
  designer?: string;
  holes: number;
  par: number;
  yardage?: number;
  rating?: number;
  slope?: number;
  difficulty?: string;
  image?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: ItineraryActivity[];
}

export interface ItineraryActivity {
  time?: string;
  description: string;
  type: "included" | "free" | "optional";
}

export interface Experience {
  title: string;
  description: string;
  category: "culture" | "wellness" | "gastronomy" | "shopping" | "nature" | "together";
}

export interface GolfTrip {
  id: string;
  slug: string;
  year: number;
  title: string;
  subtitle?: string;
  country: string;
  region?: string;
  startDate?: string;
  endDate?: string;
  durationLabel?: string;
  status: TripStatus;
  featured: boolean;
  hero: {
    image: string;
    mobileImage?: string;
    video?: string;
    mobileVideo?: string;
    alt: string;
  };
  summary: string;
  highlights: string[];
  hotels: Hotel[];
  courses: GolfCourse[];
  itinerary: ItineraryDay[];
  companionExperiences: Experience[];
  included: string[];
  notIncluded: string[];
  programUrl?: string;
  seo: SEOFields;
}
