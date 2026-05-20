import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useDarkModeStore } from '../context/store'

const faqs = [
  {
    question: 'How fast is medicine delivery?',
    answer: 'We guarantee 10-15 minute delivery for all orders. Same-day delivery is available in most areas.',
  },
  {
    question: 'Is online doctor consultation secure?',
    answer: 'Yes, all consultations are end-to-end encrypted and comply with healthcare privacy regulations.',
  },
  {
    question: 'How can I book a lab test?',
    answer: 'Select your test, choose your preferred date and time, and we will send a technician to your home for sample collection.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept credit/debit cards, UPI, digital wallets, and net banking. Cash on delivery is also available.',
  },
  {
    question: 'Can I request blood in emergencies?',
    answer: 'Yes, you can request blood 24/7 through our emergency blood finder. We connect you with nearby blood banks and donors.',
  },
  {
    question: 'Is there a subscription plan available?',
    answer: 'Yes, we offer monthly and yearly subscription plans with exclusive discounts and priority support.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const { darkMode } = useDarkModeStore()

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-12 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-lg border-2 overflow-hidden ${
                darkMode
                  ? 'bg-gray-700 border-gray-600'
                  : 'bg-white border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full p-6 flex justify-between items-center hover:bg-opacity-80 transition ${
                  darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-50'
                }`}
              >
                <h3 className={`text-lg font-semibold text-left ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-red-600" />
                ) : (
                  <FaChevronDown className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                )}
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`border-t-2 ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
                >
                  <p className={`p-6 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
