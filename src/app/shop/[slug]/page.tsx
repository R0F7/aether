import { getProduct, getProducts } from "@/lib/data";
import ProductDetails from "@/components/product/product-details";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) return { title: "Product Not Found | Aether" };

  return {
    title: `${product.name} | Aether`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Aether`,
      description: product.description,
      images: [
        {
          url: product.images[0] || "/placeholder.svg",
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      siteName: "Aether",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Aether`,
      description: product.description,
      images: [product.images[0] || "/placeholder.svg"],
    },
  };
}

export async function generateStaticParams() {
  const { products } = await getProducts({ limit: 50 });

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
