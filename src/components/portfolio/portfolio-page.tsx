import { AboutSection } from "@/components/portfolio/about-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { JourneySection } from "@/components/portfolio/journey-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteHeader } from "@/components/portfolio/site-header";
import { SkillsSection } from "@/components/portfolio/skills-section";

export function PortfolioPage() {
  return (
    <main className="portfolio-app">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <JourneySection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}