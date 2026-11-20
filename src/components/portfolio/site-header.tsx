import { useEffect, useState } from "react";
import { ArrowDown, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "JOURNEY", href: "#journey" },
  { label: "CONTACT", href: "#contact" },
];

function Availability() {
  return (
    <span className="availability">
      <span className="availability-dot" aria-hidden="true" />
      OPEN TO OPPORTUNITIES
    </span>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="portfolio-header">
      <div className="content-shell header-inner">
        <a className="brand-mark" href="#top" onClick={closeMenu} aria-label="Nandini, back to top">
          /NANDINI/
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a className="nav-link" href={item.href} key={item.label}>{item.label}</a>
          ))}
        </nav>
        <div className="desktop-availability"><Availability /></div>
        <Button
          className="mobile-menu-button"
          variant="ghost"
          size="icon"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" data-open={menuOpen} aria-label="Mobile navigation">
        {navigation.map((item) => (
          <a className="nav-link" href={item.href} key={item.label} onClick={closeMenu}>{item.label}</a>
        ))}
        <div className="mobile-availability"><Availability /></div>
      </nav>
      <div className="scroll-progress-track" aria-hidden="true">
        <div className="scroll-progress-fill" style={{ transform: `scaleX(${progress})` }} />
      </div>
    </header>
  );
}

export function ScrollCue() {
  return (
    <a className="hero-scroll-link" href="#about">
      SCROLL TO EXPLORE <ArrowDown aria-hidden="true" />
    </a>
  );
}