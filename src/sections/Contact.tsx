import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Dribbble, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@alexmorgan.com', href: 'mailto:hello@alexmorgan.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: '#' },
  ];

  const socialLinks = [
    { icon: Dribbble, href: '#', label: 'Dribbble' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-[#040404] py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-red-900/10 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 
            className={`font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.87, 0, 0.13, 1)' }}
          >
            Let&apos;s Work Together
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
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div 
            className={`lg:col-span-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div 
                className={`space-y-2 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <Label htmlFor="name" className="text-white text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-0 border-b border-[#333] rounded-none px-0 py-3 text-white placeholder:text-[#666] focus:border-red-500 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors duration-300"
                />
              </div>

              <div 
                className={`space-y-2 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <Label htmlFor="email" className="text-white text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-0 border-b border-[#333] rounded-none px-0 py-3 text-white placeholder:text-[#666] focus:border-red-500 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors duration-300"
                />
              </div>

              <div 
                className={`space-y-2 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
                <Label htmlFor="message" className="text-white text-sm font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-transparent border-0 border-b border-[#333] rounded-none px-0 py-3 text-white placeholder:text-[#666] focus:border-red-500 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors duration-300 resize-none"
                />
              </div>

              <div 
                className={`pt-4 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={`w-full py-6 text-base font-display font-medium tracking-wider uppercase rounded-lg transition-all duration-300 ${
                    submitted 
                      ? 'bg-green-500 hover:bg-green-500' 
                      : 'bg-white text-[#040404] hover:bg-red-500 hover:text-white'
                  }`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : submitted ? (
                    <span className="flex items-center gap-2">
                      Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className={`group flex items-center gap-4 p-4 bg-[#0f0f0f] border border-[#333] rounded-xl hover:border-red-500/50 transition-all duration-400 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                    }`}
                    style={{ 
                      transitionDelay: `${500 + index * 150}ms`,
                      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                      transform: isVisible 
                        ? 'perspective(600px) rotateY(0deg)' 
                        : 'perspective(600px) rotateY(-30deg)',
                    }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-[#b8b8b8] text-sm">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-red-500 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div 
              className={`pt-6 border-t border-[#333] transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              <p className="text-[#b8b8b8] text-sm mb-4">Follow me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-12 h-12 flex items-center justify-center rounded-lg bg-[#0f0f0f] border border-[#333] text-white hover:border-red-500 hover:text-red-500 hover:scale-110 hover:rotate-6 transition-all duration-200 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ 
                        transitionDelay: `${1000 + index * 80}ms`,
                        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Badge */}
            <div 
              className={`p-4 bg-red-500/10 border border-red-500/30 rounded-xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1100ms' }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Available for new projects</p>
                  <p className="text-[#b8b8b8] text-xs">Typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
