import { useEffect, useRef, useState } from 'react';
import { 
  Figma, 
  Palette, 
  Code2, 
  Layers, 
  PenTool, 
  Video,
  Terminal,
  Globe,
  Cpu,
  Box,
  Users,
  MessageSquare,
  Target,
  Lightbulb
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ElementType;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Design Tools
  { name: 'Figma', icon: Figma, level: 95, category: 'Design Tools' },
  { name: 'Sketch', icon: Palette, level: 90, category: 'Design Tools' },
  { name: 'Adobe XD', icon: Layers, level: 88, category: 'Design Tools' },
  { name: 'Photoshop', icon: PenTool, level: 92, category: 'Design Tools' },
  { name: 'Illustrator', icon: Palette, level: 85, category: 'Design Tools' },
  { name: 'After Effects', icon: Video, level: 80, category: 'Design Tools' },
  
  // Development
  { name: 'HTML/CSS', icon: Code2, level: 90, category: 'Development' },
  { name: 'JavaScript', icon: Terminal, level: 75, category: 'Development' },
  { name: 'React', icon: Cpu, level: 70, category: 'Development' },
  { name: 'Webflow', icon: Globe, level: 85, category: 'Development' },
  { name: 'Framer', icon: Box, level: 80, category: 'Development' },
  
  // Soft Skills
  { name: 'Leadership', icon: Users, level: 95, category: 'Soft Skills' },
  { name: 'Communication', icon: MessageSquare, level: 92, category: 'Soft Skills' },
  { name: 'Strategy', icon: Target, level: 88, category: 'Soft Skills' },
  { name: 'Problem Solving', icon: Lightbulb, level: 90, category: 'Soft Skills' },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = ['Design Tools', 'Development', 'Soft Skills'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Design Tools': return Palette;
      case 'Development': return Code2;
      case 'Soft Skills': return Users;
      default: return Lightbulb;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full bg-[#040404] py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ff0000 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 
            className={`font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white transition-all duration-800 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            Skills
          </h2>
          <div 
            className={`w-24 h-[2px] bg-red-500 mx-auto mt-6 transition-all duration-600 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          />
          <p 
            className={`text-[#b8b8b8] text-lg mt-6 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            A comprehensive toolkit built over years of creating exceptional digital experiences
          </p>
        </div>

        {/* Skills by Category */}
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(s => s.category === category);
            const CategoryIcon = getCategoryIcon(category);

            return (
              <div key={category}>
                {/* Category Header */}
                <div 
                  className={`flex items-center gap-3 mb-8 transition-all duration-600 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${400 + categoryIndex * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <CategoryIcon className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-medium text-white">
                    {category}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {categorySkills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    const isHovered = hoveredSkill === skill.name;

                    return (
                      <div
                        key={skill.name}
                        className={`group relative transition-all duration-400 ${
                          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                        }`}
                        style={{ 
                          transitionDelay: `${500 + categoryIndex * 100 + skillIndex * 80}ms`,
                          transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                        }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div 
                          className={`relative bg-[#0f0f0f] border border-[#333] rounded-xl p-4 sm:p-5 cursor-pointer transition-all duration-200 ${
                            isHovered ? 'border-red-500 bg-red-500/10 scale-110 z-10' : 'hover:border-[#555]'
                          }`}
                          style={{
                            boxShadow: isHovered ? '0 10px 30px -10px rgba(255, 0, 0, 0.3)' : 'none',
                            animation: isVisible ? `float ${5 + skillIndex * 0.5}s ease-in-out infinite` : 'none',
                            animationDelay: `${skillIndex * 0.2}s`
                          }}
                        >
                          {/* Icon */}
                          <div className="flex justify-center mb-3">
                            <Icon 
                              className={`w-8 h-8 transition-colors duration-200 ${
                                isHovered ? 'text-red-500' : 'text-[#b8b8b8] group-hover:text-white'
                              }`} 
                            />
                          </div>

                          {/* Name */}
                          <p className={`text-center text-sm font-medium transition-colors duration-200 ${
                            isHovered ? 'text-red-500' : 'text-white'
                          }`}>
                            {skill.name}
                          </p>

                          {/* Level Indicator - Shows on Hover */}
                          <div 
                            className={`absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 transition-all duration-300 ${
                              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                            }`}
                          >
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    i < Math.floor(skill.level / 20) 
                                      ? 'bg-red-500' 
                                      : 'bg-[#333]'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Connection Lines (decorative) */}
                        {skillIndex < categorySkills.length - 1 && (
                          <div 
                            className={`hidden lg:block absolute top-1/2 -right-2 w-4 h-[2px] bg-[#333] transition-all duration-500 ${
                              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                            }`}
                            style={{ 
                              transitionDelay: `${700 + categoryIndex * 100 + skillIndex * 80}ms`,
                              opacity: isHovered ? 0.6 : 0.2
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div 
          className={`mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          {[
            { label: 'Design Tools', value: '15+' },
            { label: 'Coding Languages', value: '8+' },
            { label: 'Frameworks', value: '12+' },
            { label: 'Years Learning', value: '10+' },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-[#0f0f0f] border border-[#333] rounded-xl hover:border-red-500/30 transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${1100 + index * 100}ms`,
              }}
            >
              <p className="font-display text-3xl sm:text-4xl font-light text-red-500 mb-2">{stat.value}</p>
              <p className="text-[#b8b8b8] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
