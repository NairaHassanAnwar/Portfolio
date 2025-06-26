import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import SocialLinks from '../common/SocialLinks';
import { personalInfo, navLinks } from '../../data/profile';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-50 dark:bg-dark-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              <span className="sr-only">Naira Hassan</span>
              CodeWITH Naira
            </Link>
            <p className="mt-2 text-dark-500 dark:text-dark-400 max-w-md">
              {personalInfo.bio.substring(0, 100)}...
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-dark-800 dark:text-white">Links</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className="text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-dark-800 dark:text-white">Contact</h3>
              <ul className="space-y-3">
                <li className="text-dark-500 dark:text-dark-400">
                  {personalInfo.email}
                </li>
                <li className="text-dark-500 dark:text-dark-400">
                  {personalInfo.phone}
                </li>
                <li className="text-dark-500 dark:text-dark-400">
                  {personalInfo.location}
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-dark-800 dark:text-white">Connect</h3>
              <div className="w-full">
                <SocialLinks className="flex flex-row justify-start" iconSize={20} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-dark-200 dark:border-dark-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-500 dark:text-dark-400 text-sm mb-4 md:mb-0">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;