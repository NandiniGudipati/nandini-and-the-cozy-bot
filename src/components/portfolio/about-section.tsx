import { SectionHeading } from "@/components/portfolio/section-heading";

const highlights = [
  "M.Sc. Statistics",
  "Full-Stack Project Experience",
  "Frontend Development",
  "Python & Flask",
  "AI-Assisted Development",
];

export function AboutSection() {
  return (
    <section className="section-band section-band-white" id="about" aria-labelledby="about-heading">
      <div className="content-shell">
        <SectionHeading headingId="about-heading" number="01" eyebrow="A LITTLE ABOUT ME" title="A little about me." />
        <div className="about-layout">
          <div className="about-art" aria-label="Statistics, ideas, and code: the threads behind Nandini’s work">
            <span className="about-art-mark" aria-hidden="true">μ</span>
            <div className="about-art-code" aria-hidden="true">
              data → insight<br />
              idea → interface<br />
              curiosity → code
            </div>
            <div className="about-art-caption">
              <span>ANALYTICAL MIND</span><span>CREATIVE APPROACH</span>
            </div>
          </div>

          <div>
            <div className="about-copy">
              <p>
                I’m <strong>Gudipati Naga Nandini</strong>, a Web Developer with an academic background in Statistics and
                professional experience in teaching.
              </p>
              <p>
                My journey combines analytical thinking, logical problem-solving, and creativity. I enjoy building
                responsive web applications, developing user-friendly interfaces, and exploring how technology can
                turn ideas into practical solutions.
              </p>
              <p>
                With hands-on experience in Python, Flask, React.js, JavaScript, and SQL, I’ve worked on projects from
                frontend applications to full-stack web platforms. I’m also exploring AI-assisted development tools to
                make my design and development workflow more efficient.
              </p>
              <p>I’m continuously learning, experimenting, and working towards becoming a stronger software developer.</p>
            </div>
            <div className="highlight-list" aria-label="Professional highlights">
              {highlights.map((highlight) => <span className="highlight-tag" key={highlight}>{highlight}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}