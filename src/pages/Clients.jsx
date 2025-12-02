// import React, { useState, useRef, useEffect } from 'react';
// import { FaHandshake, FaAward, FaGlobe } from 'react-icons/fa';

// export default function Clients() {
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

//   const setRef = (index) => (el) => {
//     observerRefs.current[index] = el;
//   };

//   const clients = [
//     { name: 'AGS Health', logo: '/LOGOSlider/1.jpg' },
//     { name: 'American Megatrends', logo: '/LOGOSlider/2.jpg' },
//     { name: 'Birlasoft', logo: '/LOGOSlider/3.jpg' },
//     { name: 'CGI', logo: '/LOGOSlider/4.jpg' },
//     { name: 'Chola MS', logo: '/LOGOSlider/5.jpg' },
//     { name: 'Coromandel', logo: '/LOGOSlider/6.jpg' },
//     { name: 'Dinex', logo: '/LOGOSlider/7.jpg' },
//     { name: 'Gigamon', logo: '/LOGOSlider/8.jpg' },
//     { name: 'Global', logo: '/LOGOSlider/9.jpg' },
//     { name: 'Hexaware', logo: '/LOGOSlider/10.jpg' },
//     { name: 'Icu Medical', logo: '/LOGOSlider/11.jpg' },
//     { name: 'Infinity', logo: '/LOGOSlider/12.jpg' },
//     { name: 'Isuzu', logo: '/LOGOSlider/13.jpg' },
//     { name: 'Kennametal', logo: '/LOGOSlider/14.jpg' },
//     { name: 'Kobelco', logo: '/LOGOSlider/1.jpg' },
//     { name: 'Kumaran Systems', logo: '/LOGOSlider/2.jpg' },
//     { name: 'KWE (Kintetsu World Express)', logo: '/LOGOSlider/3.jpg' },
//     { name: 'Nexteer', logo: '/LOGOSlider/4.jpg' },
//     { name: 'Omega Healthcare', logo: '/LOGOSlider/5.jpg' },
//     { name: 'Pfizer', logo: '/LOGOSlider/6.jpg' }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           }}></div>
//         </div>

//         <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-8 shadow-lg">
//             <FaHandshake className="text-black text-3xl" />
//           </div>
//           <h1 className="text-5xl lg:text-6xl font-bold mb-6">
//             Our <span className="text-yellow-400">Trusted Clients</span>
//           </h1>
//           <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//             We are proud to partner with leading organizations across various industries, delivering exceptional transportation solutions that drive their success.
//           </p>
//         </div>
//       </section>

//       {/* Clients Grid Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
//               Our Partners
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//               Trusted by <span className="text-blue-600">Industry Leaders</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               From healthcare to manufacturing, our clients span diverse sectors, each benefiting from our premium transportation services.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
//             {clients.map((client, index) => (
//               <div
//                 key={index}
//                 ref={setRef(index)}
//                 className={`group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center relative overflow-hidden ${
//                   isVisible[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//                 }`}
//                 style={{ transitionDelay: `${index * 50}ms` }}
//               >
//                 {/* Luxury Car Background */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
//                   <img
//                     src="/carouselimage/Car1.jpeg"
//                     alt="Luxury Car"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <div className="relative z-10">
//                   <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-inner">
//                     <img
//                       src={client.logo}
//                       alt={`${client.name} logo`}
//                       className="w-full h-full object-contain"
//                       onError={(e) => {
//                         e.target.src = '/placeholder-logo.png'; // Fallback if logo not found
//                       }}
//                     />
//                   </div>
//                   <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
//                     {client.name}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
//         <div className="container mx-auto px-6 lg:px-12 text-center">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-12">
//             Our <span className="text-yellow-400">Impact</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
//               <FaAward className="text-yellow-400 text-4xl mx-auto mb-4" />
//               <div className="text-3xl font-bold mb-2">30+</div>
//               <div className="text-blue-100">Trusted Partners</div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
//               <FaGlobe className="text-yellow-400 text-4xl mx-auto mb-4" />
//               <div className="text-3xl font-bold mb-2">15+</div>
//               <div className="text-blue-100">Industries Served</div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
//               <FaHandshake className="text-yellow-400 text-4xl mx-auto mb-4" />
//               <div className="text-3xl font-bold mb-2">25+</div>
//               <div className="text-blue-100">Years of Partnership</div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import React, { useEffect, useRef, useState } from "react";
import { FaHandshake, FaAward, FaGlobe } from "react-icons/fa";

