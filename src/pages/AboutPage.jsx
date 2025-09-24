import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Lightbulb, 
  Award,
  TrendingUp,
  Globe,
  Heart,
  Zap
} from 'lucide-react';
import { mockTeam, mockStats } from '../mock/mockData';

const AboutPage = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technologies to deliver breakthrough solutions.',
      gradient: 'from-lime-400 to-emerald-400'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships based on trust and results.',
      gradient: 'from-yellow-400 to-orange-400'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for perfection in every line of code, every design, every interaction.',
      gradient: 'from-emerald-400 to-cyan-400'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'Creating solutions that make a difference in communities and businesses worldwide.',
      gradient: 'from-cyan-400 to-blue-400'
    }
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
            <Users className="w-4 h-4" />
            <span>About Polaris Inova Labs</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-lime-600 to-emerald-600 bg-clip-text text-transparent mb-8">
            Innovating the
            <br />
            <span className="bg-gradient-to-r from-lime-400 via-yellow-400 to-emerald-400 bg-clip-text text-transparent">
              Future
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            We're a team of passionate innovators, designers, and engineers dedicated to 
            transforming businesses through cutting-edge technology solutions.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Founded in 2016, Polaris Inova Labs began with a simple yet ambitious vision: 
                to bridge the gap between cutting-edge technology and real-world business challenges.
              </p>
              <p>
                What started as a small team of passionate developers has evolved into a 
                powerhouse of innovation, serving clients from startups to Fortune 500 companies 
                across diverse industries.
              </p>
              <p>
                Today, we're proud to have delivered <span className="font-bold text-lime-600">150+ successful projects</span>, 
                earned <span className="font-bold text-lime-600">98% client retention rate</span>, and 
                continue pushing the boundaries of what's possible in technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-lime-400 via-yellow-400 to-emerald-400 rounded-3xl p-1">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Our team collaborating"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-lime-200/50 hover:border-lime-300/80 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${value.gradient} text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                {value.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-lime-700 transition-colors duration-300">
                {value.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

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
            By the Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: `${mockStats.projectsCompleted}+`, label: 'Projects Delivered', icon: <Target className="w-6 h-6" /> },
            { value: `${mockStats.happyClients}+`, label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
            { value: `${mockStats.clientRetentionRate}%`, label: 'Client Retention', icon: <TrendingUp className="w-6 h-6" /> },
            { value: `${mockStats.averageProjectRating}/5`, label: 'Project Rating', icon: <Award className="w-6 h-6" /> },
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

      {/* Team Section */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The brilliant minds behind every successful project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockTeam.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-lime-200/50 hover:border-lime-300/80 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden border-4 border-gradient-to-br from-lime-400 to-emerald-400">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-lime-700 transition-colors duration-300">
                {member.name}
              </h3>
              
              <p className="text-lime-600 font-semibold mb-4">
                {member.role}
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {member.bio}
              </p>

              <div className="space-y-1">
                {member.expertise.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block text-xs bg-lime-100/60 text-lime-700 px-3 py-1 rounded-full mr-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
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
                Ready to Innovate?
              </h2>
              <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto font-medium">
                Let's discuss how we can transform your business with cutting-edge technology solutions.
              </p>
              
              <button className="bg-gray-900 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                <Zap className="w-6 h-6 mr-3 inline" />
                Start Your Project
              </button>
            </div>

            {/* Background shapes */}
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-20 h-20 border-4 border-gray-900"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    borderRadius: i % 2 === 0 ? '50%' : '20%',
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 15 + Math.random() * 10,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;