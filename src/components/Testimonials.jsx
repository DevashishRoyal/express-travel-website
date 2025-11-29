import React, { useEffect, useRef, useState } from 'react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('[data-animate]');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setIsVisible(prev => ({ ...prev, [card.dataset.animate]: true }));
              }, index * 300);
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

  const testimonials = [
    {
      id: 1,
      text: "We would like to appreciate your good office for arranging travel trip to Maldives for our Director, Mr Walfred Tagor. The over all experience was awesome, it was well coordinated and the hotel stayed was fabulous...",
      author: "Jestin Mathew",
      animateFrom: "left",
      position: "left"
    },
    {
      id: 2,
      text: "I wanted to take the opportunity to write to you and thank you for your efforts to make our 2 week tour of Tamil Nadu successful. We were very pleased with your service, the vehicle you provided and the driver, who made special efforts...",
      author: "Santosh Krinsky",
      animateFrom: "right",
      position: "right"
    },
    {
      id: 3,
      text: "Mr. Mori Yoshiro (born July 14, 1937, Neagari, Ishikawa prefecture, Japan), Japanese politician who was prime minister in 2000-01 during a period of economic downturn...",
      author: "Mr. D.Venkateswaran",
      animateFrom: "left",
      position: "left"
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-800">
          What Client's says
        </h1>

        <div className="space-y-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              data-animate={`card-${testimonial.id}`}
              className={`w-full ${
                testimonial.position === 'left' 
                  ? 'md:w-2/3 md:mr-auto' 
                  : 'md:w-2/3 md:ml-auto'
              } transition-all duration-1000 transform ${
                isVisible[`card-${testimonial.id}`]
                  ? 'translate-x-0 opacity-100'
                  : testimonial.animateFrom === 'left'
                  ? '-translate-x-full opacity-0'
                  : 'translate-x-full opacity-0'
              }`}
            >
              {/* Testimonial Card */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-orange-400 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                  {/* Google Logo */}
                  <div className="absolute -top-6 left-8 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg p-2">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 mt-4">
                    {testimonial.text}
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center justify-end">
                    <div className="text-right">
                      <p className="font-bold text-gray-800 text-xl">
                        ---{testimonial.author}
                      </p>
                      <div className="flex gap-1 mt-2 justify-end">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </div>
  );
};

export default TestimonialsSection;