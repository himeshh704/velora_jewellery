import { client } from "@/sanity/lib/client";
import { productsQuery, categoriesQuery } from "@/sanity/lib/queries";
import ShopClient from "@/components/ShopClient";
import { ProductData } from "@/types/sanity";

export const revalidate = 60;

export default async function ShopPage() {
  const [products, categories] = await Promise.all([
    client.fetch<ProductData[]>(productsQuery),
    client.fetch<{ _id: string; title: string }[]>(categoriesQuery),
  ]);

  return (
    <main className="pt-32 pb-20 px-6 md:px-12">
      <ShopClient products={products || []} categories={categories || []} />
    </main>
  );
}
