"use client";

import { motion } from "framer-motion";

const bottomsUp = [
  { step: "IaC practitioners", detail: "Engineers using Terraform, Pulumi, OpenTofu daily" },
  { step: "Community + content", detail: "Organic discovery through value-first engagement" },
  { step: "Adoption within companies", detail: "Users bring it into their workflows" },
  { step: "Internal champions", detail: "Success stories spread organically" },
];

const topDown = [
  { step: "Cloud leaders", detail: "Directors, VPs, CTOs with transformation mandates" },
  { step: "Direct outreach", detail: "Enterprise sales motion with consultancy partners" },
  { step: "Business alignment", detail: "Prove ROI, cost savings, delivery acceleration" },
  { step: "Enterprise deals", detail: "Multi-year contracts with expansion potential" },
];

const stakeholders = [
  {
    role: "Engineering teams",
    need: "Ship faster without sacrificing quality",
    outcome: "Become internal champions",
  },
  {
    role: "Business leaders",
    need: "Real acceleration, not another AI experiment",
    outcome: "Budget holders see measurable ROI",
  },
  {
    role: "CTOs / Cloud leaders",
    need: "Impact metrics, cost savings, governance",
    outcome: "Executive sponsorship secured",
  },
];

export function GoToMarket() {
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
            Go-to-market
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-foreground">
            Bottoms-up adoption. Top-down sales.
          </h2>
          <p className="text-sm md:text-xl text-muted-foreground mt-2 md:mt-4 max-w-4xl">
            We build demand through the practitioners who use IaC every day, then convert that demand through enterprise sales to cloud leaders who need to prove AI delivers real value.
          </p>
        </motion.div>
      </div>

      {/* Two columns - Bottoms-up and Top-down - simplified on mobile */}
      <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Bottoms-up */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex flex-col"
        >
          <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mb-2 md:mb-4">
            Bottoms-up
          </p>
          <div className="space-y-2 md:space-y-3 flex-1">
            {bottomsUp.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 md:gap-3"
              >
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-card flex items-center justify-center text-xs text-muted-foreground flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 p-2 md:p-3 rounded-lg bg-card">
                  <p className="text-xs md:text-base text-foreground font-medium">{item.step}</p>
                  <p className="hidden md:block text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Top-down */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 flex flex-col"
        >
          <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mb-2 md:mb-4">
            Top-down
          </p>
          <div className="space-y-2 md:space-y-3 flex-1">
            {topDown.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 md:gap-3"
              >
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-card flex items-center justify-center text-xs text-muted-foreground flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 p-2 md:p-3 rounded-lg bg-card">
                  <p className="text-xs md:text-base text-foreground font-medium">{item.step}</p>
                  <p className="hidden md:block text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Bridge - Stakeholders - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden lg:flex w-1/3 flex-col"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            Multi-stakeholder buy-in
          </p>
          <div className="space-y-3 flex-1">
            {stakeholders.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="p-4 rounded-lg bg-card"
              >
                <p className="text-foreground font-semibold">{item.role}</p>
                <p className="text-sm text-muted-foreground mb-2">{item.need}</p>
                <p className="text-sm text-foreground">{item.outcome}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom - The flywheel - simplified on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex-shrink-0 pt-4 md:pt-6 mt-4 md:mt-6 border-t border-border"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2 md:gap-8">
            <p className="text-sm md:text-lg text-foreground">
              <span className="font-semibold">Users</span> → <span className="font-semibold">champions</span>
            </p>
            <span className="hidden md:inline text-muted-foreground">→</span>
            <p className="text-sm md:text-lg text-foreground">
              <span className="font-semibold">Champions</span> → <span className="font-semibold">buyers</span>
            </p>
            <span className="hidden md:inline text-muted-foreground">→</span>
            <p className="text-sm md:text-lg text-foreground">
              <span className="font-semibold">Buyers</span> → <span className="font-semibold">references</span>
            </p>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm">The enterprise flywheel</p>
        </div>
      </motion.div>
    </div>
  );
}
