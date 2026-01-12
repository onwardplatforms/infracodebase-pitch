"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const samBreakdown = [
  { segment: "Platform Engineering", size: "$7B", cagr: "24%" },
  { segment: "Cloud Management", size: "$16B", cagr: "14%" },
  { segment: "DevSecOps", size: "$9B", cagr: "24%" },
  { segment: "CSPM", size: "$6B", cagr: "11%" },
  { segment: "IaC", size: "$3B", cagr: "18%" },
];

export function MarketOpportunity() {
  const [showBreakdown, setShowBreakdown] = useState(false);

  return (
    <div className="flex flex-col h-full w-full px-12 lg:px-20 py-12">
      {/* Top - Headline */}
      <div className="flex-shrink-0 mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            Market opportunity
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
            The intersection of two massive markets.
          </h2>
        </motion.div>
      </div>

      {/* Content - Clean intersection */}
      <div className="flex-1 flex items-center">
        <div className="w-full flex items-center justify-center gap-8">
          {/* Left market */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-right"
          >
            {/* Cloud provider icons */}
            <div className="flex justify-end gap-2 mb-3">
              <div className="px-3 py-1.5 rounded bg-muted/50 text-xs text-muted-foreground font-medium">AWS</div>
              <div className="px-3 py-1.5 rounded bg-muted/50 text-xs text-muted-foreground font-medium">Azure</div>
              <div className="px-3 py-1.5 rounded bg-muted/50 text-xs text-muted-foreground font-medium">GCP</div>
            </div>
            <p className="text-muted-foreground mb-3">Global Cloud Computing</p>
            <p className="text-6xl lg:text-7xl font-semibold text-foreground tracking-tight">$750B</p>
            <p className="text-xl text-muted-foreground mt-2">→ $2.4T by 2030</p>
            <p className="text-sm text-muted-foreground/60 mt-1">20% CAGR</p>
          </motion.div>

          {/* Center intersection */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center px-8"
          >
            <div className="text-6xl text-muted-foreground/20 font-light">×</div>
          </motion.div>

          {/* Right market */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 text-left"
          >
            {/* AI tool icons */}
            <div className="flex justify-start gap-2 mb-3">
              <div className="px-3 py-1.5 rounded bg-muted/50 text-xs text-muted-foreground font-medium">OpenAI</div>
              <div className="px-3 py-1.5 rounded bg-muted/50 text-xs text-muted-foreground font-medium">Claude Code</div>
              <div className="px-3 py-1.5 rounded bg-muted/50 text-xs text-muted-foreground font-medium">Cursor</div>
            </div>
            <p className="text-muted-foreground mb-3">AI Development Tools</p>
            <p className="text-6xl lg:text-7xl font-semibold text-foreground tracking-tight">$7B</p>
            <p className="text-xl text-muted-foreground mt-2">→ $24B by 2030</p>
            <p className="text-sm text-muted-foreground/60 mt-1">27% CAGR</p>
          </motion.div>
        </div>
      </div>

      {/* Bottom - Cards */}
      <div className="flex-shrink-0">
        {/* Hint row */}
        <div className="grid grid-cols-3 gap-4 mb-2">
          <div className="col-span-2" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-xs text-muted-foreground text-right"
          >
            Click for breakdown
          </motion.p>
        </div>

        {/* Cards row */}
        <div className="grid grid-cols-3 gap-4 items-stretch">
          {/* The gap card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="col-span-2 p-6 rounded-lg bg-card flex flex-col justify-between"
          >
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-3">The opportunity</p>
              <p className="text-lg text-foreground mb-2">
                <span className="font-semibold">A wide-open market with no category leader.</span> Cloud infrastructure is underserved by AI and enterprises are actively looking for solutions. Less than 0.5% market penetration = $100M+ ARR. Full category expansion puts us in billion-dollar territory.
              </p>
            </div>
            <p className="text-muted-foreground mt-4">
              The companies that establish trust and depth with enterprise cloud teams now will own this category for the next decade.
            </p>
          </motion.div>

          {/* SAM card - clickable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="p-6 rounded-lg bg-foreground text-background cursor-pointer relative"
            onClick={() => setShowBreakdown(!showBreakdown)}
          >
            <p className="text-sm uppercase tracking-wider mb-3 opacity-70">Addressable market</p>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-4xl font-semibold">$40B+</span>
              <span className="opacity-70">today</span>
            </div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-semibold">$150B+</span>
              <span className="opacity-70">by 2030</span>
            </div>
            <p className="text-xs opacity-50">Gartner, Mordor Intelligence, Grand View Research</p>

            {/* Breakdown popover */}
            <AnimatePresence>
              {showBreakdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-0 right-0 mb-2 p-4 rounded-lg bg-foreground text-background shadow-xl"
                >
                  <p className="text-xs uppercase tracking-wider opacity-70 mb-3">2025 Breakdown</p>
                  <div className="space-y-2">
                    {samBreakdown.map((item) => (
                      <div key={item.segment} className="flex items-center justify-between text-sm">
                        <span className="opacity-70">{item.segment}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-semibold">{item.size}</span>
                          <span className="opacity-50 text-xs">{item.cagr} CAGR</span>
                        </div>
                      </div>
                    ))}
                    <div className="flex items-center justify-between text-sm pt-2 border-t border-background/20">
                      <span className="font-semibold">Total</span>
                      <span className="font-semibold">Approx. $40 Billion</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
