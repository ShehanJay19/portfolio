import { useEffect, useState } from "react";
import heroImage from "../assets/hero1.png";

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
        className="pointer-events-none absolute -left-24 top-1/3 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className={`absolute inset-y-0 right-0 w-full sm:w-[85%] lg:w-1/2 transition-opacity duration-1000 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={heroImage}
          alt=""
          className="duotone-photo hero-photo-edge-fade h-full w-full object-cover object-[center_12%]"
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p
            className={`flex items-center gap-3 text-sm text-muted transition-all duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <span className="h-px w-8 bg-accent" />
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

          <a
            href="mailto:shehanjay1921@gmail.com"
            className={`group mt-10 inline-flex w-fit items-center gap-3 border border-accent bg-accent px-6 py-3 text-sm uppercase tracking-[0.2em] text-bg transition-all delay-450 duration-700 ease-out hover:bg-transparent hover:text-accent ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            Let’s build
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      <a
        href="#work"
        aria-label="Scroll to work section"
        className="group absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-ink"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <span className="h-10 w-px bg-line-strong transition-colors duration-300 group-hover:bg-accent" />
      </a>
    </section>
  );
}
