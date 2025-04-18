import { useEffect, useRef, useState, ReactNode } from 'react'
import { RevealDirection } from '@/utils/scrollReveal'

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  direction?: RevealDirection
  delay?: number
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize() // Executa imediatamente
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect() // Evita chamadas futuras
          }
        })
      },
      { threshold: 0.1 }
    )

    const current = sectionRef.current
    if (current) observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [isMobile])

  // Classes e estilo condicional
  const directionClass = `reveal-${direction}`
  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {}

  if (isMobile) {
    // No mobile: retorna o conteúdo puro, sem wrappers extras
    return <>{children}</>
  }

  return (
    <div
      ref={sectionRef}
      className={`reveal-on-scroll ${directionClass} ${
        isVisible ? 'active' : 'pre-hidden'
      } ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  )
}

export default RevealOnScroll
