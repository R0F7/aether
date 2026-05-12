import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft } from "lucide-react";
import { ProductGallery } from "@/components/product/product-gallery";
import { Badge } from "@/components/ui/badge";
import ProductActions from "./product-actions";

export default function ProductDetails({ product }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Breadcrumb */}
      <div className="py-4 px-6 lg:px-10 border-b border-border/40">
        <div className="container mx-auto">
          <Link
            href="/shop"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Shop
          </Link>
        </div>
      </div>

      <section className="py-10 lg:py-16 px-6 lg:px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image Gallery */}
            <ProductGallery
              images={product.images}
              productName={product.name}
            />

            {/* Product Details */}
            <div className="lg:py-4">
              <div className="flex items-start gap-3 mb-4">
                {product.isNew && (
                  <Badge className="bg-accent text-accent-foreground tracking-wider text-xs">
                    NEW
                  </Badge>
                )}
                {product.originalPrice && (
                  <Badge variant="secondary" className="tracking-wider text-xs">
                    SALE
                  </Badge>
                )}
              </div>

              <h1 className="font-serif text-3xl lg:text-4xl tracking-wide mb-4">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-2xl font-medium">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              <ProductActions product={product} />

              {/* Product Info Tabs */}
              <div className="mt-12">
                <Tabs defaultValue="details" className="w-full">
                  <TabsList className="w-full justify-start gap-4 h-auto p-0 bg-transparent border-b border-border rounded-none">
                    <TabsTrigger
                      value="details"
                      className="px-0 pb-3 text-sm tracking-wider data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none"
                    >
                      DETAILS
                    </TabsTrigger>
                    <TabsTrigger
                      value="sizing"
                      className="px-0 pb-3 text-sm tracking-wider data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none"
                    >
                      SIZING GUIDE
                    </TabsTrigger>
                    <TabsTrigger
                      value="shipping"
                      className="px-0 pb-3 text-sm tracking-wider data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none"
                    >
                      SHIPPING
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="pt-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.details}
                    </p>
                  </TabsContent>
                  <TabsContent value="sizing" className="pt-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.sizingGuide}
                    </p>
                  </TabsContent>
                  <TabsContent value="shipping" className="pt-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.shipping}
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
