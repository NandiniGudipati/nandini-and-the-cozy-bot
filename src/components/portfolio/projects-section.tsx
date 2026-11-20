import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { projects, projectFilters, type Project, type ProjectCategory } from "@/components/portfolio/portfolio-data";
import { SectionHeading } from "@/components/portfolio/section-heading";

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className={`project-preview-area project-preview-${project.preview}`} role="img" aria-label={`${project.title} interface concept mockup, not a supplied project screenshot`}>
      <span className="preview-note">Concept mockup · not a screenshot</span>
      <div className="preview-window">
        <div className="preview-toolbar">
          <span className="preview-dot" /><span className="preview-dot" /><span className="preview-dot" />
          <span className="preview-toolbar-label">{project.title}</span>
        </div>
        {project.preview === "knowledgehub" || project.preview === "hospital" || project.preview === "crypto" ? (
          <div className="mockup-dashboard">
            <aside className="mockup-sidebar" aria-hidden="true">
              {Array.from({ length: 7 }, (_, index) => <span className="mockup-sidebar-line" key={index} />)}
            </aside>
            <div className="mockup-content" aria-hidden="true">
              <div className="mockup-title-line" />
              <div className="mockup-stat-row">
                {[
                  project.preview === "hospital" ? "Patient records" : project.preview === "crypto" ? "Study notes" : "People",
                  project.preview === "hospital" ? "Appointments" : project.preview === "crypto" ? "Concepts" : "Articles",
                  project.preview === "hospital" ? "Care team" : project.preview === "crypto" ? "Research" : "Expertise",
                ].map((label) => (
                  <div className="mockup-stat" key={label}><span className="mockup-stat-label">{label}</span><span className="mockup-stat-mark" /></div>
                ))}
              </div>
              <div className="mockup-lower-row">
                <div className="mockup-panel">
                  <div className="mockup-panel-heading" />
                  <div className="mockup-row-line" /><div className="mockup-row-line" /><div className="mockup-row-line" />
                </div>
                <div className="mockup-panel">
                  <div className="mockup-panel-heading" />
                  <div className="mockup-chart"><span /><span /><span /><span /><span /><span /></div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {project.preview === "forms" ? (
          <div className="mockup-form" aria-hidden="true">
            <div className="mockup-form-title" /><div className="mockup-input-line" /><div className="mockup-input-line" /><div className="mockup-input-line" /><div className="mockup-button-line" />
          </div>
        ) : null}
        {project.preview === "portfolio" ? (
          <div className="mockup-portfolio" aria-hidden="true">
            <div><div className="mockup-portfolio-title">Ideas<br />in bloom.</div><div className="mockup-portfolio-subtitle" /></div>
            <div className="mockup-portfolio-art"><span className="font-display text-5xl">N.</span></div>
          </div>
        ) : null}
        {project.preview === "ai" ? (
          <div className="mockup-ai-flow" aria-hidden="true">
            <div className="mockup-ai-node">An idea takes shape</div>
            <div className="mockup-ai-node">Review · refine · build</div>
            <div className="mockup-ai-node">A thoughtful web experience</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card${project.featured ? " project-card-featured" : ""}`}>
      <ProjectPreview project={project} />
      <div className="project-card-copy">
        <div className="project-card-topline">
          <span>{project.category}</span><span className="project-number">{project.number} / 06</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech-list" aria-label="Technologies">
          {project.technologies.map((technology) => <span className="project-tech" key={technology}>{technology}</span>)}
        </div>
        <details className="project-details">
          <summary>PROJECT HIGHLIGHTS</summary>
          <div className="project-detail-content">
            <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            {project.featured ? (
              <div className="architecture-flow" aria-label="KnowledgeHub project architecture">
                <span className="architecture-step">Employees<br />Profiles & sign-in</span>
                <span className="architecture-step">Flask<br />Application workflows</span>
                <span className="architecture-step">MySQL<br />Relational data</span>
                <span className="architecture-step">Vercel + Aiven<br />App & database hosting</span>
              </div>
            ) : null}
          </div>
        </details>
        <div className="project-actions">
          {project.liveUrl ? (
            <Button asChild className="project-link" variant="outline" size="sm">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">CURRENT PORTFOLIO <ArrowUpRight aria-hidden="true" /></a>
            </Button>
          ) : project.featured ? (
            <Button className="project-link" variant="outline" size="sm" disabled title="A project demo link was not supplied">
              LIVE DEMO NOT PROVIDED
            </Button>
          ) : null}
          {project.featured ? (
            <Button asChild className="project-link" size="sm">
              <a href="https://github.com/NandiniGudipati" target="_blank" rel="noreferrer">
                <Github aria-hidden="true" /> GITHUB PROFILE <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          ) : null}
        </div>
        {project.featured ? <p className="unavailable-link-note">The project repository URL was not included in the supplied details.</p> : null}
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof projectFilters)[number]>("All Projects");
  const visibleProjects = activeFilter === "All Projects"
    ? projects
    : projects.filter((project) => project.filters.includes(activeFilter as ProjectCategory));

  return (
    <section className="section-band section-band-white" id="projects" aria-labelledby="projects-heading">
      <div className="content-shell">
        <SectionHeading
          headingId="projects-heading"
          number="03"
          eyebrow="SELECTED WORK"
          title="Things I’ve built."
          description="Turning concepts into functional digital experiences. KnowledgeHub leads the way as a full-stack application."
        />
        <div className="project-filter-list" role="group" aria-label="Filter projects by category">
          {projectFilters.map((filter) => (
            <Button
              className="project-filter"
              variant={activeFilter === filter ? "default" : "outline"}
              data-active={activeFilter === filter}
              aria-pressed={activeFilter === filter}
              key={filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
        <div className="project-grid" aria-live="polite">
          {visibleProjects.map((project) => <ProjectCard project={project} key={project.slug} />)}
        </div>
      </div>
    </section>
  );
}