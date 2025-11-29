import React, { useEffect, useRef, useState } from 'react';

const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate title first
            setTimeout(() => {
              setIsVisible(prev => ({ ...prev, title: true }));
            }, 100);

            // Then animate cards
            const cards = entry.target.querySelectorAll('[data-animate]');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setIsVisible(prev => ({ ...prev, [card.dataset.animate]: true }));
              }, 400 + (index * 200));
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      id: 1,
      logo: "/CertificationImage/Cer1.jpg",
      title: "Recognized by Ministry of Tourism (Travel Trade Division) Government of India.",
      animateFrom: "left"
    },
    {
      id: 2,
      logo: "/CertificationImage/Cer2.jpg",
      title: "Affiliations: IATO-Indian Association of Tour Operators.",
      animateFrom: "left"
    },
    {
      id: 3,
      logo: "/CertificationImage/Cer3.png",
      title: "Member - SKAL International.",
      animateFrom: "right"
    },
    {
      id: 4,
      logo: "/CertificationImage/Cer4.jpg",
      title: "Member -Andhra Chamber Of Commerce.",
      animateFrom: "right"
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title with animation from top */}
        <h1 
          className={`text-5xl md:text-6xl font-bold text-center mb-20 text-gray-900 transition-all duration-1000 transform ${
            isVisible.title 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-20 opacity-0'
          }`}
        >
          Our Certifications
        </h1>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              data-animate={`cert-${cert.id}`}
              className={`transition-all duration-1000 transform ${
                isVisible[`cert-${cert.id}`]
                  ? 'translate-x-0 opacity-100'
                  : cert.animateFrom === 'left'
                  ? '-translate-x-full opacity-0'
                  : 'translate-x-full opacity-0'
              }`}
            >
              {/* Card */}
              <div className="relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center justify-between border border-gray-100">
                  {/* Logo Container */}
                  <div className="w-24 h-24 lg:w-28 lg:h-28 mb-4 flex items-center justify-center">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md">
                      <img 
                        src={cert.logo} 
                        alt={cert.title}
                        className="w-full h-full object-contain p-3 bg-gradient-to-br from-gray-50 to-white"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-center text-gray-800 text-base lg:text-lg font-semibold leading-snug min-h-[80px] flex items-center">
                    {cert.title}
                  </h3>

                  {/* Decorative bottom accent */}
                  <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-32 right-20 w-40 h-40 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-purple-200 rounded-full opacity-10 blur-3xl"></div>
      </div>
    </div>
  );
};

export default CertificationsSection;