const steps = [
  [
    "Entender",
    "Conversamos sobre seu negócio, seus clientes e o que o site precisa resolver.",
  ],
  [
    "Construir",
    "Definimos a direção visual e desenvolvemos o site com espaço para seus feedbacks.",
  ],
  [
    "Publicar & evoluir",
    "Colocamos o projeto no ar e combinamos os próximos cuidados com seu site.",
  ],
];
export default function WelcomeSection() {
  return (
    <section
      className="work-section"
      id="about"
      aria-labelledby="process-title"
    >
      <div className="site-container work-layout">
        <div>
          <span className="eyebrow">02 — Como trabalhamos</span>
          <h2 id="process-title">
            Tecnologia com cuidado.
            <br />
            Do início ao próximo passo.
          </h2>
          <p>
            Na MLLuiz DevTech, cada projeto começa com uma conversa.
            Transformamos suas necessidades em um site claro, funcional e
            alinhado à sua marca.
          </p>
          <a className="text-link" href="#contact">
            Conte sua ideia <span aria-hidden="true">↗</span>
          </a>
        </div>
        <ol className="process-list">
          {steps.map(([title, text], i) => (
            <li key={title}>
              <span className="flow-index">0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
