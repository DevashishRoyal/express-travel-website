// import React from 'react';
// import { FaCar, FaUsers, FaClock, FaShieldAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

// export default function Services() {
//   const services = [
//     {
//       icon: FaCar,
//       title: 'Luxury Car Rental',
//       shortDesc: 'Premium vehicles with 24/7 support',
//       details: 'Experience unparalleled luxury with our meticulously maintained fleet of premium vehicles. From business travel to special occasions, we have the perfect vehicle for every journey.',
//       features: ['Latest Models', 'GPS Tracking', '24/7 Support']
//     },
//     {
//       icon: FaUsers,
//       title: 'Corporate Services',
//       shortDesc: 'Professional solutions for businesses',
//       details: 'Tailored transportation solutions for corporate clients, including executive cars, airport transfers, and event transport services.',
//       features: ['Executive Cars', 'Airport Transfers', 'Event Transport']
//     },
//     {
//       icon: FaClock,
//       title: 'Airport Transfers',
//       shortDesc: 'Reliable nationwide transfers',
//       details: 'Seamless airport pickup and drop-off services with flight tracking, meet & greet, and guaranteed on-time performance.',
//       features: ['Flight Tracking', 'Meet & Greet', 'On-time Service']
//     },
//     {
//       icon: FaShieldAlt,
//       title: 'VIP Concierge',
//       shortDesc: 'Personalized luxury experience',
//       details: 'Exclusive VIP concierge services with personal drivers, luxury vehicles, and premium service for discerning clients.',
//       features: ['Personal Driver', 'Luxury Vehicles', 'Premium Service']
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative w-full md:h-[700px] h-[500px] overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
//         {/* Enhanced Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/80 to-blue-900/60"></div>

//         {/* Floating Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
//           <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
//           <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-500"></div>
//         </div>

//         {/* Content */}
//         <div className="absolute inset-0 flex items-center">
//           <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               {/* Left Content */}
//               <div className="text-white space-y-8">
//                 <div className="space-y-4">
//                   <div className="inline-block px-4 py-2 bg-yellow-400/20 backdrop-blur-sm rounded-full text-yellow-300 text-sm font-semibold">
//                     ETC Luxury Car Rental Services
//                   </div>
//                   <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
//                     Premium <span className="text-yellow-400">Services</span> for Every Journey
//                   </h1>
//                   <p className="text-lg text-blue-100 leading-relaxed">
//                     Premium vehicles for every occasion with 24/7 support.
//                   </p>
//                 </div>

//                 {/* CTA Buttons */}
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
//                     Book Your Service
//                     <FaArrowRight className="ml-2" />
//                   </button>
//                   <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full transition-all duration-300">
//                     Get Quote
//                   </button>
//                 </div>
//               </div>

//               {/* Right Content - Stats */}
//               <div className="hidden lg:block">
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
//                     <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400/20 rounded-xl mb-4">
//                       <FaCar className="text-yellow-400 text-xl" />
//                     </div>
//                     <div className="text-3xl font-bold text-white mb-1">50+</div>
//                     <div className="text-blue-100 text-sm">Premium Vehicles</div>
//                   </div>
//                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
//                     <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400/20 rounded-xl mb-4">
//                       <FaUsers className="text-yellow-400 text-xl" />
//                     </div>
//                     <div className="text-3xl font-bold text-white mb-1">1000+</div>
//                     <div className="text-blue-100 text-sm">Happy Customers</div>
//                   </div>
//                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
//                     <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400/20 rounded-xl mb-4">
//                       <FaClock className="text-yellow-400 text-xl" />
//                     </div>
//                     <div className="text-3xl font-bold text-white mb-1">24/7</div>
//                     <div className="text-blue-100 text-sm">Available</div>
//                   </div>
//                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
//                     <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400/20 rounded-xl mb-4">
//                       <FaShieldAlt className="text-yellow-400 text-xl" />
//                     </div>
//                     <div className="text-3xl font-bold text-white mb-1">100%</div>
//                     <div className="text-blue-100 text-sm">Safety Record</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
//               Our Services
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//               Comprehensive <span className="text-blue-600">Transportation</span> Solutions
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Complete range of premium transportation services
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
//                   <service.icon className="text-white text-2xl" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
//                 <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

//                 {/* Service Features */}
//                 <div className="space-y-2">
//                   {service.features.map((feature, featureIndex) => (
//                     <div key={featureIndex} className="flex items-center text-sm text-gray-600">
//                       <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
//                       {feature}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Service Details */}
//       <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//               Service <span className="text-yellow-400">Details</span>
//             </h2>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//               Discover the comprehensive details of our premium transportation services
//             </p>
//           </div>

