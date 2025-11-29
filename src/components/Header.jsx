import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="w-4 h-4 hover:text-blue-300 cursor-pointer" />
              <span>bookings@expresstravelcorp.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="w-4 h-4 hover:text-blue-300 cursor-pointer" />
              <span>+91-9786628662</span>
            </div>
          </div>
          <div className="flex gap-4">
            <FaFacebook className="w-5 h-5 hover:text-blue-300 cursor-pointer transition-colors" />
            <FaInstagram className="w-5 h-5 hover:text-pink-400 cursor-pointer transition-colors" />
            <FaLinkedin className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
            <FaYoutube className="w-5 h-5 hover:text-red-400 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center cursor-pointer">
              <img
                src="/LOGO 2.jpg"
                alt="ETC Logo"
                className="h-[60px] w-auto mr-3"
              />
            </Link>

            {/* Navigation */}
            <Nav />
          </div>
        </div>
      </header>
    </>
  );
}
