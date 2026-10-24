export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Denis",
      company: "SaintDeni Alimentos",
      website: "https://saintdenialimentos.com.br/",
      image: "",
      testimonial:
        "A mlluizDevTech transformou completamente nossa presença online...",
      rating: 5,
    },
    {
      name: "Ricardo Mendes",
      company: "Quanto Perdi",
      website: "https://quantoperdi.netlify.app/",
      image: "",
      testimonial: "Impressionado com a velocidade e qualidade do trabalho...",
      rating: 5,
    },
    {
      name: "Fátima Silva",
      company: "Lumiere",
      website: "https://lumiere-intima.netlify.app/",
      image: "",
      testimonial:
        "Site responsivo e bonito que reflete perfeitamente nossa marca...",
      rating: 4,
    },
    {
      name: "Carlos Eduardo",
      company: "Arquitetura Moderna",
      image: "",
      testimonial: "O portfólio online criado trouxe vários projetos novos...",
      rating: 5,
    },
    {
      name: "Juliana Martins",
      company: "Academia Fitness Plus",
      image: "",
      testimonial: "Nossa agenda online simplificou todo o processo...",
      rating: 4,
    },
  ];

  return (
    <section
      id="testimonials"
      className="testimonials-section"
      aria-labelledby="testimonials-title"
    >
      <div className="site-container">
        <div className="section-heading">
          <span className="eyebrow">Experiências de clientes</span>
          <h2 id="testimonials-title">Cada projeto, uma parceria nova.</h2>
        </div>
        <div className="quotes-grid">
          {testimonials.map((item) => (
            <figure key={item.name}>
              <blockquote>“{item.testimonial}”</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>
                  {item.website ? (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
                    >
                      {item.company}
                      <span className="sr-only"> (abre em nova aba)</span>
                    </a>
                  ) : (
                    item.company
                  )}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
