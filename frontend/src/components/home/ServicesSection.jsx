import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ServicesSection() {
  const services = [
    {
      icon: '💊',
      title: 'Medicine Delivery',
      description: 'Order medicines and get them delivered in 10-15 minutes',
      path: '/medicines',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: '📍',
      title: 'Blood Bank Finder',
      description: 'Find blood banks and donors near you instantly',
      path: '/blood',
      color: 'from-red-600 to-red-500',
    },
    {
      icon: '🧬',
      title: 'Lab Tests',
      description: 'Book diagnostic tests with home sample collection',
      path: '/lab-tests',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '👨‍⚕️',
      title: 'Doctor Consultation',
      description: 'Consult verified doctors via video or chat',
      path: '/doctors',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: '🤖',
      title: 'AI Chatbot',
      description: 'Get health guidance from our AI assistant',
      path: '/chatbot',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '📋',
      title: 'Prescription Upload',
      description: 'Upload prescriptions and order medicines automatically',
      path: '/medicines',
      color: 'from-orange-500 to-red-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare solutions designed for your wellness
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link to={service.path}>
                <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 text-white h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white opacity-90">{service.description}</p>
                  <button className="mt-6 bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-2 rounded-lg font-semibold transition-all">
                    Learn More →
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
