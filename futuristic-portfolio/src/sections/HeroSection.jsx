import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowDown } from 'react-icons/fa';

const HeroSection = ({ name = "ANJU MOHAN V", role = "Full Stack Python Developer" }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-bg"></div>
      
      {/* Particle Background */}
      <div className="particles-container">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.1,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }}
          ></div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-space-grotesk font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              {name}
            </span>
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <TypeAnimation
              sequence={[
                role,
                2000,
                'Full Stack Python Developer',
                2000,
              ]}
              wrapper="p"
              speed={50}
              className="text-xl md:text-2xl text-secondary mb-8"
              repeat={Infinity}
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-button glow-hover px-8 py-4 text-lg font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-button px-8 py-4 text-lg font-medium"
          >
            Contact Me
          </motion.button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 animate-bounce"
        >
          <FaArrowDown className="text-neon-blue mx-auto text-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;