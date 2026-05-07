interface SectionHeaderProps {
  subtitle: string;
  title: string;
}

export default function SectionHeader({ subtitle, title }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12 lg:mb-16">
      <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
        {subtitle}
      </p>
      <h2 className="font-serif text-3xl lg:text-4xl tracking-wide">{title}</h2>
    </div>
  );
}