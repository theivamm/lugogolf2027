import { SEOHead } from "@/lib/seo";
import { HeroSection } from "@/features/home/HeroSection";
import { ManifestoSection } from "@/features/home/ManifestoSection";
import { FeaturedTripsSection } from "@/features/home/FeaturedTripsSection";
import { FormulaSection } from "@/features/home/FormulaSection";
import { ExperienceSection } from "@/features/home/ExperienceSection";
import { CommunitySection } from "@/features/home/CommunitySection";
import { FinalCTASection } from "@/features/home/FinalCTASection";

export function HomePage() {
  return (
    <>
      <SEOHead
        title="LugoGolf — Viajes de golf internacionales para parejas y amigos"
        description="Experiencias de golf premium en destinos extraordinarios. Todo organizado, tú solo disfruta. Panamá, España, Portugal, República Dominicana y Chile."
      />
      <HeroSection />
      <ManifestoSection />
      <FeaturedTripsSection />
      <FormulaSection />
      <ExperienceSection />
      <CommunitySection />
      <FinalCTASection />
    </>
  );
}
