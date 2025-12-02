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


import BullishLiving from '@/assets/images/bullish-living.png';
import Kodee from '@/assets/images/kodee.png';
import PrepNourish from '@/assets/images/prep-nourish.png';
import ChibuezeUchegbu from '@/assets/images/chibueze-portfolio.png';
import ChibuezeUchegbuMobile from '@/assets/images/chibueze-portfolio-mobile.png';

export const projectsData = [
  {
    id: 1,
    title: 'BullishLiving',
    description: 'An e-commerce platform for a fitness brand featuring full store functionality (checkout, payment) and a dedicated admin portal for inventory management, order creation, and stock keeping.',
    link: 'https://bullishliving.com',
    image: BullishLiving,
    stack: [
      {
        tech: 'Next.js',
        icon: next
      },
      {
        tech: 'TypeScript',
        icon: typescript
      },
      {
        tech: 'Tailwind',
        icon: tailwind
      },
      
      {
        tech: 'Supabase',
        icon: supabase
      },
    ]
  },
  {
    id: 2,
    title: 'Kodee',
    description: 'A comprehensive restaurant management application that automates core processes, including menu creation, order processing, and real-time order tracking, with staff roles for efficient inventory and order management.',
    link: 'https://www.kodee.app/',
    image: Kodee,
    stack: [
      {
        tech: 'Next.js',
        icon: next
      },
      {
        tech: 'React',
        icon: react
      },
      {
        tech: 'TypeScript',
        icon: typescript
      },
      {
        tech: 'Tailwind',
        icon: tailwind
      },
      {
        tech: 'Redux',
        icon: redux
      },
    ]
  },
  {
    id: 3,
    title: 'PrepNourish',
    description: 'A healthy meal prep subscription service that allows users to create meal plans and schedules. ',
    link: 'https://prepnourish.com/',
    image: PrepNourish,
    stack: [
      {
        tech: 'Next.js',
        icon: next
      },
      {
        tech: 'TypeScript',
        icon: typescript
      },
      {
        tech: 'Tailwind',
        icon: tailwind
      },
      {
        tech: 'Node.js',
        icon: node
      },
      {
        tech: 'MongoDB',
        icon: mongo
      },
      {
        tech: 'Express',
        icon: express
      },
    ]
  },
    {
    id: 4,
    title: 'Chibueze Uchegbu',
    description: 'A dynamic portfolio website showcasing the work of a multidisciplinary designer and bioinformatics enthusiast.',
    link: 'https://chibueze-uchegbu.vercel.app/',
    image: ChibuezeUchegbu,
    mobileImage: ChibuezeUchegbuMobile,
    stack: [
      {
        tech: 'React',
        icon: react
      },
      {
        tech: 'TypeScript',
        icon: typescript
      },
      {
        tech: 'Tailwind',
        icon: tailwind
      },
      {
        tech: 'Motion',
        icon: motion
      }
    ]
  }
]
