import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Skills from '../components/home/Skills';
import Section from '../components/common/Section';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Skills />
      <FeaturedProjects />
      
      <Section
        title="Let's Work Together"
        subtitle="Have a project in mind? I'd love to hear about it and see how I can help bring your ideas to life."
        className="bg-gradient-to-br from-primary-500 to-secondary-600 text-white"
      >
        <div className="text-center">
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Whether you're looking for a developer to join your team or need help with a specific project, 
            I'm ready to collaborate and deliver exceptional results.
          </p>
          
          <Link 
            to="/contact" 
            className="btn bg-white text-primary-600 hover:bg-white/90"
          >
            Get in Touch
            <ArrowRight size={18} className="ml-2" />
          </Link>
          <a 
              href="/Portfolio/CV_Naira.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn bg-white text-primary-600 hover:bg-white/90 ml-4"
            >
              Download CV
              <Download size={18} className="ml-2" />
            </a>
        </div>
      </Section>
    </>
  );
};

export default HomePage;