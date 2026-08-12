import { useEffect, useState } from "react";
import heroImage from "../assets/hero.png";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p
            className={`text-sm text-muted transition-all duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            Computer Science Undergraduate — Eastern University, Sri Lanka
          </p>

          <h1
            className={`mt-6 font-serif text-[clamp(2.8rem,9vw,7.5rem)] font-normal leading-[0.95] tracking-tight text-ink transition-all delay-150 duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Shehan
            <br />
            Jayasinghe
          </h1>

          <p
            className={`mt-8 flex items-center gap-1 text-base text-muted transition-all delay-300 duration-700 ease-out sm:text-lg ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            Aspiring AI/ML Engineer, exploring Cloud Engineering
            <span className="ml-1 inline-block h-[1.1em] w-[2px] animate-pulse bg-accent" />
          </p>
        </div>

        <div
          className={`lg:col-span-5 transition-all delay-500 duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="group relative ml-auto mt-10 w-56 sm:w-72 lg:mt-16 lg:w-full lg:max-w-[22rem]">
            <div className="relative aspect-[4/5] overflow-hidden border border-line bg-surface">
              <img
                src={heroImage}
                alt="Shehan Jayasinghe"
                className="duotone-photo h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div aria-hidden="true" className="duotone-tint pointer-events-none absolute inset-0" />
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-3 -left-3 h-6 w-6 border-t border-l border-accent/50 transition-all duration-300 group-hover:-top-4 group-hover:-left-4"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 h-6 w-6 border-r border-b border-accent/50 transition-all duration-300 group-hover:-bottom-4 group-hover:-right-4"
            />
          </div>
        </div>
      </div>

      <a
        href="#work"
        aria-label="Scroll to work section"
        className="group absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-ink"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <span className="h-10 w-px bg-line-strong transition-colors duration-300 group-hover:bg-accent" />
      </a>
    </section>
  );
}
