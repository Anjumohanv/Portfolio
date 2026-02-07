import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl font-space-grotesk font-bold mb-4">
            About <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-neon-blue">Who I Am</h3>
              <p className="text-secondary leading-relaxed mb-6">
                As a motivated and enthusiastic fresher in Software Development. I aim to apply my technical skills and
                passion for learning in a dynamic team. I am eager to contribute to meaningful projects, embrace new
                challenges, and continuously grow my expertise in Software Development to support company goals
                and career advancement.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Teamwork', 'Problem Solving', 'Adaptability', 'Time Management'].map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full text-sm border border-glass-border"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-6 rounded-xl floating">
              <h4 className="text-xl font-semibold mb-2 text-neon-cyan">Experience</h4>
              <p className="text-secondary">5+ Years in Web Development</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl floating" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-xl font-semibold mb-2 text-neon-cyan">Projects</h4>
              <p className="text-secondary">50+ Successful Projects Delivered</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl floating" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-xl font-semibold mb-2 text-neon-cyan">Clients</h4>
              <p className="text-secondary">25+ Happy Clients Worldwide</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;