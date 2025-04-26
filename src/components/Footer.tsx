import {
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react'
import RevealOnScroll from './RevealOnScroll'
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card'

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <RevealOnScroll direction="left">
            <div>
              <h3 className="text-xl font-bold mb-4">
                mlluizDevTech<span className="text-red-500">.</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Transformamos ideias em sites profissionais que impulsionam o
                seu negócio no mundo digital.
              </p>
              <div className="flex space-x-4">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700"
                    >
                      <Facebook size={18} className='text-blue-600' />
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="bg-gray-800 border-gray-700 text-white">
                    <p>Siga-nos no Facebook</p>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700"
                    >
                      <Instagram size={18} className='text-pink-500' />
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="bg-gray-800 border-gray-700 text-white">
                    <p>Siga-nos no Instagram</p>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700"
                    >
                      <Linkedin size={18} className='text-blue-500' />
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="bg-gray-800 border-gray-700 text-white">
                    <p>Conecte-se no LinkedIn</p>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700"
                    >
                      <Twitter size={18} className='text-sky-500' />
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="bg-gray-800 border-gray-700 text-white">
                    <p>Siga-nos no Twitter</p>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
          </RevealOnScroll>

          {/* Links */}
          <RevealOnScroll direction="up" delay={200}>
            <div>
              <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors hover:ml-1 inline-block"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors hover:ml-1 inline-block"
                  >
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors hover:ml-1 inline-block"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-white transition-colors hover:ml-1 inline-block"
                  >
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors hover:ml-1 inline-block"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          {/* Services */}
          <RevealOnScroll direction="up" delay={400}>
            <div>
              <h3 className="text-lg font-bold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors hover:ml-1 inline-block"
                  >
                    Criação de Sites
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors hover:ml-1 inline-block"
                  >
                    Hospedagem
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors hover:ml-1 inline-block"
                  >
                    Manutenção
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors hover:ml-1 inline-block"
                  >
                    Otimização SEO
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors hover:ml-1 inline-block"
                  >
                    Marketing Digital
                  </a>
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          {/* Contact */}
          <RevealOnScroll direction="right" delay={600}>
            <div>
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <div className="space-y-3">
                <a
                  href="tel:+5511977869073"
                  className="flex items-center text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="mr-3 bg-gray-800 p-2 rounded-full group-hover:bg-blue-600 transition-colors">
                    <Phone size={16} className='text-green-500'/>
                  </div>
                  <span>(11) 97786-9073</span>
                </a>
                <a
                  href="mailto:mlluizdevtech@gmail.com"
                  className="flex items-center text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="mr-3 bg-gray-800 p-2 rounded-full group-hover:bg-blue-600 transition-colors">
                    <Mail size={16} className='text-red-500' />
                  </div>
                  <span>mlluizdevtech@gmail.com</span>
                </a>
                <div className="flex items-start text-gray-400 group">
                  <div className="mr-3 bg-gray-800 p-2 rounded-full group-hover:bg-blue-600 transition-colors mt-1">
                    <Clock size={20} className='text-yellow-400' />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <p className="font-medium">Atendemos:</p>
                    <p>Seg a Sex - 9h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} mlluizDevTech. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
