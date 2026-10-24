import { ArrowUpRight } from "lucide-react";
export default function ContactForm() {
  return (
    <section
      id="contact"
      className="section site-container"
      aria-labelledby="contact-title"
    >
      <span id="contato" className="anchor-alias" />
      <div className="contact-form-layout">
        <div>
          <span className="eyebrow">04 — Comece uma conversa</span>
          <h2 id="contact-title">
            O que você
            <br />
            quer construir?
          </h2>
          <p>
            Conte um pouco sobre sua ideia. Vamos entender o cenário e conversar
            sobre o melhor caminho para o seu site.
          </p>
          <a className="text-link" href="tel:+5511977869073">
            (11) 97786-9073 <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <p className="contact-hours">Segunda a sexta, das 9h às 18h.</p>
        </div>
        <form
          className="project-form"
          action="https://formsubmit.co/mlluizdevtech@gmail.com"
          method="POST"
        >
          <div className="form-pair">
            <div>
              <label htmlFor="name">Seu nome *</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                placeholder="Como podemos chamar você?"
              />
            </div>
            <div>
              <label htmlFor="email">Seu e-mail *</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="voce@empresa.com.br"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject">Como podemos ajudar? *</label>
            <select id="subject" name="subject" required defaultValue="">
              <option value="" disabled>
                Selecione um serviço
              </option>
              <option>Criação de Sites</option>
              <option>Automações</option>
              <option>Automações com IA</option>
              <option>Manutenção</option>
              <option>Hospedagem</option>
            </select>
          </div>
          <div>
            <label htmlFor="message">Sobre seu projeto *</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="O que seu negócio precisa hoje?"
            />
          </div>
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value={`${window.location.origin}/thanks`}
          />
          <p className="form-note">
            * Campos obrigatórios. Usaremos seus dados para responder ao seu
            contato.
          </p>
          <button className="button button-primary" type="submit">
            Enviar mensagem <ArrowUpRight size={18} aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}
