import { PitchExperience } from "@/components/PitchExperience";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { WhyNow } from "@/components/sections/WhyNow";
import { ExistingSolutions } from "@/components/sections/ExistingSolutions";
import { Insight } from "@/components/sections/Insight";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";

export default function Home() {
  return (
    <PitchExperience>
      <Hero />
      <Problem />
      <WhyNow />
      <ExistingSolutions />
      <Insight />
      <Solution />
      <HowItWorks />
    </PitchExperience>
  );
}
