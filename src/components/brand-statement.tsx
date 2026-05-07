import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function BrandStatement() {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-10 bg-card">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">
          Our Philosophy
        </p>
        <blockquote className="font-serif text-2xl lg:text-4xl leading-relaxed tracking-wide text-balance mb-8">
          &ldquo;We believe in the quiet power of exceptional craftsmanship.
          Each piece tells a story of tradition, innovation, and uncompromising
          attention to detail.&rdquo;
        </blockquote>
        <Link href="/shop">
          <Button
            variant="link"
            className="text-accent tracking-widest text-sm hover:text-accent/80 group"
          >
            DISCOVER OUR CRAFT
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
