import { useEffect, useRef, useState } from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Senior Creative Director',
    company: 'Google',
    period: '2020 - Present',
    description: [
      'Leading the creative team in developing innovative campaigns that resonate with global audiences',
      'Managing a team of 15 designers and art directors across multiple product lines',
      'Driving brand strategy and visual identity for key product launches'
    ]
  },
  {
    title: 'Creative Director',
    company: 'Apple',
    period: '2017 - 2020',
    description: [
      'Spearheaded the visual identity for major product launches and marketing campaigns',
      'Collaborated with cross-functional teams to ensure design excellence across all touchpoints',
      'Mentored junior designers and established design standards and best practices'
    ]
  },
  {
    title: 'Senior Designer',
    company: 'Nike',
    period: '2014 - 2017',
    description: [
      'Created compelling visual narratives for global marketing campaigns',
      'Developed comprehensive design systems and brand guidelines',
      'Worked closely with marketing teams to deliver impactful creative solutions'
    ]
  },
  {
    title: 'Designer',
    company: 'Adobe',
    period: '2012 - 2014',
    description: [
      'Designed user interfaces for creative software products',
      'Contributed to the development of design tools used by millions of creatives worldwide',
      'Collaborated with engineering teams to implement design solutions'
    ]
  }
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(experiences.length).fill(false));
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleCards((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
              cardObserver.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });

    return () => cardObserver.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative w-full bg-[#040404] py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 
            className={`font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.87, 0, 0.13, 1)' }}
          >
            Experience
          </h2>
          <div 
            className={`w-24 h-[2px] bg-red-500 mx-auto mt-6 transition-all duration-600 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-[#333] lg:-translate-x-1/2">
            <div 
              className={`absolute top-0 left-0 w-full bg-red-500 transition-all duration-1000 ${
                isVisible ? 'h-full' : 'h-0'
              }`}
              style={{ 
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '400ms'
              }}
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isCardVisible = visibleCards[index];

              return (
                <div
                  key={index}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className={`relative flex items-start gap-8 ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div 
                    className={`absolute left-4 sm:left-8 lg:left-1/2 w-4 h-4 rounded-full border-2 border-red-500 bg-[#040404] z-10 lg:-translate-x-1/2 transition-all duration-400 ${
                      isCardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                    style={{ 
                      transitionDelay: `${400 + index * 150}ms`,
                      transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                      boxShadow: isCardVisible ? '0 0 20px rgba(255, 0, 0, 0.5)' : 'none'
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-30" />
                  </div>

                  {/* Content Card */}
                  <div 
                    className={`ml-12 sm:ml-20 lg:ml-0 lg:w-[45%] ${
                      isLeft ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'
                    } transition-all duration-700 ${
                      isCardVisible 
                        ? 'opacity-100 translate-x-0' 
                        : isLeft 
                          ? 'opacity-0 -translate-x-24' 
                          : 'opacity-0 translate-x-24'
                    }`}
                    style={{ 
                      transitionDelay: `${400 + index * 150}ms`,
                      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <div className="group relative bg-[#0f0f0f] border border-[#333] rounded-xl p-6 sm:p-8 hover:border-red-500/50 transition-all duration-300 hover:translate-x-2">
                      {/* Company Icon */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl sm:text-2xl font-medium text-white group-hover:text-red-500 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-[#b8b8b8] text-sm font-body">{exp.company}</p>
                        </div>
                      </div>

                      {/* Period */}
                      <div className="inline-block px-3 py-1 bg-[#1a1a1a] rounded-full mb-4">
                        <span className="text-red-500 text-sm font-medium">{exp.period}</span>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li 
                            key={i} 
                            className="text-[#b8b8b8] text-sm sm:text-base leading-relaxed flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Hover Accent */}
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-red-500 rounded-l-xl scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
