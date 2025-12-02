import React, { useState, useEffect } from 'react';
import { FaStar, FaPhone } from 'react-icons/fa';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&h=1080&fit=crop",
      alt: "Mercedes Luxury Car"
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop",
      alt: "BMW Executive Sedan"
    },
    {
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1920&h=1080&fit=crop",
      alt: "Audi Premium Fleet"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Slider Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark Blue to Transparent Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2A6C]/90 via-[#0A2A6C]/70 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-[#FFC234]/20 backdrop-blur-sm rounded-full text-[#FFC234] text-sm font-semibold border border-[#FFC234]/30">
              <FaStar className="mr-2" />
              Since 1999 • Govt. of India Recognized
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                Premium Corporate Travel & Luxury Car Services
              </h1>

              {/* Subheading */}
              <h2 className="text-xl lg:text-2xl font-bold text-[#FFC234]">
                Trusted by India's top organizations
              </h2>

              {/* Description */}
              <p className="text-lg text-blue-100 leading-relaxed max-w-lg">
                Express Travel Corporate Services delivers unparalleled luxury fleet services,
                comprehensive corporate travel solutions, VVIP transportation, event logistics,
                and premium mobility across major Indian cities. Experience excellence in
                corporate transportation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#FFC234] to-yellow-500 hover:from-yellow-500 hover:to-[#FFC234] text-[#0A2A6C] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
                Book Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#0A2A6C] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-lg">
                Corporate Enquiry
              </button>
            </div>

            {/* 24/7 Support */}
            <div className="flex items-center text-white/90 text-lg">
              <FaPhone className="mr-3 text-[#FFC234]" />
              <span className="font-semibold">24/7 Support:</span>
              <span className="ml-2 text-[#FFC234] font-bold">+91-9786628662</span>
            </div>
          </div>

          {/* Right Content - Empty for full background car image */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-[#FFC234] w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
