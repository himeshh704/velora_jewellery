import { client } from "@/sanity/lib/client";
import { homeQuery, featuredProductsQuery, featuredSectionProductQuery } from "@/sanity/lib/queries";
import HomeClient from "@/components/HomeClient";
import { HomeData, ProductData } from "@/types/sanity";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  // Fetch data from Sanity
  const [homeData, featuredProducts, featuredSectionProduct] = await Promise.all([
    client.fetch<HomeData>(homeQuery),
    client.fetch<ProductData[]>(featuredProductsQuery),
    client.fetch<{ name: string; slug: string; imageUrl: string }>(featuredSectionProductQuery),
  ]);

  return (
    <HomeClient 
      homeData={homeData} 
      featuredProducts={featuredProducts || []} 
      featuredSectionProduct={featuredSectionProduct}
    />
  );
}
