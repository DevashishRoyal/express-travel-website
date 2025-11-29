import React, { useState, useRef, useEffect } from 'react';
import VehicleGrid from '../components/VehicleGrid';
import { vehicles } from '../utils/vehiclesData';
import { FaCar, FaUsers, FaClock, FaShieldAlt, FaStar, FaCheckCircle, FaSearch } from 'react-icons/fa';

export default function LuxuryCar({ favorites, toggleFavorite }) {
  const [isVisible, setIsVisible] = useState({});
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
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

  const carTypes = [
    { id: 'all', label: 'All Vehicles', icon: FaCar },
    { id: 'sedan', label: 'Sedans', icon: FaCar },
    { id: 'suv', label: 'SUVs', icon: FaCar },
    { id: 'luxury', label: 'Luxury', icon: FaStar },
    { id: 'sports', label: 'Sports Cars', icon: FaCar }
  ];

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesType = filterType === 'all' || vehicle.type === filterType;
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const stats = [
    { icon: FaCar, number: '50+', label: 'Vehicles' },
    { icon: FaUsers, number: '1000+', label: 'Happy Customers' },
    { icon: FaClock, number: '24/7', label: 'Service' },
    { icon: FaShieldAlt, number: '100%', label: 'Insured' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              ETC Luxury Car Rental
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Luxury Cars for <span className="text-yellow-400">Every Occasion</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Experience the pinnacle of automotive luxury with our meticulously maintained fleet of premium vehicles.
              From elegant sedans to powerful SUVs, find your perfect ride.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  ref={setRef(index)}
                  className={`text-center transform transition-all duration-1000 ${
                    isVisible[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-3">
                    <stat.icon className="text-yellow-400 text-2xl" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
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

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search vehicles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {carTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setFilterType(type.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    filterType === type.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <type.icon className="text-sm" />
                  <span>{type.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-8">
            <p className="text-center text-gray-600">
              Showing {filteredVehicles.length} of {vehicles.length} vehicles
            </p>
          </div>
          <VehicleGrid
            vehicles={filteredVehicles}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            showTitle={false}
          />
        </div>
      </section>

      {/* Why Choose Our Fleet */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose Our <span className="text-yellow-400">Luxury Fleet</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience excellence in every detail with our premium rental service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-2xl mb-6">
                <FaShieldAlt className="text-gray-900 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fully Insured</h3>
              <p className="text-gray-300 leading-relaxed">
                Complete insurance coverage for peace of mind during your rental period.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-2xl mb-6">
                <FaClock className="text-gray-900 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">24/7 Support</h3>
              <p className="text-gray-300 leading-relaxed">
                Round-the-clock customer support and roadside assistance whenever you need it.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-2xl mb-6">
                <FaCheckCircle className="text-gray-900 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Well Maintained</h3>
              <p className="text-gray-300 leading-relaxed">
                All vehicles undergo regular maintenance and are less than 30 months old.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Experience <span className="text-yellow-400">Luxury</span>?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your premium vehicle today and elevate your journey with ETC Luxury Car Rental
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
              Browse All Vehicles
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-full transition-all duration-300 text-lg">
              Call +91-9786628662
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
