import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import RevealOnScroll from './RevealOnScroll'

const CtaSection = () => {
  return (
    <section
      id="contact"
      className="bg-blue-700 text-white py-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-t from-blue-400 to-transparent rounded-full blur-3xl opacity-10 animate-float"></div>
      <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-gradient-to-t from-blue-300 to-transparent rounded-full blur-3xl opacity-10 animate-float-delay"></div>

      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll
          direction="up"
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para ter seu site profissional?
          </h2>
          <p className="text-blue-100 text-xl mb-10">
            Transforme sua presença digital hoje mesmo e destaque-se da
            concorrência com um site moderno e eficiente.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button className="group flex items-center justify-center space-x-2 px-6 py-4 text-base sm:text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-black/20">
              <a href="#contato">Deixe uma mensagem</a>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>

            <a
              href="https://wa.me/5511977869073"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-1 px-10 transition-all flex items-center justify-center space-x-2 text-lg rounded-xl"
            >
              <span>Fale Conosco Agora</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default CtaSection
