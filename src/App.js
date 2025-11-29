// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import LuxuryCar from './pages/LuxuryCar';
// import Team from './pages/Team';
// import Clients from './pages/Clients';
// import Tariff from './pages/Tariff';
// import Branches from './pages/Branches';
// import Header from './components/Header';
// import Nav from './components/Nav';
// import Footer from './components/Footer';
// export default function ExpressTravelWebsite() {
//   const [favorites, setFavorites] = useState([]);
//   const [currentPage, setCurrentPage] = useState('home');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // Vehicles data moved to utils/vehiclesData.js

//   const toggleFavorite = (id) => {
//     setFavorites(prev => 
//       prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
//     );
//   };

//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About Us' },
//     { id: 'services', label: 'Services' },
//     { id: 'luxury-car', label: 'Luxury Car' },
//     { id: 'team', label: 'Team' },
//     { id: 'clients', label: 'Clients' },
//     { id: 'tariff', label: 'Tariff' },
//     { id: 'branches', label: 'Branches' }
//   ];

//   const renderPage = () => {
//     switch(currentPage) {
//       case 'home':
//         return <Home vehicles={vehicles} favorites={favorites} toggleFavorite={toggleFavorite} />;
//       case 'about':
//         return <About />;
//       case 'services':
//         return <Services />;
//       case 'luxury-car':
//         return <LuxuryCar vehicles={vehicles} favorites={favorites} toggleFavorite={toggleFavorite} />;
//       case 'team':
//         return <Team />;
//       case 'clients':
//         return <Clients />;
//       case 'tariff':
//         return <Tariff />;
//       case 'branches':
//         return <Branches />;
//       default:
//         return <Home vehicles={vehicles} favorites={favorites} toggleFavorite={toggleFavorite} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header Components - Commented out original code */}
//       {/*
//       <div className="bg-blue-900 text-white py-2 px-4 mainuppernav hidden md:block">
//         <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
//           <div className="flex items-center space-x-6">
//             <FaEnvelope className="w-6 h-6 hover:text-blue-600 cursor-pointer" /><span>bookings@expresstravelcorp.com</span>
//             <FaPhone className="w-6 h-6 hover:text-blue-600 cursor-pointer" /><span>+91-9786628662</span>
//           </div>
//            <div className="flex gap-4 ml-6 text-white-700">
//             <FaFacebook className="w-6 h-6 hover:text-blue-600 cursor-pointer" />
//             <FaInstagram className="w-6 h-6 hover:text-pink-600 cursor-pointer" />
//             <FaLinkedin className="w-6 h-6 hover:text-blue-700 cursor-pointer" />
//             <FaYoutube className="w-6 h-6 hover:text-red-600 cursor-pointer" />
//           </div>

//         </div>
//       </div>

//       <header className="bg-white shadow-sm sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
//               <img
//                 src="/LOGO 2.jpg"
//                 alt="ETC Logo"
//                 className="h-[60px] w-auto mr-3"
//               />

//             </div>

//             <nav className="hidden lg:flex space-x-8 text-base font-medium">
//               {navItems.map(item => (
//                 <button
//                   key={item.id}
//                   onClick={() => setCurrentPage(item.id)}
//                   className={`hover:text-blue-600 transition-colors ${
//                     currentPage === item.id ? 'text-blue-600 font-semibold' : 'text-gray-700'
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </nav>

//             <button
//               className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>

//           {mobileMenuOpen && (
//             <div className="lg:hidden pb-4 border-t mt-4 pt-4">
//               <nav className="flex flex-col space-y-3">
//                 {navItems.map(item => (
//                   <button
//                     key={item.id}
//                     onClick={() => {
//                       setCurrentPage(item.id);
//                       setMobileMenuOpen(false);
//                     }}
//                     className={`text-left py-2 px-2 hover:bg-gray-50 rounded transition-colors ${
//                       currentPage === item.id ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700'
//                     }`}
//                   >
//                     {item.label}
//                   </button>
//                 ))}
//               </nav>
//             </div>
//           )}
//         </div>
//       </header>
//       */}

//       {/* New Header Components */}
//       <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
//       <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} navItems={navItems} />

