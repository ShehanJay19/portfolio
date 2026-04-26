import NetworkBackground from "./NetworkBackground";

const iconClass = "h-4 w-4 text-rose-300";

const CpuIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <path d="M12 1v3M12 20v3M1 12h3M20 12h3M4.9 4.9l2.2 2.2M16.9 16.9l2.2 2.2M19.1 4.9l-2.2 2.2M7.1 16.9l-2.2 2.2" />
  </svg>
);

const CodeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 4l-4 16" />
  </svg>
);

const ServerIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="3" y="4" width="18" height="6" rx="2" />
    <rect x="3" y="14" width="18" height="6" rx="2" />
    <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
  </svg>
);

const ToolIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="m14 7 3-3 3 3-3 3-3-3Z" />
    <path d="M2 22 13.5 10.5M10 22h12" />
  </svg>
);

export default function Skills() {
  const skills = [
    {
      title: "AI / ML",
      summary: "Modeling, data workflows, and experimentation.",
      items: [
        { name: "Python", Icon: CpuIcon },
        { name: "TensorFlow", Icon: CpuIcon },
        { name: "Scikit-learn", Icon: CpuIcon },
      ],
    },
    {
      title: "Frontend",
      summary: "Interactive UI with modern component architecture.",
      items: [
        { name: "React", Icon: CodeIcon },
        { name: "HTML", Icon: CodeIcon },
        { name: "CSS", Icon: CodeIcon },
        { name: "JavaScript", Icon: CodeIcon },
      ],
    },
    {
      title: "Backend",
      summary: "API design, server logic, and core programming languages.",
      items: [
        { name: "Laravel", Icon: ServerIcon },
        { name: "PHP", Icon: ServerIcon },
        { name: "Java", Icon: ServerIcon },
        { name: "C++", Icon: ServerIcon },
        { name: "C", Icon: ServerIcon },
        { name: "REST APIs", Icon: ServerIcon },
      ],
    },
    {
      title: "Tools",
      summary: "Versioning, databases, and productive workflows.",
      items: [
        { name: "Git", Icon: ToolIcon },
        { name: "MySQL", Icon: ToolIcon },
        { name: "VS Code", Icon: ToolIcon },
        { name: "Jira", Icon: ToolIcon },
      ],
    },
  ];

  const categoriesCount = skills.length;
  const totalSkills = skills.reduce((sum, category) => sum + category.items.length, 0);

  return (
    <section id="skills" className="relative py-24 text-white px-6 overflow-hidden">
      <NetworkBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mx-auto w-fit rounded-full border border-rose-200/30 bg-rose-300/10 px-4 py-1 text-xs uppercase tracking-[0.22em] text-rose-100/90">
          Tech Stack
        </div>

        <h2 className="mt-5 text-3xl md:text-5xl font-bold text-center leading-tight">
          Skills That Power My
          <span className="block bg-gradient-to-r from-rose-200 via-fuchsia-200 to-violet-200 bg-clip-text text-transparent">
            AI + Web Projects
          </span>
        </h2>

        <p className="text-center text-gray-200/90 max-w-2xl mx-auto mt-4 mb-12 text-base md:text-lg">
          A practical toolkit focused on intelligent product development, from model
          pipelines to polished frontends and production-ready backend systems.
        </p>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 md:p-7 shadow-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-rose-100/80">Quick Stats</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-end justify-between rounded-2xl border border-white/15 bg-black/10 px-4 py-3">
                <span className="text-sm text-rose-100/90">Categories</span>
                <span className="text-2xl font-semibold text-white">{categoriesCount}</span>
              </div>
              <div className="flex items-end justify-between rounded-2xl border border-white/15 bg-black/10 px-4 py-3">
                <span className="text-sm text-rose-100/90">Core Skills</span>
                <span className="text-2xl font-semibold text-white">{totalSkills}</span>
              </div>
              <div className="rounded-2xl border border-rose-200/30 bg-gradient-to-br from-rose-300/20 to-fuchsia-300/10 px-4 py-4">
                <p className="text-sm text-rose-50">
                  Focused on building end-to-end applications with intelligent features,
                  clean architecture, and strong delivery speed.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <article
                key={skill.title}
                className="group rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-white/15 hover:border-rose-200/45"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                  <span className="rounded-full border border-rose-200/35 bg-rose-200/10 px-3 py-1 text-xs text-rose-100">
                    {skill.items.length} tools
                  </span>
                </div>

                <p className="mt-2 text-sm text-rose-100/85">{skill.summary}</p>

                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {skill.items.map((item) => (
                    <li
                      key={item.name}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3.5 py-1.5 text-sm text-white/95"
                    >
                      <span className="inline-flex items-center justify-center rounded-full bg-rose-200/20 p-1">
                        <item.Icon className={iconClass} />
                      </span>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}