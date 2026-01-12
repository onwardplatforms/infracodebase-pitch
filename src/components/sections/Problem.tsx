"use client";

import { motion, useMotionValue, AnimatePresence, animate } from "framer-motion";
import { useEffect, useState } from "react";

function AnimatedCounter({
  target,
  duration = 2,
  showPlusSign = false
}: {
  target: number;
  duration?: number;
  showPlusSign?: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const count = useMotionValue(0);

  useEffect(() => {
    const controls = animate(count, target, {
      duration,
      delay: 0.5,
      ease: [0.16, 0.1, 0.3, 1], // Custom ease: slow start, rapid acceleration
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      onComplete: () => setIsComplete(true),
    });
    return controls.stop;
  }, [count, target, duration]);

  if (!showPlusSign) {
    return <span>{displayValue}</span>;
  }

  return (
    <span className="inline-flex items-baseline">
      <motion.span layout="position" transition={{ duration: 0.3, ease: "easeOut" }}>
        {displayValue}
      </motion.span>
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: isComplete ? 32 : 0,
          opacity: isComplete ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-hidden inline-block"
      >
        +
      </motion.span>
    </span>
  );
}

const journeySteps = [
  { step: "Request", friction: "Backlog grows because past work keeps failing review or breaking in production. Teams wait while fires get fought." },
  { step: "Plan", friction: "Teams operate in silos, manually writing docs. Slow and inconsistently implemented." },
  { step: "Design", friction: "Architecture diagrams created manually, rarely updated when code changes. No guarantee the design reflects what's actually running." },
  { step: "Code", friction: "Manual, slow, dependent on experts already stretched thin. AI could accelerate, but teams don't trust the output." },
  { step: "Ship", friction: "CI catches what should've been caught at design time. Every issue found here means rework upstream." },
  { step: "Rework", friction: "Issues hit production. Incidents, rollbacks, emergency fixes. What would've taken minutes now takes weeks." },
];

const statCards = [
  {
    id: "speed",
    value: 6,
    suffix: "+",
    label: "months to deliver",
    source: "Enterprise avg",
    duration: 1.5,
    narrative: "Budget approved, team assembled, requirements clear. But cloud becomes the bottleneck. Requests queue up, and months pass before anything ships.",
  },
  {
    id: "trust",
    value: 86,
    suffix: "%",
    label: "of immature orgs don't trust AI",
    source: "Gartner",
    duration: 1.5,
    narrative: "AI could accelerate delivery. But while 71% of enterprises use GenAI, trust is declining, down to 33%. Without governance, teams won't let AI near production.",
  },
  {
    id: "misconfig",
    value: 99,
    suffix: "%",
    label: "of cloud failures from misconfig",
    source: "Gartner",
    duration: 2,
    narrative: "Not sophisticated attacks. Preventable human errors: inconsistent configs, missing controls, teams reinventing patterns. 82% of orgs had an incident last year.",
  },
  {
    id: "cost",
    value: 95,
    suffix: "x",
    label: "cheaper to fix early",
    source: "IBM",
    duration: 2,
    narrative: "A misconfiguration caught at design time takes minutes to fix. The same issue in production triggers incidents, rollbacks, and emergency response. Most teams still catch issues too late.",
  },
];

export function Problem() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Mark animation as complete after initial render
  useEffect(() => {
    const timer = setTimeout(() => setHasAnimated(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-full w-full px-12 lg:px-20 py-16">
      {/* Top - The Problem Statement */}
      <div className="flex-shrink-0 mb-12">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-sm uppercase tracking-wider mb-4"
        >
          The problem
        </motion.p>

        <div className="flex justify-between items-start">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground mb-4">
              Everyone wants speed.
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-muted-foreground">
              Trust is the limiting factor.
            </h2>
          </motion.div>

          {/* Fixed-size container for stat cards */}
          <div className="flex-shrink-0 w-[612px] h-[140px] relative">
            <AnimatePresence mode="wait">
              {expandedCard === null ? (
                /* Collapsed: 4 tiles */
                <motion.div
                  key="tiles"
                  initial={hasAnimated ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex gap-3 absolute inset-0"
                >
                  {statCards.map((card, index) => (
                    <motion.div
                      key={card.id}
                      initial={hasAnimated ? false : { opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: hasAnimated ? 0 : 0.2 + index * 0.1 }}
                      className="w-36 p-4 rounded-lg bg-card text-right cursor-pointer hover:bg-card/80 transition-colors"
                      onClick={() => setExpandedCard(card.id)}
                    >
                      <p className="text-4xl font-semibold text-foreground tabular-nums">
                        {hasAnimated ? (
                          <>{card.value}{card.suffix}</>
                        ) : (
                          <><AnimatedCounter target={card.value} duration={card.duration} />{card.suffix}</>
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{card.label}</p>
                      <p className="text-xs text-muted-foreground/60 mt-1">{card.source}</p>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                /* Expanded: single card fills space */
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 p-5 rounded-lg bg-card cursor-pointer"
                  onClick={() => setExpandedCard(null)}
                >
                  {statCards
                    .filter((card) => card.id === expandedCard)
                    .map((card) => (
                      <div key={card.id} className="flex items-center gap-6 h-full">
                        {/* Main stat */}
                        <div className="text-right flex-shrink-0 w-28">
                          <p className="text-5xl font-semibold text-foreground tabular-nums">
                            {card.value}{card.suffix}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">{card.label}</p>
                          <p className="text-xs text-muted-foreground/60 mt-1">{card.source}</p>
                        </div>

                        {/* Divider */}
                        <div className="w-px self-stretch bg-border" />

                        {/* Narrative */}
                        <p className="flex-1 text-base text-foreground leading-relaxed">
                          {card.narrative}
                        </p>
                      </div>
                    ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom - Supporting Evidence */}
      <div className="flex-1 flex gap-8">
        {/* Left - Business context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-1/4 flex flex-col"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            The business is ready
          </p>

          <div className="flex gap-3 mb-6">
            {["Funded", "Staffed", "Aligned", "Motivated"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="px-3 py-1.5 rounded-full bg-card text-sm font-medium text-foreground"
              >
                {item}
              </motion.div>
            ))}
          </div>

          <p className="text-lg text-foreground font-medium">
            Nothing moves until the cloud shows up.
          </p>
        </motion.div>

        {/* Right - Vertical Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 flex flex-col"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-6">
            What happens next
          </p>

          {/* Steps */}
          <div className="flex-1">
            <div className="space-y-2">
              {journeySteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  {/* Dot */}
                  <div className="w-2 h-2 rounded-full bg-muted-foreground flex-shrink-0" />

                  {/* Content card */}
                  <div className="flex-1 flex items-baseline gap-4 py-5 px-4 rounded-lg bg-card">
                    <p className="w-20 flex-shrink-0 text-base font-medium text-foreground">{item.step}</p>
                    <p className="text-sm text-muted-foreground">{item.friction}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-2xl text-foreground">
            Months pass. Costs grow. Trust erodes.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
