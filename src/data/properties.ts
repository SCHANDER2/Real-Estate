export type Property = {
  id: string;
  title: string;
  type: "Villa" | "House" | "Apartment" | "Plot" | "Commercial";
  location: string;
  price: number;
  area: number;
  bedrooms?: number;
  bathrooms?: number;
  image: string;
  description: string;
  amenities: string[];
  featured?: boolean;
  possession?: string;
  facing?: string;
  landmark?: string;
  highlight?: string;
};

export const properties: Property[] = [
  { 
    id: "royal-residence", 
    title: "Royal Garden Residence", 
    type: "Villa", 
    location: "Dabri, Bhadra", 
    price: 8500000, 
    area: 2200, 
    bedrooms: 4, 
    bathrooms: 4, 
    image: "/images/hero-estate.png", 
    description: "A beautifully finished family residence in a peaceful Dabri neighbourhood, designed with generous natural light, thoughtful details and an inviting private garden.", 
    amenities: ["Private garden", "Covered parking", "Modular kitchen", "24/7 water"], 
    featured: true,
    possession: "Ready to Move",
    facing: "East-Facing",
    landmark: "Near SBI Bank",
    highlight: "Premium Finish"
  },
  { 
    id: "corner-home", 
    title: "Sunlit Corner Home", 
    type: "House", 
    location: "Bhadra, Hanumangarh", 
    price: 4650000, 
    area: 1450, 
    bedrooms: 3, 
    bathrooms: 3, 
    image: "/images/hero-estate.png", 
    description: "A practical, move-in-ready home in a well-connected residential pocket with comfortable rooms and a smart corner layout.", 
    amenities: ["Corner plot", "Balcony", "Parking", "Clear title"], 
    featured: true,
    possession: "Ready to Move",
    facing: "North-East Facing",
    landmark: "Near Govt Girls School",
    highlight: "Corner Plot"
  },
  { 
    id: "green-plot", 
    title: "Green Avenue Plot", 
    type: "Plot", 
    location: "Dabri Road, Bhadra", 
    price: 1850000, 
    area: 1800, 
    image: "/images/hero-estate.png", 
    description: "An excellent residential plot for your next home, close to everyday essentials with a promising neighbourhood outlook.", 
    amenities: ["Wide road", "Residential zone", "Water access", "Clear documentation"], 
    featured: true,
    possession: "Immediate Registry",
    facing: "West-Facing",
    landmark: "Near Dabri Bypass Road",
    highlight: "Wide 40ft Road Access"
  },
  { 
    id: "business-hub", 
    title: "Business Hub Commercial Space", 
    type: "Commercial", 
    location: "Main Market, Bhadra", 
    price: 32000, 
    area: 900, 
    image: "/images/hero-estate.png", 
    description: "An adaptable commercial unit in a high-visibility market location, suitable for retail, office or professional use.", 
    amenities: ["Main road frontage", "Power backup", "Visitor parking", "Ready to occupy"],
    possession: "Ready to Occupy",
    facing: "East-Facing",
    landmark: "Near Bus Stand Market",
    highlight: "Main Road Frontage"
  },
  { 
    id: "serene-apartment", 
    title: "Serene Family Apartment", 
    type: "Apartment", 
    location: "Near SBI Bank, Bhadra", 
    price: 2800000, 
    area: 1100, 
    bedrooms: 2, 
    bathrooms: 2, 
    image: "/images/hero-estate.png", 
    description: "A bright apartment with a convenient location for families looking for a comfortable, connected home.", 
    amenities: ["Lift", "Security", "Balcony", "Parking"],
    possession: "Ready to Move",
    facing: "South-Facing",
    landmark: "Near SBI Branch",
    highlight: "Family Friendly Area"
  },
  { 
    id: "heritage-villa", 
    title: "Heritage Courtyard Villa", 
    type: "Villa", 
    location: "Dabri, Bhadra", 
    price: 12500000, 
    area: 3100, 
    bedrooms: 5, 
    bathrooms: 5, 
    image: "/images/hero-estate.png", 
    description: "A grand villa combining classic proportions with comfortable modern living and graceful outdoor spaces.", 
    amenities: ["Courtyard", "Servant room", "Double parking", "Premium finishes"],
    possession: "Ready to Move",
    facing: "North-Facing",
    landmark: "Near Dabri Gate",
    highlight: "Spacious Courtyard"
  }
];

export const formatPrice = (price: number) => price >= 100000 ? `₹${(price / 100000).toFixed(price % 100000 ? 1 : 0)} Lakh` : `₹${price.toLocaleString("en-IN")}/mo`;