//           <div className="space-y-12">
//             {services.map((service, index) => (
//               <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
//                 <div className="grid lg:grid-cols-2 gap-8 items-center">
//                   <div>
//                     <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400/20 rounded-2xl mb-6">
//                       <service.icon className="text-yellow-400 text-2xl" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
//                     <p className="text-blue-100 leading-relaxed mb-6">{service.details}</p>

//                     {/* Service Features */}
//                     <div className="grid grid-cols-2 gap-4">
//                       {service.features.map((feature, featureIndex) => (
//                         <div key={featureIndex} className="flex items-center text-blue-100">
//                           <FaCheckCircle className="text-yellow-400 mr-3 flex-shrink-0" />
//                           {feature}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* 3D Image Placeholder */}
//                   <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl h-64 flex items-center justify-center">
//                     <div className="text-blue-600 text-lg font-semibold">3D Image Coming Soon</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//             Ready to Experience Our <span className="text-yellow-400">Premium Services</span>?
//           </h2>
//           <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//             Contact us today to discuss your transportation needs and discover how we can make your journey exceptional.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
//               Call +91-9786628662
//             </button>
//             <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full transition-all duration-300 text-lg">
//               Send Inquiry
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import React from 'react';
import {
  FaCar,
  FaUsers,
  FaClock,
  FaShieldAlt,
  FaCheckCircle,
  FaStar,
  FaArrowRight
} from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: FaCar,
      title: "Luxury Car Rental",
      description:
        "Premium luxury sedans, SUVs & high–end chauffeured vehicles for corporate, VIP, airport & personal travel.",
      image:
        "https://images.unsplash.com/photo-1617469165781-d69efb83b7bd?w=1200&q=80",
      features: ["Latest Models", "GPS Tracking", "24/7 Support"]
    },
    {
      icon: FaUsers,
      title: "Corporate Travel Services",
      description:
        "Tailored mobility solutions for MNCs—employee transport, corporate events, daily commute & executive travel.",
      image:
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200&q=80",
      features: ["Executive Cars", "Airport Transfers", "Event Transport"]
    },
    {
      icon: FaClock,
      title: "Airport Transfers",
      description:
        "Dedicated airport transfer fleet with flight tracking, meet & greet assistance & guaranteed punctuality.",
      image:
        "https://images.unsplash.com/photo-1616769354546-d7e3750084a1?w=1200&q=80",
      features: ["Flight Tracking", "Meet & Greet", "On-Time Service"]
    },
    {
      icon: FaShieldAlt,
      title: "VIP Concierge Services",
      description:
        "Exclusive premium chauffeur experience for high-profile guests, celebrities, ambassadors & business leaders.",
      image:
        "https://images.unsplash.com/photo-1583121274602-3e2821c210d9?w=1200&q=80",
      features: ["Personal Driver", "Premium Fleet", "Discreet Service"]
    },
    {
      icon: FaStar,
      title: "Event Car Rental",
      description:
        "Large-scale, professional event transportation for corporate events, concerts, delegations & conferences.",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80",
      features: ["Bulk Fleet", "Coordinators", "On-ground Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[450px] md:h-[580px] flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600')"
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Premium <span className="text-yellow-400">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
            Comprehensive transportation solutions designed for
            corporates, VIPs, events, airport transfers & luxury travel needs.
          </p>

          <button className="mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold py-3 px-8 rounded-full shadow-lg inline-flex items-center">
            Book Now <FaArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* SERVICES LIST (Horizontal sections) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center`}
            >
              {/* TEXT */}
              <div
                className={`space-y-5 ${
                  index % 2 !== 0 ? "order-2 lg:order-1" : ""
                }`}
              >
                <service.icon className="text-blue-600 text-4xl" />

                <h2 className="text-3xl font-bold text-gray-900">
                  {service.title}
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center text-gray-700 text-sm"
                    >
                      <FaCheckCircle className="text-green-500 mr-2" /> {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* IMAGE */}
              <div
                className={`rounded-xl overflow-hidden shadow-md ${
                  index % 2 !== 0 ? "order-1 lg:order-2" : ""
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[300px] md:h-[380px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Experience the <span className="text-yellow-400">ETC Advantage</span>
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Contact us today to explore our professional luxury transportation solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-full hover:bg-yellow-500 transition-all text-lg shadow-lg">
              Call +91-9786628662
            </button>

            <button className="bg-white/10 border border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-blue-900 transition-all text-lg shadow-lg">
              Send Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
