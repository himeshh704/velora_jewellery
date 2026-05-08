export interface HomeData {
  title: string;
  heroSubtitle: string;
  heroTitleItalic: string;
  bentoBlocks: {
    title: string;
    imageUrl: string;
    link: string;
  }[];
  featuredSectionTitle: string;
  featuredSectionDescription: string;
  aboutTitle: string;
  aboutContent: any[]; // Portable text
  aboutImage?: any;
}

export interface ProductData {
  _id: string;
  name: string;
  slug: string;
  price: string;
  discountPrice?: string;
  description?: string;
  images: string[];
  category?: string;
  featured: boolean;
  isFeaturedSection?: boolean;
  whatsappInquiry?: string;
  seoTitle?: string;
  seoDescription?: string;
}
