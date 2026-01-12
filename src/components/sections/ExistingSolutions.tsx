"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const approaches = [
  {
    name: "Prompt and pray",
    badges: ["ChatGPT", "Claude.ai", "Gemini"],
    detail: "This works for demos and cloud sandboxes. It breaks down in governed environments where security, consistency, and accountability matter. Generated code often fails to apply, violates internal standards, or includes hallucinated configurations. Each failure further erodes trust in AI for infrastructure.",
    rootIssue: "No understanding of enterprise rules or context.",
    expanded: false,
  },
  {
    name: "Developer AI tools",
    badges: ["Cursor", "Copilot", "Claude Code"],
    detail: "General-purpose coding assistants boost individual productivity but lack infrastructure context. They're biased toward execution, not governance. Results depend heavily on expert operators, and architects, security, and operations teams are left out entirely.",
    rootIssue: "AI assists the developer, not the organization.",
    expanded: false,
  },
  {
    name: "Scan and fix",
    badges: ["env0", "Spacelift", "Policy engines"],
    detail: "Orchestration platforms and policy engines reduce risk by catching violations after code is written. But detection happens too late. AI produces output, humans clean it up. Rework is required, feedback loops get longer, and velocity suffers. Governance remains reactive instead of preventative.",
    rootIssue: "Controls are bolted on after generation.",
    expanded: false,
  },
  {
    name: "Build it yourself",
    badges: ["Internal AI projects", "Custom agents", "Dedicated teams"],
    detail: "Enterprises try to solve this by building their own AI systems. These efforts require specialized talent, constant model updates, and ongoing prompt engineering. Most stall in pilot purgatory, never reach broad adoption, and fail to deliver ROI. 95% of enterprise AI projects fail.",
    rootIssue: "The problem is too complex to rebuild repeatedly in-house.",
    expanded: false,
  },
];

const comparisonRows = [
  {
    dimension: "Approach",
    infracodebase: "AI agents + enterprise standards integration",
    pulumi: "Natural language to Pulumi code",
    systemInit: "Digital twin modeling + AI agents",
    firefly: "Cloud discovery + IaC from existing",
    brainboard: "Visual Terraform design",
  },
  {
    dimension: "IaC support",
    infracodebase: "Terraform, Pulumi, OpenTofu, CDK+",
    pulumi: "Pulumi only",
    systemInit: "Proprietary (replaces IaC)",
    firefly: "Terraform, Pulumi, CloudFormation",
    brainboard: "Terraform only",
  },
  {
    dimension: "Enterprise standards",
    infracodebase: "Built-in, customizable",
    pulumi: "None",
    systemInit: "Limited",
    firefly: "Policy enforcement only",
    brainboard: "Limited",
  },
  {
    dimension: "Design + Code",
    infracodebase: "Both, connected",
    pulumi: "Code only",
    systemInit: "Visual modeling",
    firefly: "Code only (brownfield)",
    brainboard: "Visual → Code",
  },
  {
    dimension: "Adoption model",
    infracodebase: "Works with existing tools",
    pulumi: "Pulumi ecosystem",
    systemInit: "Rip and replace",
    firefly: "Adds to existing",
    brainboard: "Terraform ecosystem",
  },
];

export function ExistingSolutions() {
  const [showCompetitors, setShowCompetitors] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <div className="flex flex-col h-full w-full px-4 md:px-12 lg:px-20 py-8 md:py-16 relative overflow-y-auto md:overflow-hidden">
      {/* Top - Headline */}
      <div className="flex-shrink-0 mb-6 md:mb-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl"
          >
            <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-4">
              Why existing solutions fall short
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-foreground">
              Enterprises are trying everything.
            </h2>
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-muted-foreground mt-1 md:mt-2">
              None of it is working.
            </h2>
          </motion.div>

          {/* Direct competitors button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setShowCompetitors(true)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-4 py-2 flex-shrink-0"
          >
            Who else is building here?
          </motion.button>
        </div>
      </div>

      {/* Competitors Modal */}
      <AnimatePresence>
        {showCompetitors && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-background z-50 flex flex-col px-4 md:px-12 lg:px-20 py-8 md:py-16"
          >
            <div className="flex justify-between items-start mb-6 md:mb-8">
              <div>
                <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-4">
                  Direct competitors
                </p>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight text-foreground">
                  Who else is building here?
                </h2>
              </div>
              <button
                onClick={() => setShowCompetitors(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1 overflow-auto flex items-center justify-center"
            >
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 md:p-6 max-w-6xl w-full">
                <table className="w-full text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 md:py-3 px-2 md:px-4 text-muted-foreground font-medium w-24 md:w-36"></th>
                      <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-foreground bg-foreground/5">Infracodebase</th>
                      <th className="text-left py-2 md:py-3 px-2 md:px-4 text-muted-foreground font-medium">Pulumi AI</th>
                      <th className="text-left py-2 md:py-3 px-2 md:px-4 text-muted-foreground font-medium">System Initiative</th>
                      <th className="text-left py-2 md:py-3 px-2 md:px-4 text-muted-foreground font-medium">Firefly</th>
                      <th className="text-left py-2 md:py-3 px-2 md:px-4 text-muted-foreground font-medium">Brainboard</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, index) => (
                      <tr key={row.dimension} className={index < comparisonRows.length - 1 ? "border-b border-border/50" : ""}>
                        <td className="py-3 md:py-4 px-2 md:px-4 text-muted-foreground font-medium">{row.dimension}</td>
                        <td className="py-3 md:py-4 px-2 md:px-4 text-foreground bg-foreground/5 font-medium">{row.infracodebase}</td>
                        <td className="py-3 md:py-4 px-2 md:px-4 text-muted-foreground">{row.pulumi}</td>
                        <td className="py-3 md:py-4 px-2 md:px-4 text-muted-foreground">{row.systemInit}</td>
                        <td className="py-3 md:py-4 px-2 md:px-4 text-muted-foreground">{row.firefly}</td>
                        <td className="py-3 md:py-4 px-2 md:px-4 text-muted-foreground">{row.brainboard}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Four approaches - 2x2 grid */}
      <div className="flex-1 flex flex-col gap-3 md:gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          {approaches.map((approach, index) => {
            const isExpanded = expandedCards.has(index);
            return (
              <motion.div
                key={approach.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="p-4 md:p-6 rounded-lg bg-card"
              >
                <p className="text-base md:text-xl font-semibold text-foreground mb-1">{approach.name}</p>
                <div className="flex gap-1.5 md:gap-2 mb-2 md:mb-4 flex-wrap">
                  {approach.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-1.5 md:px-2 py-0.5 rounded bg-muted text-muted-foreground text-xs md:text-sm"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div 
                  className="relative mb-2 md:mb-4 cursor-pointer"
                  onClick={() => toggleCard(index)}
                >
                  <p 
                    className={`text-xs md:text-base text-foreground ${
                      isExpanded ? "" : "md:line-clamp-none line-clamp-2"
                    }`}
                  >
                    {approach.detail}
                  </p>
                  {!isExpanded && (
                    <span className="md:hidden absolute bottom-0 right-0 text-xs text-muted-foreground bg-card pl-2">
                      more
                    </span>
                  )}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground italic">{approach.rootIssue}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
