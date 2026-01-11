import { PitchExperience } from "@/components/PitchExperience";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";

export default function Home() {
  return (
    <PitchExperience>
      <Hero />
      <Problem />

      {/* Placeholder for next section - Why Now */}
      <div className="flex flex-col items-center justify-center h-full w-full max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
          Why Now
        </h2>
        <p className="text-xl text-muted-foreground">
          [Section content coming next]
        </p>
      </div>
    </PitchExperience>
  );
}
