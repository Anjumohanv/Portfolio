import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode, FaProjectDiagram } from 'react-icons/fa';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'ASD Consultant',
      company: 'RM India',
      period: 'Apr 2025 - Dec 2025',
      description: 'Handling high volume data and delivering SLAs. Management Reporting. Daily updating and investigating Customers and suppliers daily targets to make sure that there is no miss in the SLAs.',
      skills: ['Data Analysis', 'SLA Management', 'Reporting', 'Customer Relations']
    },
    {
      id: 2,
      type: 'work',
      title: 'Full Stack Developer Intern',
      company: 'MASHUPSTACK',
      period: 'May 2024 - Dec 2024',
      description: 'Designed and developed web applications using modern web technologies. Collaborated with cross-functional teams to deliver user-friendly and efficient solutions. Worked extensively with Python, Django, MySQL, React and Bootstrap to build scalable projects. Independently designed and developed web application from scratch.',
      skills: ['Python', 'Django', 'MySQL', 'React', 'Bootstrap']
    },
    {
      id: 3,
      type: 'education',
      title: 'Diploma in Computer Engineering',
      company: 'GWPTC, Kaimanam',
      period: '2019 - 2022',
      description: 'Completed Diploma in Computer Engineering focusing on software development and computer systems.',
      skills: ['Programming', 'Computer Systems', 'Database Management', 'Web Development']
    },
    {
      id: 4,
      type: 'education',
      title: 'BSC Physics',
      company: 'NSS College For Women, Neeramankara',
      period: '2015 - 2017',
      description: 'Bachelor of Science in Physics developing analytical and problem-solving skills.',
      skills: ['Physics', 'Mathematics', 'Analysis', 'Research']
    }
  ];

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

  const getIcon = (type) => {
    switch (type) {
      case 'work':
        return <FaBriefcase className="text-neon-blue" />;
      case 'education':
        return <FaGraduationCap className="text-neon-purple" />;
      case 'project':
        return <FaProjectDiagram className="text-neon-cyan" />;
      default:
        return <FaCode className="text-neon-pink" />;
    }
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl font-space-grotesk font-bold mb-4">
            Journey <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-8"></div>
          <p className="text-secondary max-w-2xl mx-auto">
            My professional journey and educational milestones that shaped my career as a developer.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-neon-blue to-neon-purple hidden lg:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 rounded-xl relative lg:ml-8 lg:mr-0 lg:mb-0 mb-4"
                  >
                    <div className="absolute -left-12 top-6 w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white shadow-lg hidden lg:flex">
                      {getIcon(exp.type)}
                    </div>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-xl">
                        {getIcon(exp.type)}
                      </div>
                      <span className="text-neon-cyan text-sm font-medium">
                        {exp.type === 'work' ? 'WORK' : 'EDUCATION'}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-neon-blue mb-2">{exp.company}</h4>
                    <p className="text-neon-purple font-medium mb-3">{exp.period}</p>
                    <p className="text-secondary mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-full text-xs border border-glass-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                <div className="lg:w-1/2 hidden lg:block">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 rounded-xl relative lg:mr-8 lg:ml-0 lg:mb-0 mb-4"
                  >
                    <div className="absolute -right-12 top-6 w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white shadow-lg flex">
                      {getIcon(exp.type)}
                    </div>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-xl">
                        {getIcon(exp.type)}
                      </div>
                      <span className="text-neon-cyan text-sm font-medium">
                        {exp.type === 'work' ? 'WORK' : 'EDUCATION'}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-neon-blue mb-2">{exp.company}</h4>
                    <p className="text-neon-purple font-medium mb-3">{exp.period}</p>
                    <p className="text-secondary mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-full text-xs border border-glass-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Alternative Vertical Timeline for Mobile */}
        <div className="lg:hidden mt-12">
          <div className="relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12"
              >
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white text-sm">
                  {index + 1}
                </div>
                
                <div className="glass-card p-6 rounded-xl ml-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-xl">
                      {getIcon(exp.type)}
                    </div>
                    <span className="text-neon-cyan text-sm font-medium">
                      {exp.type === 'work' ? 'WORK' : 'EDUCATION'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <h4 className="text-lg font-semibold text-neon-blue mb-2">{exp.company}</h4>
                  <p className="text-neon-purple font-medium mb-3">{exp.period}</p>
                  <p className="text-secondary mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-full text-xs border border-glass-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;