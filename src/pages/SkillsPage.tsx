import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import SkillBar from '../components/common/SkillBar';
import { skills } from '../data/skills';
import { Code, Layers, PenTool as Tool, Heart } from 'lucide-react';

const SkillsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Skills', icon: <Code size={20} /> },
    { id: 'languages', name: 'Programming Languages', icon: <Code size={20} /> },
    { id: 'frameworks', name: 'Frameworks & Libraries', icon: <Layers size={20} /> },
    { id: 'tools', name: 'Tools & Technologies', icon: <Tool size={20} /> },
    { id: 'soft', name: 'Soft Skills', icon: <Heart size={20} /> },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
    
  return (
    <div className="pt-16">
      <Section
        title="Skills & Expertise"
        subtitle="A comprehensive overview of my technical abilities and professional skills."
        className="bg-gradient-to-br from-white to-primary-50 dark:from-dark-900 dark:to-dark-800"
      >
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-5 py-3 rounded-full whitespace-nowrap font-medium transition-colors duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-white dark:bg-dark-700 text-dark-600 dark:text-dark-300 hover:bg-primary-50 dark:hover:bg-dark-600'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <SkillBar 
                name={skill.name} 
                level={skill.level} 
              />
            </motion.div>
          ))}
        </div>
      </Section>
      
      <Section
        title="Development Approach"
        className="bg-white dark:bg-dark-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-dark-800 dark:text-white">
              Clean, Readable Code
            </h3>
            <p className="text-dark-600 dark:text-dark-300">
              I write maintainable code with clear comments and documentation, following best practices and coding standards.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center text-secondary-600 dark:text-secondary-400 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="18" r="3"></circle>
                <circle cx="6" cy="6" r="3"></circle>
                <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                <line x1="6" y1="9" x2="6" y2="21"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-dark-800 dark:text-white">
              Agile Methodology
            </h3>
            <p className="text-dark-600 dark:text-dark-300">
              I embrace iterative development, continuous feedback, and collaborative problem-solving to deliver high-quality software efficiently.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-2xl bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center text-accent-600 dark:text-accent-400 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-dark-800 dark:text-white">
              Performance Optimization
            </h3>
            <p className="text-dark-600 dark:text-dark-300">
              I focus on creating fast, efficient applications by optimizing code, reducing load times, and enhancing user experience.
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default SkillsPage;