import { getProduct, getProducts } from "@/lib/data";
import ProductDetails from "@/components/product-details";

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return <ProductDetails product={product} />;
}
