import React, { useEffect, useState, useRef } from 'react';

export default function AnimatedCounter({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = '',
  icon: Icon
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const startValue = 0;
    const endValue = parseInt(end.toString().replace(/[^\d]/g, ''));

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  const displayValue = () => {
    if (typeof end === 'string' && end.includes('+')) {
      return `${count}+`;
    }
    if (typeof end === 'string' && end.includes('.')) {
      return count.toFixed(1);
    }
    return count;
  };

  return (
    <div ref={ref} className={`text-center ${className}`}>
      {Icon && (
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-4 shadow-lg">
          <Icon className="text-white text-2xl" />
        </div>
      )}
      <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
        {prefix}{displayValue()}{suffix}
      </div>
      <div className="text-gray-600 font-medium">
        {typeof end === 'string' ? end.replace(/[\d.]+/, '').replace(/[+-]/g, '') : ''}
      </div>
    </div>
  );
}
