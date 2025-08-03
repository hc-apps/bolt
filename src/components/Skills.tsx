import React, { useState, useEffect } from 'react';
import { Award, Star, Cloud, Server, Shield } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);

  const certifications: Certification[] = [
    {
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      year: '2023',
      credentialId: 'SAA-C03',
      icon: Cloud,
      color: 'text-orange-400'
    },
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      year: '2023',
      credentialId: 'CKA-2023',
      icon: Server,
      color: 'text-blue-400'
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      year: '2022',
      credentialId: 'TA-002',
      icon: Shield,
      color: 'text-purple-400'
    },
    {
      name: 'AWS Certified DevOps Engineer – Professional',
      issuer: 'Amazon Web Services',
      year: '2024',
      credentialId: 'DOP-C02',
      icon: Cloud,
      color: 'text-orange-400'
    }
  ];

  const skills: Skill[] = [
    { name: 'AWS', level: 90, category: 'Cloud Platforms' },
    { name: 'Kubernetes', level: 85, category: 'Container Orchestration' },
    { name: 'Terraform', level: 80, category: 'Infrastructure as Code' },
    { name: 'Jenkins', level: 80, category: 'CI/CD' },
    { name: 'Docker', level: 85, category: 'Containerization' },
    { name: 'Python', level: 70, category: 'Programming' },
    { name: 'Linux', level: 85, category: 'Operating Systems' },
    { name: 'Prometheus/Grafana', level: 75, category: 'Monitoring' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
            
            if (entry.target.classList.contains('skill-item')) {
              setTimeout(() => {
                setAnimatedSkills(prev => [...prev, index]);
              }, index * 100);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.cert-item, .skill-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-teal">Certifications</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Continuous learning and professional development in cloud technologies and DevOps practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="text-teal mr-3" size={28} />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`cert-item p-6 rounded-xl transition-all duration-500 transform ${
                    visibleItems.includes(index) ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  } ${
                    darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'
                  } hover:shadow-lg`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className={`p-3 rounded-lg ${
                        darkMode ? 'bg-white/10' : 'bg-gray-100'
                      }`}>
                        <cert.icon className={`${cert.color}`} size={24} />
                      </div>
                      <h4 className="font-bold text-lg mb-2">{cert.name}</h4>
                      <p className={`text-sm mb-1 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {cert.issuer}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <span className={`text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {cert.year}
                        </span>
                        {cert.credentialId && (
                          <span className={`px-3 py-1 text-xs rounded-full ${
                            darkMode ? 'bg-teal/20 text-teal' : 'bg-teal/10 text-teal'
                          }`}>
                            {cert.credentialId}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className={`p-2 rounded-lg ${
                      darkMode ? 'bg-teal/20' : 'bg-teal/10'
                    }`}>
                      <Star className="text-teal" size={20} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8">
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`skill-item transition-all duration-500 ${
                    visibleItems.includes(index) ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className={`h-3 rounded-full overflow-hidden ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div
                      className="h-full bg-gradient-to-r from-teal to-blue-400 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: animatedSkills.includes(index) ? `${skill.level}%` : '0%'
                      }}
                    />
                  </div>
                  
                  <p className={`text-xs mt-1 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {skill.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;