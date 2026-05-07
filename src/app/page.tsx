// import Newsletter from "@/components/newsletter";
// import BrandStatement from "@/components/brand-statement";
// import { Suspense } from "react";
// import { getCollections } from "@/lib/data";
// import { FeaturedProductsWrapper } from "@/components/featured-products-wrapper";
// import { HeroCarouselWrapper } from "@/components/hero-carousel-wrapper";
// import { HeroSkeleton } from "@/components/hero-skeleton";

import { FeaturedProducts } from "@/components/featured-products";
import { HeroCarousel } from "@/components/hero-carousel";
import { getCollections, getProducts } from "@/lib/data";

// export default function Home() {
//   const collectionsPromise = getCollections();

//   // re-setup vercel env
//   return (
//     <>
//       {/* Hero Carousel */}
//       <Suspense fallback={<HeroSkeleton></HeroSkeleton>}>
//         <HeroCarouselWrapper promise={collectionsPromise} />
//       </Suspense>

//       {/* Featured Products */}
//       <FeaturedProductsWrapper></FeaturedProductsWrapper>

//       {/* Brand Statement Section */}
//       <BrandStatement></BrandStatement>

//       {/* Newsletter */}
//       <Newsletter></Newsletter>
//     </>
//   );
// }

export default async function Home() {
  const [collections] = await Promise.all([
    getCollections(),
  ]);
console.log(collections);

  return (
    <>
      <HeroCarousel collections={collections} />
    </>
  );
}