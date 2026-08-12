import Reveal from "./Reveal";
import {
  NetworkCover,
  ScanCover,
  RadarCover,
  BracketsCover,
  ScatterCover,
  MeshCover,
} from "./ProjectCovers";

const projects = [
  {
    name: "research-pipeline",
    title: "Research Pipeline",
    description:
      "A multi-agent research pipeline: a planner decomposes questions, parallel searcher agents gather sources, a critic fact-checks and flags contradictions, and a writer produces a cited report.",
    tags: ["Python", "Multi-Agent", "LLM"],
    span: "lg:col-span-4 lg:row-span-2",
    featured: true,
    Cover: NetworkCover,
  },
  {
    name: "smart-resume-analyzer",
    title: "Smart Resume Analyzer",
    description:
      "AI-powered resume parsing, ATS scoring, job-description matching, and interview prep, built on FastAPI + SQLAlchemy with a React 19 + TypeScript frontend.",
    tags: ["FastAPI", "React 19", "TypeScript"],
    span: "lg:col-span-2",
    Cover: ScanCover,
  },
  {
    name: "ai-proctoring-system",
    title: "AI Proctoring System",
    description:
      "Exam proctoring system using computer vision to monitor students in real time and flag suspicious behavior like multiple faces, phone use, and gaze deviation.",
    tags: ["JavaScript", "Computer Vision"],
    span: "lg:col-span-2",
    Cover: RadarCover,
  },
  {
    name: "Real-Time-Object-Detection-Security-System",
    title: "Real-Time Object Detection",
    description:
      "Real-time surveillance system using YOLOv8 and OpenCV to detect intruders, weapons, and suspicious activity with instant alerts.",
    tags: ["Python", "YOLOv8", "OpenCV"],
    span: "lg:col-span-2",
    Cover: BracketsCover,
  },
  {
    name: "Credit-Crad-Fraud-Detetction",
    title: "Credit Card Fraud Detection",
    description:
      "A machine learning model for detecting fraudulent transactions using Random Forest with SMOTE oversampling for imbalanced data.",
    tags: ["Python", "Random Forest", "SMOTE"],
    span: "lg:col-span-2",
    Cover: ScatterCover,
  },
  {
    name: "SpamSheild",
    title: "SpamShield",
    description:
      "A machine learning web app that classifies messages as spam or not spam with high accuracy using TF-IDF and a Linear SVM.",
    tags: ["Python", "TF-IDF", "SVM"],
    span: "lg:col-span-2",
    Cover: MeshCover,
  },
];

function ProjectCard({ project, index }) {
  const { Cover } = project;
  const titleSize = project.featured ? "text-2xl md:text-4xl" : "text-xl md:text-2xl";

  return (
    <Reveal
      as="a"
      href={`https://github.com/ShehanJay19/${project.name}`}
      target="_blank"
      rel="noopener noreferrer"
      delay={index * 80}
      className={`group relative flex h-full flex-col overflow-hidden border border-line transition-colors duration-300 hover:border-accent focus-visible:border-accent ${project.span}`}
    >
      <Cover
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-accent/30 transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="relative z-10 flex items-start justify-between p-5 md:p-6">
        <span className="text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
        <span className="text-muted transition-colors duration-300 group-hover:text-accent">↗</span>
      </div>

      <div className="relative z-10 mt-auto bg-gradient-to-t from-bg via-bg/85 to-transparent p-5 pt-16 transition-opacity duration-300 group-hover:opacity-0 md:p-6 md:pt-20">
        <h3 className={`font-serif text-ink ${titleSize}`}>{project.title}</h3>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
          {project.tags.map((tag) => (
            <li key={tag} className="text-xs uppercase tracking-[0.08em] text-muted">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute inset-0 z-20 flex flex-col justify-between bg-bg p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:p-6">
        <div className="flex items-start justify-between">
          <span className="text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-accent">↗</span>
        </div>
        <div>
          <h3 className={`font-serif text-ink ${titleSize}`}>{project.title}</h3>
          <p className="mt-3 line-clamp-4 text-sm leading-6 text-muted">{project.description}</p>
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
