"use client";

import { motion } from "framer-motion";

const markets = [
  {
    name: "Global Cloud Computing",
    current: "~$750B",
    currentYear: "2024",
    future: "~$2.4T",
    futureYear: "2030",
    cagr: "~20%",
  },
  {
    name: "AI Development Tools",
    current: "~$5B",
    currentYear: "2023",
    future: "~$26B",
    futureYear: "2030",
    cagr: "~25%",
  },
];

export function MarketOpportunity() {
  return (
    <div className="flex flex-col h-full w-full px-12 lg:px-20 py-12">
      {/* Top - Headline */}
      <div className="flex-shrink-0 mb-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            Market opportunity
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
            Infracodebase sits at the intersection of two massive, growing markets.
          </h2>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Market size indicators */}
        <div className="flex gap-16 mb-12">
          {markets.map((market, index) => (
            <motion.div
              key={market.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex-1"
            >
              <p className="text-lg text-muted-foreground mb-4">{market.name}</p>
              <div className="flex items-baseline gap-3 mb-2">
                <p className="text-4xl font-semibold text-foreground">{market.current}</p>
                <p className="text-muted-foreground">→</p>
                <p className="text-4xl font-semibold text-foreground">{market.future}</p>
              </div>
              <p className="text-muted-foreground">
                {market.currentYear} → {market.futureYear}, growing at {market.cagr} CAGR
              </p>
            </motion.div>
          ))}
        </div>

        {/* The gap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-border pt-8"
        >
          <p className="text-xl text-foreground mb-4">
            Most AI products today serve software developers, not cloud engineers. This is a massive, underserved market segment where enterprise context, governance, and integrations are critical.
          </p>
          <p className="text-xl text-foreground font-semibold">
            There are no similarly positioned AI-native companies building this trusted execution layer. Everything else is a SaaS product with AI bolted on. We built from day one with agents and an AI-native architecture.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
