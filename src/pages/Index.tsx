
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WelcomeSection from '../components/WelcomeSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { setupScrollReveal } from '../utils/scrollReveal';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  // Add scroll padding for fixed header
  useEffect(() => {
    document.documentElement.style.scrollPaddingTop = '80px';
    
    // Setup scroll reveal animations - wrapped in a small delay to improve initial page load
    const timer = setTimeout(() => {
      const cleanupScrollReveal = setupScrollReveal();
      return () => cleanupScrollReveal();
    }, 100);
    
    // Cleanup function
    return () => {
      document.documentElement.style.scrollPaddingTop = '';
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>mlluizDevTech - Desenvolvimento de Sites Profissionais | Crie seu Site Agora</title>
        <meta name="description" content="A mlluizDevTech transforma suas ideias em sites profissionais. Desenvolvimento web, hospedagem segura e suporte contínuo para impulsionar seu negócio online." />
        <link rel="canonical" href="https://www.mlluizDevTech.com.br/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#1e40af" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <article>
            <Hero />
            <WelcomeSection />
            <ServicesSection />
            <TestimonialsSection />
            <CtaSection />
            <ContactForm />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
