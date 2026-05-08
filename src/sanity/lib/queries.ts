import { groq } from 'next-sanity'

// Home Page Query
export const homeQuery = groq`*[_type == "home"][0]{
  title,
  heroSubtitle,
  heroTitleItalic,
  bentoBlocks[]{
    title,
    "imageUrl": image.asset->url,
    link
  },
  featuredSectionTitle,
  featuredSectionDescription,
  aboutTitle,
  aboutContent,
  aboutImage
}`

// All Products Query
export const productsQuery = groq`*[_type == "product"] | order(_createdAt desc){
  _id,
  name,
  "slug": slug.current,
  price,
  discountPrice,
  description,
  "images": images[].asset->url,
  "category": category->title,
  featured,
  isFeaturedSection
}`

// Featured Products (for the grid)
export const featuredProductsQuery = groq`*[_type == "product" && featured == true]{
  _id,
  name,
  "slug": slug.current,
  price,
  discountPrice,
  "images": images[].asset->url,
  "category": category->title
}`

// Product by Slug
export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug][0]{
  _id,
  name,
  "slug": slug.current,
  price,
  discountPrice,
  description,
  "images": images[].asset->url,
  "category": category->title,
  whatsappInquiry,
  seoTitle,
  seoDescription
}`

// Featured Section Product (The one with parallax scroll)
export const featuredSectionProductQuery = groq`*[_type == "product" && isFeaturedSection == true][0]{
  name,
  "slug": slug.current,
  "imageUrl": images[0].asset->url
}`
// All Categories Query
export const categoriesQuery = groq`*[_type == "category"]{
  _id,
  title
}`
