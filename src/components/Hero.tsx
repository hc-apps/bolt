import React, { useState, useEffect } from 'react';
import { ChevronDown, Cloud, Server, Code } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const phrases = [
    'AWS Certified',
    'Kubernetes Enthusiast', 
    'Automation Advocate',
    'Cloud Architect'
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    
    if (displayText.length < currentPhrase.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [displayText, currentIndex]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-icon absolute top-20 left-20 opacity-10">
          <Cloud size={60} className="text-teal animate-float" />
        </div>
        <div className="floating-icon absolute top-40 right-32 opacity-10">
          <Server size={50} className="text-teal animate-float-delayed" />
        </div>
        <div className="floating-icon absolute bottom-40 left-40 opacity-10">
          <Code size={55} className="text-teal animate-float-slow" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{' '}
            <span className="text-teal bg-gradient-to-r from-teal to-blue-400 bg-clip-text text-transparent">
              Aarav Patel
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Cloud & DevOps Engineer building secure, scalable, and automated cloud infrastructure.
          </p>

          <div className="h-12 flex items-center justify-center">
            <span className={`text-lg md:text-xl font-medium ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal/25"
            >
              Contact Me
            </button>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className={`border-2 border-teal text-teal hover:bg-teal hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                darkMode ? '' : 'hover:text-white'
              }`}
            >
              View My Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-teal" />
      </button>
    </section>
  );
};

export default Hero;