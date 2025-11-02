import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div 
      className="card h-full flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2 text-dark-800 dark:text-white">
          {project.title}
        </h3>
        
        <p className="text-dark-500 dark:text-dark-400 mb-4 flex-1">
          {project.description}
        </p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3">
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
            >
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          )}
          
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-dark-600 dark:text-dark-400 hover:text-dark-800 dark:hover:text-dark-200"
            >
              <Github size={16} className="mr-1" />
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;