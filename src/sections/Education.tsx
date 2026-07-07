import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award } from 'lucide-react';

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  description: string[];
  honors?: string;
}

const educationData: EducationItem[] = [
  {
    degree: 'Master of Fine Arts',
    school: 'Rhode Island School of Design',
    period: '2010 - 2012',
    description: [
      'Specialized in graphic design and visual communication',
      'Thesis on the intersection of technology and design in modern brand experiences'
    ],
    honors: 'Graduated with Distinction'
  },
  {
    degree: 'Bachelor of Arts',
    school: 'Parsons School of Design',
    period: '2006 - 2010',
    description: [
      'Major in Communication Design with focus on digital media',
      'Completed coursework in typography, branding, and user experience design'
    ],
    honors: 'Graduated with Honors'
  }
];

const Education = () => {
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

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative w-full bg-[#040404] py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-900/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 
            className={`font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.87, 0, 0.13, 1)' }}
          >
            Education
          </h2>
          <div 
            className={`w-24 h-[2px] bg-red-500 mx-auto mt-6 transition-all duration-600 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          />
        </div>

        {/* Education Cards */}
        <div 
          className="max-w-4xl mx-auto"
          style={{ perspective: '1000px' }}
        >
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-800 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 rotate-0' 
                    : 'opacity-0 translate-y-24 rotate-12'
                }`}
                style={{ 
                  transitionDelay: `${300 + index * 150}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div 
                  className="relative bg-[#0f0f0f] border border-[#333] rounded-xl p-6 sm:p-8 hover:border-red-500/50 transition-all duration-400 hover:-translate-y-2"
                  style={{
                    boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors duration-300">
                      <GraduationCap className="w-7 h-7 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl sm:text-2xl font-medium text-white group-hover:text-red-500 transition-colors duration-300 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-[#b8b8b8] text-base font-body">{edu.school}</p>
                    </div>
                    <div className="inline-block px-4 py-1.5 bg-[#1a1a1a] rounded-full">
                      <span className="text-red-500 text-sm font-medium whitespace-nowrap">{edu.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3 mb-6">
                    {edu.description.map((item, i) => (
                      <li 
                        key={i} 
                        className="text-[#b8b8b8] text-sm sm:text-base leading-relaxed flex items-start gap-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-red-500/50 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Honors Badge */}
                  {edu.honors && (
                    <div className="flex items-center gap-2 pt-4 border-t border-[#333]">
                      <Award className="w-5 h-5 text-red-500" />
                      <span className="text-white text-sm font-medium">{edu.honors}</span>
                    </div>
                  )}

                  {/* 3D Hover Effect */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,0,0,0.05) 0%, transparent 50%)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Certifications */}
        <div 
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <p className="text-[#b8b8b8] text-sm mb-4">Additional Certifications</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Google UX Design Certificate', 'Adobe Certified Expert', 'Figma Advanced Certification'].map((cert, index) => (
              <span
                key={cert}
                className="px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-full text-white text-sm hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                  transitionDelay: `${800 + index * 100}ms`,
                }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
