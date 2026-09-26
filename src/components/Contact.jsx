import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Reveal from "./Reveal";

const email = "shehanjay1921@gmail.com";

const socials = [
  { label: "GitHub", href: "https://github.com/ShehanJay19", Icon: FiGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shehan-jayasinghe-6b4a122ba/",
    Icon: FiLinkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <p className="ghost-title" aria-hidden="true">Talk</p>
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
            <FiMail size={20} />
            {email}
            <span className="contact-link-arrow">
              <FiArrowUpRight size={16} />
            </span>
          </a>
          <div className="contact-socials">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                <social.Icon size={15} />
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
