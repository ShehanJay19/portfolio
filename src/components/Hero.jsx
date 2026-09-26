import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import heroPortrait from "../assets/hero1.png";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function BrandMark() {
  return (
    <a href="#top" className="brand-mark" aria-label="Shehan Jayasinghe, back to top">
      SJ<span>.</span>
    </a>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero-shell">
      <div className="grain" aria-hidden="true" />

      <header className="site-header">
        <BrandMark />
        <nav aria-label="Primary navigation" className="main-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="availability">
          <span />
          Available for opportunities
        </div>
      </header>

      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Computer science undergrad · Eastern University, Sri Lanka</p>
          <h1>
            <span>Shehan</span>
            <em>Jayasinghe</em>
          </h1>
          <div className="hero-bottom">
            <p>
              Aspiring AI/ML engineer, exploring cloud engineering along the
              way — I&rsquo;d rather ship a working model than talk about one.
            </p>
            <a href="mailto:shehanjay1921@gmail.com" className="primary-cta">
              Let&rsquo;s build <FiArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="portrait-wrap" aria-hidden="true">
          <img src={heroPortrait} alt="" className="portrait-blur" />
          <img src={heroPortrait} alt="" />
        </div>
      </div>

      <p className="side-note side-note-top">Portfolio · 2026</p>
      <p className="side-note side-note-bottom">Portrait / 2026</p>
      <a className="scroll-cue" href="#work">
        <span>Selected work</span>
        <FiArrowDown size={15} />
      </a>
    </section>
  );
}
