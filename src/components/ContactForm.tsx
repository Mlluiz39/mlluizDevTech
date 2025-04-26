import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useState } from 'react'

const FloatingInput = ({
  label,
  type = 'text',
  name,
  isTextarea = false,
  options,
}: { 
  label: string; 
  type?: string; 
  name: string; 
  isTextarea?: boolean; 
  options?: string[]; 
}) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative w-full">
      {isTextarea ? (
        <textarea
          name={name}
          rows={5}
          onFocus={() => setIsFocused(true)}
          onBlur={e => setIsFocused(e.target.value !== '')}
          className="peer w-full p-4 pt-6 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
          placeholder=" "
          required
        />
      ) : options ? (
        <select
          name={name}
          onFocus={() => setIsFocused(true)}
          onBlur={e => setIsFocused(e.target.value !== '')}
          className="peer w-full p-4 pt-6 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none"
          required
        >
          <option value="" disabled selected>
            Selecione o assunto
          </option>
          {options.map((option: string) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          onFocus={() => setIsFocused(true)}
          onBlur={e => setIsFocused(e.target.value !== '')}
          className="peer w-full p-4 pt-6 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder=" "
          required
        />
      )}
      <label
        className={`absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base ${
          isFocused && 'top-2 text-xs text-blue-600'
        }`}
      >
        {label}
      </label>
    </div>
  )
}

const ContactForm = () => {
  return (
    <motion.section
      id="contato"
      className="bg-gradient-to-b from-white to-gray-100 py-20 px-6 md:px-12 lg:px-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-6">
          Entre em Contato
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Vamos construir algo incrível juntos.
        </p>

        <motion.form
          action="https://formsubmit.co/mlluizdevtech@gmail.com"
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-10 rounded-2xl shadow-2xl border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FloatingInput label="Seu nome" name="name" />
          <FloatingInput label="Seu e-mail" type="email" name="email" />
          <FloatingInput
            label="Assunto"
            name="subject"
            options={['Criação de Sites', 'Manutenção', 'Hospedagem']}
          />
          <FloatingInput label="Sua mensagem" name="message" isTextarea />

          {/* opções extras */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://mlluiz-dev-tech.netlify.app/thanks"
          />

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg inline-flex items-center transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Send className="mr-2" size={20} />
              Enviar mensagem
            </button>
          </div>
        </motion.form>
      </div>
    </motion.section>
  )
}

export default ContactForm
