
import { Phone, Mail, MessageSquare, ArrowRight, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-blue-900/95 backdrop-blur-md shadow-lg py-2' 
          : 'header-gradient py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              mlluizDevTech
              <span className="text-red-500">.</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+5511999999999" className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors">
                <Phone size={18} />
                <span className="text-sm">(11) 99999-9999</span>
              </a>
              <a href="mailto:contato@mlluizDevTech.com" className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors">
                <Mail size={18} />
                <span className="text-sm">contato@mlluizDevTech.com</span>
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md transition-all text-white"
              >
                <MessageSquare size={18} />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
            
            <nav className="hidden md:flex space-x-8 text-white/90">
              <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors">Depoimentos</button>
            </nav>
            
            <Button 
              className="btn-cta group flex items-center space-x-2"
              onClick={() => scrollToSection('contact')}
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-800 mt-4 p-4 rounded-md shadow-lg">
            <nav className="flex flex-col space-y-4 text-white mb-4">
              <button onClick={() => scrollToSection('home')} className="py-2 hover:bg-blue-700 rounded px-2">Home</button>
              <button onClick={() => scrollToSection('about')} className="py-2 hover:bg-blue-700 rounded px-2">Sobre</button>
              <button onClick={() => scrollToSection('services')} className="py-2 hover:bg-blue-700 rounded px-2">Serviços</button>
              <button onClick={() => scrollToSection('testimonials')} className="py-2 hover:bg-blue-700 rounded px-2">Depoimentos</button>
            </nav>
            
            <div className="grid grid-cols-1 gap-3">
              <a href="tel:+5511999999999" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded">
                <Phone size={18} />
                <span className="text-sm">(11) 99999-9999</span>
              </a>
              <a href="mailto:contato@mlluizDevTech.com" className="flex items-center space-x-2 hover:bg-blue-700 p-2 rounded">
                <Mail size={18} />
                <span className="text-sm">contato@mlluizDevTech.com</span>
              </a>
              <a 
                href="https://wa.me/5511999999999"
                className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 py-2 px-3 rounded-md"
              >
                <MessageSquare size={18} />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
              
              <Button 
                className="btn-cta flex items-center justify-center space-x-2 w-full mt-3"
                onClick={() => scrollToSection('contact')}
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
