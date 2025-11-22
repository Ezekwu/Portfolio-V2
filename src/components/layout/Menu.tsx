import {useEffect, useRef } from 'react';
import { Link} from '@tanstack/react-router';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { IoGlobeOutline } from "react-icons/io5";
import { RiGithubFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill, RiPlayFill } from 'react-icons/ri';

import BaseWrapper from './BaseWrapper';
import { navItems } from '@/utils/constants';
import { cn } from '@/utils/helpers';

 const socials = [
  {
    icon: <RiLinkedinFill className=' text-xl md:text-2xl text-white/85' />,
    href: 'https://www.linkedin.com/in/ezekwu-jeremiah-a84560212/',
  },
  {
    icon: <RiGithubFill className=' text-xl md:text-2xl text-white/85' />,
    href: 'https://github.com/ezekwu-jeremiah',
  },
  {
    icon: <RiTwitterFill className=' text-xl md:text-2xl text-white/85' />,
    href: 'https://twitter.com/ezekwu_jeremiah',
  },
  {
    icon: <RiInstagramFill className=' text-xl md:text-2xl text-white/85' />,
    href: 'https://www.instagram.com/ezekwu_jeremiah/',
  },
]

interface MenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Menu({ isOpen }: MenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline>(null);

  function isActive(href: string) {
    return window.location.pathname === href;
  }

  useGSAP(() => {
  if (!containerRef.current) return;

  timeline.current = gsap.timeline({ paused: true });

  timeline.current
    .to('.menu-overlay', {
      duration: 0.8,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      ease: 'power4.inOut',
    })

    .to(
      '.menu-link-item-wrapper',
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out',
      },
      0.2 
    )

    .to(
      '.menu-title',
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
      },
      0.5 
    )

    .to(
      '.menu-email',
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
      },
      0.6
    )

    .to(
      '.menu-location',
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
      },
      0.7 // 👈 slight overlap again
    )
    .to(
      '.menu-socials',
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
      },
      0.7 
    )
}, { scope: containerRef });

  useEffect(() => {
    if (!timeline.current || !containerRef.current) return;
    
    if (isOpen) {
      gsap.set('.menu-link-item-wrapper', {y: 60, opacity: 0});
      gsap.set('.menu-overlay', {
        clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)'
      });
      gsap.set('.menu-title', {x: -10, opacity: 0});
      gsap.set('.menu-email', {x: -10, opacity: 0});
      gsap.set('.menu-location', {y: -10, opacity: 0});
      gsap.set('.menu-socials', {y: -10, opacity: 0});
      
      timeline.current.restart();
    } else {
      timeline.current.reverse();
    }
  }, [isOpen]);
  
  return (
    
    <div className='menu-container text-white/85' ref={containerRef}>
      <div className="menu-overlay pt-40 fixed top-0 left-0 z-50 bg-[#010111] w-full h-full">
        <BaseWrapper className="menu-content">
          <div className='h-fit w-full flex justify-between'>
            <div className='flex flex-col gap-60 justify-between h-full'>
              <h1 className='menu-title gradient-text text-6xl font-normal font-sora'>Menu</h1>
              <a href="" className='menu-email email-link text-4xl gradient-text relative inline-block'>ezekwujerry@gmail.com</a>
            </div>
            <div className='mr-0 w-fit'>
              <ul className="menu-links grid grid-cols-2 gap-x-20 gap-y-10 ml">
                <li>
                  <div className='menu-link-item'>
                    <div className="menu-link-item-wrapper flex gap-4 items-center group">
                      <RiPlayFill className={cn('w-8 h-8 text-white/85 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0', isActive('/') && 'opacity-100')} />
                        <Link className=' text-5xl font-normal font-sora hover:text-white/70 transition-all duration-300' to='/'>Home</Link>
                    </div>
                  </div>
                </li>
              {navItems.slice(0, 3).map((item) => (
                <li key={item.label}>
                  <div className='menu-link-item'>
                    <div className="menu-link-item-wrapper flex gap-4 items-center group">
                      <RiPlayFill className={cn('w-8 h-8 text-white/85 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0', isActive(item.href) && 'opacity-100')} />
                        <Link className=' text-5xl font-normal font-sora hover:text-white/70 transition-all duration-300' to={item.href}>{item.label}</Link>
                    </div>
                  </div>
                </li>
              ))}

              {navItems.slice(3).map((item) => (
                <li key={item.label}>
                  <div className='menu-link-item'>
                    <div className="menu-link-item-wrapper flex gap-4 items-center group">
                      <RiPlayFill className={cn('w-8 h-8 text-white/85 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0', isActive(item.href) && 'opacity-100')} />
                        <Link className=' text-5xl font-normal font-sora hover:text-white/70 transition-all duration-300' to={item.href}>{item.label}</Link>
                    </div>
                  </div>
                </li>
              ))}
              </ul>

            </div>
          </div>
          <div className='flex items-center justify-between w-full'>
            <p className='menu-location  gradient-text font-normal font-sora flex items-center gap-2'><IoGlobeOutline className=' text-xl text-white/85' /> Lagos, Nigeria 19:42</p>

            <div className='menu-socials flex items-center gap-4'>
              {socials.map((social) => (
                <a href={social.href} target='_blank' rel='noopener noreferrer'  className='menu-social-item w-12 h-10 md:w-16 md:h-14 rounded-full flex items-center justify-center bg-[#FFFFFF0D] hover:bg-[#ffffff1f] hover-bg-transition   text-xl md:text-6xl text-white/85'>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </BaseWrapper>
      </div>
    </div>
  )
}
