import { ArrowRight, BookOpen, Braces, Check, Code2, GraduationCap, Lightbulb, Sparkles, WandSparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { learningAreas } from "@/components/portfolio/portfolio-data";
import { SectionHeading } from "@/components/portfolio/section-heading";

const certificates = [
  { name: "Be10x", detail: "AI Certification" },
  { name: "Tixu", detail: "AI Certification" },
  { name: "Virality School", detail: "AI Certification" },
  { name: "AI webinars", detail: "Participation certificates" },
  { name: "Codegnan", detail: "Web Development / Programming" },
];

const timeline = [
  {
    date: "NOVEMBER 2025 — MARCH 2026",
    role: "Maths Teacher",
    organization: "Orchids International School · Hyderabad",
    points: [
      "Transitioned from a temporary role to a permanent teaching position after five months.",
      "Taught mathematics concepts and prepared lesson plans and assessments.",
      "Managed classroom activities while strengthening communication, organization, and structured problem-solving.",
    ],
  },
  {
    date: "MAY 2025 — NOVEMBER 2025",
    role: "Temporary Teacher · School Data",
    organization: "Orchids International School · Hyderabad",
    points: [
      "Managed and maintained school data records, ensuring accurate and timely updates.",
      "Supported academic operations and built careful, process-oriented working habits.",
    ],
  },
];

export function JourneySection() {
  return (
    <section className="section-band section-band-peach" id="journey" aria-labelledby="journey-heading">
      <div className="content-shell">
        <SectionHeading
          headingId="journey-heading"
          number="04"
          eyebrow="LEARNING, WORK & LIFE"
          title="Exploring the AI era."
          description="Learning, experimenting, and creating with intelligent tools—while keeping programming knowledge and judgment in the loop."
        />

        <div className="ai-intro-grid">
          <div className="ai-copy">
            <p>
              I explore AI-powered development tools to support website creation, design exploration, and development
              workflows. I combine my programming knowledge with AI assistance to try new ideas and improve productivity.
            </p>
            <p>
              AI supports my process; I review and refine the result. My experience is in AI-assisted website development,
              not AI engineering or machine learning.
            </p>
            <div className="ai-tool-list">
              <span className="ai-tool-item"><WandSparkles aria-hidden="true" /> Lovable</span>
              <span className="ai-tool-item"><Sparkles aria-hidden="true" /> AI-assisted website creation</span>
              <span className="ai-tool-item"><Lightbulb aria-hidden="true" /> Design exploration</span>
              <span className="ai-tool-item"><Braces aria-hidden="true" /> Prompt-based workflows</span>
            </div>
          </div>
          <div className="workflow-panel">
            <p className="workflow-title">My AI workflow</p>
            <div className="workflow-steps" aria-label="Idea to prompt to AI-assisted development to review to refinement to website">
              {[
                { label: "IDEA", icon: <Lightbulb aria-hidden="true" /> },
                { label: "PROMPT", icon: <Braces aria-hidden="true" /> },
                { label: "AI-ASSISTED BUILD", icon: <WandSparkles aria-hidden="true" /> },
                { label: "REVIEW", icon: <Check aria-hidden="true" /> },
                { label: "REFINE", icon: <Code2 aria-hidden="true" /> },
                { label: "WEBSITE", icon: <BookOpen aria-hidden="true" /> },
              ].map((step, index, steps) => (
                <span className="workflow-step-wrap" key={step.label}>
                  <span className="workflow-step">{step.icon}{step.label}</span>
                  {index < steps.length - 1 ? <ArrowRight className="workflow-arrow" size={14} aria-hidden="true" /> : null}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="certificate-block">
          <div className="subsection-heading">
            <h3>Certificates & learning</h3>
            <span>Certificate files can be added later</span>
          </div>
          <div className="certificate-list">
            {certificates.map((certificate, index) => (
              <article className="certificate-item" key={certificate.name}>
                <span className="certificate-mark">0{index + 1} / LEARNING</span>
                <h4>{certificate.name}</h4>
                <p>{certificate.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="timeline-section">
          <SectionHeading
            headingId="experience-heading"
            number="05"
            eyebrow="MY PROFESSIONAL JOURNEY"
            title="A path shaped by people & ideas."
            description="Teaching and school-data work strengthened the communication, precision, and analytical habits I bring to development."
          />
          <div className="timeline-list">
            {timeline.map((item) => (
              <article className="timeline-item" key={item.role}>
                <span className="timeline-date">{item.date}</span>
                <div>
                  <h3 className="timeline-role">{item.role}</h3>
                  <p className="timeline-org">{item.organization}</p>
                  <div className="timeline-description"><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="education-section">
          <div className="subsection-heading">
            <h3>My academic background</h3>
            <span>Statistics · Quantitative reasoning</span>
          </div>
          <div className="education-grid">
            <article className="education-item">
              <GraduationCap className="education-item-icon" aria-hidden="true" />
              <span className="education-score">72%</span>
              <h4 className="education-degree">M.Sc. in Statistics</h4>
              <p className="education-school">Andhra University · Analytical thinking and quantitative reasoning</p>
            </article>
            <article className="education-item">
              <GraduationCap className="education-item-icon" aria-hidden="true" />
              <span className="education-score">85%</span>
              <h4 className="education-degree">B.Sc. (MSCs)</h4>
              <p className="education-school">Pavitra Degree College · Krishna University</p>
            </article>
          </div>
        </div>

        <div className="learning-layout">
          <div>
            <p className="section-kicker">ALWAYS IN PROGRESS</p>
            <h3 className="section-title">Curiosity, in motion.</h3>
            <p className="learning-copy">
              Technology keeps evolving, and so do I. I believe in learning by building, experimenting with new tools,
              and continuously improving my development skills.
            </p>
          </div>
          <ul className="learning-list">
            {learningAreas.map((area) => <li key={area}><Check aria-hidden="true" /> {area}</li>)}
          </ul>
        </div>

        <div className="resume-strip">
          <div>
            <h3>More about my journey?</h3>
            <p>Explore my education, technical skills, projects, and professional experience in detail.</p>
            <p className="resume-note">Resume PDF not attached yet.</p>
          </div>
          <Button className="resume-button" disabled title="The real resume PDF has not been supplied">
            DOWNLOAD RESUME
          </Button>
        </div>
      </div>
    </section>
  );
}