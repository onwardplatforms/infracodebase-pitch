"use client";

import { motion } from "framer-motion";

const approaches = [
  {
    name: "Prompt and pray",
    badges: ["ChatGPT", "Claude.ai", "Gemini"],
    detail: "This works for demos and cloud sandboxes. It breaks down in governed environments where security, consistency, and accountability matter. Generated code often fails to apply, violates internal standards, or includes hallucinated configurations. Each failure further erodes trust in AI for infrastructure.",
    rootIssue: "No understanding of enterprise rules or context.",
  },
  {
    name: "Developer AI tools",
    badges: ["Cursor", "Copilot", "Claude Code"],
    detail: "These tools are great for individual productivity, but they're biased toward execution, not governance. Infrastructure code isn't hard to type. It's hard to get right. Results depend heavily on expert operators, and outcomes vary widely. Meanwhile, architects, security, and operations teams don't work in IDEs at all, even though they shape how infrastructure should be built.",
    rootIssue: "AI assists the developer, not the organization.",
  },
  {
    name: "Scan and fix",
    badges: ["Policy engines", "Scanners", "Linters"],
    detail: "These tools reduce risk by catching violations after code is written. But detection happens too late. AI produces output, humans clean it up. Rework is required, feedback loops get longer, and velocity suffers. Governance remains reactive instead of preventative.",
    rootIssue: "Controls are bolted on after generation.",
  },
  {
    name: "Build it yourself",
    badges: ["Internal platforms", "Custom tooling", "Dedicated teams"],
    detail: "Enterprises try to solve this internally by building bespoke platforms. These efforts take years, cost millions to build, and carry ongoing maintenance burdens that compound over time. Most stall in pilot purgatory, never reach broad adoption, or deliver ROI. Most end up buying anyway.",
    rootIssue: "The problem is too complex to rebuild repeatedly in-house.",
  },
];

export function ExistingSolutions() {
  return (
    <div className="flex flex-col h-full w-full px-12 lg:px-20 py-16">
      {/* Top - Headline */}
      <div className="flex-shrink-0 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            Why existing solutions fall short
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
            Enterprises are trying everything.
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-muted-foreground mt-2">
            None of it is working.
          </h2>
        </motion.div>
      </div>

      {/* Four approaches - 2x2 grid */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="p-6 rounded-lg bg-card"
            >
              <p className="text-xl font-semibold text-foreground mb-1">{approach.name}</p>
              <div className="flex gap-2 mb-4">
                {approach.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2 py-0.5 rounded bg-muted text-muted-foreground text-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <p className="text-foreground mb-4">{approach.detail}</p>
              <p className="text-sm text-muted-foreground italic">{approach.rootIssue}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
