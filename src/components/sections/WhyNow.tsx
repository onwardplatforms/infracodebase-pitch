"use client";

import { motion } from "framer-motion";

export function WhyNow() {
  return (
    <div className="flex flex-col h-full w-full px-12 lg:px-20 py-16">
      {/* Top - Headline */}
      <div className="flex-shrink-0 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            Why now
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
            This problem is getting worse, not better.
          </h2>
        </motion.div>
      </div>

      {/* Middle - Two converging trends */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex gap-8">
          {/* Left card - Cloud complexity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 p-6 rounded-lg bg-card"
          >
            <p className="text-lg text-muted-foreground mb-4">Cloud complexity is compounding</p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2.5 flex-shrink-0" />
                <span className="text-lg text-foreground">Many clouds, many teams, many regions</span>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2.5 flex-shrink-0" />
                <span className="text-lg text-foreground">Standards and security requirements inconsistently applied</span>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2.5 flex-shrink-0" />
                <span className="text-lg text-foreground">Skills don't scale across distributed orgs and experience levels</span>
              </li>
            </ul>
          </motion.div>

          {/* Right card - AI inflection point */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 p-6 rounded-lg bg-card"
          >
            <p className="text-lg text-muted-foreground mb-4">AI capability is here. Trust is not.</p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2.5 flex-shrink-0" />
                <span className="text-lg text-foreground">Teams are already using AI to generate infrastructure code</span>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2.5 flex-shrink-0" />
                <span className="text-lg text-foreground">But without governance, it produces inconsistent, non-compliant output</span>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2.5 flex-shrink-0" />
                <span className="text-lg text-foreground">Trust is eroding, not building</span>
              </li>
            </ul>

            {/* Stat callout */}
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-3xl font-semibold text-foreground">45%</p>
              <p className="text-sm text-muted-foreground">of AI-generated code introduces security flaws</p>
              <p className="text-xs text-muted-foreground/60 mt-1">Veracode 2025</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom - The tension */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-xl text-muted-foreground">Today's choices</p>

          <div className="flex items-center justify-center gap-8">
            <div className="p-6 rounded-lg bg-card text-center">
              <p className="text-2xl font-semibold text-foreground">Slow, manual infra delivery</p>
            </div>

            <p className="text-3xl text-muted-foreground">or</p>

            <div className="p-6 rounded-lg bg-card text-center">
              <p className="text-2xl font-semibold text-foreground">Fast, unsafe automation</p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground">Enterprises can't afford either.</p>
        </motion.div>

        {/* Punchline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-3xl text-center text-foreground font-semibold"
        >
          They need both speed and confidence.
        </motion.p>
      </div>
    </div>
  );
}
