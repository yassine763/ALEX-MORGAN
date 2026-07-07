import { useEffect, useRef, useState } from 'react';
import { Dribbble, Instagram, Twitter, Linkedin } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { icon: Dribbble, href: '#', label: 'Dribbble' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen w-full bg-[#040404] overflow-hidden flex items-center"
      style={{ perspective: '1200px' }}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-red-900/20 to-transparent blur-3xl animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div 
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial from-red-800/10 to-transparent blur-3xl animate-pulse"
          style={{ animationDuration: '10s', animationDelay: '2s' }}
        />
      </div>

      {/* Decorative Shape */}
      <div 
        className={`absolute top-20 right-20 w-32 h-32 border border-red-500/30 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] transition-all duration-1000 ${
          isLoaded ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-180'
        }`}
        style={{ 
          animation: isLoaded ? 'rotate-slow 25s linear infinite' : 'none',
          transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
          transitionDelay: '600ms'
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Name */}
            <div className="space-y-2">
              <h1 
                className={`font-display text-[60px] sm:text-[80px] lg:text-[100px] xl:text-[120px] font-light leading-none text-white tracking-tight transition-all duration-800 ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
                }`}
                style={{ 
                  clipPath: isLoaded ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
                  transitionTimingFunction: 'cubic-bezier(0.87, 0, 0.13, 1)',
                  transitionDelay: '300ms'
                }}
              >
                ALEX
              </h1>
              <h1 
                className={`font-display text-[60px] sm:text-[80px] lg:text-[100px] xl:text-[120px] font-light leading-none text-white tracking-tight ml-8 sm:ml-16 lg:ml-20 transition-all duration-800 ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
                style={{ 
                  clipPath: isLoaded ? 'inset(0 0 0 0)' : 'inset(0 0 0 100%)',
                  transitionTimingFunction: 'cubic-bezier(0.87, 0, 0.13, 1)',
                  transitionDelay: '500ms'
                }}
              >
                MORGAN
              </h1>
            </div>

            {/* Title */}
            <div 
              className={`overflow-hidden transition-all duration-600 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              <p className="font-body text-xl sm:text-2xl lg:text-3xl text-[#b8b8b8] font-light tracking-wide">
                {'Creative Director & Designer'.split('').map((char, index) => (
                  <span
                    key={index}
                    className="inline-block transition-all duration-500"
                    style={{
                      opacity: isLoaded ? 1 : 0,
                      transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
                      transitionDelay: `${900 + index * 30}ms`,
                      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </p>
            </div>

            {/* Social Links */}
            <div 
              className={`flex gap-6 pt-4 transition-all duration-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
              }`}
              style={{ 
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: '1100ms'
              }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative w-12 h-12 flex items-center justify-center rounded-full border border-[#333] text-white hover:border-red-500 hover:text-red-500 transition-all duration-200 hover:scale-115 hover:-translate-y-1"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(-30px)',
                    transitionDelay: `${1100 + index * 80}ms`,
                  }}
                >
                  <social.icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                  <span className="absolute inset-0 rounded-full bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div 
              className={`pt-4 transition-all duration-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1400ms' }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#040404] font-display font-medium text-sm tracking-wider uppercase rounded-lg hover:bg-[#b8b8b8] hover:scale-102 transition-all duration-300"
                style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
              >
                Get In Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div 
              className={`relative transition-all duration-1000 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
              }`}
              style={{ 
                transform: isLoaded ? 'perspective(1000px) rotateY(0deg)' : 'perspective(1000px) rotateY(90deg)',
                transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                transitionDelay: '700ms'
              }}
            >
              {/* Image Container */}
              <div 
                className="relative group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glow Effect Behind Image */}
                <div className="absolute -inset-4 bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Profile Image */}
                <div 
                  className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] lg:w-[380px] lg:h-[475px] rounded-2xl overflow-hidden border border-[#333] group-hover:border-red-500/50 transition-all duration-400"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <img
                    src="/hero-profile.jpg"
                    alt="Alex Morgan"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-103"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040404]/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Badge */}
                <div 
                  className={`absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-[#0f0f0f] border border-[#333] rounded-xl px-4 py-3 sm:px-6 sm:py-4 transition-all duration-500 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: '1200ms',
                    animation: isLoaded ? 'float 6s ease-in-out infinite' : 'none',
                    animationDelay: '1s'
                  }}
                >
                  <p className="text-[#b8b8b8] text-xs sm:text-sm font-body">Available for</p>
                  <p className="text-white font-display font-semibold text-sm sm:text-base">Freelance Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1600ms' }}
      >
        <span className="text-[#b8b8b8] text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-[#333] rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-red-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
