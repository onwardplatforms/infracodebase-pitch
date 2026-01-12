"use client";

import { useState, useEffect, useCallback, useRef, ReactNode } from "react";
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
  "Traction",
  "The Team",
  "The Ask",
];

export function PitchExperience({ children }: PitchExperienceProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [visitCounts, setVisitCounts] = useState<number[]>(() =>
    new Array(children.length).fill(0).map((_, i) => i === 0 ? 1 : 0)
  );
  const totalSections = children.length;
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartTime = useRef<number | null>(null);
  const isSwiping = useRef(false);
  const scrollableRef = useRef<HTMLElement | null>(null);

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

    // Touch handlers for mobile swipe gestures
    const handleTouchStart = (e: TouchEvent) => {
      if (isSwiping.current) return;
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
      touchStartTime.current = Date.now();
      
      // Find the scrollable element
      let target = e.target as HTMLElement;
      while (target && target !== document.body) {
        const overflowY = window.getComputedStyle(target).overflowY;
        if (overflowY === 'auto' || overflowY === 'scroll') {
          scrollableRef.current = target;
          break;
        }
        target = target.parentElement as HTMLElement;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null || touchStartX.current === null || touchStartTime.current === null) return;
      if (isSwiping.current) return;

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const deltaY = touchStartY.current - touchEndY;
      const deltaX = touchStartX.current - touchEndX;
      const deltaTime = Date.now() - touchStartTime.current;
      
      // Calculate velocity (pixels per millisecond)
      const velocity = Math.abs(deltaY) / deltaTime;
      
      // Check if we're at scroll boundaries
      const scrollable = scrollableRef.current;
      let atTop = true;
      let atBottom = true;
      
      if (scrollable) {
        atTop = scrollable.scrollTop <= 1;
        atBottom = scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight - 1;
      }

      // More strict conditions:
      // 1. Must be primarily vertical (not horizontal)
      // 2. Must have significant distance (120px minimum) OR high velocity (> 0.5px/ms)
      // 3. Must be at scroll boundary if swiping up/down
      const isVertical = Math.abs(deltaY) > Math.abs(deltaX) * 1.5;
      const hasDistance = Math.abs(deltaY) > 120;
      const hasVelocity = velocity > 0.5;
      const meetsThreshold = hasDistance || (hasVelocity && Math.abs(deltaY) > 80);
      
      if (isVertical && meetsThreshold) {
        // Swipe up (next) - only if at bottom or no scrollable
        if (deltaY > 0 && (atBottom || !scrollable)) {
          isSwiping.current = true;
          goToNext();
          setTimeout(() => {
            isSwiping.current = false;
          }, 600);
        }
        // Swipe down (prev) - only if at top or no scrollable
        else if (deltaY < 0 && (atTop || !scrollable)) {
          isSwiping.current = true;
          goToPrev();
          setTimeout(() => {
            isSwiping.current = false;
          }, 600);
        }
      }

      touchStartY.current = null;
      touchStartX.current = null;
      touchStartTime.current = null;
      scrollableRef.current = null;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goToNext, goToPrev, goToSection, totalSections]);

  return (
    <div className="relative h-dvh w-screen overflow-hidden bg-background">
      {/* Sections */}
      <div
        className="h-full w-full transition-transform duration-500 ease-out"
        style={{ transform: `translateY(-${currentSection * 100}%)` }}
      >
        {children.map((child, index) => (
          <section
            key={index}
            className="h-dvh w-screen flex items-center justify-center"
          >
            {child}
          </section>
        ))}
      </div>

      {/* Section indicator (right side) - hidden on mobile */}
      <TooltipProvider delayDuration={100}>
        <nav className="hidden md:flex fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 flex-col gap-2 z-50">
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
          <span className="text-sm hidden md:block">Press arrow keys to navigate</span>
          <span className="text-sm md:hidden">Swipe up to continue</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      )}

      {/* Section counter */}
      <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 text-xs md:text-sm text-muted-foreground z-50">
        {currentSection + 1} / {totalSections}
      </div>
    </div>
  );
}
