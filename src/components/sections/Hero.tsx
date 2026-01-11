import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col justify-center h-full w-full max-w-6xl mx-auto px-8">
      {/* Brand name - large, above everything */}
      <p className="text-muted-foreground text-lg uppercase tracking-widest mb-8">
        Infracodebase
      </p>

      {/* Logo and headline side by side */}
      <div className="flex items-center">
        {/* Logo - large and tilted */}
        <div className="flex-shrink-0 mr-12">
          <Image
            src="/images/logo.svg"
            alt="Infracodebase"
            width={280}
            height={213}
            className="opacity-90 -rotate-[30deg]"
          />
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-foreground">
          The agentic AI platform for creating production-ready, enterprise-grade cloud infrastructure you can trust.
        </h1>
      </div>
    </div>
  );
}
