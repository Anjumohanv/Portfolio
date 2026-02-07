import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaDatabase, FaPalette, FaServer } from 'react-icons/fa';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skills = {
    frontend: [
      { name: 'HTML', level: 90, icon: <FaCode className="text-neon-blue" /> },
      { name: 'CSS', level: 85, icon: <FaCode className="text-neon-cyan" /> },
      { name: 'Bootstrap', level: 80, icon: <FaPalette className="text-neon-purple" /> },
      { name: 'JavaScript', level: 85, icon: <FaCode className="text-neon-pink" /> },
      { name: 'React', level: 75, icon: <FaLaptopCode className="text-neon-blue" /> },
    ],
    backend: [
      { name: 'Python', level: 80, icon: <FaServer className="text-neon-cyan" /> },
      { name: 'Django', level: 75, icon: <FaCode className="text-neon-blue" /> },
      { name: 'MySQL', level: 70, icon: <FaDatabase className="text-neon-purple" /> },
      { name: 'Git', level: 85, icon: <FaCode className="text-neon-pink" /> },
    ],
    tools: [
      { name: 'Sublime Text', level: 75, icon: <FaLaptopCode className="text-neon-blue" /> },
      { name: 'VS Code', level: 85, icon: <FaLaptopCode className="text-neon-purple" /> },
      { name: 'MS Office', level: 80, icon: <FaCode className="text-neon-cyan" /> },
      { name: 'Windows OS', level: 90, icon: <FaServer className="text-neon-blue" /> },
      { name: 'Word', level: 75, icon: <FaCode className="text-neon-pink" /> },
    ]
  };

  const allSkills = [
    ...skills.frontend.map(skill => ({ ...skill, category: 'frontend' })),
    ...skills.backend.map(skill => ({ ...skill, category: 'backend' })),
    ...skills.tools.map(skill => ({ ...skill, category: 'tools' }))
  ];

  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl font-space-grotesk font-bold mb-4">
            My <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-8"></div>
          <p className="text-secondary max-w-2xl mx-auto">
            Proficient in modern web technologies and frameworks. Continuously learning and adapting to new tools and methodologies.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'frontend', 'backend', 'tools'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full capitalize transition-all ${
                activeCategory === category
                  ? 'glass-button bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 text-white'
                  : 'glass-button text-secondary hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              variants={itemVariants}
              className="glass-card p-6 rounded-xl group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <span className="text-neon-blue font-bold">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-glass-border rounded-full h-2">
                <motion.div
                  className="h-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Icons Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: <FaCode className="text-4xl text-neon-blue" />, name: 'JavaScript' },
              { icon: <FaLaptopCode className="text-4xl text-neon-cyan" />, name: 'React' },
              { icon: <FaServer className="text-4xl text-neon-purple" />, name: 'Node.js' },
              { icon: <FaDatabase className="text-4xl text-neon-pink" />, name: 'MongoDB' },
              { icon: <FaPalette className="text-4xl text-neon-blue" />, name: 'CSS' },
              { icon: <FaCode className="text-4xl text-neon-purple" />, name: 'Python' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-2 p-4 glass rounded-xl inline-block">
                  {tech.icon}
                </div>
                <p className="text-secondary">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;