//       {/* Page Content */}
//       {renderPage()}

//       {/* Footer */}
//       <Footer setCurrentPage={setCurrentPage} />
//     </div>
//   );
// }

// // Home Page Component
// function HomePage({ vehicles, favorites, toggleFavorite }) {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative w-full md:h-[600px] h-[400px] overflow-hidden">
//   {/* Carousel Background */}
//   <div className="absolute inset-0">
//     <CarouselBackground />
//   </div>

//   {/* Gradient Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/70 to-transparent"></div>

//   {/* Content */}
//   <div className="absolute inset-0 flex items-center">
//     <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
//       <div className="text-white max-w-xl z-10">
//         <h1 className="text-5xl font-bold mb-4 leading-tight">
//           Express Travel<br />
//           Corporate Services<br />
//           LLP
//         </h1>
//         <p className="text-base leading-relaxed">
//           Today Has Become A Very<br />
//           Successful Entrepreneur In Operating All<br />
//           Kinds Of Luxury Cars
//         </p>
//       </div>
//     </div>
//   </div>
// </section>


// <CertificationsSection />
//       {/* Vehicles Section */}
//       <VehicleGrid vehicles={vehicles} favorites={favorites} toggleFavorite={toggleFavorite} />
//       <TestimonialsSection/>
//     <LogoScroll  />
//     </>
//   );
// }

// // About Page Component
// function AboutPage() {
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

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-white to-blue-600 min-h-screen flex items-center overflow-hidden">
//         <div className="container mx-auto px-6 lg:px-12">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div 
//               ref={setRef(0)}
//               className={`space-y-6 transform transition-all duration-1000 ${
//                 isVisible[0] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
//               }`}
//             >
//               <h1 className="text-5xl lg:text-6xl font-bold text-black mb-8">
//                 ABOUT US
//               </h1>
              
//               <div className="space-y-4">
//                 <h2 className="text-4xl lg:text-5xl font-bold">
//                   DRIVE IN THE
//                 </h2>
//                 <h2 className="text-4xl lg:text-5xl font-bold text-blue-600">
//                   CITY
//                 </h2>
//                 <h2 className="text-4xl lg:text-5xl font-bold">
//                   & <span className="text-blue-600">OUTSTATION</span>
//                 </h2>
//               </div>

//               <p className="text-2xl font-semibold text-gray-800 mt-6">
//                 A CAR FOR EVERY NEED
//               </p>

//               <p className="text-lg text-gray-700 italic mt-4">
//                 "We have a range of cars, so something will perfectly fit your trip".
//               </p>

//               <div className="mt-8 space-y-4">
//                 <p className="text-sm text-gray-800 leading-relaxed">
//                   <span className="font-bold">EXPRESS TRAVEL CORPORATE SERVICES LLP</span> today has become a very Successful 
//                   Entrepreneur in operating all kinds of Luxury cars to Corporate clients like British Deputy High 
//                   Commission, Birla Soft, Taj Group of Hotels, ITC Park Sheraton Hotels, Karino Metal Withlo, Dun 
//                   & Brad Travis Union Ltd, Oxford University Press, Reliance Petro Marketing etc., with keen 
//                   interest in the Travel Industry since 1996.
//                 </p>
//               </div>
//             </div>

//             {/* Right Content - Car Image */}
//             <div 
//               ref={setRef(1)}
//               className={`relative transform transition-all duration-1000 delay-300 ${
//                 isVisible[1] ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-20 opacity-0 scale-95'
//               }`}
//             >
//               <div className="relative ">
//                 <img 
//                   src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop" 
//                   alt="BMW X7 Luxury SUV"
//                   className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Company Info Section */}
//       <section 
//         ref={setRef(2)}
//         className={`py-20 bg-gray-50 transform transition-all duration-1000 ${
//           isVisible[2] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
//         }`}
//       >
//         <div className="container mx-auto px-6 lg:px-12">
//           <div className="max-w-5xl mx-auto space-y-6 text-gray-800">
//             <p className="text-base leading-relaxed">
//               With dynamic leadership and hard work our vision has enabled the group to carve a special NICHE in the Travel 
//               industry operating nearly 50 fleets from TATA INDICA to MERCEDES BENZ E CLASS.
//             </p>
            
