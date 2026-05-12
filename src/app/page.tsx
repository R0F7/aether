import Newsletter from "@/components/newsletter";
import BrandStatement from "@/components/brand-statement";
import { Suspense } from "react";
import SectionHeader from "@/components/section-header";
import { ProductGridSkeleton } from "@/components/product-skeleton";
import { FeaturedProducts } from "@/components/featured-products";
import { HeroCarousel } from "@/components/hero-carousel";
import { getCollections } from "@/lib/data";

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
