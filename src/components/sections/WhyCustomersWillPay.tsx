"use client";

import { motion } from "framer-motion";

const budgetAreas = [
  { name: "Platform engineering", size: "$6B", growth: "→ $40B by 2032" },
  { name: "DevOps tools", size: "$16B", growth: "→ $43B by 2030" },
  { name: "Cloud security", size: "$9B", growth: "growing 15% annually" },
];

const failureStats = [
  { stat: "95%", label: "of enterprise AI projects fail to deliver ROI" },
  { stat: "76%", label: "say AI output doesn't meet quality expectations" },
  { stat: "0%", label: "delivery improvement at company level despite more code" },
];

export function WhyCustomersWillPay() {
  return (
    <div className="flex flex-col h-full w-full px-4 md:px-12 lg:px-20 py-8 md:py-12 overflow-y-auto md:overflow-hidden">
      {/* Top - Headline */}
      <div className="flex-shrink-0 mb-4 md:mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl"
        >
          <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-4">
            Why customers will pay
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-foreground">
            They're spending billions and still failing.
          </h2>
        </motion.div>
      </div>

      {/* Content - Two columns on desktop, stacked on mobile */}
      <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-12">
        {/* Left - The problem */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex flex-col justify-center"
        >
          <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mb-2 md:mb-4">
            The reality
          </p>
          <div className="space-y-3 md:space-y-6 mb-4 md:mb-8">
            {failureStats.map((item, index) => (
              <motion.div
                key={item.stat}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="flex items-baseline gap-2 md:gap-4"
              >
                <span className="text-2xl md:text-4xl font-semibold text-foreground">{item.stat}</span>
                <span className="text-sm md:text-lg text-muted-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-sm md:text-lg text-foreground"
          >
            Internal pilots don't scale. General-purpose AI lacks cloud context. The result is more delays, more toil, and teams wondering why AI isn't making things better.
          </motion.p>
        </motion.div>

        {/* Right - Budget exists */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full md:w-2/5 flex flex-col justify-center"
        >
          <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mb-2 md:mb-4">
            The budget exists
          </p>
          <div className="space-y-3 md:space-y-5 mb-4 md:mb-8">
            {budgetAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="p-3 md:p-4 rounded-lg bg-card"
              >
                <p className="text-sm md:text-lg font-semibold text-foreground">{area.name}</p>
                <p className="text-xs md:text-base text-muted-foreground">
                  <span className="text-foreground font-medium">{area.size}</span> {area.growth}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="text-sm md:text-lg text-foreground font-semibold"
          >
            Infracodebase maps directly to these budgets.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom punchline - hidden on mobile for cleaner view */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="hidden md:flex flex-shrink-0 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border gap-6 md:gap-12"
      >
        <div className="flex-1">
          <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mb-1 md:mb-2">Enterprises</p>
          <p className="text-sm md:text-lg text-foreground">
            A better answer to a problem they're failing to build and actively buying. Budgets are tight and they need to scale without adding headcount.
          </p>
        </div>
        <div className="flex-1">
          <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mb-1 md:mb-2">Consultancies</p>
          <p className="text-sm md:text-lg text-foreground">
            Better client outcomes, bigger margins on cloud deals, and a way to stay ahead as services commoditize.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
