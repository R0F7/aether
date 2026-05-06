import Newsletter from "@/components/newsletter";
import BrandStatement from "@/components/brand-statement";
import { Suspense } from "react";
import { getCollections } from "@/lib/data";
import { FeaturedProductsWrapper } from "@/components/featured-products-wrapper";
import { HeroCarouselWrapper } from "@/components/hero-carousel-wrapper";
import { HeroSkeleton } from "@/components/hero-skeleton";

export default function Home() {
  const collectionsPromise = getCollections();

  return (
    <>
      {/* Hero Carousel */}
      <Suspense fallback={<HeroSkeleton></HeroSkeleton>}>
        <HeroCarouselWrapper promise={collectionsPromise} />
      </Suspense>

      {/* Featured Products */}
      <FeaturedProductsWrapper></FeaturedProductsWrapper>

      {/* Brand Statement Section */}
      <BrandStatement></BrandStatement>

      {/* Newsletter */}
      <Newsletter></Newsletter>
    </>
  );
}
