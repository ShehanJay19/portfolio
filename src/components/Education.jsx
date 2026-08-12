import Reveal from "./Reveal";

const entries = [
  {
    year: "2023 — 2027",
    degree: "BSc (Hons) in Computer Science",
    place: "Eastern University, Sri Lanka",
  },
  {
    year: "2020",
    degree: "GCE Advanced Level",
    place: "St. Thomas' College, Matale, Sri Lanka",
  },
  {
    year: "2017",
    degree: "GCE Ordinary Level",
    place: "St. Thomas' College, Matale, Sri Lanka",
  },
];

export default function Education() {
  return (
    <section id="education" className="border-t border-line px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="flex items-center gap-3 text-sm text-muted">
            <span className="h-px w-8 bg-accent" />
            Education
          </p>

          <h2 className="mt-6 max-w-xl font-serif text-3xl font-normal leading-tight text-ink md:text-4xl">
            Grounded in fundamentals.
          </h2>
        </Reveal>

        <div className="mt-16 max-w-2xl border-t border-line">
          {entries.map((entry, index) => (
            <Reveal
              key={entry.degree}
              delay={index * 90}
              className="flex flex-col gap-2 border-b border-line py-6 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="flex shrink-0 items-center gap-3 text-sm text-muted sm:w-36">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {entry.year}
              </span>
              <div>
                <h3 className="font-serif text-xl text-ink">{entry.degree}</h3>
                <p className="mt-1 text-sm text-muted">{entry.place}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="max-w-lg text-sm leading-6 text-muted">
            Currently focused on AI/ML engineering fundamentals, with cloud
            engineering next on the list.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
