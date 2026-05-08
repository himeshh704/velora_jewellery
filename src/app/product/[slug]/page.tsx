import { client } from "@/sanity/lib/client";
import { productBySlugQuery } from "@/sanity/lib/queries";
import ProductClient from "@/components/ProductClient";
import { notFound } from "next/navigation";
import { ProductData } from "@/types/sanity";
import { Metadata } from "next";

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await client.fetch<ProductData>(productBySlugQuery, { slug });

  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.seoTitle || product.name} | Veloura Jewellery`,
    description: product.seoDescription || product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await client.fetch<ProductData>(productBySlugQuery, { slug });

  if (!product) {
    notFound();
  }

  return (
    <main className="pt-32 pb-20 px-6 md:px-12">
      <ProductClient product={product} />
    </main>
  );
}
