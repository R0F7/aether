import NewsletterForm from "./newsletter-form";

export default function Newsletter() {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-10">
      <div className="container mx-auto max-w-xl text-center">
        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
          Stay Connected
        </p>
        <h2 className="font-serif text-2xl lg:text-3xl tracking-wide mb-4">
          Join the AETHER World
        </h2>
        <p className="text-muted-foreground text-sm mb-8">
          Be the first to discover new arrivals, exclusive offers, and
          behind-the-scenes stories from our ateliers.
        </p>

        <NewsletterForm />
      </div>
    </section>
  );
}
