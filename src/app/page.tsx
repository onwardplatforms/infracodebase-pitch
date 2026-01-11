import { PitchExperience } from "@/components/PitchExperience";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { WhyNow } from "@/components/sections/WhyNow";

export default function Home() {
  return (
    <PitchExperience>
      <Hero />
      <Problem />
      <WhyNow />
    </PitchExperience>
  );
}
