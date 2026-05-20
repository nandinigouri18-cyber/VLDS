import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
