import RevealOnScroll from './RevealOnScroll'

const HeroDecorations = () => {
  return (
    <>
      {/* Animation elements */}
      <div
        className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-t from-blue-400 to-transparent rounded-full blur-3xl opacity-20 animate-float"
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-gradient-to-t from-blue-300 to-transparent rounded-full blur-3xl opacity-20 animate-float-delay"
        aria-hidden="true"
      ></div>

      <div className="hidden lg:block lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item, index) => (
            <RevealOnScroll
              key={item}
              delay={index * 150}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="w-24 h-24 bg-white/10 md:backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="w-14 h-14 bg-blue-500/30 md:backdrop-blur-sm rounded-lg animate-pulse-light"></div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </>
  )
}

export default HeroDecorations
