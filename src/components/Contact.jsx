import Reveal from "./Reveal";

const links = [
  { label: "Email", value: "shehanjay1921@gmail.com", href: "mailto:shehanjay1921@gmail.com" },
  { label: "GitHub", value: "github.com/ShehanJay19", href: "https://github.com/ShehanJay19" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/Shehan Jayasinghe",
    href: "https://linkedin.com/in/Shehan Jayasinghe",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line px-6 py-28 md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-12rem] left-[-10rem] h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="flex items-center gap-3 text-sm text-muted">
            <span className="h-px w-8 bg-accent" />
            Contact
          </p>

          <h2 className="mt-6 max-w-xl font-serif text-3xl font-normal leading-tight text-ink md:text-5xl">
            Let&rsquo;s build something useful and beautiful.
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-muted">
            I&rsquo;m open to internships, collaborations, and opportunities where
            I can contribute to AI, web development, and product-focused
            engineering.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-14 border-t border-line">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center justify-between border-b border-line py-6 transition-colors duration-300"
              >
                <span className="flex items-baseline gap-6">
                  <span className="text-xs uppercase tracking-[0.14em] text-muted">
                    {link.label}
                  </span>
                  <span className="font-serif text-lg text-ink transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                    {link.value}
                  </span>
                </span>
                <span className="text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent">
                  &nearr;
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
