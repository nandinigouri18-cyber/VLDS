import React from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Patient',
      image: '👨',
      text: 'VLDS saved my life! I got emergency medicines delivered in just 12 minutes.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Healthcare Worker',
      image: '👩‍⚕️',
      text: 'The blood bank finder helped us locate donors in critical situations.',
      rating: 5,
    },
    {
      name: 'Arun Patel',
      role: 'Regular User',
      image: '👨',
      text: 'Amazing service! Lab tests booking is so convenient and affordable.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 bg-light-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Patients Say</h2>
          <p className="text-xl text-gray-600">Trusted by thousands of happy patients</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{testimonial.image}</div>
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
