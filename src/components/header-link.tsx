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
      className={`tracking-wide transition-colors ${
        isSubRoute ? "text-sm" : "text-lg font-medium"
      }
        ${
          isActive
            ? "text-[#A08D65]"
            : isSubRoute
              ? "text-muted-foreground hover:text-foreground"
              : "hover:text-accent"
        }`}
    >
      {children}
    </Link>
  );
}

// "use client";

// import Link from "next/link";
// import { ReactNode } from "react";
// import { usePathname, useSearchParams } from "next/navigation";

// type HeaderLinkProps = {
//   path: string;
//   isSubRoute?: boolean;
//   children: ReactNode;
// };

// export function HeaderLink({
//   path,
//   isSubRoute = false,
//   children,
// }: HeaderLinkProps) {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const category = searchParams.get("category");

//   let isActive = false;

//   if (path === "/") {
//     isActive = pathname === "/";
//   } else if (path === "/shop") {
//     isActive = pathname === "/shop" && !category;
//   } else if (path.includes("?category=")) {
//     const pathCategory = path.split("=")[1];
//     isActive = pathname === "/shop" && category === pathCategory;
//   }

//   return (
//     <Link
//       href={path}
//       className={`tracking-wide transition-colors ${
//         isSubRoute ? "text-sm" : "text-lg font-medium"
//       } ${
//         isActive
//           ? "text-[#A08D65]"
//           : isSubRoute
//             ? "text-muted-foreground hover:text-foreground"
//             : "hover:text-accent"
//       }`}
//     >
//       {children}
//     </Link>
//   );
// }
