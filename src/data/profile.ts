import { SocialLink, NavLink } from '../types';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

export const personalInfo = {
  name: 'Naira Hassan Anwar',
  title: 'Software Engineer',
  email: 'nairahassan550@gmail.com',
  phone: '(+968) 90184376',
  location: 'Ibri, Oman',
  bio: 'Passionate software engineer with a strong foundation in full-stack development. Recently graduated with a specialization in Software Application Development, I combine technical expertise with creative problem-solving to build efficient, user-friendly applications.',
  about: `I'm a software engineer with a passion for creating intuitive, user-friendly applications. My journey in technology began at an early age when I started tinkering with computers and designing simple websites. This curiosity eventually led me to pursue a degree in Information Technology Departement with a specialization in Software Application Development.

Throughout my academic career, I've had the opportunity to work on various projects that have honed my skills in both front-end and back-end development. I enjoy the challenge of solving complex problems and the satisfaction that comes from creating applications that make a positive impact on users' lives.

When I'm not coding, you can find me designing illustrations, reading science fiction novels, or experimenting with new recipes in the kitchen. I believe in continuous learning and am always exploring new technologies to expand my skill set.`,
  interests: [
    'Web Development',
    'Mobile Applications',
    'UI/UX Design',
    'Machine Learning',
    'AI and Computer Vision',
    'Robotics',
    'Games Design',
    'Research Papers'
  ],
  languages: [
    { language: 'Arabic', proficiency: 'Native' },
    { language: 'English', proficiency: 'Intermediate' },
  ]
};

export const navLinks: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/contact', label: 'Contact' }
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: 'GitHub',
    url: 'https://github.com/NairaHassanAnwar',
    icon: Github
  },
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/naira-hassan-2a5014309',
    icon: Linkedin
  },
  {
    id: 3,
    name: 'X (Twitter)',
    url: 'https://x.com/CODEwithNaira',
    icon: FaXTwitter
  },
  {
    id: 4,
    name: 'Instagram',
    url: 'https://www.instagram.com/codewithnaira/',
    icon: Instagram
  },
  {
    id: 5,
    name: 'Email',
    url: 'mailto:nairahassan550@gmail.com',
    icon: Mail
  }
];