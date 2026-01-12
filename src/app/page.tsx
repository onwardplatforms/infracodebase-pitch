import { PitchExperience } from "@/components/PitchExperience";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { WhyNow } from "@/components/sections/WhyNow";
import { ExistingSolutions } from "@/components/sections/ExistingSolutions";
import { Insight } from "@/components/sections/Insight";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Differentiation } from "@/components/sections/Differentiation";
import { WhyCustomersWillPay } from "@/components/sections/WhyCustomersWillPay";
import { MarketOpportunity } from "@/components/sections/MarketOpportunity";
import { Traction } from "@/components/sections/Traction";
import { GoToMarket } from "@/components/sections/GoToMarket";
import { Flywheel } from "@/components/sections/Flywheel";
import { Team } from "@/components/sections/Team";
import { TheAsk } from "@/components/sections/TheAsk";

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
      <Differentiation />
      <WhyCustomersWillPay />
      <MarketOpportunity />
      <Traction />
      <GoToMarket />
      <Flywheel />
      <Team />
      <TheAsk />
    </PitchExperience>
  );
}
