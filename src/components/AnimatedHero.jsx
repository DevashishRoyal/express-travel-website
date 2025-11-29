import React, { useEffect, useState } from 'react';
import { FaPlay, FaStar, FaUsers, FaCar, FaMapMarkerAlt } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';

export default function AnimatedHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "DRIVE IN STYLE",
      subtitle: "Premium Luxury Car Rental Services",
      description: "Experience unparalleled luxury with our meticulously maintained fleet of premium vehicles across India.",
      cta: "Book Your Ride",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop"
    },
    {
      title: "CORPORATE TRAVEL",
      subtitle: "Professional Transportation Solutions",
      description: "Trusted by leading corporations for executive travel, airport transfers, and business transportation needs.",
      cta: "Corporate Booking",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop"
    },
    {
      title: "EVENT TRANSPORTATION",
      subtitle: "Make Every Occasion Special",
      description: "From weddings to corporate events, we provide elegant transportation solutions for your special moments.",
      cta: "Plan Your Event",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=800&fit=crop"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: FaCar, number: '50+', label: 'Premium Vehicles' },
    { icon: FaUsers, number: '1000+', label: 'Happy Customers' },
    { icon: FaMapMarkerAlt, number: '15+', label: 'Cities Covered' },
    { icon: FaStar, number: '4.9', label: 'Customer Rating' }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Particle Background */}
      <ParticleBackground density={60} speed={0.8} color="#60A5FA" />

      {/* Dynamic Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ${
            index === currentSlide ? 'opacity-20' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-pink-400/10 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            {/* Slide Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 backdrop-blur-sm rounded-full text-yellow-300 text-sm font-semibold animate-pulse">
                <FaStar className="mr-2" />
                EXPRESS TRAVEL CORPORATE SERVICES
              </div>

              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tight">
                  {slides[currentSlide].title.split(' ').map((word, i) => (
                    <span key={i} className="block animate-fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
                      {word}
                    </span>
                  ))}
                </h1>

                <h2 className="text-2xl lg:text-3xl font-bold text-yellow-400 animate-fade-in" style={{ animationDelay: '1s' }}>
                  {slides[currentSlide].subtitle}
                </h2>

                <p className="text-xl text-blue-100 leading-relaxed max-w-lg animate-fade-in" style={{ animationDelay: '1.2s' }}>
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '1.4s' }}>
                <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center">
                  {slides[currentSlide].cta}
                  <FaPlay className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  View Our Fleet
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-8 animate-fade-in" style={{ animationDelay: '1.6s' }}>
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-yellow-400/20 rounded-xl">
                        <stat.icon className="text-yellow-400 text-xl" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{stat.number}</div>
                        <div className="text-blue-100 text-sm">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Car Display */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-20 opacity-0 scale-95'
          }`}>
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-1000 animate-pulse"></div>

              {/* Main Car Image */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden">
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <img
                    src={slides[currentSlide].image}
                    alt="Luxury Car"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">Premium Fleet</h3>
                      <p className="text-sm opacity-90">Experience luxury on wheels</p>
                    </div>
                  </div>
                </div>

                {/* Floating Action Buttons */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <FaCar className="text-black text-xl" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <FaStar className="text-white text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-yellow-400 w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
