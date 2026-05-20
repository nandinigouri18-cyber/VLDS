import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Pages
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import MedicineDelivery from './pages/medicine/MedicineDelivery'
import OrderTracking from './pages/medicine/OrderTracking'
import BloodDonation from './pages/blood/BloodDonation'
import LabTests from './pages/lab/LabTests'
import DoctorConsultation from './pages/doctor/DoctorConsultation'
import ChatBot from './pages/chatbot/ChatBot'
import AdminDashboard from './pages/admin/AdminDashboard'
import UserDashboard from './pages/user/UserDashboard'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <Toaster position="top-center" />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Service Routes */}
          <Route path="/medicines" element={<MedicineDelivery />} />
          <Route path="/order-tracking/:orderId" element={<OrderTracking />} />
          <Route path="/blood" element={<BloodDonation />} />
          <Route path="/lab-tests" element={<LabTests />} />
          <Route path="/doctors" element={<DoctorConsultation />} />
          <Route path="/chatbot" element={<ChatBot />} />
          
          {/* User Routes */}
          <Route path="/dashboard" element={<UserDashboard />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
