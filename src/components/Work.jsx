import { FiArrowDownRight, FiArrowUpRight, FiImage } from "react-icons/fi";
import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    name: "research-pipeline",
    title: "Research Pipeline",
    description:
      "A multi-agent research pipeline: a planner decomposes questions, parallel searcher agents gather sources, a critic fact-checks and flags contradictions, and a writer produces a cited report.",
    tags: ["Python", "Multi-Agent", "LLM"],
    screenshot: null,
  },
  {
    number: "02",
    name: "smart-resume-analyzer",
    title: "Smart Resume Analyzer",
    description:
      "AI-powered resume parsing, ATS scoring, job-description matching, and interview prep, built on FastAPI + SQLAlchemy with a React 19 + TypeScript frontend.",
    tags: ["FastAPI", "React 19", "TypeScript"],
    screenshot: null,
  },
  {
    number: "03",
    name: "ai-proctoring-system",
    title: "AI Proctoring System",
    description:
      "Exam proctoring system using computer vision to monitor students in real time and flag suspicious behavior like multiple faces, phone use, and gaze deviation.",
    tags: ["JavaScript", "Computer Vision"],
    screenshot: null,
  },
  {
    number: "04",
    name: "Real-Time-Object-Detection-Security-System",
    title: "Real-Time Object Detection",
    description:
      "Real-time surveillance system using YOLOv8 and OpenCV to detect intruders, weapons, and suspicious activity with instant alerts.",
    tags: ["Python", "YOLOv8", "OpenCV"],
    screenshot: null,
  },
  {
    number: "05",
    name: "Credit-Crad-Fraud-Detetction",
    title: "Credit Card Fraud Detection",
    description:
      "A machine learning model for detecting fraudulent transactions using Random Forest with SMOTE oversampling for imbalanced data.",
    tags: ["Python", "Random Forest", "SMOTE"],
    screenshot: null,
  },
  {
    number: "06",
    name: "SpamSheild",
    title: "SpamShield",
    description:
      "A machine learning web app that classifies messages as spam or not spam with high accuracy using TF-IDF and a Linear SVM.",
    tags: ["Python", "TF-IDF", "SVM"],
    screenshot: null,
  },
];

function ScreenshotSlot({ project }) {
  if (project.screenshot) {
    return <img src={project.screenshot} alt={`${project.title} screenshot`} />;
  }

  return (
    <div className="screenshot-placeholder">
      <FiImage size={22} strokeWidth={1.4} />
      <span>Screenshot coming soon</span>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="section section-paper">
      <p className="ghost-title" aria-hidden="true">Work</p>
      <p className="section-kicker">01 / Selected projects</p>
      <div className="section-heading">
        <h2>
          <span className="slash">/</span> Selected <em>work</em>
        </h2>
        <p className="section-note">
          Thoughtful engineering.
          <br />
          From idea to the real world.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal
            as="a"
            href={`https://github.com/ShehanJay19/${project.name}`}
            target="_blank"
            rel="noopener noreferrer"
            delay={index * 80}
            className="project-feature"
            key={project.name}
          >
            <div className="feature-copy">
              <span className="row-number">{project.number}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="feature-card" aria-hidden="true">
              <ScreenshotSlot project={project} />
            </div>
            <FiArrowDownRight className="row-arrow" size={24} />
          </Reveal>
        ))}
      </div>

      <div className="section-footnote">
        <p>Curiosity doesn&rsquo;t stop at six projects.</p>
        <a href="https://github.com/ShehanJay19" target="_blank" rel="noopener noreferrer">
          Explore the full collection <FiArrowUpRight size={13} />
        </a>
      </div>
    </section>
  );
}
