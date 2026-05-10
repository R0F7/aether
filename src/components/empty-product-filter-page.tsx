"use client";

import { useRouter } from "next/navigation";

export default function EmptyProductFilterPage() {
  const router = useRouter();
  const handleReset = () => {
    router.push("/shop");
  };

  return (
    <div className="text-center py-20">
      <p className="text-muted-foreground mb-4">
        No products match your filters.
      </p>
      <button
        onClick={handleReset}
        className="text-sm text-accent hover:underline"
      >
        Reset all filters
      </button>
    </div>
  );
}
