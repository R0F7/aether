interface PageHeaderProps {
  subtitle: string;
  title: string;
}

export default function PageHeader({ subtitle, title }: PageHeaderProps) {
  return (
    <section className="py-12 lg:py-16 px-6 lg:px-10 border-b border-border/40">
      <div className="container mx-auto text-center">
        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
          {subtitle}
        </p>
        <h1 className="font-serif text-3xl lg:text-5xl tracking-wide">
          {title}
        </h1>
      </div>
    </section>
  );
}