/**
 * Clients page - logo-first layout
 * - Top marquee (auto-scroll) of logos
 * - Responsive grid of logo cards below
 * - Lazy loading + onError fallback
 */

export default function Clients() {
  const [visible, setVisible] = useState({});
  const refs = useRef([]);

  const clients = [
    { name: "AGS Health", logo: "/LOGOSlider/1.jpg" },
    { name: "Coronis", logo: "/LOGOSlider/2.jpg" },
    { name: "American Megatrends", logo: "/LOGOSlider/3.jpg" },
    { name: "Axles India Limited", logo: "/LOGOSlider/4.jpg" },
    { name: "Birlasoft", logo: "/LOGOSlider/5.jpg" },
    { name: "CGI", logo: "/LOGOSlider/6.jpg" },
    { name: "Chola MS", logo: "/LOGOSlider/7.jpg" },
    { name: "Coromandel", logo: "/LOGOSlider/8.jpg" },
    { name: "Dinex", logo: "/LOGOSlider/9.jpg" },
    { name: "Gigamon", logo: "/LOGOSlider/10.jpg" },
    { name: "Global Logic", logo: "/LOGOSlider/11.jpg" },
    { name: "Hexaware", logo: "/LOGOSlider/12.jpg" },
    // { name: "ICU Medical", logo: "/clients/icu-medical.png" },
    // { name: "Infinity", logo: "/clients/infinity.png" },
    // { name: "Isuzu", logo: "/clients/isuzu.png" },
    // { name: "Kennametal", logo: "/clients/kennametal.png" },
    // { name: "Kobelco", logo: "/clients/kobelco.png" },
    // { name: "Kumaran Systems", logo: "/clients/kumaran.png" },
    // { name: "KWE", logo: "/clients/kwe.png" },
    // { name: "Nexteer", logo: "/clients/nexteer.png" },
    // { name: "Omega Healthcare", logo: "/clients/omega-healthcare.png" },
    // { name: "Pfizer", logo: "/clients/pfizer.png" },
    // add more logos here...
  ];

  // reveal animation using IntersectionObserver
  useEffect(() => {
    const observers = refs.current.map((el, idx) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((s) => ({ ...s, [idx]: true }));
            obs.unobserve(entry.target);
          }
        },
        { threshold: 0.08 }
      );
      obs.observe(el);
      return obs;
    });

    return () => {
      observers.forEach((o) => o && o.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full mb-6 shadow-lg">
            <FaHandshake className="text-black text-3xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Our <span className="text-yellow-400">Trusted Clients</span>
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            We partner with leading organizations across industries — proud to deliver secure, reliable and premium
            transportation services.
          </p>
        </div>
      </section>

      {/* Marquee / Auto-scroll logos */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="overflow-hidden rounded-lg border border-gray-100 bg-white/50 shadow-sm">
            <div
              className="flex animate-marquee gap-8 items-center py-6"
              style={{ willChange: "transform" }}
            >
              {clients.concat(clients).map((c, i) => (
                <div key={`${c.name}-${i}`} className="flex items-center justify-center w-48 h-20">
                  <img
                    src={c.logo}
                    alt={c.name}
                    loading="lazy"
                    onError={(e) => (e.target.src = "/clients/placeholder-logo.png")}
                    className="max-h-40 object-contain opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid of logos */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Below are a few of the companies that trust us for corporate transport.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {clients.map((client, idx) => (
              <div
                key={client.name}
                ref={(el) => (refs.current[idx] = el)}
                className={`relative bg-white rounded-xl p-6 border border-gray-100 flex items-center justify-center transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  visible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  onError={(e) => (e.target.src = "/clients/placeholder-logo.png")}
                  className="max-h-40 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h3 className="text-2xl font-bold mb-6">Partnering for success</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-2xl p-6">
              <FaAward className="text-yellow-400 text-3xl mx-auto mb-3" />
              <div className="text-2xl font-bold">30+</div>
              <div className="text-blue-100">Trusted Partners</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <FaGlobe className="text-yellow-400 text-3xl mx-auto mb-3" />
              <div className="text-2xl font-bold">15+</div>
              <div className="text-blue-100">Cities Served</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <FaHandshake className="text-yellow-400 text-3xl mx-auto mb-3" />
              <div className="text-2xl font-bold">25+</div>
              <div className="text-blue-100">Years of Partnership</div>
            </div>
          </div>
        </div>
      </section>

      {/* styles for marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </div>
  );
}
