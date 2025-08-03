import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  logo: string;
  website: string;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences: ExperienceItem[] = [
    {
      company: 'TechFlow Solutions',
      role: 'Senior DevOps Engineer',
      duration: '2022 - Present',
      location: 'San Francisco, CA',
      description: [
        'Led migration of legacy infrastructure to AWS, reducing operational costs by 40%',
        'Implemented GitOps workflows using ArgoCD, improving deployment reliability by 60%',
        'Designed and maintained Kubernetes clusters serving 10M+ daily requests',
        'Mentored junior engineers and established DevOps best practices across teams'
      ],
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
      website: '#'
    },
    {
      company: 'CloudNative Inc',
      role: 'DevOps Engineer',
      duration: '2021 - 2022',
      location: 'Remote',
      description: [
        'Built CI/CD pipelines using Jenkins and GitHub Actions for 20+ microservices',
        'Automated infrastructure provisioning with Terraform, reducing setup time by 80%',
        'Implemented comprehensive monitoring using Prometheus and Grafana',
        'Collaborated with development teams to optimize application performance'
      ],
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100',
      website: '#'
    },
    {
      company: 'StartupTech',
      role: 'Junior Cloud Engineer',
      duration: '2020 - 2021',
      location: 'Austin, TX',
      description: [
        'Managed AWS infrastructure for early-stage startup applications',
        'Implemented automated backup and disaster recovery solutions',
        'Optimized cloud costs through resource right-sizing and scheduling',
        'Participated in on-call rotation and incident response procedures'
      ],
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100',
      website: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-blue-500">Journey</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Building scalable infrastructure and leading DevOps transformations across diverse environments.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
            darkMode ? 'bg-gray-700' : 'bg-gray-200'
          }`} />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg bg-white"
                  >
                    <img 
                      src={exp.logo} 
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-1 p-8 rounded-3xl ${
                    darkMode ? 'bg-gray-800/50' : 'bg-gray-50'
                  } backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                      <div className="flex items-center space-x-4 text-blue-500">
                        <span className="font-semibold">{exp.company}</span>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={exp.website}
                          className="hover:text-blue-600 transition-colors"
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      </div>
                    </div>
                    
                    <div className={`text-sm mt-2 md:mt-0 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <div className="flex items-center mb-1">
                        <Calendar size={14} className="mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className={`space-y-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {exp.description.map((item, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;