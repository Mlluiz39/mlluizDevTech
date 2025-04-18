
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import RevealOnScroll from "./RevealOnScroll";
import { lazy, Suspense } from "react";

// Lazy load decorative elements
const HeroDecorations = lazy(() => import("./HeroDecorations"));

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-95 z-0" />
      
      {/* Animation elements - loaded only after main content */}
      <Suspense fallback={<div />}>
        <HeroDecorations />
      </Suspense>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Hero text content */}
          <div className="lg:col-span-3">
            <RevealOnScroll direction="left" className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
                Transformamos suas ideias em sites profissionais
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll direction="left" delay={200} className="mb-8">
              <p className="text-xl md:text-2xl text-blue-100 max-w-xl">
                Crie uma presença online impactante com um site que realmente vende.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={400}>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="btn-cta group flex items-center space-x-2 px-8 py-6 text-lg">
                  <span>Quero meu site agora</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="btn-secondary px-8 py-6 text-lg hover:bg-white/10">
                  Explorar serviços
                </Button>
              </div>
            </RevealOnScroll>
          </div>
          
          {/* Decorative elements - only shown on desktop */}
          <div className="hidden lg:block lg:col-span-2">
            {/* Rendered through the HeroDecorations component */}
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
            <ArrowRight size={20} className="text-white/70 rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
