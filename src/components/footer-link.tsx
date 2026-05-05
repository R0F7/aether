import type { ReactNode } from "react";
import Link from "next/link";

type FooterLinkProps = {
  path: string;
  isTextSizeSM?: boolean;
  children: ReactNode;
};

export function FooterLink({
  path,
  isTextSizeSM = true,
  children,
}: FooterLinkProps) {
  return (
    <Link
      href={path}
      className={`${isTextSizeSM ? "text-sm" : "text-xs"} text-muted-foreground hover:text-foreground transition-colors`}
    >
      {children}
    </Link>
  );
}
