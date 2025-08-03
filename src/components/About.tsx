import React from 'react';
import { Server, Cloud, Zap, Shield, Code, Database } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const skills = [
    { icon: Cloud, name: 'AWS', color: 'text-orange-400' },
    { icon: Server, name: 'Kubernetes', color: 'text-blue-400' },
    { icon: Code, name: 'Terraform', color: 'text-purple-400' },
    { icon: Zap, name: 'Jenkins', color: 'text-yellow-400' },
    { icon: Shield, name: 'Docker', color: 'text-cyan-400' },
    { icon: Database, name: 'Python', color: 'text-green-400' },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-teal">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Aarav Patel - Cloud & DevOps Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-teal rounded-full flex items-center justify-center shadow-lg">
                <Cloud size={32} className="text-white" />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm a Cloud & DevOps Engineer with <span className="text-teal font-semibold">3+ years of experience</span> designing 
              resilient cloud architectures, automating CI/CD workflows, and building secure infrastructure on AWS and Kubernetes.
            </p>
            
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I enjoy simplifying complex cloud problems through automation and clean design. My approach focuses on 
              building <span className="text-teal font-semibold">scalable, secure, and maintainable</span> solutions 
              that empower teams to deploy with confidence.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">What drives me:</h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal rounded-full mr-3"></span>
                  Infrastructure as Code & Automation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal rounded-full mr-3"></span>
                  Cloud Security & Best Practices
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal rounded-full mr-3"></span>
                  Continuous Learning & Innovation
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <skill.icon size={32} className={`${skill.color} mx-auto mb-2`} />
                    <h4 className="font-medium text-sm">{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;