import { useEffect, useState } from "react";
import NetworkBackground from "./NetworkBackground";

const HERO_THEME = {
  background: "#190e2a",
  network: "#7a1334",
  overlayClass: "bg-gradient-to-b from-black/10 via-black/15 to-black/25",
};

export default function Hero() {
  const fullIntro = "Hi, I\'m Shehan Jayasinghe";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 45 : 90;
    const pauseBeforeDelete = 900;

    const timer = window.setTimeout(() => {
      setDisplayText((currentText) => {
        if (!isDeleting) {
          const nextText = fullIntro.slice(0, currentText.length + 1);

          if (nextText === fullIntro) {
            window.setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
          }

          return nextText;
        }

        const nextText = fullIntro.slice(0, currentText.length - 1);

        if (nextText === "") {
          setIsDeleting(false);
        }

        return nextText;
      });
    }, typingSpeed);

    return () => window.clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white px-4 sm:px-6 overflow-hidden"
    >
      <NetworkBackground
        background={HERO_THEME.background}
        network={HERO_THEME.network}
        overlayClass={HERO_THEME.overlayClass}
      />
      <div className="pointer-events-none absolute -top-28 right-[-5rem] h-80 w-80 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-[-4rem] h-72 w-72 rounded-full bg-rose-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl pt-24 md:pt-14">
        <div className="max-w-4xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/30 bg-rose-300/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-rose-100/90">
            Open For Opportunities
          </div>

          <p className="mt-6 text-sm uppercase tracking-[0.28em] text-rose-100/65">
            Portfolio / Intro
          </p>

          <h1 className="mt-4 text-[clamp(1.9rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight">
            <span className="inline-flex items-baseline whitespace-nowrap bg-gradient-to-r from-rose-100 via-fuchsia-100 to-violet-100 bg-clip-text text-transparent">
              {displayText}
              <span className="ml-1 inline-block h-[0.95em] w-[3px] translate-y-1 bg-rose-100/90 align-middle animate-pulse" />
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-8 text-gray-200/90">
            I build modern web experiences and intelligent tools that are clean,
            useful, and designed with a polished portfolio feel.
          </p>

          <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-3 text-xs sm:text-sm text-rose-50/85">
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-sm">AI/ML Engineer</span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-sm">Full Stack Developer</span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-sm">Portfolio / Case Studies</span>
          </div>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-950/30 transition hover:-translate-y-0.5 hover:bg-rose-400"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              Let&apos;s Collaborate
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-left">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-rose-100/70">Focus</p>
              <p className="mt-1 text-sm text-white/95">AI-driven products</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-rose-100/70">Stack</p>
              <p className="mt-1 text-sm text-white/95">React, Laravel, Python</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-rose-100/70">Based In</p>
              <p className="mt-1 text-sm text-white/95">Sri Lanka, remote-ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}