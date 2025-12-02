import tailwind from '@/assets/icons/tailwind.svg';
import react from '@/assets/icons/react.svg';
import redux from '@/assets/icons/redux.svg';
import next from '@/assets/icons/next-js.svg';
import typescript from '@/assets/icons/typescript.svg';
import node from '@/assets/icons/node.svg';
import mongo from '@/assets/icons/mongo.svg';
import express from '@/assets/icons/express.svg';
import supabase from '@/assets/icons/supabase.svg';
import motion from '@/assets/icons/motion.svg';
import javascript from '@/assets/icons/javascript.svg';
import vue from '@/assets/icons/vue.svg';
import git from '@/assets/icons/git.svg';
import netlify from '@/assets/icons/netlify.svg';
import vercel from '@/assets/icons/vercel.svg';
import firebase from '@/assets/icons/firebase.svg'; 
import css from '@/assets/icons/css.svg';
import scss from '@/assets/icons/scss.svg';
import github from '@/assets/icons/github.svg';
import gasp from '@/assets/icons/gasp.svg';
import zustand from '@/assets/icons/zustand.svg';

export type SkillCategory = 'Frontend Core & Frameworks' | 'Backend & Database' | 'State & Data Management' | 'Styling & Animation' | 'Version Control & Deployment' | 'Testing';

export interface Skill {
  id: number;
  name: string;
  category: SkillCategory;
  icon?: string;
}

export const skillsData: Skill[] = [
  {
    id: 1,
    name: 'JavaScript',
    category: 'Frontend Core & Frameworks',
    icon: javascript,
  },
  {
    id: 2,
    name: 'Redux',
    icon: redux,
    category: 'State & Data Management',
  },
  {
    id: 18,
    name: 'React',
    category: 'Frontend Core & Frameworks',
    icon: react,
  },
  {
    id: 3,
    name: 'Jest',
    category: 'Testing',
  },
  {
    id: 4,
    name: 'Node.js',
    category: 'Backend & Database',
    icon: node,
  },
  {
    id: 5,
    name: 'Git',
    category: 'Version Control & Deployment',
    icon: git,
  },
  {
    id: 6,
    name: 'Tailwind',
    category: 'Styling & Animation',
    icon: tailwind,
  },
  {
    id: 7,
    name: 'Framer Motion',
    category: 'Styling & Animation',
    icon: motion,
  },
  {
    id: 8,
    name: 'React',
    category: 'Frontend Core & Frameworks',
    icon: react,
  },
  {
    id: 9,
    name: 'CSS',
    category: 'Styling & Animation',
    icon: css,
  },
  {
    id: 10,
    name: 'Zustand',
    category: 'State & Data Management',
    icon: zustand,
  },
  {
    id: 12,
    name: 'Express',
    category: 'Backend & Database',
    icon: express,
  },
  {
    id: 13,
    name: 'GitHub',
    category: 'Version Control & Deployment',
    icon: github,
  },
  {
    id: 14,
    name: 'MongoDB',
    category: 'Backend & Database',
    icon: mongo,
  },
  {
    id: 15,
    name: 'SCSS',
    category: 'Styling & Animation',
    icon: scss,
  },
  {
    id: 16,
    name: 'Supabase',
    category: 'Backend & Database',
    icon: supabase,
  },
  {
    id: 17,
    name: 'TypeScript',
    category: 'Frontend Core & Frameworks',
    icon: typescript,
  },
  {
    id: 19,
    name: 'Next.js',
    category: 'Frontend Core & Frameworks',
    icon: next,
  },
  {
    id: 20,
    name: 'Vercel',
    category: 'Version Control & Deployment',
    icon: vercel,
  },
  {
    id: 21,
    name: 'Tanstack Query',
    category: 'State & Data Management',
  },
  {
    id: 22,
    name: 'React Testing Library',
    category: 'Testing',
  },
  {
    id: 23,
    name: 'Firebase',
    category: 'Backend & Database',
    icon: firebase,
  },
  {
    id: 25,
    name: 'Netlify',
    category: 'Version Control & Deployment',
    icon: netlify,
  },
  {
    id: 26,
    name: 'GSAP',
    category: 'Styling & Animation',
    icon: gasp,
  },
  {
    id: 27,
    name: 'Vue.js',
    category: 'Frontend Core & Frameworks',
    icon: vue,
  },
];
