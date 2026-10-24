import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="site-container header-inner">
        <a
          href="/#home"
          className="wordmark"
          aria-label="MLLuiz DevTech — início"
        >
          ml<span className="brand-dot">.</span>
          <span className="brand-name">MLLuiz DevTech</span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Navegação principal"
          className={`navigation ${open ? "is-open" : ""}`}
          onClick={() => setOpen(false)}
        >
          <a href="/#services">Serviços</a>
          <a href="/#about">Como trabalhamos</a>
          <a href="/#plans">Planos</a>
          <a href="/#contact" className="nav-contact">
            Vamos conversar <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
