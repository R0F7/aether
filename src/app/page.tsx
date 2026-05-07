import Newsletter from "@/components/newsletter";
import BrandStatement from "@/components/brand-statement";
import { Suspense } from "react";
import { FeaturedProductsWrapper } from "@/components/featured-products-wrapper";
import { HeroCarouselWrapper } from "@/components/hero-carousel-wrapper";
import { HeroSkeleton } from "@/components/hero-skeleton";
import SectionHeader from "@/components/section-header";
import { ProductGridSkeleton } from "@/components/product-skeleton";
import { FeaturedProducts } from "@/components/featured-products";
import { HeroCarousel } from "@/components/hero-carousel";
import { db } from "@/lib/db";

// import { FeaturedProducts } from "@/components/featured-products";
// import { HeroCarousel } from "@/components/hero-carousel";
// import { getCollections, getProducts } from "@/lib/data";

export default function Home() {
  const collectionsPromise = db.collection("collections").find().toArray();

  // re-setup vercel env
  return (
    <>
      {/* Hero Carousel */}
      <Suspense fallback={<HeroSkeleton />}>
        <HeroCarousel promises={collectionsPromise} />
      </Suspense>

      {/* Featured Products */}

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

// export default async function Home() {
//   const [collections] = await Promise.all([
//     getCollections(),
//   ]);
// console.log(collections);

//   return (
//     <>
//       <HeroCarousel collections={collections} />
//     </>
//   );
// }
