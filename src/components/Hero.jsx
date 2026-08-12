import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-[120px]"
      />

      <p
        className={`relative text-sm text-muted transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        Computer Science Undergraduate — Eastern University, Sri Lanka
      </p>

      <h1
        className={`relative mt-6 font-serif text-[clamp(2.8rem,10vw,8rem)] font-normal leading-[0.95] tracking-tight text-ink transition-all delay-150 duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        Shehan
        <br />
        Jayasinghe
      </h1>

      <p
        className={`relative mt-8 flex items-center gap-1 text-base text-muted transition-all delay-300 duration-700 ease-out sm:text-lg ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        Aspiring AI/ML Engineer, exploring Cloud Engineering
        <span className="ml-1 inline-block h-[1.1em] w-[2px] animate-pulse bg-accent" />
      </p>

      <a
        href="#work"
        aria-label="Scroll to work section"
        className="group absolute bottom-10 flex flex-col items-center gap-2 text-muted transition-colors hover:text-ink"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <span className="h-10 w-px bg-line-strong transition-colors duration-300 group-hover:bg-accent" />
      </a>
    </section>
  );
}
