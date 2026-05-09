import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProductNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-serif text-4xl mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The product you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Link href="/shop">
          <Button className="rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 tracking-widest text-xs">
            BACK TO SHOP
          </Button>
        </Link>
      </div>
    </div>
  );
}
