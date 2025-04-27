import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useState } from 'react'

const FloatingInput = ({
  label,
  type = 'text',
  name,
  isTextarea = false,
  options,
  required = true,
}: {
  label: string
  type?: string
  name: string
  isTextarea?: boolean
  options?: string[]
  required?: boolean
}) => {
  const [error, setError] = useState(false)

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    if (required && !e.target.value.trim()) {
      setError(true)
    } else {
      setError(false)
    }
  }

  return (
    <div className="relative w-full">
      <label
        className={`absolute -top-2 left-4 bg-white px-1 text-sm font-medium transition-all
          ${error ? 'text-red-500' : 'text-gray-700'}`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {isTextarea ? (
        <textarea
          name={name}
          rows={5}
          onBlur={handleBlur}
          defaultValue=""
          className={`w-full p-4 pt-6 rounded-xl border
            ${
              error
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:border-blue-600 focus:ring-blue-500'
            }
            bg-gray-50 focus:outline-none focus:ring-2 transition-all resize-none`}
          required={required}
        />
      ) : options ? (
        <select
          name={name}
          onBlur={handleBlur}
          defaultValue=""
          className={`w-full p-4 pt-6 rounded-xl border
            ${
              error
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:border-blue-600 focus:ring-blue-500'
            }
            bg-gray-50 focus:outline-none focus:ring-2 transition-all appearance-none`}
          required={required}
        >
          <option disabled>
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
          onBlur={handleBlur}
          className={`w-full p-4 pt-6 rounded-xl border
            ${
              error
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:border-blue-600 focus:ring-blue-500'
            }
            bg-gray-50 focus:outline-none focus:ring-2 transition-all`}
          required={required}
        />
      )}
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
