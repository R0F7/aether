export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col animate-pulse">
      {/* Breadcrumb */}
      <div className="py-4 px-6 lg:px-10 border-b border-border/40">
        <div className="container mx-auto">
          <div className="h-5 w-32 bg-muted rounded-md" />
        </div>
      </div>

      <section className="py-10 lg:py-16 px-6 lg:px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* LEFT SIDE */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-[3/4] rounded-xl bg-muted" />

              {/* Thumbnails */}
              <div className="flex gap-3">
                <div className="w-20 h-24 rounded-lg bg-muted" />
                <div className="w-20 h-24 rounded-lg bg-muted" />
                <div className="w-20 h-24 rounded-lg bg-muted" />
                <div className="w-20 h-24 rounded-lg bg-muted" />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:py-4">
              {/* Badges */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-6 w-14 rounded-full bg-muted" />
                <div className="h-6 w-14 rounded-full bg-muted" />
              </div>

              {/* Title */}
              <div className="h-10 w-3/4 bg-muted rounded-lg mb-4" />

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-28 bg-muted rounded-lg" />
                <div className="h-6 w-20 bg-muted rounded-lg" />
              </div>

              {/* Description */}
              <div className="space-y-3 mb-8">
                <div className="h-4 w-full bg-muted rounded-md" />
                <div className="h-4 w-full bg-muted rounded-md" />
                <div className="h-4 w-4/5 bg-muted rounded-md" />
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <div className="h-4 w-20 bg-muted rounded mb-4" />

                <div className="flex gap-3">
                  <div className="h-11 w-14 rounded-lg bg-muted" />
                  <div className="h-11 w-14 rounded-lg bg-muted" />
                  <div className="h-11 w-14 rounded-lg bg-muted" />
                  <div className="h-11 w-14 rounded-lg bg-muted" />
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <div className="h-4 w-24 bg-muted rounded mb-4" />

                <div className="h-12 w-36 rounded-xl bg-muted" />
              </div>

              {/* Button */}
              <div className="h-14 w-full rounded-xl bg-muted mb-12" />

              {/* Tabs */}
              <div>
                {/* Tabs Header */}
                <div className="flex gap-8 border-b border-border pb-3 mb-6">
                  <div className="h-4 w-20 bg-muted rounded" />
                  <div className="h-4 w-28 bg-muted rounded" />
                  <div className="h-4 w-24 bg-muted rounded" />
                </div>

                {/* Tabs Content */}
                <div className="space-y-3">
                  <div className="h-4 w-full bg-muted rounded-md" />
                  <div className="h-4 w-full bg-muted rounded-md" />
                  <div className="h-4 w-5/6 bg-muted rounded-md" />
                  <div className="h-4 w-3/4 bg-muted rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}