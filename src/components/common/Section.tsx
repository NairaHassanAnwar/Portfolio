import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  className = '', 
  children,
  fullWidth = false
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <motion.div 
        className={fullWidth ? 'w-full' : 'section-container'}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {title && (
          <motion.h2 
            className="section-title"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
        )}
        
        {subtitle && (
          <motion.p 
            className="section-subtitle"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
        )}
        
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section;