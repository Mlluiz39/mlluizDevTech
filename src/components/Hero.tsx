import { ArrowDown, ArrowUpRight } from "lucide-react";
import PerspectiveTunnelHero from "./ui/perspective-tunnel-hero";
export default function Hero() {
  return (
    <section
      id="home"
      className="hero site-container"
      aria-labelledby="hero-title"
    >
      <div className="hero-topline">
        <span className="eyebrow">Desenvolvimento web · MLLuiz DevTech</span>
        <span className="location">São Paulo, Brasil · Atendimento online</span>
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <h1 id="hero-title">
            Seu próximo passo
            <br />
            começa com uma
            <br />
            <span>presença digital.</span>
          </h1>
          <p>
            Sites feitos para o seu negócio. Do primeiro esboço à publicação,
            cuidamos do design, do desenvolvimento e da evolução.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Vamos criar seu site <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="text-link" href="#services">
              Conhecer serviços <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <PerspectiveTunnelHero />
      </div>
      <div className="hero-bottom">
        <span>
          Design sob medida <i>/</i> Desenvolvimento <i>/</i> Suporte
        </span>
        <a href="#services" aria-label="Explore nossos serviços">
          Explore os serviços <ArrowDown size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
