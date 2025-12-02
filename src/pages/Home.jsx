import React, { useRef } from 'react';
import HeroSlider from '../components/HeroSlider';
import FloatingActionButton from '../components/FloatingActionButton';
import VehicleGrid from '../components/VehicleGrid';
import CertificationsSection from '../components/certifications';
import TestimonialsSection from '../components/Testimonials';
import { vehicles } from "../utils/vehiclesData";
import { FaCar, FaStar, FaCheckCircle, FaMapMarkerAlt, FaHandshake } from 'react-icons/fa';

export default function Home({ favorites, toggleFavorite }) {
  const observerRefs = useRef([]);

  let setRef = (index) => (el) => {
    observerRefs.current[index] = el;
  };

  const featuredVehicles = vehicles.slice(0, 6);

  const services = [
    {
      title: 'Luxury Car Rental',
      description: 'Premium vehicles for every occasion with 24/7 support',
      icon: FaCar,
      color: 'from-blue-500 to-blue-600',
      features: ['Latest Models', 'GPS Tracking', '24/7 Support']
    },
    {
      title: 'Corporate Services',
      description: 'Professional transportation solutions for businesses',
      icon: FaHandshake,
      color: 'from-green-500 to-green-600',
      features: ['Executive Cars', 'Airport Transfers', 'Event Transport']
    },
    {
      title: 'Airport Transfers',
      description: 'Reliable pickup and drop-off services nationwide',
      icon: FaMapMarkerAlt,
      color: 'from-purple-500 to-purple-600',
      features: ['On-time Service', 'Flight Tracking', 'Meet & Greet']
    },
    {
      title: 'VIP Concierge',
      description: 'Personalized luxury transportation experience',
      icon: FaStar,
      color: 'from-orange-500 to-orange-600',
      features: ['Personal Driver', 'Luxury Vehicles', 'Premium Service']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Modern Animated Hero Section */}
      <HeroSlider />



      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">ETC</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of choosing Express Travel Corporate Services for your transportation needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                ref={setRef(index + 4)}
                className={`group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 translate-y-0 opacity-100`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                {/* Service Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Featured Vehicles
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Premium Fleet</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our handpicked selection of luxury vehicles, each maintained to the highest standards
            </p>
          </div>

          <VehicleGrid vehicles={featuredVehicles} favorites={favorites} toggleFavorite={toggleFavorite} showTitle={false} />

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All Vehicles
            </button>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Experience <span className="text-yellow-400">Luxury</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your luxury vehicle today and experience the ETC difference. Professional service, premium cars, unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
              Book Now - Call +91-9786628662
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 text-lg">
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
}
