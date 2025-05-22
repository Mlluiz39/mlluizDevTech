import React from 'react'
import { motion } from 'framer-motion'

const plans = [
  {
    title: 'BÁSICO',
    price: 'R$ 800',
    description: 'Ideal para quem precisa de uma landing page simples',
    features: [
      'Landing page responsiva',
      'Design moderno',
      'Formulário de contato',
      'Entrega rápida',
      'Até 4 atualizações inclusas',
    ],
    button: 'Solicitar Orçamento',
    highlighted: false,
  },
  {
    title: 'PROFISSIONAL',
    price: 'R$ 1.200',
    description: 'Para empresas que precisam de até 4 páginas',
    features: [
      'Até 4 páginas',
      'Design personalizado',
      'Formulários e seções extras',
      'SEO básico incluso',
      'Até 8 atualizações inclusas',
    ],
    button: 'Solicitar Orçamento',
    highlighted: true,
    badge: 'Mais Popular',
  },
  {
    title: 'PREMIUM',
    price: 'R$ 2.000',
    description: 'Para projetos com mais páginas e autenticação',
    features: [
      'Mais de 4 páginas',
      'Sistema de autenticação (login)',
      'Integração com banco de dados',
      'Painel administrativo (básico)',
      'Até 12 atualizações inclusas',
    ],
    button: 'Solicitar Orçamento',
    highlighted: false,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

const WebsitePlans = () => {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-2xl text-blue-700 font-semibold mb-10">
        Nossos Planos de Sites
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            className={`relative flex flex-col border rounded-2xl p-6 shadow-sm bg-white hover:shadow-lg transition-shadow duration-300 ${
              plan.highlighted
                ? 'border-black md:scale-105 z-10 shadow-xl'
                : 'border-gray-200'
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            custom={idx}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            {plan.badge && (
              <div className="absolute -top-3 right-3 bg-blue-700 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                <span>★</span> {plan.badge}
              </div>
            )}
            <h3 className="text-center text-sm font-semibold text-gray-500 mb-2">
              {plan.title}
            </h3>
            <div className="text-center text-3xl font-bold text-blue-700 mb-1">
              {plan.price}
            </div>
            <p className="text-center text-xs text-gray-500 mb-6">
              pagamento único
            </p>

            <ul className="mb-6 space-y-2 text-sm">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className='text-gray-600'>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className={`mt-auto w-full py-2 rounded-md text-sm font-semibold text-center transition-all duration-200 ${
                plan.highlighted
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'border border-gray-300 text-blue-600 hover:bg-gray-100'
              }`}
            >
              {plan.button}
            </a>

            <p className="mt-4 text-center text-xs text-gray-400">
              {plan.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default WebsitePlans
