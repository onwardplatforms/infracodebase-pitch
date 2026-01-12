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
    <div className="flex flex-col h-full w-full px-4 md:px-12 lg:px-20 py-8 md:py-12 overflow-y-auto md:overflow-hidden">
      {/* Top - Headline */}
      <div className="flex-shrink-0 mb-4 md:mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-4">
            Market opportunity
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-foreground">
            The intersection of two massive markets.
          </h2>
        </motion.div>
      </div>

      {/* Content - Clean intersection */}
      <div className="flex-1 flex items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {/* Left market */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-center md:text-right"
          >
            {/* Cloud provider icons */}
            <div className="flex justify-center md:justify-end gap-1 md:gap-2 mb-2 md:mb-3">
              <div className="px-2 md:px-3 py-1 md:py-1.5 rounded bg-muted/50 text-xs text-muted-foreground font-medium">AWS</div>
              <div className="px-2 md:px-3 py-1 md:py-1.5 rounded bg-muted/50 text-xs text-muted-foreground font-medium">Azure</div>
              <div className="px-2 md:px-3 py-1 md:py-1.5 rounded bg-muted/50 text-xs text-muted-foreground font-medium">GCP</div>
            </div>
            <p className="text-xs md:text-base text-muted-foreground mb-2 md:mb-3">Global Cloud Computing</p>
            <p className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight">$750B</p>
            <p className="text-sm md:text-xl text-muted-foreground mt-1 md:mt-2">→ $2.4T by 2030</p>
            <p className="text-xs md:text-sm text-muted-foreground/60 mt-0.5 md:mt-1">20% CAGR</p>
          </motion.div>

          {/* Center intersection */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center px-4 md:px-8"
          >
            <div className="text-4xl md:text-6xl text-muted-foreground/20 font-light">×</div>
          </motion.div>

          {/* Right market */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 text-center md:text-left"
          >
            {/* AI tool icons */}
            <div className="flex justify-center md:justify-start gap-1 md:gap-2 mb-2 md:mb-3">
              <div className="px-2 md:px-3 py-1 md:py-1.5 rounded bg-muted/50 text-xs text-muted-foreground font-medium">OpenAI</div>
              <div className="hidden md:block px-2 md:px-3 py-1 md:py-1.5 rounded bg-muted/50 text-xs text-muted-foreground font-medium">Claude Code</div>
              <div className="px-2 md:px-3 py-1 md:py-1.5 rounded bg-muted/50 text-xs text-muted-foreground font-medium">Cursor</div>
            </div>
            <p className="text-xs md:text-base text-muted-foreground mb-2 md:mb-3">AI Development Tools</p>
            <p className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight">$7B</p>
            <p className="text-sm md:text-xl text-muted-foreground mt-1 md:mt-2">→ $24B by 2030</p>
            <p className="text-xs md:text-sm text-muted-foreground/60 mt-0.5 md:mt-1">27% CAGR</p>
          </motion.div>
        </div>
      </div>

      {/* Bottom - Cards */}
      <div className="flex-shrink-0">
        {/* Hint row - hidden on mobile */}
        <div className="hidden md:grid grid-cols-3 gap-4 mb-2">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-stretch">
          {/* The gap card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="md:col-span-2 p-4 md:p-6 rounded-lg bg-card flex flex-col justify-between"
          >
            <div>
              <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mb-2 md:mb-3">The opportunity</p>
              <p className="text-sm md:text-lg text-foreground mb-2">
                <span className="font-semibold">A wide-open market with no category leader.</span> <span className="hidden md:inline">Cloud infrastructure is underserved by AI and enterprises are actively looking for solutions. Less than 0.5% market penetration = $100M+ ARR. Full category expansion puts us in billion-dollar territory.</span>
              </p>
            </div>
            <p className="hidden md:block text-muted-foreground mt-4">
              The companies that establish trust and depth with enterprise cloud teams now will own this category for the next decade.
            </p>
          </motion.div>

          {/* SAM card - clickable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="p-4 md:p-6 rounded-lg bg-foreground text-background cursor-pointer relative"
            onClick={() => setShowBreakdown(!showBreakdown)}
          >
            <p className="text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-3 opacity-70">Addressable market</p>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl md:text-4xl font-semibold">$40B+</span>
              <span className="opacity-70 text-sm md:text-base">today</span>
            </div>
            <div className="flex items-baseline gap-2 mb-2 md:mb-4">
              <span className="text-2xl md:text-4xl font-semibold">$150B+</span>
              <span className="opacity-70 text-sm md:text-base">by 2030</span>
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
                  className="absolute bottom-full left-0 right-0 mb-2 p-3 md:p-4 rounded-lg bg-foreground text-background shadow-xl"
                >
                  <p className="text-xs uppercase tracking-wider opacity-70 mb-2 md:mb-3">2025 Breakdown</p>
                  <div className="space-y-1 md:space-y-2">
                    {samBreakdown.map((item) => (
                      <div key={item.segment} className="flex items-center justify-between text-xs md:text-sm">
                        <span className="opacity-70">{item.segment}</span>
                        <div className="flex items-center gap-2 md:gap-3">
                          <span className="font-semibold">{item.size}</span>
                          <span className="opacity-50 text-xs">{item.cagr} CAGR</span>
                        </div>
                      </div>
                    ))}
                    <div className="flex items-center justify-between text-xs md:text-sm pt-2 border-t border-background/20">
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
