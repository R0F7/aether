import type { ReactNode } from "react";
import Link from "next/link";

type FooterLinkProps = {
  path: string;
  children: ReactNode;
};

export function FooterLink({ path, children }: FooterLinkProps) {
  return (
    <Link
      href={path}
      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  );
}
