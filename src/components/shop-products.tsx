import { ProductCard } from "@/components/product-card";
import EmptyProductFilterPage from "@/components/empty-product-filter-page";
import { getProducts } from "@/lib/data";
import ProductPagination from "./product-pagination";
import { Product } from "@/lib/mock-data";

export default async function ShopProducts({
  category,
  size,
  sort,
  min,
  max,
  page,
}: {
  category: string;
  size: string;
  sort: string;
  min: number;
  max: number;
  page: number;
}) {
  const { products, totalProducts, totalPages } = await getProducts({
    category,
    size,
    sort,
    min,
    max,
    page,
  });

  if (products.length === 0) {
    return <EmptyProductFilterPage />;
  }

  return (
    <>
      <span className="inline-block text-sm text-muted-foreground relative -top-2 md:-top-15 md:left-1/2 lg:left-0 md:-translate-x-1/2 lg:translate-x-0">
        {products.length} / {totalProducts} products
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product as Product} />
        ))}
      </div>

      <div className="mt-8">
        <ProductPagination currentPage={page} totalPages={totalPages} />
      </div>
    </>
  );
}
