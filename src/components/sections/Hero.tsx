export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-5xl mx-auto px-8 text-center">
      {/* Logo placeholder */}
      <div className="mb-12">
        <span className="text-2xl font-mono tracking-tight text-muted-foreground">
          infracodebase
        </span>
      </div>

      {/* Main headline */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-foreground max-w-4xl">
        An agentic AI platform for creating production-ready, enterprise-grade cloud infrastructure you can trust.
      </h1>

      {/* Visual placeholder */}
      <div className="mt-16 text-muted-foreground text-sm border border-dashed border-border rounded-lg p-8">
        [Placeholder: Animated visualization]
      </div>
    </div>
  );
}
