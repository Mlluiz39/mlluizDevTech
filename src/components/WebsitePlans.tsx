import { ArrowUpRight, Check } from "lucide-react";
const plans = [
  {
    title: "BÁSICO",
    price: "R$ 500",
    description: "Ideal para quem precisa de uma landing page simples",
    features: [
      "Landing page responsiva",
      "Design moderno",
      "Formulário de contato",
      "Entrega rápida",
      "Até 4 atualizações inclusas",
    ],
    button: "Solicitar Orçamento",
    highlighted: false,
  },
  {
    title: "PROFISSIONAL",
    price: "R$ 1.000",
    description: "Para empresas que precisam de até 4 páginas",
    features: [
      "Até 4 páginas",
      "Design personalizado",
      "Formulários e seções extras",
      "SEO básico incluso",
      "Até 8 atualizações inclusas",
    ],
    button: "Solicitar Orçamento",
    highlighted: true,
    badge: "Mais Popular",
  },
  {
    title: "PREMIUM",
    price: "R$ 2.000",
    description: "Para projetos com mais páginas e autenticação",
    features: [
      "Mais de 4 páginas",
      "Sistema de autenticação (login)",
      "Integração com banco de dados",
      "Painel administrativo (básico)",
      "Até 12 atualizações inclusas",
    ],
    button: "Solicitar Orçamento",
    highlighted: false,
  },
];

export default function WebsitePlans() {
  return (
    <section
      id="plans"
      className="section site-container"
      aria-labelledby="plans-title"
    >
      <div className="section-heading">
        <span className="eyebrow">03 — Planos de sites</span>
        <div>
          <h2 id="plans-title">
            Um ponto de partida
            <br />
            para cada momento.
          </h2>
          <p>
            Da primeira landing page a um projeto mais completo. Compare as
            opções e conte o que você precisa.
          </p>
        </div>
      </div>
      <div className="plans-grid">
        {plans.map((plan, i) => (
          <article
            key={plan.title}
            className={`plan-card ${plan.highlighted ? "featured" : ""}`}
          >
            <div className="plan-topline">
              <span className="eyebrow">
                0{i + 1} / {plan.title}
              </span>
              {plan.highlighted && (
                <span className="plan-badge">Mais popular</span>
              )}
            </div>
            <h3 className="plan-price">{plan.price}</h3>
            <span className="plan-payment">pagamento único</span>
            <p className="plan-description">{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check size={16} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`button ${plan.highlighted ? "button-primary" : "button-outline"}`}
              aria-label={`Solicitar orçamento do plano ${plan.title}`}
            >
              Solicitar orçamento <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
