import { getProduct, getProducts } from "@/lib/data";
import ProductDetails from "@/components/product-details";
import { notFound } from "next/navigation";

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

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
