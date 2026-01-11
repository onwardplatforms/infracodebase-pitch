"use client";

import { motion } from "framer-motion";

const budgetAreas = [
  "Internal developer platforms",
  "Cloud enablement",
  "Security and compliance",
];

export function WhyCustomersWillPay() {
  return (
    <div className="flex flex-col h-full w-full px-12 lg:px-20 py-12">
      {/* Top - Headline */}
      <div className="flex-shrink-0 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            Why customers will pay
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
            Enterprises are already paying for this problem today.
          </h2>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 flex gap-16">
        {/* Left side - The current state */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex flex-col justify-center"
        >
          <p className="text-xl text-foreground mb-6">
            They fund platform teams, internal tooling, security reviews, and manual rework just to keep infrastructure safe and consistent.
          </p>
          <p className="text-xl text-foreground mb-8">
            That spend is fragmented across people, time, and process.
          </p>
          <p className="text-2xl text-foreground font-semibold">
            Infracodebase consolidates that effort into a reusable capability.
          </p>
        </motion.div>

        {/* Right side - Budget mapping */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-2/5 flex flex-col justify-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Early conversations show strong pull because this maps directly to existing budgets:
          </p>
          <div className="space-y-4">
            {budgetAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-foreground" />
                <p className="text-xl text-foreground">{area}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom punchline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex-shrink-0 mt-8"
      >
        <p className="text-xl text-muted-foreground">
          This isn't a new category that needs evangelizing. It replaces pain they already feel.
        </p>
      </motion.div>
    </div>
  );
}
