"use client";

import { useEffect } from "react";
import { Loader2 } from "lucide-react";

interface FormLoadingOverlayProps {
  show: boolean;
}

export default function FormLoadingOverlay({
  show,
}: FormLoadingOverlayProps) {

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300 ${
        show
          ? "opacity-100 visible"
          : "opacity-0 invisible"
      }`}
    >
      <div className="bg-background border rounded-2xl px-8 py-6 shadow-2xl flex flex-col items-center gap-4 min-w-[220px]">
        <Loader2 className="h-10 w-10 animate-spin text-accent" />

        <div className="text-center">
          <h3 className="font-medium tracking-wide">
            Publishing Product
          </h3>

          <p className="text-sm text-muted-foreground mt-1">
            Please wait a moment...
          </p>
        </div>
      </div>
    </div>
  );
}