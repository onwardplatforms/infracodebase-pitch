"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface PitchExperienceProps {
  children: ReactNode[];
}

export function PitchExperience({ children }: PitchExperienceProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = children.length;

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
        case " ":
        case "Enter":
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

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, goToSection, totalSections]);

  const handleClick = () => {
    goToNext();
  };

  return (
    <div
      className="relative h-screen w-screen overflow-hidden bg-background cursor-pointer"
      onClick={handleClick}
    >
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

      {/* Progress indicator */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              goToSection(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSection
                ? "bg-foreground scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </nav>

      {/* Navigation hint (only on first section) */}
      {currentSection === 0 && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-pulse z-50">
          <span className="text-sm">Click or press arrow keys</span>
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
