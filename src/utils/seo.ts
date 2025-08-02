export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  structuredData?: any;
}

export const baseSEO = {
  siteName: "K&S Staffing & Consulting",
  defaultImage: "/lovable-uploads/87a3af80-aa32-4d26-ab1d-e2dab98e6f40.png",
  phone: "214-998-3597",
  email: "kaheims064@gmail.com",
  address: "Texas, United States",
  baseUrl: window.location.origin,
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SecurityCompany",
  "name": "K&S Staffing & Consulting",
  "alternateName": "K&S Security",
  "description": "Professional unarmed security services throughout Texas. Licensed and insured security professionals for apartments, hotels, events, and businesses.",
  "url": baseSEO.baseUrl,
  "telephone": "+1-214-998-3597",
  "email": "kaheims064@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "State",
    "name": "Texas"
  },
  "serviceType": [
    "Unarmed Security Services",
    "Apartment Complex Security",
    "Hotel Security",
    "Event Security",
    "Asset Protection",
    "Workplace Violence Prevention",
    "VIP Concierge Services"
  ],
  "hasCredential": "Licensed and Insured Security Company",
  "availableLanguage": "English",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-214-998-3597",
    "contactType": "Customer Service",
    "availableLanguage": "English",
    "areaServed": "TX"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "K&S Staffing & Consulting",
  "image": baseSEO.defaultImage,
  "telephone": "+1-214-998-3597",
  "email": "kaheims064@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "32.7767",
    "longitude": "-96.7970"
  },
  "url": baseSEO.baseUrl,
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "$$"
};

export const serviceSchemas = {
  apartmentSecurity: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Apartment Complex Security Services",
    "description": "24/7 professional unarmed security monitoring for residential complexes throughout Texas",
    "provider": organizationSchema,
    "areaServed": "Texas",
    "serviceType": "Security Services"
  },
  hotelSecurity: {
    "@context": "https://schema.org",
    "@type": "Service", 
    "name": "Hotel Security Services",
    "description": "Professional hospitality security and guest protection services in Texas",
    "provider": organizationSchema,
    "areaServed": "Texas",
    "serviceType": "Security Services"
  },
  eventSecurity: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Event Security Services", 
    "description": "Professional security for weddings, private parties, and entertainment venues in Texas",
    "provider": organizationSchema,
    "areaServed": "Texas",
    "serviceType": "Security Services"
  }
};

export const pageSEO = {
  home: {
    title: "Texas Security Services | K&S Staffing & Consulting | Licensed Unarmed Security",
    description: "Professional unarmed security services throughout Texas. K&S Staffing & Consulting provides licensed security for apartments, hotels, events & businesses. Call 214-998-3597",
    keywords: "Texas security services, unarmed security Texas, apartment security, hotel security, event security, Dallas security company, licensed security Texas",
    structuredData: [organizationSchema, localBusinessSchema]
  },
  services: {
    title: "Security Services Texas | Apartment, Hotel & Event Security | K&S Staffing",
    description: "Comprehensive unarmed security services in Texas. Apartment complexes, hotels, bars, events, asset protection & workplace violence prevention. Licensed & insured professionals.",
    keywords: "Texas security services, apartment security, hotel security, event security, workplace violence prevention, asset protection, VIP concierge Texas",
    structuredData: [organizationSchema, ...Object.values(serviceSchemas)]
  },
  about: {
    title: "About K&S Staffing & Consulting | Licensed Texas Security Company",
    description: "Learn about K&S Staffing & Consulting, Texas' trusted unarmed security company. Licensed, insured professionals serving apartments, hotels, and events statewide.",
    keywords: "K&S Staffing Consulting, Texas security company, licensed security, unarmed security professionals, security staffing Texas",
    structuredData: [organizationSchema, localBusinessSchema]
  },
  contact: {
    title: "Contact K&S Security | Texas Security Services | Call 214-998-3597",
    description: "Contact K&S Staffing & Consulting for professional unarmed security services in Texas. Licensed security for your apartment, hotel, or event. Call 214-998-3597 today.",
    keywords: "contact K&S security, Texas security quote, security services Dallas, hire security Texas, 214-998-3597",
    structuredData: [organizationSchema, localBusinessSchema]
  },
  careers: {
    title: "Security Jobs Texas | Join K&S Staffing & Consulting | Apply Now",
    description: "Security career opportunities in Texas with K&S Staffing & Consulting. Licensed unarmed security positions available. Competitive pay, flexible schedules. Apply today!",
    keywords: "security jobs Texas, security careers, unarmed security jobs, Dallas security jobs, security guard positions Texas, K&S careers",
    structuredData: [organizationSchema, {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": "Security Professional",
      "description": "Licensed unarmed security professional positions available throughout Texas",
      "hiringOrganization": organizationSchema,
      "employmentType": "FULL_TIME",
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "TX",
          "addressCountry": "US"
        }
      }
    }]
  },
  coverage: {
    title: "Texas Security Coverage Areas | K&S Staffing & Consulting Locations",
    description: "K&S Staffing & Consulting provides unarmed security services throughout Texas. Licensed professionals serving Dallas, Houston, Austin, San Antonio and statewide.",
    keywords: "Texas security coverage, Dallas security, Houston security, Austin security, San Antonio security, statewide security services",
    structuredData: [organizationSchema, localBusinessSchema]
  },
  caseStudies: {
    title: "Security Success Stories | K&S Staffing & Consulting Case Studies",
    description: "Real security success stories from K&S Staffing & Consulting. See how our licensed unarmed security professionals protect Texas businesses and events.",
    keywords: "security case studies, Texas security success, apartment security results, hotel security stories, event security examples",
    structuredData: [organizationSchema]
  }
};