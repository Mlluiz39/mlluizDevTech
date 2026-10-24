import { ArrowUpRight } from "lucide-react";
const services = [
  [
    "Criação de sites",
    "Sites institucionais e landing pages que apresentam sua marca com clareza e ajudam seu cliente a dar o próximo passo.",
    "Design personalizado · Layout responsivo · Formulários",
  ],
  [
    "Automações",
    "Conectamos suas ferramentas e automatizamos tarefas repetitivas para simplificar a rotina e dar mais tempo ao que importa no seu negócio.",
    "Integrações · Fluxos de trabalho · WhatsApp e CRM",
  ],
  [
    "Automações com IA",
    "Aplicamos inteligência artificial para apoiar o atendimento, organizar informações e agilizar processos, com regras e supervisão adequadas à sua operação.",
    "Agentes de IA · Triagem de mensagens · Consulta a documentos",
  ],
  [
    "Hospedagem",
    "Uma estrutura para manter seu site disponível, com atenção ao desempenho e à segurança da sua presença online.",
    "Publicação · Configuração · Acompanhamento",
  ],
  [
    "Manutenção & evolução",
    "Seu negócio muda. Seu site acompanha. Atualizações, ajustes e suporte para manter tudo funcionando no dia a dia.",
    "Melhorias contínuas · Atualizações · Suporte técnico",
  ],
];
export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section site-container"
      aria-labelledby="services-title"
    >
      <div className="section-heading">
        <span className="eyebrow">01 — Nossos serviços</span>
        <div>
          <h2 id="services-title">
            Do site à operação conectada.
            <br />E aos próximos passos.
          </h2>
          <p>
            Sites e automações começam com o que o seu negócio precisa.
            Escolhemos juntos a solução que faz sentido para sua presença digital
            e sua rotina.
          </p>
        </div>
      </div>
      <div className="service-list">
        {services.map(([title, description, detail], i) => (
          <article className="service-row" key={title}>
            <span className="row-number">0{i + 1}</span>
            <h3>{title}</h3>
            <div>
              <p>{description}</p>
              <span className="service-detail">{detail}</span>
            </div>
            <a
              className="service-arrow"
              href="#contact"
              aria-label={`Conversar sobre ${title}`}
            >
              <ArrowUpRight size={22} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
