import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  category: string;
  featured: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'Serverless Journal App',
      description: 'Full-stack serverless application with automated CI/CD pipeline, real-time sync, and multi-region deployment.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['AWS Lambda', 'DynamoDB', 'React', 'CloudFormation'],
      github: '#',
      demo: '#',
      category: 'Full Stack',
      featured: true
    },
    {
      title: 'Kubernetes Monitoring Stack',
      description: 'Complete observability solution with custom dashboards, intelligent alerting, and performance optimization insights.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Kubernetes', 'Prometheus', 'Grafana', 'Helm'],
      github: '#',
      demo: '#',
      category: 'DevOps',
      featured: true
    },
    {
      title: 'Multi-Region DR Architecture',
      description: 'Automated disaster recovery solution with cross-region replication, health monitoring, and failover mechanisms.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['AWS', 'Terraform', 'Route 53', 'Lambda'],
      github: '#',
      demo: '#',
      category: 'Infrastructure',
      featured: false
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Enterprise-grade pipeline with automated testing, security scanning, and zero-downtime deployments.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Jenkins', 'Docker', 'ArgoCD', 'SonarQube'],
      github: '#',
      demo: '#',
      category: 'DevOps',
      featured: false
    },
    {
      title: 'Cost Optimization Tool',
      description: 'Python-based AWS cost analyzer with automated recommendations, scheduling, and detailed reporting.',
      image: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'AWS SDK', 'Lambda', 'CloudWatch'],
      github: '#',
      demo: '#',
      category: 'Automation',
      featured: false
    },
    {
      title: 'Terraform Module Library',
      description: 'Reusable infrastructure modules with security best practices, automated testing, and comprehensive documentation.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Terraform', 'AWS', 'GitHub Actions', 'Terratest'],
      github: '#',
      demo: '#',
      category: 'Infrastructure',
      featured: false
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

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
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A showcase of cloud infrastructure, automation tools, and DevOps solutions I've architected and built.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-12"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Filter size={20} className="text-blue-500" />
            <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Filter by category:
            </span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                selectedFilter === category
                  ? 'bg-blue-500 text-white shadow-lg'
                  : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${selectedFilter}-${index}`}
                variants={itemVariants}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  />
                  
                  {/* Action Buttons */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredProject === index ? 1 : 0,
                      y: hoveredProject === index ? 0 : 20
                    }}
                    className="absolute top-4 right-4 flex space-x-2"
                  >
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demo}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </motion.div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className={`p-6 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <div className="mb-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className={`text-sm mb-4 line-clamp-3 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 text-xs rounded-lg ${
                          darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={`px-2 py-1 text-xs rounded-lg ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center transition-colors"
                  >
                    View Case Study
                    <ArrowRight size={14} className="ml-1" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;