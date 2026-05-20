import React from 'react'
import Hero from '../components/common/Hero'

export default function Home(){
  return (
    <main>
      <Hero />
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-semibold">Featured Services</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">Medicine Delivery</div>
          <div className="p-4 border rounded-lg">Online Doctor Consultation</div>
          <div className="p-4 border rounded-lg">Lab Tests at Home</div>
        </div>
      </section>
    </main>
  )
}
