import {
  SiPython,
  SiCplusplus,
  SiTypescript,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiFastapi,
  SiSqlalchemy,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiJira,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { RiOpenaiFill } from "react-icons/ri";
import Reveal from "./Reveal";

const skillGroups = [
  {
    number: "01",
    label: "Languages",
    items: [
      { name: "Python", Icon: SiPython },
      { name: "Java", Icon: DiJava },
      { name: "C++", Icon: SiCplusplus },
      { name: "TypeScript", Icon: SiTypescript },
    ],
  },
  {
    number: "02",
    label: "AI / ML",
    items: [
      { name: "TensorFlow", Icon: SiTensorflow },
      { name: "PyTorch", Icon: SiPytorch },
      { name: "Scikit-learn", Icon: SiScikitlearn },
      { name: "OpenCV", Icon: SiOpencv },
      { name: "OpenAI", Icon: RiOpenaiFill },
    ],
  },
  {
    number: "03",
    label: "Web & backend",
    items: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Laravel", Icon: SiLaravel },
      { name: "FastAPI", Icon: SiFastapi },
      { name: "SQLAlchemy", Icon: SiSqlalchemy },
    ],
  },
  {
    number: "04",
    label: "Data",
    items: [
      { name: "MySQL", Icon: SiMysql },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
    ],
  },
  {
    number: "05",
    label: "Tools",
    items: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Jira", Icon: SiJira },
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="section section-ink">
      <p className="ghost-title" aria-hidden="true">About</p>
      <p className="section-kicker">02 / A little about me</p>

      <div className="about-grid">
        <h2>
          <span className="slash">/</span> Where machine learning
          <br />
          meets <em>real products.</em>
        </h2>
        <div className="about-copy">
          <p className="about-lead">
            I&rsquo;m Shehan, a Computer Science undergraduate at Eastern
            University, Sri Lanka, building at the intersection of AI/ML and
            full-stack engineering.
          </p>
          <p>
            I&rsquo;d rather ship a working model than talk about one. Right
            now I&rsquo;m aiming at AI/ML engineering roles and deliberately
            picking up cloud engineering along the way — because a good
            model only matters once it&rsquo;s running somewhere real.
          </p>
        </div>
      </div>

      <div className="principles">
        {skillGroups.map((group, index) => (
          <Reveal key={group.label} delay={index * 80}>
            <span>{group.number}</span>
            <h3>{group.label}</h3>
            <div className="skill-icons">
              {group.items.map((item) => (
                <span key={item.name} title={item.name}>
                  <item.Icon />
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
