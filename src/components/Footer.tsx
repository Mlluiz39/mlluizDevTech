import { ArrowUpRight } from "lucide-react";
export default function Footer() {
  return (
    <footer className="footer site-container">
      <a className="footer-brand" href="/#home">
        MLLuiz DevTech<span>.</span>
      </a>
      <span>
        © {new Date().getFullYear()} MLLuiz DevTech. Todos os direitos
        reservados.
      </span>
      <a href="mailto:mlluizdevtech@gmail.com">
        Fale com a gente <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </footer>
  );
}
