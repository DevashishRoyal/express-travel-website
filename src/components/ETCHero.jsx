import React, { useEffect, useState } from 'react';
import { FaPhone, FaStar } from 'react-icons/fa';

export default function ETCHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-screen Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
          alt="Corporate Luxury Car"
          className="w-full h-full object-cover"
        />
        {/* Dark Blue to Transparent Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2A6C]/90 via-[#0A2A6C]/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            {/* Premium Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-[#FFC234]/20 backdrop-blur-sm rounded-full text-[#FFC234] text-sm font-semibold border border-[#FFC234]/30">
              <FaStar className="mr-2" />
              Since 1999 • Govt. of India Recognized
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                Premium Corporate Travel & Luxury Car Services
              </h1>

              {/* Subheadline */}
              <h2 className="text-xl lg:text-2xl font-bold text-[#FFC234]">
                Trusted by India's top organizations since 1999
              </h2>

              {/* Description */}
              <p className="text-lg text-blue-100 leading-relaxed max-w-lg">
                Express Travel Corporate Services offers unparalleled luxury corporate travel solutions,
                VVIP transportation, comprehensive events logistics, and premium services across major
                Indian cities. Experience excellence in corporate mobility.
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

          {/* Right Content - Car Image in Glass Card */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-20 opacity-0 scale-95'
          }`}>
            <div className="relative group">
              {/* Glass Card Container */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5">
                  <img
                    src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop"
                    alt="Luxury Corporate Car"
                    className="w-full h-full object-cover"
                  />

                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Premium Accent */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#FFC234] rounded-full flex items-center justify-center shadow-lg">
                  <FaStar className="text-[#0A2A6C] text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
