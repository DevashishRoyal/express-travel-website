import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Header() {
  return (
    <>
      {/* Top Bar - Keep Blue */}
      <div className="bg-blue-900 text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="w-4 h-4 text-blue-300" />
              <span>bookings@expresstravelcorp.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="w-4 h-4 text-blue-300" />
              <span>+91-9786628662</span>
            </div>
          </div>

          <div className="flex gap-4">
            <FaFacebook className="w-5 h-5 hover:text-blue-300 cursor-pointer" />
            <FaInstagram className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
            <FaLinkedin className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
            <FaYoutube className="w-5 h-5 hover:text-red-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* White rounded nav container */}
          <div className="bg-white shadow-md rounded-3xl px-6 py-4 mt-3 flex justify-between items-center">
            
            {/* Logo */}
            <Link to="/" className="flex items-center">
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
