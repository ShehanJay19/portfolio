import Reveal from "./Reveal";

const skillGroups = [
  { label: "Languages", items: ["Python", "Java", "C++", "TypeScript"] },
  {
    label: "AI / ML",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Computer Vision", "LLMs / NLP"],
  },
  { label: "Web & backend", items: ["React", "Next.js", "Laravel", "FastAPI", "SQLAlchemy"] },
  { label: "Data", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { label: "Tools", items: ["Git", "GitHub", "Jira"] },
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
              <div
                key={group.label}
                className="flex flex-col gap-2 border-b border-line py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="text-xs uppercase tracking-[0.14em] text-muted">
                  {group.label}
                </span>
                <span className="text-sm text-ink sm:text-right">
                  {group.items.join(" · ")}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
