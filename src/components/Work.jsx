import Reveal from "./Reveal";

const projects = [
  {
    name: "research-pipeline",
    title: "Research Pipeline",
    description:
      "A multi-agent research pipeline: a planner decomposes questions, parallel searcher agents gather sources, a critic fact-checks and flags contradictions, and a writer produces a cited report.",
    tags: ["Python", "Multi-Agent", "LLM"],
    span: "lg:col-span-4 lg:row-span-2",
    featured: true,
  },
  {
    name: "smart-resume-analyzer",
    title: "Smart Resume Analyzer",
    description:
      "AI-powered resume parsing, ATS scoring, job-description matching, and interview prep, built on FastAPI + SQLAlchemy with a React 19 + TypeScript frontend.",
    tags: ["FastAPI", "React 19", "TypeScript"],
    span: "lg:col-span-2",
  },
  {
    name: "ai-proctoring-system",
    title: "AI Proctoring System",
    description:
      "Exam proctoring system using computer vision to monitor students in real time and flag suspicious behavior like multiple faces, phone use, and gaze deviation.",
    tags: ["JavaScript", "Computer Vision"],
    span: "lg:col-span-2",
  },
  {
    name: "Real-Time-Object-Detection-Security-System",
    title: "Real-Time Object Detection",
    description:
      "Real-time surveillance system using YOLOv8 and OpenCV to detect intruders, weapons, and suspicious activity with instant alerts.",
    tags: ["Python", "YOLOv8", "OpenCV"],
    span: "lg:col-span-2",
  },
  {
    name: "Credit-Crad-Fraud-Detetction",
    title: "Credit Card Fraud Detection",
    description:
      "A machine learning model for detecting fraudulent transactions using Random Forest with SMOTE oversampling for imbalanced data.",
    tags: ["Python", "Random Forest", "SMOTE"],
    span: "lg:col-span-2",
  },
  {
    name: "SpamSheild",
    title: "SpamShield",
    description:
      "A machine learning web app that classifies messages as spam or not spam with high accuracy using TF-IDF and a Linear SVM.",
    tags: ["Python", "TF-IDF", "SVM"],
    span: "lg:col-span-2",
  },
];

function ProjectCard({ project, index }) {
  return (
    <Reveal
      as="a"
      href={`https://github.com/ShehanJay19/${project.name}`}
      target="_blank"
      rel="noopener noreferrer"
      delay={index * 80}
      className={`group relative flex h-full flex-col justify-between overflow-hidden border border-line p-6 transition-colors duration-300 hover:border-accent focus-visible:border-accent md:p-8 ${project.span}`}
    >
      <div className="flex items-start justify-between">
        <span className="text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
        <span className="text-muted opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100 group-focus-visible:opacity-100">
          ↗
        </span>
      </div>

      <div>
        <h3
          className={`font-serif text-ink ${project.featured ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"}`}
        >
          {project.title}
        </h3>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
          {project.tags.map((tag) => (
            <li key={tag} className="text-xs uppercase tracking-[0.08em] text-muted">
              {tag}
            </li>
          ))}
        </ul>

        <div className="grid transition-[grid-template-rows] duration-500 ease-out [grid-template-rows:0fr] group-hover:[grid-template-rows:1fr] group-focus-visible:[grid-template-rows:1fr]">
          <p className="overflow-hidden pt-0 text-sm leading-6 text-muted transition-[padding] duration-500 group-hover:pt-4">
            {project.description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-t border-line px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="flex items-center gap-3 text-sm text-muted">
            <span className="h-px w-8 bg-accent" />
            Selected work
          </p>

          <h2 className="mt-6 max-w-xl font-serif text-3xl font-normal leading-tight text-ink md:text-4xl">
            Projects worth a second look.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:auto-rows-[14rem] lg:grid-cols-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
