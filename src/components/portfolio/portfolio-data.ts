export type ProjectCategory = "Full-Stack" | "Frontend" | "Academic" | "AI-Assisted";

export type Project = {
  number: string;
  slug: string;
  category: string;
  filters: ProjectCategory[];
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  preview: "knowledgehub" | "hospital" | "crypto" | "portfolio" | "forms" | "ai";
  featured?: boolean;
  liveUrl?: string;
};

export const projectFilters = ["All Projects", "Full-Stack", "Frontend", "Academic", "AI-Assisted"] as const;

export const projects: Project[] = [
  {
    number: "01",
    slug: "knowledgehub",
    category: "Featured full-stack project",
    filters: ["Full-Stack"],
    title: "KnowledgeHub — Connect. Share. Grow.",
    description:
      "An employee-focused knowledge-sharing platform that centralizes organizational knowledge, encourages collaboration, and helps people discover expertise across their organization.",
    technologies: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "Aiven", "Vercel"],
    highlights: [
      "Employee registration and expertise profiles",
      "Skills, projects, and certification management",
      "Knowledge article publishing and search",
      "Employee search and skill matching",
      "Questions, answers, upvoting, and ratings",
      "Relational MySQL workflows connected to a cloud-hosted database",
    ],
    preview: "knowledgehub",
    featured: true,
  },
  {
    number: "02",
    slug: "hospital-management",
    category: "Frontend development",
    filters: ["Frontend"],
    title: "Hospital Management System",
    description:
      "A responsive frontend for common hospital workflows, with a focus on clear patient-record and appointment views.",
    technologies: ["React.js", "HTML", "CSS", "Bootstrap"],
    highlights: ["Patient record interface", "Appointment views", "Responsive layouts", "Reusable UI components"],
    preview: "hospital",
  },
  {
    number: "03",
    slug: "cryptocurrency-application",
    category: "Academic project",
    filters: ["Academic"],
    title: "Cryptocurrency Application",
    description:
      "A final-year academic project exploring cryptocurrency concepts through programming logic, problem-solving, and web application structure.",
    technologies: ["Python", "HTML", "CSS", "JavaScript"],
    highlights: ["Cryptocurrency concepts", "Programming logic", "DSA fundamentals", "Web application structure"],
    preview: "crypto",
  },
  {
    number: "04",
    slug: "personal-portfolio",
    category: "Personal web development",
    filters: ["Frontend", "AI-Assisted"],
    title: "Personal Portfolio Website",
    description:
      "A personal web project combining hand-written code and AI-assisted workflows to create a responsive digital presence.",
    technologies: ["HTML", "CSS", "JavaScript", "AI-assisted tools"],
    highlights: ["Personal branding", "Responsive design", "UI development", "AI-supported workflow"],
    preview: "portfolio",
    liveUrl: "https://myportfoliohtml.vercel.app/",
  },
  {
    number: "05",
    slug: "responsive-signup-forms",
    category: "Frontend UI design",
    filters: ["Frontend"],
    title: "Responsive Registration Forms",
    description:
      "A collection of signup and registration interfaces designed around usable form structure, responsive layouts, and visual consistency.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    highlights: ["Input field design", "Responsive layouts", "Form styling", "User-friendly interfaces"],
    preview: "forms",
  },
  {
    number: "06",
    slug: "ai-assisted-experiments",
    category: "AI-assisted development",
    filters: ["AI-Assisted"],
    title: "AI-Assisted Website Experiments",
    description:
      "Exploring tools such as Lovable to translate written requirements and design ideas into functional website interfaces.",
    technologies: ["Lovable", "AI development tools", "HTML", "CSS", "JavaScript"],
    highlights: ["Prompt-based development", "Design exploration", "Review and refinement", "Human-guided implementation"],
    preview: "ai",
  },
];

export const skillGroups = [
  {
    number: "01",
    title: "Programming & Core",
    skills: [
      { name: "Python", mark: "Py", note: "Programming language used in Flask and academic projects." },
      { name: "JavaScript", mark: "JS", note: "Language for interactive web interfaces." },
      { name: "HTML", mark: "<>" , note: "Structure for semantic web pages." },
      { name: "CSS", mark: "#", note: "Styling and responsive layout for the web." },
      { name: "SQL", mark: "SQL", note: "Querying and organizing relational data." },
      { name: "Data Structures & Algorithms", mark: "DS", note: "Foundational problem-solving concepts." },
    ],
  },
  {
    number: "02",
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", mark: "R", note: "Library for building component-based interfaces." },
      { name: "Flask", mark: "F", note: "Python framework used for full-stack application workflows." },
      { name: "Bootstrap", mark: "B", note: "UI toolkit used for responsive layouts." },
    ],
  },
  {
    number: "03",
    title: "Development Tools",
    skills: [
      { name: "Git", mark: "G", note: "Version control for tracking code changes." },
      { name: "GitHub", mark: "GH", note: "Code hosting and collaboration platform." },
      { name: "Visual Studio Code", mark: "VS", note: "Code editor used in development workflows." },
    ],
  },
  {
    number: "04",
    title: "Additional Skills",
    skills: [
      { name: "Responsive Web Design", mark: "RWD", note: "Interfaces that adapt across screen sizes." },
      { name: "Frontend Development", mark: "UI", note: "Accessible, user-friendly interface development." },
      { name: "Full-Stack Development", mark: "FS", note: "Connecting application workflows with backend data." },
      { name: "Database Integration", mark: "DB", note: "Working with relational databases in applications." },
      { name: "AI-Assisted Web Development", mark: "AI", note: "Using AI tools as support in website development." },
    ],
  },
];

export const learningAreas = [
  "Python Development",
  "Frontend and React Development",
  "Flask and Full-Stack Development",
  "SQL and Database Management",
  "AI-Assisted Development",
  "Problem-Solving and DSA",
];