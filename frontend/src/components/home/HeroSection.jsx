import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaAmbulance, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Healthcare at Your <span className="text-medical-red">Doorstep</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get medicines delivered in 10-15 minutes, consult doctors online, and access blood banks anytime, anywhere.
          </p>

          {/* Emergency Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="btn-primary flex items-center gap-2"
            >
              <FaAmbulance /> Emergency Ambulance
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="btn-secondary flex items-center gap-2"
            >
              <FaPhone /> Call Doctor
            </motion.button>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/medicines"
              className="card hover:shadow-lg transition-all p-4 text-center"
            >
              <div className="text-4xl mb-2">💊</div>
              <h3 className="font-bold text-gray-900">Medicines</h3>
              <p className="text-sm text-gray-600">10-15 min delivery</p>
            </Link>
            <Link
              to="/blood"
              className="card hover:shadow-lg transition-all p-4 text-center"
            >
              <div className="text-4xl mb-2">🩸</div>
              <h3 className="font-bold text-gray-900">Blood Bank</h3>
              <p className="text-sm text-gray-600">Emergency access</p>
            </Link>
            <Link
              to="/lab-tests"
              className="card hover:shadow-lg transition-all p-4 text-center"
            >
              <div className="text-4xl mb-2">🧬</div>
              <h3 className="font-bold text-gray-900">Lab Tests</h3>
              <p className="text-sm text-gray-600">Home sample pickup</p>
            </Link>
            <Link
              to="/doctors"
              className="card hover:shadow-lg transition-all p-4 text-center"
            >
              <div className="text-4xl mb-2">👨‍⚕️</div>
              <h3 className="font-bold text-gray-900">Doctors</h3>
              <p className="text-sm text-gray-600">Online consultation</p>
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block"
        >
          <div className="bg-gradient-to-br from-medical-red to-health-blue rounded-3xl p-8 text-white flex flex-col items-center justify-center min-h-[500px]">
            <div className="text-8xl mb-6">🏥</div>
            <h2 className="text-3xl font-bold text-center mb-4">Your Health, Our Priority</h2>
            <p className="text-center text-lg opacity-90">
              Experience world-class healthcare services with just a few clicks
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
