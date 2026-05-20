import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import { motion } from 'framer-motion'

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Medicine Delivery', path: '/medicines' },
    { label: 'Blood Donation', path: '/blood' },
    { label: 'Lab Tests', path: '/lab-tests' },
    { label: 'Doctor Consultation', path: '/doctors' },
    { label: 'AI Chatbot', path: '/chatbot' },
  ]

  return (
    <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-medical-red rounded-lg p-2">
              <span className="text-white font-bold text-xl">VLDS</span>
            </div>
            <span className="hidden md:inline font-bold text-xl text-medical-red">VLDS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-medical-red ${
                  darkMode ? 'text-gray-300 hover:text-medical-red' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Auth Buttons */}
            <div className="hidden md:flex gap-3">
              {token ? (
                <>
                  <Link to="/dashboard" className="btn-primary text-sm py-2 px-4">
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      localStorage.removeItem('token')
                      navigate('/')
                    }}
                    className="btn-outline text-sm py-2 px-4"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn-outline text-sm py-2 px-4">
                    Login
                  </Link>
                  <Link to="/signup" className="btn-primary text-sm py-2 px-4">
                    Signup
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`lg:hidden pb-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t pt-4 mt-4 flex gap-2 px-4">
              {token ? (
                <>
                  <Link to="/dashboard" className="btn-primary text-sm flex-1 py-2">
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      localStorage.removeItem('token')
                      navigate('/')
                      setIsOpen(false)
                    }}
                    className="btn-outline text-sm flex-1 py-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn-outline text-sm flex-1 py-2">
                    Login
                  </Link>
                  <Link to="/signup" className="btn-primary text-sm flex-1 py-2">
                    Signup
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
