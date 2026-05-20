import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-medical-red rounded-lg p-2">
              <span className="text-white font-bold text-xl">VLDS</span>
            </div>
          </div>
          <p className="text-gray-400 mb-6">
            Transforming healthcare delivery with technology and compassion.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-medical-red transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-medical-red transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-medical-red transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-medical-red transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-white">Services</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/medicines" className="text-gray-400 hover:text-medical-red transition-colors">
                Medicine Delivery
              </Link>
            </li>
            <li>
              <Link to="/blood" className="text-gray-400 hover:text-medical-red transition-colors">
                Blood Donation
              </Link>
            </li>
            <li>
              <Link to="/lab-tests" className="text-gray-400 hover:text-medical-red transition-colors">
                Lab Tests
              </Link>
            </li>
            <li>
              <Link to="/doctors" className="text-gray-400 hover:text-medical-red transition-colors">
                Doctor Consultation
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-gray-400 hover:text-medical-red transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-medical-red transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-medical-red transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-medical-red transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-white">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-400">
              <FaPhone className="text-medical-red" />
              <span>1-800-VLDS-HELP</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <FaEnvelope className="text-medical-red" />
              <span>support@vlds.com</span>
            </li>
            <li className="flex items-start gap-3 text-gray-400">
              <FaMapMarkerAlt className="text-medical-red mt-1" />
              <span>123 Healthcare Ave, Medical City, MC 12345</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          © 2024 VLDS Healthcare. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm mt-4 md:mt-0">
          Made with ❤️ for your health
        </p>
      </div>
    </footer>
  )
}

export default FooterSection
