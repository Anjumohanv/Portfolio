import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'OTT Streaming Platform',
      description: 'Create a Full-stack OTT Streaming Platform where users can browse and watch movies, and manage their accounts. Included an admin panel for managing content, users, and generating reports.',
      image: '/placeholder-project.svg',
      technologies: ['React', 'Django', 'MySQL'],
      github: '#',
      live: '#',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Medical Store Management Site',
      description: 'The Medical Store Management Site lets managers manage inventory by adding, editing, viewing and deleting up to five medicines. Users can sign up, log in and search for medicines.',
      image: '/placeholder-project.svg',
      technologies: ['JavaScript', 'Python', 'Django'],
      github: '#',
      live: '#',
      category: 'fullstack'
    },
    {
      id: 3,
      title: 'Daily Water Intake Site',
      description: 'The Daily Water Intake Site helps users track their water consumption, view history and compare intake between dates. Users can sign up, log in and securely log out.',
      image: '/placeholder-project.svg',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
      github: '#',
      live: '#',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'JavaScript Calculator',
      description: 'A simple Calculator made with JavaScript for functionality and CSS for styling. It lets users perform basic calculations with a clean design.',
      image: '/placeholder-project.svg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: '#',
      live: '#',
      category: 'frontend'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const getIcon = (tech) => {
    switch (tech.toLowerCase()) {
      case 'react':
        return <FaReact className="text-neon-cyan" />;
      case 'node.js':
      case 'node':
        return <FaNodeJs className="text-green-400" />;
      case 'mongodb':
      case 'database':
        return <FaDatabase className="text-green-500" />;
      case 'html':
        return <FaHtml5 className="text-orange-500" />;
      case 'css':
        return <FaCss3Alt className="text-blue-500" />;
      default:
        return <FaCode className="text-neon-blue" />;
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl font-space-grotesk font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-8"></div>
          <p className="text-secondary max-w-2xl mx-auto">
            A showcase of my recent work and ongoing projects. Each project reflects my commitment to quality and innovation.
          </p>
        </motion.div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'frontend', 'fullstack', 'webapp', 'dashboard', 'mobile'].map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full capitalize transition-all ${
                activeFilter === filter
                  ? 'glass-button bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 text-white'
                  : 'glass-button text-secondary hover:text-white'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass-card group overflow-hidden rounded-xl"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github}
                    className="p-2 glass rounded-full hover:bg-neon-blue/20 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a 
                    href={project.live}
                    className="p-2 glass rounded-full hover:bg-neon-purple/20 transition-colors"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-glass rounded-full text-xs border border-glass-border group-hover:bg-neon-blue/10 transition-colors"
                    >
                      {getIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 glass-button text-sm hover:bg-neon-blue/20 transition-colors flex-1 justify-center"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 glass-button text-sm hover:bg-neon-purple/20 transition-colors flex-1 justify-center"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;