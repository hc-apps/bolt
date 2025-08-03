import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Search, Tag, ArrowRight } from 'lucide-react';

interface BlogProps {
  darkMode: boolean;
}

interface BlogPost {
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  category: string;
  thumbnail: string;
  tags: string[];
  slug: string;
}

const Blog: React.FC<BlogProps> = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const blogPosts: BlogPost[] = [
    {
      title: 'Building Resilient Infrastructure with AWS',
      excerpt: 'A comprehensive guide to designing fault-tolerant systems that can handle failures gracefully and recover automatically.',
      publishDate: 'Dec 15, 2024',
      readTime: '8 min read',
      category: 'Architecture',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['AWS', 'Architecture', 'Resilience'],
      slug: 'building-resilient-infrastructure-aws'
    },
    {
      title: 'Kubernetes Security Best Practices',
      excerpt: 'Essential security measures every DevOps engineer should implement when deploying applications to Kubernetes clusters.',
      publishDate: 'Dec 8, 2024',
      readTime: '12 min read',
      category: 'Security',
      thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Kubernetes', 'Security', 'DevOps'],
      slug: 'kubernetes-security-best-practices'
    },
    {
      title: 'Terraform Modules: Reusable Infrastructure',
      excerpt: 'Learn how to create modular, reusable Terraform configurations that scale across multiple environments and teams.',
      publishDate: 'Nov 28, 2024',
      readTime: '10 min read',
      category: 'Infrastructure',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Terraform', 'Infrastructure', 'Automation'],
      slug: 'terraform-modules-reusable-infrastructure'
    },
    {
      title: 'CI/CD Pipeline Optimization Strategies',
      excerpt: 'Proven techniques to speed up your deployment pipelines while maintaining quality and security standards.',
      publishDate: 'Nov 20, 2024',
      readTime: '9 min read',
      category: 'DevOps',
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['CI/CD', 'DevOps', 'Optimization'],
      slug: 'cicd-pipeline-optimization-strategies'
    },
    {
      title: 'Monitoring Microservices at Scale',
      excerpt: 'Comprehensive monitoring strategies for distributed systems using Prometheus, Grafana, and modern observability tools.',
      publishDate: 'Nov 12, 2024',
      readTime: '11 min read',
      category: 'Monitoring',
      thumbnail: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Monitoring', 'Microservices', 'Observability'],
      slug: 'monitoring-microservices-at-scale'
    },
    {
      title: 'Cloud Cost Optimization Techniques',
      excerpt: 'Advanced strategies to reduce cloud spending without compromising performance or reliability of your applications.',
      publishDate: 'Nov 5, 2024',
      readTime: '7 min read',
      category: 'Cloud',
      thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Cloud', 'Cost Optimization', 'AWS'],
      slug: 'cloud-cost-optimization-techniques'
    }
  ];

  const allTags = ['All', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

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
    <section id="blog" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="text-blue-500">Insights</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Sharing knowledge about cloud architecture, DevOps practices, and lessons learned from real-world projects.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search size={20} className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>
          </div>

          {/* Tag Filter */}
          <div className="flex items-center justify-center mb-4">
            <Tag size={20} className="text-blue-500 mr-2" />
            <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Filter by tag:
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 ${
                  selectedTag === tag
                    ? 'bg-blue-500 text-white shadow-lg'
                    : darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`${searchTerm}-${selectedTag}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={`${searchTerm}-${selectedTag}-${index}`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`group cursor-pointer rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className={`text-sm mb-4 line-clamp-3 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {post.excerpt}
                  </p>

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

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 text-xs rounded-lg ${
                          darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center transition-colors"
                  >
                    Read More
                    <ArrowRight size={14} className="ml-1" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              No articles found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;