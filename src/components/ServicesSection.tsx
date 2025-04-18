
import { Code, Server, WrenchIcon, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import RevealOnScroll from './RevealOnScroll';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => {
  return (
    <RevealOnScroll direction="up" delay={delay}>
      <div className="card-service group">
        <div className="flex flex-col items-center text-center p-6 h-full">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-blue-800 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
          <p className="text-gray-600 mb-6 flex-grow">{description}</p>
          <Button variant="outline" className="flex items-center space-x-2 text-blue-600 hover:bg-blue-50 border-blue-200 group-hover:border-blue-400 transition-all">
            <span>Saiba mais</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </RevealOnScroll>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Criação de Sites",
      description: "Desenvolvemos sites modernos, responsivos e otimizados para diferentes dispositivos, garantindo a melhor experiência para seus usuários.",
      icon: <Code size={28} />,
      delay: 0
    },
    {
      title: "Hospedagem",
      description: "Oferecemos soluções de hospedagem seguras e confiáveis, garantindo alta disponibilidade e desempenho para o seu site.",
      icon: <Server size={28} />,
      delay: 200
    },
    {
      title: "Manutenção",
      description: "Serviços de manutenção e suporte para garantir que seu site esteja sempre atualizado, seguro e funcionando perfeitamente.",
      icon: <WrenchIcon size={28} />,
      delay: 400
    }
  ];

  return (
    <section id="services" className="section-padding py-24">
      <div className="container mx-auto px-4">
        <RevealOnScroll direction="up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">O que fazemos por você</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas para sua presença digital, desde a criação 
            até a manutenção contínua do seu site.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
