import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Cpu, 
  Database, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Zap,
  Target
} from 'lucide-react';
import { mockServices } from '../mock/mockData';
// import { Button } from '../components/ui/button';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(mockServices[0]);

  const iconComponents = {
    Globe: Globe,
    Cpu: Cpu,
    Database: Database,
    Cloud: Cloud,
  };

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
            <Target className="w-4 h-4" />
            <span>Our Services</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-lime-600 to-emerald-600 bg-clip-text text-transparent mb-8">
            Solutions That
            <br />
            <span className="bg-gradient-to-r from-lime-400 via-yellow-400 to-emerald-400 bg-clip-text text-transparent">
              Scale
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            From AI-powered applications to cloud infrastructure, we deliver 
            enterprise-grade solutions that transform your business.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {mockServices.map((service, index) => {
            const IconComponent = iconComponents[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedService(service)}
                className={`group relative cursor-pointer bg-white/70 backdrop-blur-sm rounded-3xl p-10 border transition-all duration-500 overflow-hidden ${
                  selectedService.id === service.id
                    ? 'border-lime-400/80 shadow-2xl shadow-lime-400/10'
                    : 'border-lime-200/50 hover:border-lime-300/80 shadow-xl hover:shadow-2xl'
                }`}
              >
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 bg-gradient-to-br ${service.gradient} text-white shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent className="w-10 h-10" />
                  </div>
                  
                  <h3 className="text-3xl font-black text-gray-900 mb-6 group-hover:text-lime-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    {service.shortDesc}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-lime-600 font-bold text-lg">{service.pricing}</span>
                    <div className="flex items-center text-lime-600 font-bold group-hover:translate-x-2 transition-transform duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </div>

                {/* Selection indicator */}
                {selectedService.id === service.id && (
                  <motion.div
                    layoutId="selectedService"
                    className="absolute inset-0 bg-gradient-to-br from-lime-400/10 to-emerald-400/10 rounded-3xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Service Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedService.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-lime-200/50 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${selectedService.gradient} text-white shadow-lg`}>
                  {React.createElement(iconComponents[selectedService.icon], { className: "w-8 h-8" })}
                </div>
                
                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  {selectedService.title}
                </h2>
                
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  {selectedService.fullDesc}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Duration</h4>
                    <p className="text-lime-600 font-semibold">{selectedService.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Starting Price</h4>
                    <p className="text-lime-600 font-semibold">{selectedService.pricing}</p>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-lime-400 via-yellow-400 to-emerald-400 text-gray-900 font-bold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0">
                  <Zap className="w-5 h-5 mr-3 inline" />
                  Get Started
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                  <div className="space-y-4">
                    {selectedService.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-6 h-6 text-lime-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedService.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-lime-100/80 text-lime-700 px-4 py-2 rounded-full font-semibold text-sm hover:bg-lime-200/80 transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How we transform your ideas into reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Discovery & Planning',
              description: 'We dive deep into your business needs, goals, and challenges to create a comprehensive strategy.',
              gradient: 'from-lime-400 to-emerald-400'
            },
            {
              step: '02',
              title: 'Design & Development',
              description: 'Our expert team crafts your solution using cutting-edge technologies and best practices.',
              gradient: 'from-yellow-400 to-orange-400'
            },
            {
              step: '03',
              title: 'Launch & Optimization',
              description: 'We deploy your solution and continuously optimize for performance and user experience.',
              gradient: 'from-emerald-400 to-cyan-400'
            }
          ].map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-lime-200/50 hover:border-lime-300/80 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className={`inline-block text-6xl font-black bg-gradient-to-br ${process.gradient} bg-clip-text text-transparent mb-6`}>
                {process.step}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-lime-700 transition-colors duration-300">
                {process.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {process.description}
              </p>
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
                Let's Build Together
              </h2>
              <p className="text-xl text-gray-800 mb-12 max-w-3xl mx-auto font-medium">
                Ready to transform your business? Let's discuss your project and create something extraordinary.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="bg-gray-900 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl hover:bg-gray-800 hover:scale-105 transition-all duration-300">
                  <Zap className="w-6 h-6 mr-3 inline" />
                  Start Your Project
                </button>
                
                <button className="border-2 border-gray-900 text-gray-900 font-bold px-10 py-6 text-lg rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 bg-white">
                  Schedule a Call
                </button>
              </div>
            </div>

            {/* Background decoration */}
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

export default ServicesPage;