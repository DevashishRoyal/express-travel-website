import React, { useState, useRef, useEffect } from 'react';
import { FaHandshake, FaAward, FaGlobe, FaInfoCircle, FaTimes } from 'react-icons/fa';

export default function Clients() {
  const [isVisible, setIsVisible] = useState({});
  const [selectedClient, setSelectedClient] = useState(null);
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

  const setRef = (index) => (el) => {
    observerRefs.current[index] = el;
  };

  const clients = [
    { name: 'AGS Health', logo: '/LOGOSlider/1.jpg', industry: 'Healthcare', description: 'Leading healthcare solutions provider', partnership: '5+ years' },
    { name: 'American Megatrends', logo: '/LOGOSlider/2.jpg', industry: 'Technology', description: 'Global technology solutions company', partnership: '8+ years' },
    { name: 'Birlasoft', logo: '/LOGOSlider/3.jpg', industry: 'IT Services', description: 'Digital transformation experts', partnership: '6+ years' },
    { name: 'CGI', logo: '/LOGOSlider/4.jpg', industry: 'IT Consulting', description: 'Business and IT consulting services', partnership: '10+ years' },
    { name: 'Chola MS', logo: '/LOGOSlider/5.jpg', industry: 'Insurance', description: 'Comprehensive insurance solutions', partnership: '7+ years' },
    { name: 'Coromandel', logo: '/LOGOSlider/6.jpg', industry: 'Agriculture', description: 'Agricultural solutions provider', partnership: '4+ years' },
    { name: 'Dinex', logo: '/LOGOSlider/7.jpg', industry: 'Manufacturing', description: 'Industrial manufacturing solutions', partnership: '5+ years' },
    { name: 'Gigamon', logo: '/LOGOSlider/8.jpg', industry: 'Technology', description: 'Network visibility solutions', partnership: '3+ years' },
    { name: 'Global', logo: '/LOGOSlider/9.jpg', industry: 'Logistics', description: 'Global logistics and supply chain', partnership: '9+ years' },
    { name: 'Hexaware', logo: '/LOGOSlider/10.jpg', industry: 'IT Services', description: 'Digital transformation services', partnership: '6+ years' },
    { name: 'Icu Medical', logo: '/LOGOSlider/11.jpg', industry: 'Healthcare', description: 'Medical device manufacturer', partnership: '4+ years' },
    { name: 'Infinity', logo: '/LOGOSlider/12.jpg', industry: 'Technology', description: 'Software development company', partnership: '5+ years' },
    { name: 'Isuzu', logo: '/LOGOSlider/13.jpg', industry: 'Automotive', description: 'Commercial vehicle manufacturer', partnership: '12+ years' },
    { name: 'Kennametal', logo: '/LOGOSlider/14.jpg', industry: 'Manufacturing', description: 'Industrial tooling solutions', partnership: '8+ years' },
    { name: 'Kobelco', logo: '/LOGOSlider/15.jpg', industry: 'Construction', description: 'Construction equipment manufacturer', partnership: '7+ years' },
    { name: 'Kumaran Systems', logo: '/LOGOSlider/1.jpg', industry: 'IT Services', description: 'Enterprise software solutions', partnership: '5+ years' },
    { name: 'KWE (Kintetsu World Express)', logo: '/LOGOSlider/1.jpg', industry: 'Logistics', description: 'International logistics services', partnership: '11+ years' },
    { name: 'Nexteer', logo: '/LOGOSlider/1.jpg', industry: 'Automotive', description: 'Automotive steering systems', partnership: '6+ years' },
    { name: 'Omega Healthcare', logo: '/LOGOSlider/1.jpg', industry: 'Healthcare', description: 'Healthcare management services', partnership: '4+ years' },
    { name: 'Pfizer', logo: '/LOGOSlider/1.jpg', industry: 'Pharmaceutical', description: 'Global pharmaceutical company', partnership: '15+ years' },
    // { name: 'Shriram', logo: '/LOGOSlider/1.jpg', industry: 'Finance', description: 'Financial services provider', partnership: '8+ years' },
    // { name: 'Tafe', logo: '/LOGOSlider/1.jpg', industry: 'Automotive', description: 'Tractor and farm equipment', partnership: '10+ years' },
    // { name: 'TMTL (TAFE Motors and Tractors Limited)', logo: '/LOGOSlider/1.jpg', industry: 'Automotive', description: 'Commercial vehicle solutions', partnership: '9+ years' },
    // { name: 'TransUnion', logo: '/client-logos/TransUnion.png', industry: 'Finance', description: 'Credit information services', partnership: '6+ years' },
    // { name: 'Wiz', logo: '/client-logos/Wiz.png', industry: 'Technology', description: 'Cloud security platform', partnership: '2+ years' },
    // { name: 'Alstom', logo: '/client-logos/Alstom.png', industry: 'Transportation', description: 'Railway transportation systems', partnership: '13+ years' },
    // { name: 'Cytec', logo: '/client-logos/Cytec.png', industry: 'Aerospace', description: 'Aerospace materials and chemicals', partnership: '7+ years' },
    // { name: 'Coronis', logo: '/client-logos/Coronis.png', industry: 'Healthcare', description: 'Medical imaging solutions', partnership: '3+ years' },
    // { name: 'RECODE', logo: '/client-logos/RECODE.png', industry: 'Technology', description: 'Software development firm', partnership: '4+ years' },
    // { name: 'ADGP', logo: '/client-logos/ADGP.png', industry: 'Manufacturing', description: 'Industrial manufacturing', partnership: '5+ years' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-8 shadow-lg">
            <FaHandshake className="text-black text-3xl" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-yellow-400">Trusted Clients</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We are proud to partner with leading organizations across various industries, delivering exceptional transportation solutions that drive their success.
          </p>
        </div>
      </section>

      {/* Clients Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Our Partners
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted by <span className="text-blue-600">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From healthcare to manufacturing, our clients span diverse sectors, each benefiting from our premium transportation services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                ref={setRef(index)}
                className={`group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center cursor-pointer relative overflow-hidden ${
                  isVisible[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setSelectedClient(client)}
              >
                {/* Luxury Car Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                  <img
                    src="/carouselimage/Car1.jpeg"
                    alt="Luxury Car"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.src = '/placeholder-logo.png'; // Fallback if logo not found
                      }}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    {client.name}
                  </h3>
                  <div className="flex items-center justify-center text-xs text-gray-500 group-hover:text-blue-500 transition-colors duration-300">
                    <FaInfoCircle className="mr-1" />
                    <span>Click for details</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12">
            Our <span className="text-yellow-400">Impact</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <FaAward className="text-yellow-400 text-4xl mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Trusted Partners</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <FaGlobe className="text-yellow-400 text-4xl mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Industries Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <FaHandshake className="text-yellow-400 text-4xl mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Years of Partnership</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
