import { motion } from 'framer-motion'
import { CheckCircle, ArrowLeft, MessageCircle } from 'lucide-react'
import Confetti from 'react-confetti'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Thanks = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Confetes */}
      <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={200} recycle={false} />

      <CheckCircle size={64} className="text-green-600 mb-6 z-10" />
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 z-10">
        Obrigado pelo contato!
      </h1>
      <p className="text-gray-600 mb-8 z-10">
        Sua mensagem foi enviada com sucesso. Em breve retornaremos!
      </p>

      <div className="flex flex-col sm:flex-row gap-4 z-10">
        {/* Botão WhatsApp */}
        <a
          href="https://wa.me/5511977869073" // <-- coloque seu número aqui com DDI
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg inline-flex items-center transition-all duration-300"
        >
          <MessageCircle className="mr-2" size={18} />
          Falar no WhatsApp
        </a>

        {/* Botão voltar */}
        <Link
          to="/"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg inline-flex items-center transition-all duration-300"
        >
          <ArrowLeft className="mr-2" size={18} />
          Voltar para o início
        </Link>
      </div>
    </motion.section>
  )
}

export default Thanks
