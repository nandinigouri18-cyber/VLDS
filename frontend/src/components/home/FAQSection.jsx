import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'How quickly will I receive my medicines?',
      answer: 'Most medicines are delivered within 10-15 minutes from placing the order, depending on your location and product availability.',
    },
    {
      question: 'Is the blood bank service available 24/7?',
      answer: 'Yes, our blood bank finder and emergency blood request service is available 24/7 to help in critical situations.',
    },
    {
      question: 'How do I book a lab test?',
      answer: 'Simply browse our lab tests, select the one you need, choose your preferred date and time, and our team will collect the sample from your home.',
    },
    {
      question: 'Are doctors verified and licensed?',
      answer: 'Yes, all doctors on VLDS are verified medical professionals with valid licenses and extensive experience.',
    },
    {
      question: 'Is my health data secure?',
      answer: 'We use enterprise-grade encryption and follow all healthcare data protection regulations to ensure your privacy.',
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Find answers to common questions about VLDS</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex justify-between items-center p-6 bg-light-gray rounded-lg hover:bg-gray-200 transition-colors text-left"
              >
                <h3 className="font-semibold text-gray-900 text-lg">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown size={24} className="text-medical-red" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-50 px-6 pb-6"
                  >
                    <p className="text-gray-700">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
