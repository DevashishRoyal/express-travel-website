// import React, { useState, useRef, useEffect } from 'react';
// import { Heart, Fuel, Gauge, Settings, Star, Calendar, Users, Shield, CheckCircle } from 'lucide-react';

// export default function VehicleGrid({ vehicles = [], favorites = [], toggleFavorite = () => {}, showTitle = true }) {
//   const [isVisible, setIsVisible] = useState({});
//   const observerRefs = useRef([]);

//   useEffect(() => {
//     const observers = observerRefs.current.map((ref, index) => {
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setIsVisible(prev => ({ ...prev, [index]: true }));
//           }
//         },
//         { threshold: 0.1 }
//       );

//       if (ref) observer.observe(ref);
//       return observer;
//     });

//     return () => {
//       observers.forEach(observer => observer.disconnect());
//     };
//   }, []);

//   let setRef = (index) => (el) => {
//     observerRefs.current[index] = el;
//   };

//   // ensure favorites is an array
//   const favArr = Array.isArray(favorites) ? favorites : [];

//   return (
//     <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-4">
//         {showTitle && (
//           <div className="mb-16 text-center">
//             <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
//               Luxury Car Rental Fleet
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//               Choose Your <span className="text-blue-600">Perfect Ride</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Experience luxury and comfort with our premium collection of rental vehicles
//             </p>
//           </div>
//         )}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {vehicles.map((vehicle, index) => (
//             <div
//               key={vehicle.id}
//               ref={setRef(index)}
//               className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
//                 isVisible[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//               }`}
//               style={{ transitionDelay: `${index * 100}ms` }}
//             >
//               {/* Image Section */}
//               <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden group">
//                 <img
//                   src={vehicle.image}
//                   alt={vehicle.name}
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                 {/* Favorite Button */}
//                 <button
//                   onClick={() => toggleFavorite(vehicle.id)}
//                   className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300"
//                 >
//                   <Heart
//                     className={`w-5 h-5 transition-all ${
//                       favArr.includes(vehicle.id)
//                         ? 'fill-red-500 text-red-500'
//                         : 'text-gray-600 hover:text-red-500'
//                     }`}
//                   />
//                 </button>

//                 {/* Rating */}
//                 <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
//                   <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                   <span className="text-sm font-semibold text-gray-800">4.8</span>
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
//                   {vehicle.name}
//                 </h3>

//                 <div className="flex items-center justify-between mb-4">
//                   <div className="text-2xl font-bold text-blue-600">
//                     ₹{vehicle.price.toLocaleString()}
//                     <span className="text-sm font-normal text-gray-500">/day</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <Shield className="w-4 h-4 text-green-500" />
//                     <span className="text-sm text-gray-600">Insured</span>
//                   </div>
//                 </div>

//                 {/* Vehicle Specs */}
//                 <div className="grid grid-cols-3 gap-4 mb-6">
//                   <div className="text-center p-3 bg-gray-50 rounded-lg">
//                     <Fuel className="w-5 h-5 mx-auto mb-2 text-blue-600" />
//                     <p className="text-xs text-gray-500 mb-1">Fuel</p>
//                     <p className="font-semibold text-gray-800 text-sm">{vehicle.fuelType}</p>
//                   </div>
//                   <div className="text-center p-3 bg-gray-50 rounded-lg">
//                     <Gauge className="w-5 h-5 mx-auto mb-2 text-blue-600" />
//                     <p className="text-xs text-gray-500 mb-1">Mileage</p>
//                     <p className="font-semibold text-gray-800 text-sm">{vehicle.mileage}</p>
//                   </div>
//                   <div className="text-center p-3 bg-gray-50 rounded-lg">
//                     <Settings className="w-5 h-5 mx-auto mb-2 text-blue-600" />
//                     <p className="text-xs text-gray-500 mb-1">Transmission</p>
//                     <p className="font-semibold text-gray-800 text-sm">{vehicle.transmission}</p>
//                   </div>
//                 </div>

//                 {/* Features */}
//                 <div className="mb-6">
//                   <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
//                     <span className="flex items-center">
//                       <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
//                       24/7 Support
//                     </span>
//                     <span className="flex items-center">
//                       <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
//                       GPS Tracking
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between text-sm text-gray-600">
//                     <span className="flex items-center">
//                       <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
//                       Free Delivery
//                     </span>
//                     <span className="flex items-center">
//                       <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
//                       Maintenance
//                     </span>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex space-x-3">
//                   <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
//                     Book Now
//                   </button>
//                   <button className="px-4 py-3 border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 font-semibold rounded-xl transition-all duration-300">
//                     Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16">
//           <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
//             <h3 className="text-2xl lg:text-3xl font-bold mb-4">
//               Need a Different Vehicle?
//             </h3>
//             <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
//               Can't find what you're looking for? Contact us for custom rental options and special requests.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl transition-all duration-300">
//                 Contact Us
//               </button>
//               <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-xl transition-all duration-300">
//                 View All Vehicles
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Heart } from 'lucide-react';

export default function VehicleGrid({
  vehicles,
  favorites,
  toggleFavorite,
  showTitle = true,
  priceType = "metro",
}) {

  const getPricing = (vehicle) => {
    if (!vehicle.pricing) return null;

    // luxury vehicles have "luxury" pricing
    if (vehicle.pricing.luxury && priceType === "luxury") {
      return vehicle.pricing.luxury;
    }

    // fallback to metro or tier2
    return vehicle.pricing[priceType] || vehicle.pricing.metro;
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {vehicles.map((vehicle) => {
          const price = getPricing(vehicle);

          return (
            <div
              key={vehicle.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-52 bg-gray-100">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {vehicle.name}
                </h3>

                {/* Pricing */}
                <p className="text-xl font-bold text-gray-900 mb-1">
                  ₹ {price?.hr8_80?.toLocaleString()} / 8Hrs 80Km
                </p>

                <p className="text-sm text-gray-600 mb-4">
                  Extra Km: ₹{price?.exKm} • Extra Hour: ₹{price?.exHour}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-3 mb-5">

                  <div className="text-center">
                    <p className="text-gray-500 text-xs mb-1">Fuel</p>
                    <p className="font-semibold text-gray-800 text-sm">{vehicle.fuelType}</p>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-500 text-xs mb-1">Seats</p>
                    <p className="font-semibold text-gray-800 text-sm">{vehicle.seats}</p>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-500 text-xs mb-1">Type</p>
                    <p className="font-semibold text-gray-800 text-sm capitalize">{vehicle.type}</p>
                  </div>

                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                    VIEW DETAILS
                  </button>

                  <button
                    onClick={() => toggleFavorite(vehicle.id)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.includes(vehicle.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
