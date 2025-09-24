import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Zap,
  CheckCircle
} from 'lucide-react';
// import { Button } from '../components/ui/button';
import { mockContactInfo } from '../mock/mockData';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'AI/ML Solution',
    'Data Analytics',
    'Cloud Migration',
    'Custom Development'
  ];

  const budgetRanges = [
    '$10k - $25k',
    '$25k - $50k',
    '$50k - $100k',
    '$100k - $250k',
    '$250k+'
  ];

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
            <MessageCircle className="w-4 h-4" />
            <span>Let's Connect</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-lime-600 to-emerald-600 bg-clip-text text-transparent mb-8">
            Start Your
            <br />
            <span className="bg-gradient-to-r from-lime-400 via-yellow-400 to-emerald-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Ready to transform your business? Let's discuss your project and 
            create something extraordinary together.
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 border border-lime-200/50 shadow-2xl"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-8">
              Tell Us About Your Project
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 rounded-xl border border-lime-200/50 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-300 bg-white/80"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 rounded-xl border border-lime-200/50 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-300 bg-white/80"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 rounded-xl border border-lime-200/50 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-300 bg-white/80"
                  placeholder="Your company name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-bold text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 rounded-xl border border-lime-200/50 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-300 bg-white/80"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-bold text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 rounded-xl border border-lime-200/50 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-300 bg-white/80"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 rounded-xl border border-lime-200/50 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-300 bg-white/80 resize-none"
                  placeholder="Tell us about your project goals, requirements, and any specific challenges you're facing..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-gradient-to-r from-lime-400 via-yellow-400 to-emerald-400 text-gray-900 font-bold py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0"
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="w-6 h-6" />
                    <span>Message Sent!</span>
                  </motion.div>
                ) : (
                  <>
                    <Send className="w-6 h-6 mr-3 inline" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-8">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We'd love to hear about your project. Reach out through any of these channels 
                and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: 'Call Us',
                  content: mockContactInfo.office.phone,
                  gradient: 'from-lime-400 to-emerald-400'
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: 'Email Us',
                  content: mockContactInfo.office.email,
                  gradient: 'from-yellow-400 to-orange-400'
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: 'Visit Us',
                  content: mockContactInfo.office.address,
                  gradient: 'from-emerald-400 to-cyan-400'
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: 'Office Hours',
                  content: mockContactInfo.office.hours,
                  gradient: 'from-cyan-400 to-blue-400'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-lime-200/50 hover:border-lime-300/80 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-lime-700 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Response Time Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-lime-400 via-yellow-400 to-emerald-400 rounded-2xl p-6 text-center"
            >
              <div className="text-gray-900 font-black text-2xl mb-2">
                24 Hour Response
              </div>
              <p className="text-gray-800 font-medium">
                We guarantee a response to all inquiries within 24 hours
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              question: 'What is your typical project timeline?',
              answer: 'Project timelines vary based on complexity, but most web applications take 3-6 months, while AI/ML projects typically require 4-8 months.'
            },
            {
              question: 'Do you work with startups?',
              answer: 'Absolutely! We love working with startups and offer flexible engagement models to suit different budgets and growth stages.'
            },
            {
              question: 'What technologies do you specialize in?',
              answer: 'We specialize in modern web technologies (React, Node.js), AI/ML (Python, TensorFlow), cloud platforms (AWS, Azure), and mobile development.'
            },
            {
              question: 'Do you provide ongoing support?',
              answer: 'Yes, we offer comprehensive post-launch support including maintenance, updates, monitoring, and feature enhancements.'
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-lime-200/50 shadow-lg hover:shadow-xl hover:border-lime-300/80 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
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
                Ready to Begin?
              </h2>
              <p className="text-xl text-gray-800 mb-12 max-w-3xl mx-auto font-medium">
                Join 50+ successful companies that have transformed their business with Polaris Inova Labs.
              </p>
              
              <button className="bg-gray-900 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl hover:bg-gray-800 hover:scale-105 transition-all duration-300">
                <Zap className="w-6 h-6 mr-3 inline" />
                Schedule a Free Consultation
              </button>
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

export default ContactPage;