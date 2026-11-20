import { skillGroups } from "@/components/portfolio/portfolio-data";
import { SectionHeading } from "@/components/portfolio/section-heading";

export function SkillsSection() {
  return (
    <section className="section-band" id="skills" aria-labelledby="skills-heading">
      <div className="content-shell">
        <SectionHeading headingId="skills-heading" number="02" eyebrow="MY TOOLKIT" title="My toolkit." />
        <p className="skills-intro">Technologies, tools, and concepts I work with.</p>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.number}>
              <div className="skill-group-heading">
                <span className="skill-group-number">{group.number}</span>
                <h3 className="skill-group-title">{group.title}</h3>
              </div>
              <div className="skill-items">
                {group.skills.map((skill) => (
                  <div
                    className="skill-item"
                    key={skill.name}
                    tabIndex={0}
                    aria-label={`${skill.name}: ${skill.note}`}
                    title={skill.note}
                  >
                    <span className="skill-mark" aria-hidden="true">{skill.mark}</span>
                    <span>{skill.name}</span>
                    <span className="skill-tooltip" aria-hidden="true">{skill.note}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}