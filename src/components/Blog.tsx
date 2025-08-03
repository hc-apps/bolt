import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, Filter } from 'lucide-react';

interface BlogProps {
  darkMode: boolean;
}

interface BlogPost {
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  category: string;
  slug: string;
  tags: string[];
}

const Blog: React.FC<BlogProps> = ({ darkMode }) => {
  const [visiblePosts, setVisiblePosts] = useState<number[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const blogPosts: BlogPost[] = [
    {
      title: 'How I Designed My Personal DR Architecture on AWS',
      excerpt: 'A deep dive into building a cost-effective disaster recovery solution using AWS services with automated failover and monitoring.',
      publishDate: 'Dec 15, 2024',
      readTime: '8 min read',
      category: 'Architecture',
      slug: 'aws-disaster-recovery-architecture',
      tags: ['AWS', 'Architecture', 'Disaster Recovery']
    },
    {
      title: 'Top 5 Mistakes in Terraform and How to Avoid Them',
      excerpt: 'Common pitfalls I\'ve encountered while working with Terraform in production environments and practical solutions to prevent them.',
      publishDate: 'Dec 8, 2024',
      readTime: '6 min read',
      category: 'DevOps',
      slug: 'terraform-mistakes-and-solutions',
      tags: ['Terraform', 'DevOps', 'Best Practices']
    },
    {
      title: 'Getting Started with Kubernetes in Production',
      excerpt: 'Essential considerations and best practices for deploying Kubernetes clusters in production environments.',
      publishDate: 'Nov 28, 2024',
      readTime: '12 min read',
      category: 'Kubernetes',
      slug: 'kubernetes-production-guide',
      tags: ['Kubernetes', 'Production', 'DevOps']
    },
    {
      title: 'Monitoring Kubernetes Clusters: A Complete Guide',
      excerpt: 'Setting up comprehensive monitoring for Kubernetes using Prometheus, Grafana, and custom alerting rules.',
      publishDate: 'Nov 20, 2024',
      readTime: '10 min read',
      category: 'Monitoring',
      slug: 'kubernetes-monitoring-guide',
      tags: ['Kubernetes', 'Monitoring', 'Prometheus']
    },
    {
      title: 'CI/CD Best Practices for Cloud-Native Applications',
      excerpt: 'Building robust CI/CD pipelines for containerized applications with security, testing, and deployment strategies.',
      publishDate: 'Nov 12, 2024',
      readTime: '9 min read',
      category: 'CI/CD',
      slug: 'cloud-native-cicd-practices',
      tags: ['CI/CD', 'Cloud Native', 'DevOps']
    },
    {
      title: 'AWS Cost Optimization: Beyond the Basics',
      excerpt: 'Advanced strategies for reducing AWS costs through right-sizing, automation, and intelligent resource management.',
      publishDate: 'Nov 5, 2024',
      readTime: '7 min read',
      category: 'AWS',
      slug: 'aws-cost-optimization-advanced',
      tags: ['AWS', 'Cost Optimization', 'Cloud']
    }
  ];

  const allTags = ['All', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];
  
  const filteredPosts = selectedFilter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedFilter));
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisiblePosts(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const postElements = document.querySelectorAll('.blog-post');
    postElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="blog" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="text-teal">Insights</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Sharing knowledge about cloud architecture, DevOps practices, and lessons learned from real-world projects.
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
          {filteredPosts.map((post, index) => (
            <article
              key={index}
              data-index={index}
              className={`blog-post group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                visiblePosts.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`p-6 rounded-xl h-full transition-all duration-300 ${
                darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'
              } hover:shadow-lg`}>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      darkMode ? 'bg-teal/20 text-teal' : 'bg-teal/10 text-teal'
                    }`}>
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-teal transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className={`text-sm mb-4 line-clamp-3 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className={`flex items-center justify-between text-xs mb-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.publishDate}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-300/20">
                    <button className="text-teal hover:text-teal/80 text-sm font-medium flex items-center transition-colors">
                      Read More
                      <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className={`px-8 py-3 border-2 border-teal text-teal hover:bg-teal hover:text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
            darkMode ? 'hover:text-white' : 'hover:text-white'
          }`}>
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;