import { Suspense } from "react";
import SectionHeader from "./section-header";
import { ProductGridSkeleton } from "./product-skeleton";
import { FeaturedProducts } from "./featured-products";

export function FeaturedProductsWrapper() {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-10">
      <div className="container mx-auto">
        <SectionHeader subtitle="Curated Selection" title="Featured Pieces" />

        <Suspense fallback={<ProductGridSkeleton count={6} />}>
          <FeaturedProducts />
        </Suspense>
      </div>
    </section>
  );
}