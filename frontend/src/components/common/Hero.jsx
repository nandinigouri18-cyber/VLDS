import React from 'react'

export default function Hero(){
  return (
    <header className="py-12 px-6 bg-gradient-to-r from-white to-slate-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">VLDS — Virtual Lifeline Delivery Services</h1>
          <p className="mt-4 text-gray-600">Fast medicine delivery, lab tests, online doctors, and emergency blood finder — all in one healthcare platform.</p>
          <div className="mt-6 flex gap-3">
            <button className="px-5 py-3 bg-[var(--vlds-red)] text-white rounded-lg shadow">Order Medicines</button>
            <button className="px-5 py-3 border border-[var(--vlds-blue)] text-[var(--vlds-blue)] rounded-lg">Book Lab Test</button>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full h-64 bg-gradient-to-tr from-[var(--vlds-blue)] to-[var(--vlds-red)] rounded-2xl shadow-lg flex items-center justify-center text-white">Hero Image Placeholder</div>
        </div>
      </div>
    </header>
  )
}
