"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type HeaderLinkProps = {
  path: string;
  isSubRoute?: boolean;
  children: ReactNode;
};

export function HeaderLink({
  path,
  isSubRoute = false,
  children,
}: HeaderLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === path || pathname.startsWith(path + "/");

  return (
    <Link
      href={path}
      className={`tracking-wide transition-colors lg:text-sm 
        ${isActive && "text-[#A08D65]"}
        ${
          isSubRoute
            ? "text-muted-foreground hover:text-foreground text-sm"
            : "hover:text-accent uppercase font-medium text-lg"
        }`}
    >
      {children}
    </Link>
  );
}