//             <p className="text-base leading-relaxed">
//               Our Business philosophy is based on our belief that Clients are our Prime Assets and nurture culture which is 
//               founded on our TRUST, PRIDE and TEAM WORK.
//             </p>
            
//             <p className="text-base leading-relaxed">
//               We have operations in all MAJOR CITIES through out INDiA and we accept all CREDIT CARDS and we prefer ONLINE 
//               BOOKING also. We maintain the age of the vehicles not to exceed 30 months.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Scope and Objectives Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6 lg:px-12">
//           <h2 
//             ref={setRef(3)}
//             className={`text-4xl lg:text-5xl font-bold text-center mb-16 transform transition-all duration-1000 ${
//               isVisible[3] ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
//             }`}
//           >
//             Scope and Objectives
//           </h2>

//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Car Image */}
//             <div 
//               ref={setRef(4)}
//               className={`relative transform transition-all duration-1000 delay-200 ${
//                 isVisible[4] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
//               }`}
//             >
//               <div className="relative overflow-hidden rounded-lg shadow-2xl group">
//                 <img 
//                   src="https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&h=600&fit=crop" 
//                   alt="Luxury Blue Sports Car"
//                   className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
//                 />
//               </div>
//             </div>

//             {/* Content */}
//             <div 
//               ref={setRef(5)}
//               className={`space-y-6 transform transition-all duration-1000 delay-400 ${
//                 isVisible[5] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
//               }`}
//             >
//               <p className="text-base text-gray-800 leading-relaxed">
//                 ETC. offers PAN India services to the clients and has branch office operations in Chennai, Bangalora, 
//                 Hyderabad, Ahmedabad, New Delhi, Bhopal and Pune. We also operate in cities like Mumbai, Kolkata, Surat 
//                 and majorcities throughout India.
//               </p>

//               <p className="text-base text-gray-800 leading-relaxed">
//                 Looking at the growing demand in tier 2 and tier 3 cities, we have effectively expanded our services to 
//                 theseareas for commercial and corporate ground transportation
//               </p>

//               <p className="text-base text-gray-800 leading-relaxed">
//                 ETC is equipped with a in-house technology and new age mobile tool app to cater the needs of 
//                 Corporateemployees and Travel managers. Our technology is engineered to deliver cost effective, transparent 
//                 andreliable travel experience.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

      

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// // Services Page Component
// function ServicesPage() {
//   const services = [
//     {
//       title: 'Corporate Travel',
//       description: 'Professional transportation services for corporate clients with luxury vehicles and experienced drivers.',
//       icon: '🏢'
//     },
//     {
//       title: 'Airport Transfers',
//       description: 'Reliable and timely airport pickup and drop-off services with meet and greet options.',
//       icon: '✈️'
//     },
//     {
//       title: 'Event Transportation',
//       description: 'Premium transportation solutions for weddings, conferences, and special events.',
//       icon: '🎉'
//     },
//     {
//       title: 'Luxury Car Rental',
//       description: 'Wide range of luxury vehicles available for short-term and long-term rentals.',
//       icon: '🚗'
//     },
//     {
//       title: 'Chauffeur Services',
//       description: 'Professional chauffeurs trained to provide exceptional service and safe driving.',
//       icon: '👔'
//     },
//     {
//       title: 'Tour Packages',
//       description: 'Customized tour packages with comfortable transportation and experienced guides.',
//       icon: '🗺️'
//     }
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
//         <p className="text-center text-gray-600 mb-12">Comprehensive transportation solutions for all your needs</p>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
//               <div className="text-4xl mb-4">{service.icon}</div>
//               <h3 className="text-xl font-bold mb-3">{service.title}</h3>
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // Luxury Car Page Component
// function LuxuryCarPage({ vehicles, favorites, toggleFavorite }) {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-4">Luxury Car Fleet</h2>
//         <p className="text-center text-gray-600 mb-12">Experience luxury with our premium vehicle collection</p>
//         <VehicleGrid vehicles={vehicles} favorites={favorites} toggleFavorite={toggleFavorite} showTitle={false} />
//       </div>
//     </section>
//   );
// }

