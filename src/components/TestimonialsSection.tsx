import {
  Monitor,
  Rocket,
  Palette,
  Clock,
  Lock,
  LineChart,
  Star,
} from 'lucide-react'
import { motion } from 'framer-motion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

// Animações
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
      type: 'spring',
    },
  }),
}

interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

const BenefitCard = ({ icon, title, description, index }: BenefitCardProps) => (
  <motion.div
    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center h-full"
    variants={fadeUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={index}
  >
    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-blue-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </motion.div>
)

interface TestimonialProps {
  name: string
  company: string
  image: string
  testimonial: string
  rating: number
  index: number
}

const Testimonial = ({
  name,
  company,
  image,
  testimonial,
  rating,
  index,
}: TestimonialProps) => (
  <motion.div
    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    variants={fadeUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={index}
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <div>
        <h4 className="font-bold text-blue-800">{name}</h4>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </div>

    <div className="flex mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
          }
        />
      ))}
    </div>

    <blockquote className="text-gray-600 italic flex-grow">
      “{testimonial}”
    </blockquote>
  </motion.div>
)

const TestimonialsSection = () => {
  const benefits = [
    {
      icon: <Monitor size={24} />,
      title: 'Design Responsivo',
      description:
        'Experiência perfeita em qualquer dispositivo, do desktop ao celular.',
    },
    {
      icon: <Rocket size={24} />,
      title: 'Velocidade Otimizada',
      description:
        'Sites leves e rápidos para melhor experiência e ranking no Google.',
    },
    {
      icon: <Palette size={24} />,
      title: 'Design Personalizado',
      description: 'Visual único e alinhado com a identidade da sua marca.',
    },
    {
      icon: <Lock size={24} />,
      title: 'Segurança Avançada',
      description: 'Proteção contra vulnerabilidades e ameaças online.',
    },
    {
      icon: <LineChart size={24} />,
      title: 'SEO Integrado',
      description:
        'Otimização para mecanismos de busca para melhor visibilidade.',
    },
    {
      icon: <Clock size={24} />,
      title: 'Entrega Pontual',
      description: 'Cumprimento de prazos e entregas conforme o cronograma.',
    },
  ]

  const testimonials = [
    {
      name: 'Ana Silva',
      company: 'Café Aroma',
      image: '',
      testimonial:
        'A mlluizDevTech transformou completamente nossa presença online...',
      rating: 5,
    },
    {
      name: 'Ricardo Mendes',
      company: 'Tech Solutions',
      image: '',
      testimonial: 'Impressionado com a velocidade e qualidade do trabalho...',
      rating: 5,
    },
    {
      name: 'Mariana Costa',
      company: 'Bela Moda',
      image: '',
      testimonial:
        'Site responsivo e bonito que reflete perfeitamente nossa marca...',
      rating: 4,
    },
    {
      name: 'Carlos Eduardo',
      company: 'Arquitetura Moderna',
      image: '',
      testimonial: 'O portfólio online criado trouxe vários projetos novos...',
      rating: 5,
    },
    {
      name: 'Juliana Martins',
      company: 'Academia Fitness Plus',
      image: '',
      testimonial: 'Nossa agenda online simplificou todo o processo...',
      rating: 4,
    },
  ]

  return (
    <section
      className="bg-blue-50"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        {/* Benefícios */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-700 mb-8 text-center">
            Por que nos escolher
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.slice(0, 3).map((benefit, index) => (
              <BenefitCard key={index} {...benefit} index={index} />
            ))}
          </div>
        </div>
        <div className="text-center mb-16">
          <motion.h2
            id="testimonials"
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            O que nossos clientes dizem
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Veja os depoimentos de empresas e profissionais que transformaram
            sua presença digital com nossos serviços.
          </motion.p>
        </div>

        {/* Depoimentos */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-8 text-center">Depoimentos</h3>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-6">
                  <Testimonial {...testimonial} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 space-x-2">
              <CarouselPrevious className="position-static translate-y-0 mr-2" />
              <CarouselNext className="position-static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
