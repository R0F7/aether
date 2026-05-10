import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-32 w-full">
      <Loader2 className="h-10 w-10 text-accent animate-spin mb-4" />
      <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground animate-pulse">
        Loading your essentials...
      </p>
    </div>
  );
}
