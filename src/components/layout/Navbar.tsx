import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

import { Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import { navItems } from '@/utils/constants';
import { scrollToElement } from '@/utils/helpers';
import { cn } from '@/utils/helpers';

import BaseWrapper from './BaseWrapper'
import Menu from './Menu'

export default function Navbar() {
  const menuIconRef = useRef<HTMLSpanElement>(null);
  const closeIconRef = useRef<HTMLSpanElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const menuIcon = menuIconRef.current;
    const closeIcon = closeIconRef.current;
    
    if (!menuIcon || !closeIcon) return;

    gsap.set(menuIcon, { opacity: 1, rotation: 0, scale: 1, display: "flex" });
    gsap.set(closeIcon, { opacity: 0, rotation: 90, scale: 0.5, display: "none" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const menuIcon = menuIconRef.current;
    const closeIcon = closeIconRef.current;
    
    if (!menuIcon || !closeIcon) return;

    if (isOpen) {
      // Animate menu icon out
      gsap.to(menuIcon, {
        opacity: 0,
        rotation: -90,
        scale: 0.5,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(menuIcon, { display: "none" });
        }
      });
      
      // Animate close icon in
      gsap.set(closeIcon, { display: "flex", opacity: 0, rotation: 90, scale: 0.5 });
      gsap.to(closeIcon, {
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)",
        delay: 0.1
      });
    } else {
      // Animate close icon out
      gsap.to(closeIcon, {
        opacity: 0,
        rotation: 90,
        scale: 0.5,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(closeIcon, { display: "none" });
        }
      });
      
      // Animate menu icon in
      gsap.set(menuIcon, { display: "flex", opacity: 0, rotation: -90, scale: 0.5 });
      gsap.to(menuIcon, {
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)",
        delay: 0.1
      });
    }
  }, [isOpen]);

return (
  <header className={cn("fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-transparent", isScrolled ? "backdrop-blur-sm " : "")}>
    <BaseWrapper className="flex items-center justify-between py-2">
      <Link to="/" className="z-60">
          <h1 className="font-poppins text-white/85 text-[22px] font-regular">ezekwu</h1>
      </Link>
      <nav className={cn("p-8 hidden lg:block")}>
        
          <div className="flex items-center justify-center gap-10">
            {navItems.map((item) => (
              <a 
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement(item.href);
                }}
                key={item.label}
                className="font-sora text-white/85 hover:text-white/60 transition-all duration-300 text-sm font-regular cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>
          
      </nav>
        
        <button onClick={toggleMenu} className='cursor-pointer bg-[#FFFFFF0D] hover-bg-transition md:w-[72px] w-12 h-12 md:h-14 flex items-center justify-center rounded-full  z-100 relative'>
          <span ref={menuIconRef} className="absolute flex items-center justify-center">
            <RiMenu4Fill className="text-white/70 md:text-2xl text-xl" />
          </span>
          <span ref={closeIconRef} className="absolute flex items-center justify-center">
            <IoClose className="text-white/70 md:text-2xl text-xl" />
          </span>
        </button>
    </BaseWrapper>
    <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
  </header>
  )
}
