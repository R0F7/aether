import { Suspense } from "react";
import PageHeader from "@/components/page-header";
import { ShopFilters } from "@/components/shop-filters";
import { ShopMobileFilters } from "@/components/shop-mobile-filters";
import ShopSort from "@/components/shop-sort";
import { ProductGridSkeleton } from "@/components/product-skeleton";
import ShopProducts from "@/components/shop-products";

interface ShopPageProps {
  searchParams: Promise<{
    category?: string;
    size?: string;
    sort?: string;
    min?: string;
    max?: string;
    page?: string;
  }>;
}

export const revalidate = 60;

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;

  const category = params.category || "all";
  const size = params.size || "";
  const sort = params.sort || "newest";
  const min = Number(params.min) || 0;
  const max = Number(params.max) || 2000;
  const page = Number(params.page) || 1;

  const activeFiltersCount =
    (category !== "all" ? 1 : 0) +
    (size ? 1 : 0) +
    (min > 0 || max < 2000 ? 1 : 0);

  const suspenseKey = JSON.stringify({ category, size, sort, min, max, page });

  return (
    <>
      <PageHeader subtitle="The Collection" title="Shop All" />

      <section className="py-10 lg:py-16 px-6 lg:px-10">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* FILTER */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <ShopFilters
                  selectedCategory={category}
                  selectedSize={size}
                  minPrice={min}
                  maxPrice={max}
                />
              </div>
            </aside>

            <div className="flex-1">
              <div className="flex items-center justify-between lg:justify-end mb-8">
                <div className="flex items-center gap-4 lg:hidden">
                  <ShopMobileFilters
                    selectedCategory={category}
                    selectedSize={size}
                    minPrice={min}
                    maxPrice={max}
                    activeFiltersCount={activeFiltersCount}
                  />
                </div>

                <ShopSort selectedSort={sort} />
              </div>

              <Suspense
                key={suspenseKey}
                fallback={<ProductGridSkeleton count={9} />}
              >
                <ShopProducts
                  category={category}
                  size={size}
                  sort={sort}
                  min={min}
                  max={max}
                  page={page}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
