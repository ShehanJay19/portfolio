import { FiArrowUpRight } from "react-icons/fi";
import { BrandMark } from "./Hero";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <BrandMark />
      <p>© {year} Shehan Jayasinghe</p>
      <p>Built with care. A little curiosity, too.</p>
      <a href="#top">
        Back to top <FiArrowUpRight size={14} />
      </a>
    </footer>
  );
}
