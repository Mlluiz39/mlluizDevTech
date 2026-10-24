import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WelcomeSection from "../components/WelcomeSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WebsitePlans from "../components/WebsitePlans";
import CtaSection from "../components/CtaSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
export default function Index() {
  return (
    <>
      <Helmet>
        <title>MLLuiz DevTech — Sites, hospedagem e evolução</title>
        <meta
          name="description"
          content="Sites feitos para o seu negócio. Design personalizado, desenvolvimento, hospedagem e manutenção com a MLLuiz DevTech."
        />
        <meta name="theme-color" content="#f7f7f2" />
      </Helmet>
      <a href="#main" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ServicesSection />
        <WelcomeSection />
        <WebsitePlans />
        <TestimonialsSection />
        <CtaSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
