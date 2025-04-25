import { useEffect, useState, lazy, Suspense } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import RevealOnScroll from './RevealOnScroll'

const HeroDecorations = lazy(() => import('./HeroDecorations'))

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/videos/capa_final.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>

      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Background - simplificado no mobile */}
      {isMobile ? (
        <div className="absolute inset-0 bg-black/60 z-0" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-black-900 to-black-400 opacity-95 z-0" />
      )}

      {/* Elementos decorativos apenas no desktop */}
      {!isMobile && (
        <Suspense fallback={null}>
          <HeroDecorations />
        </Suspense>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Texto principal */}
          <div className="lg:col-span-3">
            {isMobile ? (
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-snug md:leading-tight mb-6">
                Transformamos suas ideias em sites profissionais
              </h1>
            ) : (
              <RevealOnScroll direction="left" className="mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-snug md:leading-tight">
                  Transformamos suas ideias em sites profissionais
                </h1>
              </RevealOnScroll>
            )}

            {isMobile ? (
              <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-md sm:max-w-xl mb-8">
                Crie uma presença online impactante com um site que realmente
                vende.
              </p>
            ) : (
              <RevealOnScroll direction="left" delay={200} className="mb-8">
                <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-md sm:max-w-xl">
                  Crie uma presença online impactante com um site que realmente
                  vende.
                </p>
              </RevealOnScroll>
            )}

            {isMobile ? (
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="group flex items-center justify-center space-x-2 px-6 py-4 text-base sm:text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-black/20">
                  <span>Quero meu site agora</span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>

                <Button
                  variant="outline"
                  className="btn-secondary px-6 py-4 text-base sm:text-lg rounded-xl hover:bg-white/10 hover:text-white"
                >
                  Explorar serviços
                </Button>
              </div>
            ) : (
              <RevealOnScroll direction="up" delay={400}>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="group flex items-center justify-center space-x-2 px-6 py-4 text-base sm:text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-black/20">
                    <span>Quero meu site agora</span>
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Button>

                  <Button
                    variant="outline"
                    className="btn-secondary px-6 py-4 text-base sm:text-lg rounded-xl hover:bg-white/10 hover:text-white"
                  >
                    Explorar serviços
                  </Button>
                </div>
              </RevealOnScroll>
            )}
          </div>

          {/* Espaço decorativo */}
          <div className="hidden lg:block lg:col-span-2" />
        </div>

        {/* Indicador de rolagem (desktop apenas) */}
        {!isMobile && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
              <ArrowRight size={20} className="text-white/70 rotate-90" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
