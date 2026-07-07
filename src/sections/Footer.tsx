import { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#040404] py-12 overflow-hidden"
    >
      {/* Top Border */}
      <div 
        className={`absolute top-0 left-1/2 -translate-x-1/2 h-[1px] bg-[#333] transition-all duration-800 ${
          isVisible ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Name/Logo */}
          <div 
            className={`transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <a 
              href="#home" 
              className="font-display text-2xl font-medium text-white hover:text-red-500 transition-colors duration-300"
            >
              Alex Morgan
            </a>
          </div>

          {/* Copyright */}
          <div 
            className={`text-[#b8b8b8] text-sm font-body transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            &copy; {new Date().getFullYear()} All Rights Reserved
          </div>

          {/* Links */}
          <div 
            className={`flex items-center gap-6 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <a 
              href="#" 
              className="text-[#b8b8b8] text-sm hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-[#b8b8b8] text-sm hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Back to Top */}
        <div className="flex justify-center mt-8">
          <button
            onClick={scrollToTop}
            className={`group flex items-center gap-2 text-[#b8b8b8] text-sm hover:text-red-500 transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center group-hover:border-red-500 group-hover:bg-red-500/10 transition-all duration-300">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
