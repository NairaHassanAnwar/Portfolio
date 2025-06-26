import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import { education } from '../data/education';
import { personalInfo } from '../data/profile';
import { Calendar, GraduationCap, User, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-16">
      <Section
        title="About Me"
        subtitle="Learn more about my background, education, and interests."
        className="bg-gradient-to-br from-white to-primary-50 dark:from-dark-900 dark:to-dark-800"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div 
              className="bg-white dark:bg-dark-700 p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                  <User size={24} />
                </div>
                <h3 className="text-2xl font-bold text-dark-800 dark:text-white">
                  Background
                </h3>
              </div>
              
              <div className="prose dark:prose-invert max-w-none">
                {personalInfo.about.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-dark-600 dark:text-dark-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-dark-700 p-8 rounded-xl shadow-md mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 mr-4">
                  <Calendar size={24} />
                </div>
                <h3 className="text-2xl font-bold text-dark-800 dark:text-white">
                  Personal Info
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-dark-500 dark:text-dark-400 mb-1">
                    Name
                  </h4>
                  <p className="text-dark-800 dark:text-white font-medium">
                    {personalInfo.name}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-dark-500 dark:text-dark-400 mb-1">
                    Email
                  </h4>
                  <p className="text-dark-800 dark:text-white font-medium">
                    {personalInfo.email}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-dark-500 dark:text-dark-400 mb-1">
                    Phone
                  </h4>
                  <p className="text-dark-800 dark:text-white font-medium">
                    {personalInfo.phone}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-dark-500 dark:text-dark-400 mb-1">
                    Location
                  </h4>
                  <p className="text-dark-800 dark:text-white font-medium">
                    {personalInfo.location}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-dark-500 dark:text-dark-400 mb-1">
                    Languages
                  </h4>
                  <div className="space-y-2">
                    {personalInfo.languages.map((lang, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-dark-700 dark:text-dark-300">
                          {lang.language}
                        </span>
                        <span className="text-dark-500 dark:text-dark-400 text-sm">
                          {lang.proficiency}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-dark-700 p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mr-4">
                  <Heart size={24} />
                </div>
                <h3 className="text-2xl font-bold text-dark-800 dark:text-white">
                  Interests
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
      
      <Section
        title="Education"
        subtitle="My academic journey and certifications."
        className="bg-white dark:bg-dark-900"
      >
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div 
              key={edu.id}
              className="bg-white dark:bg-dark-700 rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6 sm:p-8 sm:flex">
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <GraduationCap size={32} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-dark-800 dark:text-white mr-4">
                      {edu.institution}
                    </h3>
                    <div className="px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium">
                      {edu.startDate} - {edu.endDate}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-dark-700 dark:text-dark-200">
                      {edu.degree} in {edu.field}
                    </h4>
                  </div>
                  
                  <p className="text-dark-600 dark:text-dark-300 mb-4">
                    {edu.description}
                  </p>
                  <div className="flex justify-end">
                    {edu.link && (
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;