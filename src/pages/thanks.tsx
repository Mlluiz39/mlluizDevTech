import { CheckCircle, ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Thanks() {
  return (
    <>
      <Header />
      <main className="site-container status-page">
        <CheckCircle size={48} strokeWidth={1.3} aria-hidden="true" />
        <span className="eyebrow">Mensagem enviada</span>
        <h1>Obrigado pelo contato.</h1>
        <p>
          Recebemos sua mensagem. Em breve, vamos conversar sobre os próximos
          passos do seu projeto.
        </p>
        <div className="hero-actions">
          <a
            href="https://wa.me/5511977869073"
            className="button button-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
          <Link to="/" className="text-link">
            <ArrowLeft size={16} aria-hidden="true" />
            Voltar ao início
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
