import { ArrowDown, ArrowUpRight, Braces, Code2, Database } from "lucide-react";

import robotAsset from "@/assets/Pastel Robot Coding Cozy Scene.png";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="content-shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">CREATIVITY MEETS CODE</p>
          <h1 className="hero-title" id="hero-title">
            <span className="hello-line">HELLO, I’M</span>
            <span className="hero-name">Nandini.</span>
          </h1>
          <p className="hero-promise">Building ideas into digital experiences.</p>
          <p className="hero-description">
            I’m a Web Developer with a background in Statistics, passionate about building responsive web applications,
            solving problems, and finding creative ways to turn ideas into digital experiences.
          </p>
          <div className="hero-actions">
            <Button asChild className="hero-primary-button">
              <a href="#projects">EXPLORE MY WORK <ArrowDown aria-hidden="true" /></a>
            </Button>
            <Button asChild className="hero-secondary-button" variant="outline">
              <a href="#contact">LET’S CONNECT <ArrowUpRight aria-hidden="true" /></a>
            </Button>
          </div>
        </div>

        <div className="hero-art-wrap">
          <div className="hero-art-frame">
            <img
              className="hero-mascot"
              src={robotAsset.url}
              alt="A cozy pink coding robot working at a laptop, surrounded by Python, React, and Flask symbols"
              fetchPriority="high"
            />
          </div>
          <div className="floating-note floating-note-code"><Code2 aria-hidden="true" /> &lt;build /&gt;</div>
          <div className="floating-note floating-note-stack"><Braces aria-hidden="true" /> Python · React · Flask</div>
        </div>
      </div>

      <div className="content-shell hero-caption">
        <p className="mono-label">VIJAYAWADA, INDIA</p>
        <p className="mono-label">WEB DEVELOPMENT · PYTHON · CREATIVE TECHNOLOGY</p>
        <a className="hero-scroll-link" href="#about">
          SCROLL <ArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
