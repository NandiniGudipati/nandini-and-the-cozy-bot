import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";

const footerLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
  { label: "GitHub", href: "https://github.com/NandiniGudipati" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gnnandini/" },
];

export function SiteFooter() {
  return (
    <footer className="portfolio-footer">
      <div className="content-shell">
        <div className="footer-main">
          <div>
            <p className="footer-brand">Gudipati Naga Nandini</p>
            <p className="footer-tagline">DESIGNED WITH CREATIVITY. BUILT WITH CURIOSITY.</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith("https:") ? "_blank" : undefined} rel={link.href.startsWith("https:") ? "noreferrer" : undefined}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} GUDIPATI NAGA NANDINI</span>
          <span>WEB DEVELOPMENT · PYTHON · CREATIVE TECHNOLOGY</span>
          <Button asChild className="footer-to-top" size="icon" variant="outline">
            <a href="#top" aria-label="Back to top"><ArrowUp aria-hidden="true" /></a>
          </Button>
        </div>
      </div>
    </footer>
  );
}