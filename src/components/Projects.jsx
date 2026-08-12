import Reveal from "./Reveal";

const projects = [
  {
    title: "AI Study Assistant",
    category: "Machine Learning",
    description:
      "An intelligent assistant concept for summarizing study material and supporting revision workflows.",
    tags: ["Python", "TensorFlow", "NLP"],
  },
  {
    title: "Smart Portfolio Dashboard",
    category: "Frontend",
    description:
      "A responsive analytics-style dashboard idea for tracking personal progress and presenting achievements.",
    tags: ["React", "Tailwind", "UI Design"],
  },
  {
    title: "REST API Service",
    category: "Backend",
    description:
      "A scalable API foundation for powering modern web applications with clean endpoints and structure.",
    tags: ["Laravel", "PHP", "REST APIs"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="flex items-center gap-3 text-sm text-muted">
            <span className="h-px w-8 bg-accent" />
            Selected work
          </p>

          <h2 className="mt-6 max-w-xl font-serif text-3xl font-normal leading-tight text-ink md:text-4xl">
            Projects with a practical, polished edge.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-line">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 90}
              className="group grid gap-3 border-b border-line py-10 transition-colors duration-300 md:grid-cols-12 md:items-center md:gap-6"
            >
              <span className="font-serif text-lg text-muted md:col-span-1">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="font-serif text-2xl text-ink transition-colors duration-300 group-hover:text-accent md:col-span-4">
                {project.title}
              </h3>

              <p className="text-sm leading-6 text-muted md:col-span-5">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:col-span-2 md:justify-end">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs uppercase tracking-[0.08em] text-muted">
                    {tag}
                  </span>
                ))}
                <span className="hidden text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:inline">
                  &rarr;
                </span>
              </div>

              <p className="text-xs uppercase tracking-[0.14em] text-muted md:hidden">
                {project.category}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
