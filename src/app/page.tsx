import BrandStatement from "@/components/brand-statement";
import { Suspense } from "react";
import SectionHeader from "@/components/section-header";
import { ProductGridSkeleton } from "@/components/product/product-skeleton";
import { FeaturedProducts } from "@/components/product/featured-products";
import { HeroCarousel } from "@/components/hero/hero-carousel";
import { getCollections } from "@/lib/data";
import { Metadata } from "next";
import Newsletter from "@/components/newsletter/newsletter";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Aether | Premium Minimalist Luxury Collection",
  description:
    "Discover timeless elegance with Aether. Explore our curated selection of minimalist design and premium quality pieces for the modern connoisseur.",
  openGraph: {
    title: "Aether | Premium Minimalist Luxury Collection",
    description:
      "Explore Aether's exclusive collection of timeless essentials. Crafted for those who appreciate minimalist elegance and superior quality.",
    images: [
      {
        url: "/home-og-image.png",
        width: 1200,
        height: 630,
        alt: "Aether Luxury Collection Home",
      },
    ],
    locale: "en_US",
    type: "website",
    siteName: "Aether",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aether | Premium Minimalist Luxury",
    description:
      "Elevate your lifestyle with our curated minimalist collection.",
    images: ["/home-og-image.png"],
  },
};

export default async function Home() {
  const collections = await getCollections();

  return (
    <>
      <HeroCarousel collections={collections} />

      <section className="py-16 lg:py-24 px-6 lg:px-10">
        <div className="container mx-auto">
          <SectionHeader subtitle="Curated Selection" title="Featured Pieces" />

          <Suspense fallback={<ProductGridSkeleton count={6} />}>
            <FeaturedProducts />
          </Suspense>
        </div>
      </section>

      {/* Brand Statement Section */}
      <BrandStatement />

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
