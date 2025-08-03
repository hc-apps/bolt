import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Code, Shield, Zap, Database, Container, GitBranch } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const techStack = [
    { icon: Cloud, name: 'AWS', color: 'text-orange-500' },
    { icon: Container, name: 'Docker', color: 'text-blue-400' },
    { icon: Server, name: 'Kubernetes', color: 'text-blue-600' },
    { icon: Code, name: 'Terraform', color: 'text-purple-500' },
    { icon: GitBranch, name: 'Jenkins', color: 'text-red-500' },
    { icon: Database, name: 'Python', color: 'text-green-500' },
    { icon: Shield, name: 'Security', color: 'text-yellow-500' },
    { icon: Zap, name: 'Automation', color: 'text-blue-500' },
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-blue-500">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm a passionate Cloud & DevOps Engineer with <span className="text-blue-500 font-semibold">3+ years of experience</span> in 
              designing resilient cloud architectures and automating complex workflows. I believe in the power of 
              infrastructure as code and the elegance of well-orchestrated systems.
            </p>
            
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My approach combines technical expertise with creative problem-solving, always focusing on 
              <span className="text-blue-500 font-semibold"> scalability, security, and maintainability</span>. 
              I'm driven by the challenge of turning complex infrastructure problems into elegant, automated solutions.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">What drives me:</h3>
              <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  Building infrastructure that scales effortlessly
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  Automating repetitive tasks to focus on innovation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  Continuous learning and knowledge sharing
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`p-8 rounded-3xl ${
              darkMode ? 'bg-gray-800/50' : 'bg-gray-50'
            } backdrop-blur-sm`}>
              <h3 className="text-2xl font-bold mb-8 text-center">Tech Stack</h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                      darkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
                    } shadow-lg hover:shadow-xl`}
                  >
                    <div className="text-center">
                      <tech.icon size={32} className={`${tech.color} mx-auto mb-2`} />
                      <h4 className="font-medium text-sm">{tech.name}</h4>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Floating decoration */}
            <motion.div 
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity }
              }}
              className="absolute -top-4 -right-4 w-16 h-16 border-2 border-blue-500/30 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;