import { ArrowUpRight } from "lucide-react";
export default function CtaSection() {
  return (
    <section className="contact-section" aria-labelledby="cta-title">
      <div className="site-container contact-layout">
        <div>
          <span className="eyebrow">Vamos tirar sua ideia do papel?</span>
          <h2 id="cta-title">
            Seu negócio tem uma história.
            <br />
            Vamos colocá-la no ar.
          </h2>
          <p>
            Fale sobre seu projeto e descubra como podemos ajudar a construir
            seu próximo passo.
          </p>
        </div>
        <div className="contact-action">
          <a
            className="button button-light"
            href="https://wa.me/5511977869073"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conversar no WhatsApp <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
          <a className="email-address" href="mailto:mlluizdevtech@gmail.com">
            mlluizdevtech@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
