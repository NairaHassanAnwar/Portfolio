import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import SocialLinks from '../common/SocialLinks';
import { personalInfo } from '../../data/profile';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 bg-gradient-to-br from-white to-primary-50 dark:from-dark-900 dark:to-dark-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-dark-900 dark:text-white mb-4">
            Hi, I'm{' '}
            <span className="text-primary-600 dark:text-primary-400">
              {personalInfo.name.split(' ')[0]}
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-dark-700 dark:text-dark-200 mb-6">
            {personalInfo.title}
          </h2>
          
          <p className="text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-lg">
            {personalInfo.bio}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Link 
            to="/contact" 
            className="btn btn-primary"
            >
              Get in Touch
              <ArrowRight size={18} className="ml-2" />
            </Link>
            
            <a 
              href="/Portfolio/CV_Naira.pdf" 
              target="_blank" 
              rel="/Portfolio/CV_Naira.pdf"
              className="btn btn-outline"
            >
              Download CV
              <Download size={18} className="ml-2" />
            </a>
          </div>
          
          <SocialLinks className="flex gap-4" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full h-0 pb-[100%] rounded-full bg-gradient-to-tr from-primary-500 to-accent-500 overflow-hidden shadow-xl">
            <img
              src="/Portfolio/me.jpg"
              alt="Professional portrait"
              className="absolute inset-0 w-full h-full object-cover object-top rounded-full border-8 border-white dark:border-dark-800"
            />
          </div>
          
          <div className="absolute -bottom-6 -right-6 p-4 rounded-lg bg-white dark:bg-dark-800 shadow-lg">
            <p className="text-lg font-bold text-primary-600 dark:text-primary-400">
              0+ Years
            </p>
            <p className="text-sm text-dark-600 dark:text-dark-400">
              Experience
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;