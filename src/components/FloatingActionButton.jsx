import React, { useState, useEffect } from 'react';
import { FaPhone, FaWhatsapp, FaTimes, FaComments } from 'react-icons/fa';

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const contactOptions = [
    {
      icon: FaPhone,
      label: 'Call Now',
      action: () => window.open('tel:+919786628662'),
      color: 'bg-green-500 hover:bg-green-600',
      description: '+91-9786628662'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      action: () => window.open('https://wa.me/919786628662?text=Hi, I would like to book a luxury car'),
      color: 'bg-green-600 hover:bg-green-700',
      description: 'Quick Booking'
    }
  ];

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
    }`}>
      {/* Contact Options */}
      <div className={`absolute bottom-16 right-0 space-y-3 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {contactOptions.map((option, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 bg-white rounded-full shadow-lg p-3 cursor-pointer transform transition-all duration-300 hover:scale-105 ${
              isOpen ? 'translate-x-0' : 'translate-x-8'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onClick={option.action}
          >
            <div className={`p-2 rounded-full text-white ${option.color}`}>
              <option.icon className="text-lg" />
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-gray-900 text-sm">{option.label}</div>
              <div className="text-xs text-gray-600">{option.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 ${
          isOpen ? 'rotate-45' : ''
        }`}
      >
        {isOpen ? (
          <FaTimes className="text-xl" />
        ) : (
          <FaComments className="text-xl" />
        )}
      </button>

      {/* Pulse Animation */}
      <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-20"></div>
    </div>
  );
}
