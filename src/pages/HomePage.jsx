import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Cloud,
  Rocket,
  Star,
  CheckCircle,
  Award,
  Users,
  TrendingUp
} from 'lucide-react';
// import { Button } from '../components/ui/button';

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const stats = [
    { icon: <Award className="w-6 h-6" />, value: '150+', label: 'Projects Delivered' },
    { icon: <Users className="w-6 h-6" />, value: '50+', label: 'Happy Clients' },
    { icon: <Star className="w-6 h-6" />, value: '4.9/5', label: 'Client Rating' },
    { icon: <TrendingUp className="w-6 h-6" />, value: '300%', label: 'Avg ROI Increase' },
  ];

  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Web Applications',
      description: 'Lightning-fast, scalable web apps built with cutting-edge technology',
      gradient: 'from-lime-400 to-emerald-400',
      delay: 0.1,
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions that adapt and learn from your business data',
      gradient: 'from-yellow-400 to-orange-400',
      delay: 0.2,
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights for better decisions',
      gradient: 'from-emerald-400 to-cyan-400',
      delay: 0.3,
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'Cloud Solutions',
      description: 'Scalable, secure cloud infrastructure that grows with your business',
      gradient: 'from-cyan-400 to-blue-400',
      delay: 0.4,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechFlow',
      content: 'Polaris transformed our entire digital presence. Our conversion rates increased by 340% in just 3 months.',
      rating: 5,
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO, DataDrive',
      content: 'The AI solutions they built revolutionized our operations. We\'re now processing 10x more data with half the resources.',
      rating: 5,
    },
    {
      name: 'Emily Watson',
      role: 'Founder, GrowthLab',
      content: 'Incredible attention to detail and innovation. They delivered beyond our wildest expectations.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-lime-400/20 to-yellow-400/20 backdrop-blur-sm border border-lime-300/30 text-lime-700 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg"
          >
            <Zap className="w-4 h-4" />
            <span>Innovation Unleashed</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-8"
          >
            <span className="bg-gradient-to-r from-gray-900 via-lime-600 to-emerald-600 bg-clip-text text-transparent">
              Transform
            </span>
            <br />
            <span className="bg-gradient-to-r from-lime-400 via-yellow-400 to-emerald-400 bg-clip-text text-transparent">
              Everything
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed font-medium"
          >
            We craft revolutionary digital experiences that don't just meet expectations—
            <span className="font-bold bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent"> they shatter them</span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Link to="/services">
              <button className="group relative overflow-hidden bg-gradient-to-r from-lime-400 via-yellow-400 to-emerald-400 text-gray-900 font-bold px-10 py-6 text-lg rounded-full shadow-2xl hover:shadow-lime-400/25 border-0 hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Explore Services</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </Link>
            
            <Link to="/portfolio">
              <button className="font-bold px-10 py-6 text-lg rounded-full border-2 border-lime-400 text-lime-700 hover:bg-lime-50 hover:border-lime-500 transition-all duration-300 bg-white">
                <Rocket className="w-6 h-6 mr-3 inline" />
                View Portfolio
              </button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-lime-200/50 shadow-xl hover:shadow-2xl hover:border-lime-300/70 transition-all duration-300 group"
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
          </motion.div>
        </div>
      </motion.section>

      {/* Services Preview */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8">
            What We Create
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge solutions that propel your business into the future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: service.delay }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-10 border border-lime-200/50 hover:border-lime-300/80 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 bg-gradient-to-br ${service.gradient} text-white shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-3xl font-black text-gray-900 mb-6 group-hover:text-lime-700 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  {service.description}
                </p>

                <div className="flex items-center text-lime-600 font-bold text-lg group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>

              {/* Hover gradient effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl bg-gradient-to-br ${service.gradient}`} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've transformed businesses across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-lime-200/50 shadow-xl hover:shadow-2xl hover:border-lime-300/80 transition-all duration-300"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                "{testimonial.content}"
              </p>
              
              <div>
                <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                <div className="text-lime-600 font-semibold">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden bg-gradient-to-br from-lime-400 via-yellow-400 to-emerald-400 rounded-3xl p-16 shadow-2xl"
          >
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
                Ready to Transform?
              </h2>
              <p className="text-xl md:text-2xl text-gray-800 mb-12 max-w-3xl mx-auto font-medium">
                Let's build something extraordinary together. Your vision, our innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact">
                  <button className="bg-gray-900 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl hover:bg-gray-800 hover:scale-105 transition-all duration-300">
                    <Zap className="w-6 h-6 mr-3 inline" />
                    Start Your Project
                  </button>
                </Link>
                
                <Link to="/portfolio">
                  <button className="border-2 border-gray-900 text-gray-900 font-bold px-10 py-6 text-lg rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 bg-white">
                    View Our Work
                  </button>
                </Link>
              </div>
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

export default HomePage;