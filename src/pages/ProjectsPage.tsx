import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import ProjectCard from '../components/common/ProjectCard';
import { projects } from '../data/projects';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Extract unique technologies from all projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();
  
  // Add 'All Projects' option
  const filterOptions = ['all', ...allTechnologies];
  
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => 
        project.technologies.includes(filter)
      );
  
  return (
    <div className="pt-16">
      <Section
        title="My Projects"
        subtitle="A collection of my work, showcasing my skills and experience."
        className="bg-gradient-to-br from-white to-primary-50 dark:from-dark-900 dark:to-dark-800"
      >
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-2">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors duration-300 ${
                  filter === option
                    ? 'bg-primary-500 text-white'
                    : 'bg-white dark:bg-dark-700 text-dark-600 dark:text-dark-300 hover:bg-primary-50 dark:hover:bg-dark-600'
                }`}
              >
                {option === 'all' ? 'All Projects' : option}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-dark-500 dark:text-dark-400 text-lg">
              No projects found with the selected technology.
            </p>
            <button
              onClick={() => setFilter('all')}
              className="mt-4 btn btn-primary"
            >
              View All Projects
            </button>
          </div>
        )}
      </Section>
      
      <Section
        title="Work Process"
        subtitle="My approach to project development follows a structured methodology."
        className="bg-white dark:bg-dark-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: 'Research & Planning',
              description: 'Understanding requirements and creating a detailed project roadmap.',
              color: 'primary',
            },
            {
              step: '02',
              title: 'Design & Prototype',
              description: 'Developing wireframes and interactive prototypes for client approval.',
              color: 'secondary',
            },
            {
              step: '03',
              title: 'Development',
              description: 'Writing clean, efficient code following best practices and standards.',
              color: 'accent',
            },
            {
              step: '04',
              title: 'Testing & Deployment',
              description: 'Thorough testing and smooth deployment to production environments.',
              color: 'green',
            },
          ].map((process, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-dark-700 rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`h-2 ${
                process.color === 'primary' ? 'bg-primary-500' :
                process.color === 'secondary' ? 'bg-secondary-500' :
                process.color === 'accent' ? 'bg-accent-500' : 'bg-green-500'
              }`}></div>
              <div className="p-6">
                <div className={`text-lg font-bold mb-4 ${
                  process.color === 'primary' ? 'text-primary-500' :
                  process.color === 'secondary' ? 'text-secondary-500' :
                  process.color === 'accent' ? 'text-accent-500' : 'text-green-500'
                }`}>
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark-800 dark:text-white">
                  {process.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300">
                  {process.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ProjectsPage;