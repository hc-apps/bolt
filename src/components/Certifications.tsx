import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Shield } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId: string;
  badge: string;
  verifyUrl: string;
  skills: string[];
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const certifications: Certification[] = [
    {
      name: 'AWS Certified Solutions Architect – Professional',
      issuer: 'Amazon Web Services',
      year: '2024',
      credentialId: 'SAP-C02-2024',
      badge: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200',
      verifyUrl: '#',
      skills: ['AWS Architecture', 'Cost Optimization', 'Security', 'Migration']
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      year: '2023',
      credentialId: 'CKA-2023-001',
      badge: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=200',
      verifyUrl: '#',
      skills: ['Kubernetes', 'Container Orchestration', 'Cluster Management', 'Troubleshooting']
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      year: '2023',
      credentialId: 'TA-003-2023',
      badge: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
      verifyUrl: '#',
      skills: ['Infrastructure as Code', 'Terraform', 'Cloud Provisioning', 'State Management']
    },
    {
      name: 'AWS Certified DevOps Engineer – Professional',
      issuer: 'Amazon Web Services',
      year: '2024',
      credentialId: 'DOP-C02-2024',
      badge: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200',
      verifyUrl: '#',
      skills: ['CI/CD', 'Monitoring', 'Security', 'Automation']
    },
    {
      name: 'Certified Kubernetes Security Specialist',
      issuer: 'Cloud Native Computing Foundation',
      year: '2024',
      credentialId: 'CKS-2024-001',
      badge: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=200',
      verifyUrl: '#',
      skills: ['Kubernetes Security', 'Network Policies', 'RBAC', 'Pod Security']
    },
    {
      name: 'Google Cloud Professional Cloud Architect',
      issuer: 'Google Cloud',
      year: '2023',
      credentialId: 'PCA-2023-001',
      badge: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200',
      verifyUrl: '#',
      skills: ['GCP Architecture', 'Multi-cloud', 'Data Engineering', 'ML Operations']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <Award className="inline-block mr-4 text-blue-500" size={48} />
            Certifications
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Continuous learning and professional development in cloud technologies and DevOps practices.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative h-80 perspective-1000"
              onHoverStart={() => setFlippedCard(index)}
              onHoverEnd={() => setFlippedCard(null)}
            >
              <motion.div
                animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full preserve-3d cursor-pointer"
              >
                {/* Front of Card */}
                <div className={`absolute inset-0 w-full h-full rounded-3xl p-6 backface-hidden ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-2xl transition-shadow duration-300`}>
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 shadow-lg">
                      <img 
                        src={cert.badge} 
                        alt={cert.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">
                      {cert.name}
                    </h3>
                    
                    <p className={`text-sm mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {cert.issuer}
                    </p>
                    
                    <div className="flex items-center text-blue-500 text-sm mb-4">
                      <Calendar size={14} className="mr-1" />
                      {cert.year}
                    </div>
                    
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {cert.credentialId}
                    </div>

                    <div className="mt-auto">
                      <Shield className="text-blue-500 mx-auto" size={24} />
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className={`absolute inset-0 w-full h-full rounded-3xl p-6 backface-hidden rotate-y-180 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg`}>
                  <div className="flex flex-col h-full">
                    <h4 className="font-bold text-lg mb-4 text-center">Skills Covered</h4>
                    
                    <div className="flex-1 space-y-3">
                      {cert.skills.map((skill, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: flippedCard === index ? 1 : 0,
                            x: flippedCard === index ? 0 : -20
                          }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                          <span className={`text-sm ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={cert.verifyUrl}
                      className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      <ExternalLink size={16} />
                      <span>Verify Certificate</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;