"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const points = [
  {
    id: "market",
    headline: "The market is large and growing fast",
    detail: "Cloud infrastructure spend exceeds $750B annually and grows 20%+ per year. AI developer tooling is a $7B+ market growing at 27% CAGR. Enterprise spend on AI coding tools hit $4B in 2025 alone. Every company is investing in both cloud and AI. The intersection is where we play.",
    stats: [
      { value: "$750B+", label: "cloud market", source: "Gartner" },
      { value: "$7B+", label: "AI dev tools", source: "Mordor" },
      { value: "27%", label: "CAGR", source: "2025-2030" },
    ],
  },
  {
    id: "complexity",
    headline: "Cloud complexity is compounding",
    detail: "Enterprises run multiple clouds with distributed teams across time zones, mixing employees and contractors. Cloud providers ship new services faster than teams can evaluate them. Standards fragment. Knowledge silos deepen. The people who know how things should be built are stretched across too many projects.",
    stats: [
      { value: "82%", label: "run hybrid multi-cloud", source: "CSA 2024" },
    ],
  },
  {
    id: "incidents",
    headline: "Security incidents keep climbing",
    detail: "Misconfigurations cause most cloud breaches. Not sophisticated attacks. Preventable mistakes: an S3 bucket left open, a missing tag, a non-compliant network rule. As infrastructure scales faster than governance, these mistakes multiply.",
    stats: [
      { value: "154%", label: "YoY incident increase", source: "IDC 2024" },
      { value: "82%", label: "of orgs had an incident", source: "CSA 2024" },
    ],
  },
  {
    id: "trust",
    headline: "AI adoption is up, but trust is falling",
    detail: "Teams adopted AI hoping to move faster. But raw AI output doesn't meet organizational standards. It generates code that looks right but fails security review, breaks naming conventions, or ignores architectural patterns. The cleanup work often exceeds the time saved.",
    stats: [
      { value: "78%", label: "enterprise AI adoption", source: "McKinsey 2025" },
      { value: "33%", label: "trust AI output", source: "Stack Overflow 2025" },
    ],
  },
  {
    id: "agents",
    headline: "AI agents just got good enough to solve this",
    detail: "Until recently, AI lacked the reasoning depth and context window size to handle enterprise infrastructure complexity. That changed. Models can now hold enough context to reason about a full architecture. Agentic systems can orchestrate multi-step workflows with memory and tool use. The raw capability to build governed AI for infrastructure finally exists. The engineering to make it work is what we built.",
  },
  {
    id: "window",
    headline: "The window is open",
    detail: "Enterprises feel the pain and see the promise, but haven't found tooling they can trust. The category is forming now. The companies that establish trust early will define how enterprises adopt AI for infrastructure. This window won't stay open.",
  },
  {
    id: "early",
    headline: "We started building before the window opened",
    detail: "We've been building toward this moment. We have working product, design partners testing in real environments, and learnings from enterprise feedback. Trust at this level isn't bought with demos. It's earned by shipping.",
  },
];

export function WhyNow() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="flex flex-col h-full w-full px-12 lg:px-20 py-16">
      {/* Top - Headline + Intro */}
      <div className="flex-shrink-0 mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            Why now
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
            The right problem at the right time.
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted-foreground mt-6 max-w-4xl"
        >
          AI is moving from experimentation to expectation. Teams want it to help build
          infrastructure faster, but the cost of getting it wrong is too high. Enterprises
          can't afford slow, manual delivery or fast, unsafe automation. They need both.
        </motion.p>
      </div>

      {/* Expandable points */}
      <div className="flex-1 flex flex-col gap-2 overflow-hidden">
        {points.map((point, index) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
          >
            <button
              onClick={() => toggleExpand(point.id)}
              className="w-full text-left flex items-center gap-4 py-3 group"
            >
              <motion.div
                animate={{ rotate: expandedId === point.id ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </motion.div>
              <p className="text-xl text-foreground font-medium group-hover:text-foreground/80 transition-colors">
                {point.headline}
              </p>
              {point.stats && expandedId !== point.id && (
                <div className="ml-auto flex gap-6">
                  {point.stats.slice(0, 2).map((stat) => (
                    <span key={stat.label} className="text-lg text-muted-foreground">
                      <span className="font-semibold text-foreground">{stat.value}</span>{" "}
                      {stat.label}
                    </span>
                  ))}
                </div>
              )}
            </button>

            <AnimatePresence>
              {expandedId === point.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="ml-9 pb-4">
                    {point.stats ? (
                      <div className="flex justify-between items-start">
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                          {point.detail}
                        </p>
                        <div className="flex gap-8 flex-shrink-0 ml-12">
                          {point.stats.map((stat) => (
                            <div key={stat.label} className="text-right">
                              <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                              <p className="text-sm text-muted-foreground">{stat.label}</p>
                              {"source" in stat && (
                                <p className="text-xs text-muted-foreground/60">{stat.source}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                        {point.detail}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
