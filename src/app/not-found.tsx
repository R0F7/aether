import { CustomBackButton } from "@/components/back-button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <div className="space-y-4">
        <h1 className="text-9xl font-extrabold tracking-tighter text-primary">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight uppercase">
            Lost in Aether
          </h2>
          <p className="text-muted-foreground max-w-100 mx-auto text-sm">
            The piece you are looking for has been moved or no longer exists in
            our current collection.
          </p>
        </div>

        <div className="pt-6">
          <CustomBackButton />
        </div>
      </div>
    </div>
  );
}
