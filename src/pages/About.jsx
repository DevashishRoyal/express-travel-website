import React, { useState, useRef, useEffect } from 'react';
import { FaMapMarkerAlt, FaUsers, FaCar, FaAward, FaShieldAlt, FaClock, FaCreditCard, FaMobileAlt } from 'react-icons/fa';

export default function About() {
  const [isVisible, setIsVisible] = useState({});
  const observerRefs = useRef([]);

  useEffect(() => {
    const observers = observerRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [index]: true }));
          }
        },
        { threshold: 0.1 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  let setRef = (index) => (el) => {
    observerRefs.current[index] = el;
  };

  const stats = [
    { icon: FaCar, number: '50+', label: 'Fleet Vehicles' },
    { icon: FaUsers, number: '25+', label: 'Years Experience' },
    { icon: FaMapMarkerAlt, number: '15+', label: 'Cities Covered' },
    { icon: FaAward, number: '1000+', label: 'Happy Clients' }
  ];

  const features = [
    {
      icon: FaShieldAlt,
      title: 'Trusted Service',
      description: 'Operating with integrity and reliability since 1996'
    },
    {
      icon: FaClock,
      title: '24/7 Support',
      description: 'Round the clock customer service and assistance'
    },
    {
      icon: FaCreditCard,
      title: 'All Payments',
      description: 'Accept all major credit cards and online payments'
    },
    {
      icon: FaMobileAlt,
      title: 'Mobile App',
      description: 'Convenient booking through our mobile application'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        {/* Car Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop"
            alt="Luxury Car Fleet"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/80 to-blue-900/60"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              ref={setRef(0)}
              className={`space-y-8 transform transition-all duration-1000 ${
                isVisible[0] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
            >
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-4">
                  About Express Travel Corporate Services
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                  About <span className="text-yellow-400">Us</span>
                </h1>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  DRIVE IN THE <span className="text-yellow-400">CITY</span>
                </h2>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  & <span className="text-yellow-400">OUTSTATION</span>
                </h2>
              </div>

              <p className="text-xl font-semibold text-blue-100">
                A CAR FOR EVERY NEED
              </p>

              <p className="text-lg text-blue-100 italic leading-relaxed">
                "We have a range of cars, so something will perfectly fit your trip"
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-white leading-relaxed">
                  <span className="font-bold text-yellow-400">EXPRESS TRAVEL CORPORATE SERVICES LLP</span> has become a very successful
                  entrepreneur in operating all kinds of luxury cars to corporate clients including British Deputy High
                  Commission, Birla Soft, Taj Group of Hotels, ITC Park Sheraton Hotels, and many more prestigious organizations.
                </p>
              </div>
            </div>

            {/* Right Content - Car Image */}
            <div
              ref={setRef(1)}
              className={`relative transform transition-all duration-1000 delay-300 ${
                isVisible[1] ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-20 opacity-0 scale-95'
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop"
                    alt="BMW X7 Luxury SUV"
                    className="w-full h-auto object-contain rounded-xl transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                ref={setRef(index + 2)}
                className={`text-center transform transition-all duration-1000 delay-${index * 200} ${
                  isVisible[index + 2] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-4 shadow-lg">
                  <stat.icon className="text-white text-2xl" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Story</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From humble beginnings to becoming a trusted name in luxury transportation
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                ref={setRef(6)}
                className={`space-y-6 transform transition-all duration-1000 ${
                  isVisible[6] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                }`}
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Foundation</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    With dynamic leadership and hard work, our vision has enabled us to carve a special niche in the travel
                    industry. We operate nearly 50 fleets ranging from TATA INDICA to MERCEDES BENZ E CLASS.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <FaUsers className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Team Work</div>
                      <div className="text-sm text-gray-600">Our core value</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Philosophy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our business philosophy is based on our belief that clients are our prime assets. We nurture a culture
                    founded on TRUST, PRIDE, and TEAM WORK.
                  </p>
                </div>
              </div>

              <div
                ref={setRef(7)}
                className={`relative transform transition-all duration-1000 delay-300 ${
                  isVisible[7] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                }`}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop"
                    alt="Luxury Car Fleet"
                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">Premium Fleet</h4>
                    <p className="text-sm opacity-90">From economy to luxury vehicles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience excellence in luxury transportation with our premium services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={setRef(index + 8)}
                className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible[index + 8] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl mb-6 shadow-lg">
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope and Objectives Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Scope and <span className="text-yellow-400">Objectives</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Expanding horizons across India with cutting-edge technology and exceptional service
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div
              ref={setRef(12)}
              className={`space-y-6 transform transition-all duration-1000 ${
                isVisible[12] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">PAN India Coverage</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  ETC offers PAN India services with branch offices in Chennai, Bangalore, Hyderabad, Ahmedabad,
                  New Delhi, Bhopal, and Pune. We also operate in major cities like Mumbai, Kolkata, Surat, and throughout India.
                </p>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-yellow-400" />
                  <span className="text-sm font-medium">15+ Cities, PAN India</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Tier 2 & 3 Expansion</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Looking at the growing demand in tier 2 and tier 3 cities, we have effectively expanded our services
                  for commercial and ground transportation needs.
                </p>
                <div className="flex items-center space-x-3">
                  <FaCar className="text-yellow-400" />
                  <span className="text-sm font-medium">Growing Network</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Technology Driven</h3>
                <p className="text-blue-100 leading-relaxed">
                  ETC is equipped with in-house technology and a new-age mobile tool app to cater to corporate employees
                  and travel managers. Our technology delivers cost-effective, transparent, and reliable travel experiences.
                </p>
              </div>
            </div>

            {/* Car Image */}
            <div
              ref={setRef(13)}
              className={`relative transform transition-all duration-1000 delay-300 ${
                isVisible[13] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&h=600&fit=crop"
                    alt="Luxury Blue Sports Car"
                    className="w-full h-auto object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Experience <span className="text-yellow-400">Luxury</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust us for their transportation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Your Ride
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
