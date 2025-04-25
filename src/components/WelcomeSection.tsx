
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const WelcomeSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20">
          <div className="w-full md:w-1/2">
            <RevealOnScroll direction="left">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Bem-vindo ao nosso site</h2>
            </RevealOnScroll>
            
            <RevealOnScroll direction="left" delay={150}>
              <p className="text-gray-600 mb-6">
                Somos uma empresa especializada em desenvolvimento web, oferecendo soluções 
                personalizadas para empresas de todos os tamanhos. Nossa missão é transformar 
                ideias em experiências digitais impactantes que geram resultados.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll direction="left" delay={300}>
              <p className="text-gray-600 mb-8">
                Com uma equipe de profissionais altamente qualificados, 
                garantimos a entrega de projetos com qualidade e dentro do prazo.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={450}>
              <Button className="group flex items-center justify-center space-x-2 px-6 py-4 text-base sm:text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-black/20">
              <a 
                href="https://wa.me/5511977869073"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Fale com um Especialista</span>
              </a>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </RevealOnScroll>
          </div>
          
          <RevealOnScroll direction="right" className="w-full md:w-1/2">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.01] transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="Desenvolvimento web profissional"
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-lg z-0"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-500/10 rounded-full z-0"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl z-0"></div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
