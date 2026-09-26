import { FiArrowUpRight, FiArrowDownRight, FiCode } from "react-icons/fi";
import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    name: "research-pipeline",
    title: "Research Pipeline",
    description:
      "A multi-agent research pipeline: a planner decomposes questions, parallel searcher agents gather sources, a critic fact-checks and flags contradictions, and a writer produces a cited report.",
    tags: ["Python", "Multi-Agent", "LLM"],
    featured: true,
  },
  {
    number: "02",
    name: "smart-resume-analyzer",
    title: "Smart Resume Analyzer",
  },
  {
    number: "03",
    name: "ai-proctoring-system",
    title: "AI Proctoring System",
  },
  {
    number: "04",
    name: "Real-Time-Object-Detection-Security-System",
    title: "Real-Time Object Detection",
  },
  {
    number: "05",
    name: "Credit-Crad-Fraud-Detetction",
    title: "Credit Card Fraud Detection",
  },
  {
    number: "06",
    name: "SpamSheild",
    title: "SpamShield",
  },
];

export default function Work() {
  const [feature, ...rest] = projects;

  return (
    <section id="work" className="section section-paper">
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
        <Reveal
          as="a"
          href={`https://github.com/ShehanJay19/${feature.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="project-feature"
        >
          <div className="feature-copy">
            <span className="row-number">{feature.number}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <div className="tag-list">
              {feature.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="feature-card" aria-hidden="true">
            <span>designed to make a difference</span>
            <FiCode size={46} strokeWidth={1.4} />
            <span>ideas → meaningful experiences</span>
          </div>
          <FiArrowDownRight className="row-arrow" size={24} />
        </Reveal>

        {rest.map((project, index) => (
          <Reveal
            as="a"
            href={`https://github.com/ShehanJay19/${project.name}`}
            target="_blank"
            rel="noopener noreferrer"
            delay={index * 80}
            className="project-row"
            key={project.name}
          >
            <span className="row-number">{project.number}</span>
            <h3>{project.title}</h3>
            <FiArrowUpRight className="row-arrow" size={24} />
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
