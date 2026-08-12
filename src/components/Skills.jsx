import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "AI / ML",
    summary: "Modeling, data workflows, and experimentation.",
    items: ["Python", "TensorFlow", "Scikit-learn"],
  },
  {
    title: "Frontend",
    summary: "Interactive UI with modern component architecture.",
    items: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    summary: "API design, server logic, and core programming languages.",
    items: ["Laravel", "PHP", "Java", "C++", "C", "REST APIs"],
  },
  {
    title: "Tools",
    summary: "Versioning, databases, and productive workflows.",
    items: ["Git", "MySQL", "VS Code", "Jira"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="flex items-center gap-3 text-sm text-muted">
            <span className="h-px w-8 bg-accent" />
            Skills
          </p>

          <h2 className="mt-6 max-w-xl font-serif text-3xl font-normal leading-tight text-ink md:text-4xl">
            A practical toolkit for intelligent products.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-line">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 90}
              className="group grid gap-4 border-b border-line py-8 md:grid-cols-[minmax(0,16rem)_1fr] md:items-baseline md:gap-8"
            >
              <div>
                <div className="flex items-baseline gap-4">
                  <span className="text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif text-xl text-ink">{group.title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted">{group.summary}</p>
              </div>

              <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-ink transition-colors duration-200 group-hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
