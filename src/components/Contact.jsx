import Reveal from "./Reveal";

const email = "shehanjay1921@gmail.com";

const socials = [
  { label: "GitHub", href: "https://github.com/ShehanJay19" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shehan-jayasinghe-6b4a122ba/" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 py-28 text-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-14rem] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <Reveal className="relative flex flex-col items-center">
        <p className="flex items-center gap-3 text-sm text-muted">
          <span className="h-px w-8 bg-accent" />
          Contact
          <span className="h-px w-8 bg-accent" />
        </p>

        <h2 className="mt-8 max-w-2xl font-serif text-4xl font-normal leading-tight text-ink md:text-6xl">
          Let&rsquo;s build something worth shipping.
        </h2>

        <a
          href={`mailto:${email}`}
          className="group mt-10 font-serif text-2xl text-ink transition-colors duration-300 hover:text-accent sm:text-3xl"
        >
          {email}
          <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </a>

        <div className="mt-10 flex items-center gap-8">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-sm text-muted transition-colors duration-300 hover:text-accent"
            >
              {social.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
