import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-3 sm:px-5 pt-3">
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/15 bg-[#190e2a]/70 backdrop-blur-xl shadow-lg shadow-black/30">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          <a href="#home" className="text-xl font-extrabold tracking-tight text-white">
            SHEHAN.TECH
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex rounded-lg px-3.5 py-2 text-sm text-gray-100/90 transition hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span className="text-lg leading-none">{isOpen ? "x" : "="}</span>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-white/15 px-4 py-3">
            <ul className="grid gap-1.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-gray-100/95 transition hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}