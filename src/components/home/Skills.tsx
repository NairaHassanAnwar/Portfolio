import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layers, PenTool as Tool, Heart } from 'lucide-react';
import Section from '../common/Section';
import SkillBar from '../common/SkillBar';
import { skills } from '../../data/skills';

const Skills: React.FC = () => {
  // Get top skills from each category
  const topLanguages = skills
    .filter(skill => skill.category === 'languages')
    .sort((a, b) => b.level - a.level)
    .slice(0, 3);
    
  const topFrameworks = skills
    .filter(skill => skill.category === 'frameworks')
    .sort((a, b) => b.level - a.level)
    .slice(0, 3);
    
  const topTools = skills
    .filter(skill => skill.category === 'tools')
    .sort((a, b) => b.level - a.level)
    .slice(0, 3);

  const topSoftSkills = skills
    .filter(skill => skill.category === 'soft')
    .sort((a, b) => b.level - a.level)
    .slice(0, 3);
    
  return (
    <Section
      title="Skills & Expertise"
      subtitle="A showcase of my technical abilities and professional skills."
      className="bg-dark-50 dark:bg-dark-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-bold text-dark-800 dark:text-white">
              Programming Languages
            </h3>
          </div>
          
          <div className="space-y-4">
            {topLanguages.map((skill) => (
              <SkillBar 
                key={skill.id} 
                name={skill.name} 
                level={skill.level} 
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 mr-4">
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-bold text-dark-800 dark:text-white">
              Frameworks & Libraries
            </h3>
          </div>
          
          <div className="space-y-4">
            {topFrameworks.map((skill) => (
              <SkillBar 
                key={skill.id} 
                name={skill.name} 
                level={skill.level} 
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mr-4">
              <Tool size={24} />
            </div>
            <h3 className="text-xl font-bold text-dark-800 dark:text-white">
              Tools & Technologies
            </h3>
          </div>
          
          <div className="space-y-4">
            {topTools.map((skill) => (
              <SkillBar 
                key={skill.id} 
                name={skill.name} 
                level={skill.level} 
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mr-4">
              <Heart size={24} />
            </div>
            <h3 className="text-xl font-bold text-dark-800 dark:text-white">
              Soft Skills
            </h3>
          </div>
          
          <div className="space-y-4">
            {topSoftSkills.map((skill) => (
              <SkillBar 
                key={skill.id} 
                name={skill.name} 
                level={skill.level} 
              />
            ))}
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link 
          to="/skills" 
          className="inline-flex items-center font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
        >
          View All Skills
          <ArrowRight size={20} className="ml-2" />
        </Link>
      </motion.div>
    </Section>
  );
};

export default Skills;