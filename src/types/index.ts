import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  appStoreLink?: string;
  github?: string;
  featured: boolean;
}

export interface Skill {
  id: number;
  name: string;
  level: number; // 1-5
  category: 'languages' | 'frameworks' | 'tools' | 'soft';
  icon?: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
  logo?: string;
  link?: string;
}

export interface Achievement {
  id: number;
  title: string;
  date: string;
  description: string;
  link?: string;
  icon?: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: LucideIcon | IconType;
}

export interface NavLink {
  path: string;
  label: string;
}