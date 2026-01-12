"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const comparisons = [
  {
    id: "disconnected",
    front: {
      title: "Disconnected",
      problem: "No enterprise context, standards, or tooling integration",
    },
    back: {
      title: "Integrated",
      solution: "Fully connected to your standards, tools, and ways of working",
    },
  },
  {
    id: "general",
    front: {
      title: "General purpose",
      problem: "Generic AI built for individual developers",
    },
    back: {
      title: "Built for purpose",
      solution: "For the whole team: architects, security, platform, operations",
    },
  },
  {
    id: "reactive",
    front: {
      title: "Reactive",
      problem: "Catches issues after code is written",
    },
    back: {
      title: "Proactive",
      solution: "Problems solved before a single line is committed",
    },
  },
  {
    id: "diy",
    front: {
      title: "DIY",
      problem: "Expensive, constant care and feeding, worse results",
    },
    back: {
      title: "Enterprise-ready",
      solution: "Maintained for you, at a fraction of the cost",
    },
  },
];

function RevealCard({ comparison, index }: { comparison: typeof comparisons[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
      className="relative h-28 md:h-40 cursor-pointer overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      {/* Front (base layer) */}
      <div className="absolute inset-0 w-full h-full bg-card p-3 md:p-5 flex flex-col justify-center">
        <p className="text-sm md:text-lg font-semibold text-foreground mb-1 md:mb-2">{comparison.front.title}</p>
        <p className="text-xs md:text-base text-muted-foreground">{comparison.front.problem}</p>
      </div>

      {/* Back (reveal layer) */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-foreground p-3 md:p-5 flex flex-col justify-center"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: isHovered ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <p className="text-sm md:text-lg font-semibold text-background mb-1 md:mb-2">{comparison.back.title}</p>
        <p className="text-xs md:text-base text-background/80">{comparison.back.solution}</p>
      </motion.div>
    </motion.div>
  );
}

export function Differentiation() {
  return (
    <div className="flex flex-col h-full w-full px-4 md:px-12 lg:px-20 py-8 md:py-16 overflow-y-auto md:overflow-hidden">
      {/* Top - Content */}
      <div className="flex-shrink-0">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-4"
        >
          Why this is better
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-foreground mb-2 md:mb-4"
        >
          Cloud at the <span className="italic">speed</span> of business.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-xl text-muted-foreground max-w-3xl mb-4 md:mb-6"
        >
          Teams ship faster because there is less friction and trust is built in. Business creates value for customers and employees while windows of opportunity are open. Everybody wins.
        </motion.p>

      </div>

      {/* Bottom - Reveal cards */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mb-2 md:mb-4"
        >
          Go from... <span className="md:hidden text-muted-foreground/60">(tap to reveal)</span>
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {comparisons.map((comparison, index) => (
            <RevealCard key={comparison.id} comparison={comparison} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
