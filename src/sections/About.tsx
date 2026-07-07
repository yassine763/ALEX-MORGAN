import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  isVisible: boolean;
  delay: number;
}

const Counter = ({ end, suffix = '', label, isVisible, delay }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 1500;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, end, delay]);

  return (
    <div 
      className={`text-center transition-all duration-500 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      }}
    >
      <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-2">
        {count}{suffix}
      </p>
      <p className="text-[#b8b8b8] text-sm sm:text-base font-body">{label}</p>
    </div>
  );
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const counters = [
    { end: 10, suffix: '+', label: 'Years Experience', delay: 600 },
    { end: 150, suffix: '+', label: 'Projects Completed', delay: 750 },
    { end: 50, suffix: '+', label: 'Awards Won', delay: 900 },
    { end: 30, suffix: '+', label: 'Happy Clients', delay: 1050 },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-[#040404] py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-900/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Vertical Title - Hidden on mobile */}
          <div 
            className={`hidden lg:block transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <h2 
              className="font-display text-6xl xl:text-7xl font-light text-white whitespace-nowrap"
              style={{ 
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                transform: 'rotate(180deg)'
              }}
            >
              About Me
            </h2>
          </div>

          {/* Mobile Title */}
          <div className="lg:hidden">
            <h2 
              className={`font-display text-4xl sm:text-5xl font-light text-white transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              About Me
            </h2>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-12">
            {/* Bio Paragraphs */}
            <div className="space-y-6">
              {[
                "I'm a creative director with over 10 years of experience crafting compelling visual narratives for global brands. My passion lies at the intersection of strategy, design, and technology, where I transform complex ideas into intuitive, memorable experiences.",
                "My approach combines strategic thinking with meticulous attention to detail. I believe that great design is not just about aesthetics—it's about solving problems, telling stories, and creating meaningful connections between brands and their audiences.",
                "I've had the privilege of working with industry leaders like Nike, Apple, Google, and Adobe, helping them push creative boundaries and achieve their business objectives through innovative design solutions."
              ].map((text, index) => (
                <p
                  key={index}
                  className={`text-[#b8b8b8] text-lg leading-relaxed font-body transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
                    transitionDelay: `${200 + index * 150}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.87, 0, 0.13, 1)'
                  }}
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <div 
                className={`relative group transition-all duration-900 ${
                  isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 -translate-x-12 -rotate-12'
                }`}
                style={{ 
                  transitionDelay: '300ms',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div className="relative overflow-hidden rounded-xl border border-[#333] group-hover:border-red-500/50 transition-all duration-300">
                  <img
                    src="/about-1.jpg"
                    alt="Alex Morgan Portrait"
                    className="w-full h-[300px] sm:h-[350px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-103 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040404]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Animated Border */}
                <div className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl border-2 border-red-500/30" />
                </div>
              </div>

              <div 
                className={`relative group transition-all duration-900 ${
                  isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-12 rotate-12'
                }`}
                style={{ 
                  transitionDelay: '500ms',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div className="relative overflow-hidden rounded-xl border border-[#333] group-hover:border-red-500/50 transition-all duration-300">
                  <img
                    src="/about-2.jpg"
                    alt="Alex Morgan Working"
                    className="w-full h-[300px] sm:h-[350px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-103 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040404]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Animated Border */}
                <div className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl border-2 border-red-500/30" />
                </div>
              </div>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-[#333]">
              {counters.map((counter) => (
                <Counter
                  key={counter.label}
                  {...counter}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
