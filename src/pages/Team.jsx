import React, { useState, useRef, useEffect } from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaAward, FaUsers, FaLightbulb, FaHandshake, FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function Team() {
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

  const teamMembers = [
    {
      name: 'Mohan Ramadass',
      role: 'Founder & Managing Director',
      image: '/Team/mohan.jpg',
      bio: 'He stands as a beacon of entrepreneurial spirit and resilience, having elevated ETC from humble beginnings over the past 25 years. Through visionary leadership and steadfast determination, he has not only navigated challenges but also defined industry standards.',
      vision: 'With deep passion for travel, looking in the future, He is focused on driving further innovation and expanding the company\'s services to enhance the car travel experience.',
      achievements: ['25+ Years of Leadership', 'Industry Standard Setter', 'Visionary Entrepreneur'],
      expertise: ['Strategic Planning', 'Business Development', 'Innovation'],
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Alagarsamy',
      role: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
      bio: 'Alagarsamy brings 23 years of comprehensive experience in the car rental industry, starting from the ground up. He has worked across renowned companies like AVIS, Car Club & Carzonrent.',
      vision: 'Responsible for leading the ETC business in all verticals, operations, driving profitability, delivering exceptional results, strategic planning, and team development.',
      achievements: ['23 Years Industry Experience', 'Multi-Company Expertise', 'Operational Excellence'],
      expertise: ['Operations Management', 'Strategic Planning', 'Team Development'],
      color: 'from-green-600 to-green-700'
    }
  ];

  const values = [
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'Delivering exceptional service and setting industry standards'
    },
    {
      icon: FaUsers,
      title: 'Team Work',
      description: 'Building strong teams and fostering collaborative environments'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Driving technological advancement and service innovation'
    },
    {
      icon: FaHandshake,
      title: 'Trust',
      description: 'Building lasting relationships based on integrity and reliability'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        {/* Car Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&h=800&fit=crop"
            alt="Luxury Car Leadership"
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
              Leadership Team
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Meet Our <span className="text-yellow-400">Leaders</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              The visionaries behind ETC's success, driving innovation and excellence in luxury car rental services across India
            </p>
          </div>

          {/* Leadership Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { number: '25+', label: 'Years Combined Experience' },
              { number: '50+', label: 'Fleet Vehicles' },
              { number: '15+', label: 'Cities Served' },
              { number: '1000+', label: 'Happy Customers' }
            ].map((stat, index) => (
              <div
                key={index}
                ref={setRef(index)}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center transform transition-all duration-1000 ${
                  isVisible[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
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

      {/* Team Members Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the driving force behind ETC's commitment to excellence in luxury car rental services
            </p>
          </div>

          <div className="space-y-20">
            {teamMembers.map((member, index) => (
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
                      <div className={`absolute -inset-4 bg-gradient-to-r ${member.color} rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000`}></div>
                      <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-auto object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 mt-6">
                      <a href="#" className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${member.color} rounded-full text-white hover:scale-110 transition-transform duration-300`}>
                        <FaLinkedin />
                      </a>
                      <a href="#" className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${member.color} rounded-full text-white hover:scale-110 transition-transform duration-300`}>
                        <FaEnvelope />
                      </a>
                      <a href="#" className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${member.color} rounded-full text-white hover:scale-110 transition-transform duration-300`}>
                        <FaPhone />
                      </a>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className={`inline-block px-4 py-2 bg-gradient-to-r ${member.color} text-white rounded-full text-sm font-semibold`}>
                          {member.role}
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
                        <p className="text-gray-700 leading-relaxed text-lg">{member.bio}</p>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                        <div className="flex items-start space-x-3">
                          <FaQuoteLeft className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">Vision</h4>
                            <p className="text-gray-700 leading-relaxed">{member.vision}</p>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h4>
                        <div className="flex flex-wrap gap-3">
                          {member.achievements.map((achievement, i) => (
                            <span key={i} className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                              <FaStar className="mr-2" />
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Expertise */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Areas of Expertise</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {member.expertise.map((skill, i) => (
                            <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
                              <div className="font-semibold text-gray-900">{skill}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our leadership and shape our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                ref={setRef(index + 6)}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible[index + 6] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl mb-6 shadow-lg">
                  <value.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join Our <span className="text-yellow-400">Team</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of a dynamic team that's revolutionizing the car rental industry in India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Career Opportunities
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300">
              Contact Leadership
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
