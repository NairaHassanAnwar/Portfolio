import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Section from '../common/Section';
import ProjectCard from '../common/ProjectCard';
import { projects } from '../../data/projects';

const FeaturedProjects: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <Section
      title="Featured Projects"
      subtitle="Here are some of my recent projects that showcase my skills and experience."
      className="bg-white dark:bg-dark-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Link 
          to="/projects" 
          className="inline-flex items-center font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
        >
          View All Projects
          <ArrowRight size={20} className="ml-2" />
        </Link>
      </motion.div>
    </Section>
  );
};

export default FeaturedProjects;