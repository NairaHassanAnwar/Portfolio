import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import { achievements } from '../data/achievements';
import { 
  Award, Trophy, Code, FileText, GraduationCap, ExternalLink 
} from 'lucide-react';

const AchievementsPage: React.FC = () => {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Award':
        return <Award size={24} />;
      case 'Trophy':
        return <Trophy size={24} />;
      case 'Code':
        return <Code size={24} />;
      case 'FileText':
        return <FileText size={24} />;
      case 'GraduationCap':
        return <GraduationCap size={24} />;
      default:
        return <Award size={24} />;
    }
  };
  
  return (
    <div className="pt-16">
      <Section
        title="Achievements & Certifications"
        subtitle="A timeline of my accomplishments, awards, and certifications."
        className="bg-gradient-to-br from-white to-primary-50 dark:from-dark-900 dark:to-dark-800"
      >
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-900/50"></div>
          
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary-500 border-4 border-white dark:border-dark-800 z-10"></div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <div className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 flex items-center justify-center rounded-lg text-primary-600 dark:text-primary-400 mr-4 ${
                        index % 2 === 0 ? 'md:order-2 md:ml-4 md:mr-0' : ''
                      }`}>
                        {getIcon(achievement.icon)}
                      </div>
                      <h3 className="text-xl font-bold text-dark-800 dark:text-white">
                        {achievement.title}
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                        {achievement.date}
                      </span>
                    </div>
                    
                    <p className="text-dark-600 dark:text-dark-300 mb-4">
                      {achievement.description}
                    </p>
                    
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}
                      >
                        {index % 2 === 0 && (
                          <>
                            View Details
                            <ExternalLink size={16} className="ml-1" />
                          </>
                        )}
                        {index % 2 !== 0 && (
                          <>
                            <ExternalLink size={16} className="mr-1" />
                            View Details
                          </>
                        )}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      
      <Section
        title="Skills & Recognition"
        className="bg-white dark:bg-dark-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-dark-800 dark:text-white">
              Skills Assessment
            </h3>
            <p className="text-dark-600 dark:text-dark-300 mb-6">
              My technical skills and academic achievements have been recognized by industry professionals and educational institutions alike.
            </p>
            <ul className="space-y-3 text-dark-600 dark:text-dark-300">
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Consistently scored in the top 10% of programming competitions
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Received perfect scores on multiple technical assessments
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Recognized for problem-solving abilities and innovative solutions
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-dark-800 dark:text-white">
              Professional Development
            </h3>
            <p className="text-dark-600 dark:text-dark-300 mb-6">
              I am committed to continuous learning and staying up-to-date with the latest technologies and industry trends.
            </p>
            <ul className="space-y-3 text-dark-600 dark:text-dark-300">
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Attend industry conferences and workshops regularly
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Complete advanced courses in emerging technologies
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Participate in professional development programs
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default AchievementsPage;