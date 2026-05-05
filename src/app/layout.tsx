import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://velora-jewellery.vercel.app"),
  title: {
    default: "Velora Jewellery | Premium Handcrafted Excellence",
    template: "%s | Velora Jewellery"
  },
  description: "Velora Jewellery offers exquisite handcrafted pieces, from classic rings to contemporary necklaces. Discover premium jewellery that reflects your unique style.",
  keywords: ["jewellery", "handcrafted jewellery", "premium rings", "luxury necklaces", "Velora", "fine jewelry", "bespoke craftsmanship"],
  authors: [{ name: "Velora" }],
  creator: "Velora",
  publisher: "Velora",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://velora-jewellery.vercel.app",
    siteName: "Velora Jewellery",
    title: "Velora Jewellery | Premium Handcrafted Excellence",
    description: "Exquisite handcrafted jewellery for every occasion. Explore our latest collections.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Veloura Jewellery Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velora Jewellery | Premium Handcrafted Excellence",
    description: "Exquisite handcrafted jewellery for every occasion.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-foreground antialiased selection:bg-accent selection:text-white">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
