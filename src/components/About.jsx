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
    label: "Languages",
    items: [
      { name: "Python", Icon: SiPython },
      { name: "Java", Icon: DiJava },
      { name: "C++", Icon: SiCplusplus },
      { name: "TypeScript", Icon: SiTypescript },
    ],
  },
  {
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
    label: "Data",
    items: [
      { name: "MySQL", Icon: SiMysql },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
    ],
  },
  {
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
    <section id="about" className="border-t border-line px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="flex items-center gap-3 text-sm text-muted">
              <span className="h-px w-8 bg-accent" />
              About
            </p>

            <h2 className="mt-6 max-w-xl font-serif text-3xl font-normal leading-tight text-ink md:text-4xl">
              Where machine learning meets real products.
            </h2>

            <p className="mt-8 max-w-lg text-base leading-7 text-muted">
              I’m a Computer Science undergraduate at Eastern University,
              Sri Lanka, building at the intersection of AI/ML and full stack
              engineering. I’d rather ship a working model than talk
              about one.
            </p>

            <p className="mt-5 max-w-lg text-base leading-7 text-muted">
              Right now I’m aiming at AI/ML engineering roles and
              deliberately picking up cloud engineering along the way —
              because a good model only matters once it’s running
              somewhere real.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-5">
          <p className="text-sm text-muted">Skills & tools</p>

          <div className="mt-6 border-t border-line">
            {skillGroups.map((group) => (
              <div key={group.label} className="border-b border-line py-5">
                <span className="text-xs uppercase tracking-[0.14em] text-muted">
                  {group.label}
                </span>

                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                  {group.items.map((item) => (
                    <li key={item.name} className="group flex items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-line text-muted transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
                        <item.Icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm text-ink">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
