import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="site-container status-page">
        <span className="eyebrow">Erro 404</span>
        <h1>Página não encontrada.</h1>
        <p>
          Este endereço não está disponível. Volte ao início para conhecer
          nossos serviços.
        </p>
        <Link to="/" className="button button-primary">
          <ArrowLeft size={18} aria-hidden="true" />
          Voltar ao início
        </Link>
      </main>
      <Footer />
    </>
  );
}
