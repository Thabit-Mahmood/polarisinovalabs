import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  ArrowRight,
  Filter,
  Zap,
  Award,
  TrendingUp
} from 'lucide-react';
import { mockProjects } from '../mock/mockData';
// import { Button } from '../components/ui/button';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web Application', 'Mobile Application', 'Data Analytics', 'Cloud Solutions', 'IoT Solutions'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? mockProjects 
    : mockProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-lime-400/20 to-yellow-400/20 backdrop-blur-sm border border-lime-300/30 text-lime-700 px-6 py-3 rounded-full text-sm font-bold mb-8">
            <Award className="w-4 h-4" />
            <span>Our Portfolio</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-lime-600 to-emerald-600 bg-clip-text text-transparent mb-8">
            Projects That
            <br />
            <span className="bg-gradient-to-r from-lime-400 via-yellow-400 to-emerald-400 bg-clip-text text-transparent">
              Inspire
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Explore our collection of transformative projects that have revolutionized 
            businesses and delighted users across industries.
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-10 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2 mb-4"
        >
          <Filter className="w-5 h-5 text-lime-600" />
          <span className="font-semibold text-gray-700">Filter by category:</span>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-lime-400 to-emerald-400 text-gray-900 shadow-lg'
                  : 'bg-white/60 text-gray-700 border border-lime-200/50 hover:border-lime-300/80 hover:bg-lime-50/80'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatePresence>
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-lime-200/50 hover:border-lime-300/80 shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                      project.featured ? 'h-64' : 'h-48'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-lime-400 to-emerald-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                      Featured Project
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-lime-100/80 text-lime-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">{project.duration}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-lime-700 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100/80 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-xs px-2">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-lime-600">
                      {Object.values(project.results)[0]}
                    </div>
                    <div className="flex items-center text-lime-600 font-bold group-hover:translate-x-2 transition-transform duration-300">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors duration-200"
                >
                  ×
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-4xl font-black text-gray-900 mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-lime-600 font-semibold text-lg">
                      {selectedProject.client}
                    </p>
                  </div>
                  <span className="bg-lime-100/80 text-lime-700 px-4 py-2 rounded-full font-semibold">
                    {selectedProject.category}
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {Object.entries(selectedProject.results).map(([key, value], index) => (
                    <div key={index} className="bg-lime-50/80 rounded-2xl p-6 text-center">
                      <div className="text-3xl font-black text-lime-600 mb-2">{value}</div>
                      <div className="text-gray-700 font-semibold capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100/80 text-gray-700 px-4 py-2 rounded-full font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gradient-to-r from-lime-400 to-emerald-400 text-gray-900 font-bold py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <ExternalLink className="w-5 h-5 mr-3 inline" />
                    View Live Project
                  </button>
                  <button className="flex-1 border-2 border-lime-400 text-lime-700 font-bold py-4 rounded-full hover:bg-lime-50 transition-all duration-300 bg-white">
                    <Github className="w-5 h-5 mr-3 inline" />
                    View Source
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
            Project Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The measurable results our clients have achieved
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '340%', label: 'Avg Sales Increase', icon: <TrendingUp className="w-6 h-6" /> },
            { value: '99.9%', label: 'Uptime Achieved', icon: <Zap className="w-6 h-6" /> },
            { value: '2.5x', label: 'Performance Boost', icon: <Award className="w-6 h-6" /> },
            { value: '150+', label: 'Projects Delivered', icon: <Award className="w-6 h-6" /> },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-lime-200/50 shadow-xl hover:shadow-2xl hover:border-lime-300/70 transition-all duration-300 group"
            >
              <div className="text-lime-600 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-black bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-700 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden bg-gradient-to-br from-lime-400 via-yellow-400 to-emerald-400 rounded-3xl p-16 shadow-2xl text-center"
          >
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
                Next Success Story?
              </h2>
              <p className="text-xl text-gray-800 mb-12 max-w-3xl mx-auto font-medium">
                Ready to join our portfolio of successful projects? Let's create something amazing together.
              </p>
              
              <button className="bg-gray-900 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl hover:bg-gray-800 hover:scale-105 transition-all duration-300">
                <Zap className="w-6 h-6 mr-3 inline" />
                Start Your Project
              </button>
            </div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border-4 border-gray-900 rounded-full" />
              <div className="absolute top-20 right-20 w-16 h-16 border-4 border-gray-900 rotate-45" />
              <div className="absolute bottom-20 left-20 w-24 h-24 border-4 border-gray-900 rotate-12" />
              <div className="absolute bottom-10 right-10 w-18 h-18 border-4 border-gray-900 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;