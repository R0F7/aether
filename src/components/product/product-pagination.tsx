"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { usePathname, useSearchParams } from "next/navigation";

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function ProductPagination({
  currentPage,
  totalPages,
}: ProductPaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  const generatePagination = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // start
    if (currentPage <= 3) {
      return [1, 2, 3, 4, "...", totalPages];
    }

    // end
    if (currentPage >= totalPages - 2) {
      return [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    // middle
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const pages = generatePagination();

  return (
    <Pagination>
      <PaginationContent>
        {/* PREVIOUS */}
        <PaginationItem>
          <PaginationPrevious
            href={currentPage > 1 ? createPageURL(currentPage - 1) : "#"}
            className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {/* PAGE NUMBERS */}
        {pages.map((page, index) => (
          <PaginationItem key={index}>
            {page === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href={createPageURL(Number(page))}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        {/* NEXT */}
        <PaginationItem>
          <PaginationNext
            href={
              currentPage < totalPages ? createPageURL(currentPage + 1) : "#"
            }
            className={
              currentPage >= totalPages ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
