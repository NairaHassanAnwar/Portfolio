import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  maxLevel?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  name, 
  level, 
  maxLevel = 5 
}) => {
  const percentage = (level / maxLevel) * 100;
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-dark-700 dark:text-dark-300 font-medium">{name}</span>
        <span className="text-sm text-dark-500 dark:text-dark-400">
          {level}/{maxLevel}
        </span>
      </div>
      <div className="h-2 bg-dark-100 dark:bg-dark-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary-500 dark:bg-primary-600"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default SkillBar;