// // Team Page Component
// function TeamPage() {
//   const team = [
//     { name: 'John Doe', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
//     { name: 'Jane Smith', role: 'Operations Manager', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop' },
//     { name: 'Mike Johnson', role: 'Fleet Manager', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop' },
//     { name: 'Sarah Williams', role: 'Customer Relations', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop' }
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {team.map((member, index) => (
//             <div key={index} className="text-center">
//               <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg" />
//               <h3 className="text-xl font-bold mb-1">{member.name}</h3>
//               <p className="text-gray-600">{member.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // Clients Page Component
// function ClientsPage() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12">Our Clients</h2>
//         <p className="text-center text-gray-600 mb-12">Trusted by leading companies and organizations</p>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//             <div key={i} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32">
//               <span className="text-gray-400 text-lg font-semibold">Client Logo {i}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // Tariff Page Component
// function TariffPage() {
//   const tariffs = [
//     { vehicle: 'Sedan', rate: '₹15/km', minimum: '₹500', description: 'Comfortable sedan for city travel' },
//     { vehicle: 'SUV', rate: '₹20/km', minimum: '₹700', description: 'Spacious SUV for family trips' },
//     { vehicle: 'Luxury Sedan', rate: '₹30/km', minimum: '₹1000', description: 'Premium luxury experience' },
//     { vehicle: 'Luxury SUV', rate: '₹40/km', minimum: '₹1500', description: 'Top-tier luxury SUV' }
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-5xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12">Tariff Plans</h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           {tariffs.map((tariff, index) => (
//             <div key={index} className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
//               <h3 className="text-2xl font-bold mb-2">{tariff.vehicle}</h3>
//               <p className="text-gray-600 mb-4">{tariff.description}</p>
//               <div className="flex justify-between items-center mb-2">
//                 <span className="text-gray-700">Per Kilometer:</span>
//                 <span className="text-xl font-bold text-blue-600">{tariff.rate}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-700">Minimum Charge:</span>
//                 <span className="text-lg font-semibold">{tariff.minimum}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // Branches Page Component
// function BranchesPage() {
//   const branches = [
//     { city: 'Mumbai', address: '123 Marine Drive, Mumbai - 400001', phone: '+91 22 1234 5678' },
//     { city: 'Delhi', address: '456 Connaught Place, New Delhi - 110001', phone: '+91 11 1234 5678' },
//     { city: 'Bangalore', address: '789 MG Road, Bangalore - 560001', phone: '+91 80 1234 5678' },
//     { city: 'Chennai', address: '321 Anna Salai, Chennai - 600002', phone: '+91 44 1234 5678' }
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-5xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12">Our Branches</h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           {branches.map((branch, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-2xl font-bold mb-3 text-blue-600">{branch.city}</h3>
//               <p className="text-gray-700 mb-2">📍 {branch.address}</p>
//               <p className="text-gray-700">📞 {branch.phone}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // Vehicle Grid Component
// function VehicleGrid({ vehicles, favorites, toggleFavorite, showTitle = true }) {
//   return (
//    <>
   
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         {showTitle && (
//           <div className="mb-10">
//             <p className="text-blue-600 text-sm font-semibold mb-2">Trusted Car Resale Service</p>
//             <h2 className="text-4xl font-bold text-gray-900">Explore all Vehicles</h2>
//           </div>
//         )}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {vehicles.map((vehicle) => (
//             <div key={vehicle.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
//               <div className="relative h-52 bg-gray-100">
//                 <img 
//                   src={vehicle.image} 
//                   alt={vehicle.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <div className="p-5">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                   {vehicle.name}
//                 </h3>
//                 <p className="text-xl font-bold text-gray-900 mb-5">
//                   Rs. {vehicle.price.toLocaleString()}
//                 </p>

//                 <div className="grid grid-cols-3 gap-3 mb-5">
//                   <div className="text-center">
//                     <svg className="w-6 h-6 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
//                     </svg>
//                     <p className="text-gray-500 text-xs mb-1">Fuel Type</p>
//                     <p className="font-semibold text-gray-800 text-sm">{vehicle.fuelType}</p>
//                   </div>
//                   <div className="text-center">
//                     <svg className="w-6 h-6 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
//                     </svg>
//                     <p className="text-gray-500 text-xs mb-1">Mileage</p>
//                     <p className="font-semibold text-gray-800 text-sm">{vehicle.mileage}</p>
//                   </div>
//                   <div className="text-center">
//                     <svg className="w-6 h-6 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
//                     </svg>
//                     <p className="text-gray-500 text-xs mb-1">Transmission</p>
//                     <p className="font-semibold text-gray-800 text-sm">{vehicle.transmission}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between pt-3 border-t border-gray-100">
//                   <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm">
//                     VIEW DETAILS
//                     <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
//                     </svg>
//                   </button>
//                   <button 
//                     onClick={() => toggleFavorite(vehicle.id)}
//                     className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                   >
//                     <Heart 
//                       className={`w-5 h-5 transition-all ${
//                         favorites.includes(vehicle.id) 
//                           ? 'fill-red-500 text-red-500' 
//                           : 'text-gray-400 hover:text-red-400'
//                       }`}
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {showTitle && (
//           <div className="flex justify-center mt-8 space-x-2">
            
//           </div>
//         )}
//       </div>
//     </section>
    
//     </>
//   );
// }

// /*
// // Footer Component - Moved to separate file
// function Footer({ setCurrentPage }) {
//   return (
//     <footer className="bg-blue-900 text-white py-12">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-2xl font-bold mb-4">Do you<br/>Have something<br/>to sell through us?</h3>
//             <div className="mt-6">
//               <h4 className="font-bold mb-2">Reach Us</h4>
//               <p className="text-sm mb-1">Express Travel Corporate Services</p>
//               <p className="text-sm mb-1">Private Limited</p>
//               <p className="text-sm mb-1">3rd No.20, Dandebury Street,</p>
//               <p className="text-sm">Nungambakkam, Chennai-600034</p>
//             </div>
//           </div>

//           <div>
//             <h4 className="font-bold mb-4">Information</h4>
//             <ul className="space-y-2 text-sm">
//               <li><button onClick={() => setCurrentPage('home')} className="hover:underline">Home</button></li>
//               <li><button onClick={() => setCurrentPage('about')} className="hover:underline">About Us</button></li>
//               <li><button onClick={() => setCurrentPage('services')} className="hover:underline">Services</button></li>
//               <li><button onClick={() => setCurrentPage('luxury-car')} className="hover:underline">Luxury Car</button></li>
//               <li><button onClick={() => setCurrentPage('team')} className="hover:underline">Team</button></li>
//             </ul>
//             <div className="mt-6">
//               <h4 className="font-bold mb-2">Follow Us</h4>
//               <div className="flex space-x-4">
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">Facebook</a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">Twitter</a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">Instagram</a>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h4 className="font-bold mb-4">Contact Info</h4>
//             <div className="space-y-3 text-sm">
//               <div>
//                 <p className="font-semibold">Phone No</p>
//                 <p>044-44 2827 2279 / 4203 7171 /</p>
//                 <p>+91 98410 98410</p>
//               </div>
//               <div>
//                 <p className="font-semibold">Mobile No</p>
//                 <p>Whatsapp @ +91 98410 98410</p>
//                 <p>Mobile No +91 81111278 / +91-9786629662</p>
//               </div>
//               <div>
//                 <p className="font-semibold">Email</p>
//                 <p>anbuarjunesstravelcorp.com /</p>
//                 <p>booking@expresstravelcorp.com</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-blue-800 mt-8 pt-6 text-center text-sm">
//           <p>&copy; 2024 Express Travel Corporate Services. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
// */

// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import AboutUs from "./pages/About";
import Services from "./pages/Services";
import LuxuryCar from "./pages/LuxuryCar";
import Team from "./pages/Team";
import Clients from "./pages/Clients";
import Branches from "./pages/Branches";

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((v) => v !== id)
        : [...prev, id]
    );
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/aboutus"
            element={<AboutUs favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/services"
            element={<Services favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/luxurycar"
            element={<LuxuryCar favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/team"
            element={<Team favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/clients"
            element={<Clients favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/branches"
            element={<Branches favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
