import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";

const email = "shehanjay1921@gmail.com";

const socials = [
  { label: "GitHub", href: "https://github.com/ShehanJay19" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shehan-jayasinghe-6b4a122ba/" },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-topline">
        <span>Available for opportunities</span>
        <span>Sri Lanka</span>
      </div>

      <p className="section-kicker">04 / Have something in mind?</p>

      <Reveal>
        <h2>
          Good things start
          <br />
          with a <em>conversation.</em>
        </h2>
      </Reveal>

      <div className="contact-bottom">
        <p>
          An interesting problem, a new idea, or a simple hello.
          <br />
          I&rsquo;d love to hear what you&rsquo;re thinking.
        </p>

        <div>
          <a className="contact-link" href={`mailto:${email}`}>
            {email} <FiArrowUpRight size={22} />
          </a>
          <div className="contact-socials" style={{ marginTop: "18px" }}>
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
