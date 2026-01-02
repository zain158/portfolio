"use client";

import { HeroBackground } from "./hero/HeroBackground";
import { MovingBanner } from "./hero/MovingBanner";
import { HeroContent } from "./hero/HeroContent";
import { QuickStats } from "./hero/QuickStats";
import { CoreSkills } from "./hero/CoreSkills";
import { FeaturedProjects } from "./hero/FeaturedProjects";

export function Hero() {
  return (
    <main className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      <HeroBackground />
      <MovingBanner />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <HeroContent />
        <QuickStats />
        <CoreSkills />
        <FeaturedProjects />
      </div>
    </main>
  );
}
