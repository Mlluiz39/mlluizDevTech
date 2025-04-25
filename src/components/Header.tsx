import { Phone, Mail, MessageSquare, ArrowRight, Menu } from 'lucide-react'
import { Button } from './ui/button'
import { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-blue-700/95 backdrop-blur-md shadow-lg py-2'
          : 'header-gradient py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-10">
            <h1 className="text-2xl font-bold text-white whitespace-nowrap">
              mlluizDevTech<span className="text-red-500">.</span>
            </h1>

            <div className="hidden md:flex items-center space-x-3">
              <a
                href="tel:+5511977869073"
                className="flex items-center space-x-1 text-white/90 hover:text-white text-sm transition-colors"
              >
                <Phone size={16} />
                <span>(11) 97786-9073</span>
              </a>
              <a
                href="https://wa.me/5511977869073"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 text-white text-sm px-2 py-1 rounded-md transition-colors"
              >
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6 text-white/90">
              <button
                onClick={() => scrollToSection('home')}
                className="hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="hover:text-white transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-white transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="hover:text-white transition-colors"
              >
                Depoimentos
              </button>
            </nav>

            <Button
              className="btn-cta group flex items-center space-x-2 text-base sm:text-sm bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-black/20"
              onClick={() => scrollToSection('contact')}
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </div>

          {/* Botão menu mobile */}
          <div className="md:hidden">
            <button
              className="text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-800 mt-4 p-4 rounded-md shadow-lg">
            <nav className="flex flex-col space-y-4 text-white mb-4">
              <button
                onClick={() => scrollToSection('home')}
                className="py-2 hover:bg-blue-700 rounded px-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="py-2 hover:bg-blue-700 rounded px-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="py-2 hover:bg-blue-700 rounded px-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="py-2 hover:bg-blue-700 rounded px-2"
              >
                Depoimentos
              </button>
            </nav>

            <div className="grid grid-cols-1 gap-3">
              {/* WhatsApp no mobile com as cores do desktop */}
              <a
                href="https://wa.me/5511977869073"
                className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 py-2 px-3 rounded-xl transition-colors"
              >
                <MessageSquare className="text-white" size={18} />
                <span className="text-sm text-white font-medium">WhatsApp</span>
              </a>

              <Button
                className="flex items-center justify-center space-x-2 mt-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-black/20"
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
  )
}

export default Header
