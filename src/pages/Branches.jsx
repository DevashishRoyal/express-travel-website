import React, { useState, useRef, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCar, FaRoute, FaStar } from 'react-icons/fa';

export default function Branches() {
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

  const branches = [
    {
      city: 'Bangalore',
      location: 'Sahakaranagar',
      address: '1038/2, 23rd Main Road, A Block, Sahakaranagar, Bangalore - 560092',
      email: 'blr@expresstravelcorp.com',
      phone: '+91 7200091167',
      services: ['Luxury Car Rental', 'Airport Transfers', 'Corporate Services', 'Wedding Cars'],
      operatingHours: '24/7 Available',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&h=600&fit=crop',
      color: 'from-blue-600 to-blue-700'
    },
    {
      city: 'Bhopal',
      location: 'Hoshangabad Road',
      address: 'Flat Number F-05, Shri Ram Complex, Shri Ram Colony, Hoshangabad Road, Bhopal - 462026',
      email: 'bhopal@expresstravelcorp.com',
      phone: '+91 7200091168',
      services: ['Luxury Car Rental', 'Airport Transfers', 'Corporate Services', 'Event Transportation'],
      operatingHours: '24/7 Available',
      image: 'https://images.unsplash.com/photo-1582515073490-39981397c445?w=800&h=600&fit=crop',
      color: 'from-green-600 to-green-700'
    },
    {
      city: 'Mahipalpur',
      location: 'Delhi NCR',
      address: 'K68 2nd Floor, Vasant Kunj Road, Mahipalpur – 110037 Landmark- Opposite TVS Ahinsa',
      email: 'delhi@expresstravelcorp.com',
      phone: '+91 7845103222',
      services: ['Luxury Car Rental', 'Airport Transfers', 'Corporate Services', 'VIP Transportation'],
      operatingHours: '24/7 Available',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop',
      color: 'from-purple-600 to-purple-700'
    }
  ];

  const stats = [
    { icon: FaMapMarkerAlt, number: '3', label: 'Strategic Locations' },
    { icon: FaCar, number: '50+', label: 'Vehicles Across Cities' },
    { icon: FaRoute, number: '15+', label: 'Cities Served' },
    { icon: FaStar, number: '24/7', label: 'Service Availability' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        {/* Car Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=800&fit=crop"
            alt="Luxury Car Network"
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
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              Nationwide Presence
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Our <span className="text-yellow-400">Branches</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Strategic locations across India ensuring premium car rental services are always within reach
            </p>
          </div>

          {/* Branch Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                ref={setRef(index)}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center transform transition-all duration-1000 ${
                  isVisible[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400/20 rounded-xl mb-4">
                  <stat.icon className="text-yellow-400 text-xl" />
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-1">{stat.number}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Visit Our <span className="text-blue-600">Locations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently located branches ready to serve your luxury car rental needs across major cities
            </p>
          </div>

          <div className="space-y-20">
            {branches.map((branch, index) => (
              <div
                key={index}
                ref={setRef(index + 4)}
                className={`transform transition-all duration-1000 ${
                  isVisible[index + 4] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative group">
                      <div className={`absolute -inset-4 bg-gradient-to-r ${branch.color} rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000`}></div>
                      <div className="relative bg-white rounded-2xl p-2 shadow-2xl overflow-hidden">
                        <img
                          src={branch.image}
                          alt={`${branch.city} Branch`}
                          className="w-full h-80 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className={`absolute top-4 left-4 bg-gradient-to-r ${branch.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                          {branch.city}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{branch.city}</h3>
                        <p className="text-lg text-gray-600 mb-4">{branch.location}</p>
                      </div>

                      {/* Address */}
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
                        <div className="flex items-start space-x-3">
                          <FaMapMarkerAlt className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">Address</h4>
                            <p className="text-gray-700 leading-relaxed">{branch.address}</p>
                          </div>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                          <div className="flex items-center space-x-3">
                            <FaPhone className="text-green-600 text-xl flex-shrink-0" />
                            <div>
                              <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                              <p className="text-gray-700">{branch.phone}</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100">
                          <div className="flex items-center space-x-3">
                            <FaEnvelope className="text-purple-600 text-xl flex-shrink-0" />
                            <div>
                              <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                              <p className="text-gray-700">{branch.email}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Operating Hours */}
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-100">
                        <div className="flex items-center space-x-3">
                          <FaClock className="text-yellow-600 text-xl flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Operating Hours</h4>
                            <p className="text-gray-700">{branch.operatingHours}</p>
                          </div>
                        </div>
                      </div>

                      {/* Services */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Services Available</h4>
                        <div className="flex flex-wrap gap-3">
                          {branch.services.map((service, i) => (
                            <span key={i} className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                              <FaCar className="mr-2" />
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <button className={`bg-gradient-to-r ${branch.color} hover:opacity-90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                          Book at {branch.city} Branch
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Find Us <span className="text-blue-600">Easily</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic locations ensure convenient access to premium car rental services
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <FaMapMarkerAlt className="text-blue-600 text-6xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600 mb-6">Find our branches and get directions</p>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View Interactive Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-yellow-400">Visit</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Visit any of our branches for personalized luxury car rental services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Call +91-9786628662
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300">
              Get Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
