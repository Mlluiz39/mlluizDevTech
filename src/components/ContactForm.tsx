import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

const ContactForm = () => {
  return (
    <motion.section
      id="contato"
      className="bg-white py-16 px-6 md:px-12 lg:px-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-4">
          Fale Conosco
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Preencha o formulário abaixo e retornaremos em breve.
        </p>

        <motion.form
          action="https://formsubmit.co/mlluizpereira39@gmail.com" // <-- substitua pelo seu e-mail
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-50 p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Assunto"
            className="md:col-span-2 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            rows={5}
            name="message"
            placeholder="Sua mensagem"
            className="md:col-span-2 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* opções extras */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://mlluiz-dev-tech.netlify.app/thanks" />

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg inline-flex items-center transition-all duration-300"
            >
              <Send className="mr-2" size={18} />
              Enviar mensagem
            </button>
          </div>
        </motion.form>
      </div>
    </motion.section>
  )
}

export default ContactForm
