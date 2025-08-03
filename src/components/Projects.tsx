import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowRight, Filter } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  category: string;
  tags: string[];
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects: Project[] = [
    {
      title: 'Serverless Journal App',
      description: 'Built a scalable journaling application with fully automated deployments using AWS serverless architecture.',
      technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'CloudFormation', 'CI/CD'],
      features: [
        'Auto-scaling serverless backend',
        'Real-time data synchronization',
        'Secure authentication with Cognito',
        'Automated infrastructure deployment'
      ],
      github: '#',
      demo: '#',
      category: 'Full Stack',
      tags: ['AWS', 'Serverless', 'Full Stack']
    },
    {
      title: 'Multi-Region Disaster Recovery',
      description: 'Designed comprehensive DR architecture to ensure business continuity with automated failover capabilities.',
      technologies: ['AWS Route 53', 'S3 Cross-Region Replication', 'Lambda', 'CloudWatch', 'Terraform'],
      features: [
        'Automated failover mechanisms',
        'Cross-region data replication',
        'Health monitoring and alerting',
        'Infrastructure as Code'
      ],
      github: '#',
      category: 'Infrastructure',
      tags: ['AWS', 'Infrastructure', 'Terraform']
    },
    {
      title: 'CI/CD Pipeline for E-commerce',
      description: 'Automated build/test/deploy process that improved release speed by 60% and reduced deployment errors.',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'Prometheus'],
      features: [
        'Automated testing and quality gates',
        'Zero-downtime deployments',
        'Multi-environment pipeline',
        'Comprehensive monitoring'
      ],
      github: '#',
      demo: '#',
      category: 'DevOps',
      tags: ['DevOps', 'Kubernetes', 'CI/CD']
    },
    {
      title: 'Kubernetes Monitoring Stack',
      description: 'Complete observability solution for Kubernetes clusters with custom dashboards and alerting.',
      technologies: ['Kubernetes', 'Prometheus', 'Grafana', 'AlertManager', 'ELK Stack', 'Helm'],
      features: [
        'Custom Grafana dashboards',
        'Intelligent alerting rules',
        'Log aggregation and analysis',
        'Performance optimization insights'
      ],
      github: '#',
      category: 'Monitoring',
      tags: ['Kubernetes', 'Monitoring', 'DevOps']
    },
    {
      title: 'Infrastructure Cost Optimizer',
      description: 'Python-based tool that analyzes AWS infrastructure and provides cost optimization recommendations.',
      technologies: ['Python', 'AWS SDK', 'Lambda', 'CloudWatch', 'SNS', 'DynamoDB'],
      features: [
        'Automated cost analysis',
        'Resource utilization monitoring',
        'Optimization recommendations',
        'Scheduled reporting'
      ],
      github: '#',
      category: 'Automation',
      tags: ['AWS', 'Python', 'Automation']
    },
    {
      title: 'Terraform Module Library',
      description: 'Reusable Terraform modules for common AWS infrastructure patterns with security best practices.',
      technologies: ['Terraform', 'AWS', 'GitHub Actions', 'Terratest', 'Pre-commit Hooks'],
      features: [
        'Security-first design',
        'Comprehensive testing',
        'Automated validation',
        'Extensive documentation'
      ],
      github: '#',
      category: 'Infrastructure',
      tags: ['Terraform', 'AWS', 'Infrastructure']
    }
  ];

  const allTags = ['All', ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedFilter));
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-teal">Projects</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A showcase of cloud infrastructure, automation tools, and DevOps solutions I've built.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <Filter size={20} className="text-teal" />
            <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Filter by:
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedFilter === tag
                  ? 'bg-teal text-white shadow-lg'
                  : darkMode
                    ? 'bg-white/10 text-gray-300 hover:bg-white/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`project-card group p-6 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl ${
                visibleProjects.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } ${
                darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    darkMode ? 'bg-teal/20 text-teal' : 'bg-teal/10 text-teal'
                  }`}>
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className={`p-2 rounded-lg transition-colors duration-200 ${
                          darkMode ? 'hover:bg-white/10' : 'hover:bg-gray-200'
                        }`}
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className={`p-2 rounded-lg transition-colors duration-200 ${
                          darkMode ? 'hover:bg-white/10' : 'hover:bg-gray-200'
                        }`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-teal transition-colors">
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className={`text-xs flex items-start ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <ArrowRight size={12} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-1 text-xs rounded ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className={`px-2 py-1 text-xs rounded ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                    }`}>
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-300/20">
                <button className="text-teal hover:text-teal/80 text-sm font-medium flex items-center transition-colors">
                  View Case Study
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;