import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import { FaHeartbeat, FaPhone, FaAmbulance, FaShoppingCart, FaDna, FaStethoscope, FaRobot } from 'react-icons/fa'
import Navbar from '../components/common/Navbar'
import HeroSection from '../components/home/HeroSection'
import ServicesSection from '../components/home/ServicesSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import FAQSection from '../components/home/FAQSection'
import FooterSection from '../components/common/FooterSection'

function LandingPage({ darkMode, setDarkMode }) {
  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </div>
  )
}

export default LandingPage
