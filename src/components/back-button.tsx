"use client";

import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function CustomBackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleBack}
      className="rounded-full px-8 tracking-widest text-xs uppercase"
    >
      <div className="flex items-center gap-2">
        <MoveLeft size={14} />
        Back to Previous
      </div>
    </Button>
  );
}