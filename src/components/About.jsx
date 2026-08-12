import heroImage from "../assets/hero.png";
import Reveal from "./Reveal";

const highlights = [
  "AI/ML development with Python and TensorFlow",
  "Modern frontend experiences with React and Tailwind",
  "Backend systems and APIs with Laravel and PHP",
  "Structured collaboration using Jira and Git",
];

const stats = [
  { value: "AI + Web", label: "Primary focus" },
  { value: "13+", label: "Core skills" },
  { value: "4", label: "Skill areas" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="flex items-center gap-3 text-sm text-muted">
              <span className="h-px w-8 bg-accent" />
              About
            </p>

            <h2 className="mt-6 max-w-xl font-serif text-3xl font-normal leading-tight text-ink md:text-4xl">
              Building products that blend intelligence and design.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted">
              I&rsquo;m a Computer Science student focused on creating practical
              software that solves real problems. My work combines machine
              learning, full stack development, and thoughtful user experience
              to build polished digital tools &mdash; from concept through delivery.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-y border-line py-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-serif text-2xl text-ink">{stat.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-5">
          <div className="mx-auto w-full max-w-sm">
            <div className="aspect-[4/5] overflow-hidden border border-line">
              <img
                src={heroImage}
                alt="Portrait of Shehan Jayasinghe"
                className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted">
              AI/ML Engineer &mdash; Full Stack Developer
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
