"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PitchExperienceProps {
  children: ReactNode[];
}

const sectionNames = [
  "Infracodebase",
  "The Problem",
  "Why Now",
  "Existing Solutions",
  "The Insight",
  "The Solution",
  "How It Works",
  "Why This Is Better",
  "Why Customers Pay",
  "Market Opportunity",
  "The Team",
];

export function PitchExperience({ children }: PitchExperienceProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [visitCounts, setVisitCounts] = useState<number[]>(() =>
    new Array(children.length).fill(0).map((_, i) => i === 0 ? 1 : 0)
  );
  const totalSections = children.length;

  // Increment visit count when section changes
  useEffect(() => {
    setVisitCounts(prev => {
      const newCounts = [...prev];
      newCounts[currentSection] = (newCounts[currentSection] || 0) + 1;
      return newCounts;
    });
  }, [currentSection]);

  const goToNext = useCallback(() => {
    setCurrentSection((prev) => Math.min(prev + 1, totalSections - 1));
  }, [totalSections]);

  const goToPrev = useCallback(() => {
    setCurrentSection((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSection = useCallback((index: number) => {
    setCurrentSection(Math.max(0, Math.min(index, totalSections - 1)));
  }, [totalSections]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
          e.preventDefault();
          goToNext();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          goToPrev();
          break;
        case "Home":
          e.preventDefault();
          goToSection(0);
          break;
        case "End":
          e.preventDefault();
          goToSection(totalSections - 1);
          break;
      }
    };

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout | null = null;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      if (Math.abs(e.deltaY) > 30) {
        isScrolling = true;

        if (e.deltaY > 0) {
          goToNext();
        } else {
          goToPrev();
        }

        // Lock scrolling until gesture ends (no wheel events for 800ms)
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 800);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [goToNext, goToPrev, goToSection, totalSections]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background">
      {/* Sections */}
      <div
        className="h-full w-full transition-transform duration-500 ease-out"
        style={{ transform: `translateY(-${currentSection * 100}%)` }}
      >
        {children.map((child, index) => (
          <section
            key={index}
            className="h-screen w-screen flex items-center justify-center"
          >
            {child}
          </section>
        ))}
      </div>

      {/* Section indicator (right side) */}
      <TooltipProvider delayDuration={100}>
        <nav className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
          {children.map((_, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => goToSection(index)}
                  className={`w-2 rounded-full transition-all duration-300 ${
                    index === currentSection
                      ? "h-8 bg-foreground"
                      : "h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to ${sectionNames[index] || `section ${index + 1}`}`}
                />
              </TooltipTrigger>
              <TooltipContent side="left" className="text-sm">
                {sectionNames[index] || `Section ${index + 1}`}
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </TooltipProvider>

      {/* Navigation hint (first section only) */}
      {currentSection === 0 && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-pulse z-50">
          <span className="text-sm">Press arrow keys to navigate</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      )}

      {/* Section counter */}
      <div className="fixed bottom-6 right-6 text-sm text-muted-foreground z-50">
        {currentSection + 1} / {totalSections}
      </div>
    </div>
  );
}
