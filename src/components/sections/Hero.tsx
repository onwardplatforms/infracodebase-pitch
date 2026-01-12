import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col justify-center h-full w-full max-w-6xl mx-auto px-4 md:px-8">
      {/* Brand name - large, above everything */}
      <p className="text-muted-foreground text-sm md:text-lg uppercase tracking-widest mb-4 md:mb-8">
        Infracodebase
      </p>

      {/* Logo and headline side by side on desktop, stacked on mobile */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
        {/* Logo - large and tilted */}
        <div className="flex-shrink-0 md:mr-12">
          <Image
            src="/images/logo.svg"
            alt="Infracodebase"
            width={280}
            height={213}
            className="opacity-90 -rotate-[30deg] w-[140px] h-[107px] md:w-[200px] md:h-[152px] lg:w-[280px] lg:h-[213px]"
          />
        </div>

        {/* Main headline */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight tracking-tight text-foreground text-center md:text-left">
          The agentic AI platform for creating production-ready, enterprise-grade cloud infrastructure you can trust.
        </h1>
      </div>
    </div>
  );
}
