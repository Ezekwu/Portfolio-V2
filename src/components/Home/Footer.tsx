import { RxArrowTopRight } from "react-icons/rx";
import { RiGithubFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";
import BaseWrapper from "../layout/BaseWrapper"
import AnimatedText from "../animations/AnimatedText"
import { IoGlobeOutline } from "react-icons/io5";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import useLocalTime from '@/hooks/useLocalTime';

import { navItems } from '@/utils/constants';
import { scrollToElement } from '@/utils/helpers';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const navListRef = useRef<HTMLUListElement>(null);
  const copyrightRef = useRef<HTMLDivElement>(null);
  const locationEmailRef = useRef<HTMLDivElement>(null);
  const displayTime = useLocalTime();
   const socials = [
  {
    icon: <RiLinkedinFill className=' text-xl md:text-2xl text-white/85' />,
    href: 'https://www.linkedin.com/in/jerry-ezekwu/',
  },
  {
    icon: <RiGithubFill className=' text-xl md:text-2xl text-white/85' />,
    href: 'https://github.com/Ezekwu',
  },
  {
    icon: <RiTwitterFill className=' text-xl md:text-2xl text-white/85' />,
    href: 'https://x.com/i_ezekwu',
  },
  {
    icon: <RiInstagramFill className=' text-xl md:text-2xl text-white/85' />,
    href: 'https://www.instagram.com/ezekwu_jeremiah/',
  },
  ]

  useGSAP(() => {
    if (!navListRef.current) return;

    const listItems = Array.from(navListRef.current.children) as HTMLElement[];

    gsap.set(listItems, {
      opacity: 0,
      y: 20,
    });

    gsap.to(listItems, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.5,
      scrollTrigger: {
        trigger: navListRef.current,
        start: "top 80%",
        once: true,
      },
    });

    // Set up hover effects for each list item
    const cleanupFunctions: (() => void)[] = [];

    listItems.forEach((listItem) => {
      const overlay = listItem.querySelector('.nav-overlay') as HTMLElement;
      if (!overlay) return;

      // Set initial state - overlay starts from bottom with height 0
      gsap.set(overlay, {
        scaleY: 0,
        transformOrigin: "bottom",
      });

      const handleMouseEnter = () => {
        gsap.to(overlay, {
          scaleY: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(overlay, {
          scaleY: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      listItem.addEventListener("mouseenter", handleMouseEnter);
      listItem.addEventListener("mouseleave", handleMouseLeave);

      cleanupFunctions.push(() => {
        listItem.removeEventListener("mouseenter", handleMouseEnter);
        listItem.removeEventListener("mouseleave", handleMouseLeave);
      });
    });

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, { scope: navListRef });

  useGSAP(() => {
    if (!copyrightRef.current) return;

    gsap.set(copyrightRef.current, {
      opacity: 0,
      y: 20,
    });

    gsap.to(copyrightRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.5,
      scrollTrigger: {
        trigger: copyrightRef.current,
        start: "top 80%",
        once: true,
      },
    });
  }, { scope: copyrightRef });

  useGSAP(() => {
    if (!locationEmailRef.current) return;

    gsap.set(locationEmailRef.current, {
      opacity: 0,
      y: 20,
    });

    gsap.to(locationEmailRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.5,
      scrollTrigger: {
        trigger: locationEmailRef.current,
        start: "top 80%",
        once: true,
      },
    });
  }, { scope: locationEmailRef });

  return (
    <footer className="md:py-10 pt-6 text-white">
      <BaseWrapper className="px-0! md:px-8">
      <div className="bg-[#36286b] md:rounded-3xl  sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
         <div className="flex flex-col px-4 md:px-0 gap-6 md:gap-10 justify-between h-full md:pr-[28px] py-6 md:py-10">
           <div>
            <AnimatedText animateOnScroll={true} delay={0.5}>
            <h1 className="text-lg sm:text-xl font-sora font-semibold text-white mb-3 md:mb-4">EZEKWU JEREMIAH</h1>
              <p className="text-xs sm:text-sm leading-[150%]">Open to job opportunities worldwide. Passionate about building polished, intuitive and thoughtful digital experiences that leave a mark.</p>
            </AnimatedText>
           </div>
           <div ref={locationEmailRef} className="flex flex-col gap-2">   
              <p className='text-white text-xs sm:text-sm font-normal font-sora flex items-center gap-2'><IoGlobeOutline className=' text-sm text-white/85' /> Lagos, Nigeria {displayTime}</p>
              <a href="" className='text-base sm:text-lg md:text-xl font-sora font-normal text-white break-all'>ezekwujerry@gmail.com</a>
           </div>
            
         </div>
           <ul ref={navListRef} className="flex flex-col md:border-x border-typography-secondary/30 border-y md:border-y-0 h-fit"> 

            {navItems.map((item) => (
              <li className="group relative border-b border-typography-secondary/30 overflow-hidden last:border-b-0" key={item.label}>
                <a 
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToElement(item.href);
                  }}
                  className="px-4 sm:px-6 py-6 sm:py-8 flex items-center gap-2 text-lg sm:text-xl relative z-10 group-hover:text-[#010111] transition-all duration-300 cursor-pointer"
                >
                {item.label} <RxArrowTopRight className=" text-white/85 group-hover:text-[#010111] text-lg sm:text-xl" />
                </a>
                <span className="nav-overlay absolute inset-0 bottom-0 left-0 w-full h-full bg-white z-0"></span>
              </li>
            ))}
           </ul>
         <div className="px-4 md:px-0 py-6 md:py-8 md:pl-[28px] flex flex-col justify-between gap-6 md:gap-0">
          <div>
            <AnimatedText animateOnScroll={true} delay={0.5}>
            <h3 className="text-xl sm:text-2xl font-sora font-semibold text-white mb-3 md:mb-4 w-full md:w-4/5">Ready to bring your project to life?</h3>
            <p className="text-xs sm:text-sm text-white/80 font-normal font-sora leading-[150%] w-full md:w-4/5">Let's discuss your project and how I can help you achieve your goals.</p>
            </AnimatedText>
            <div className="flex items-center gap-4 mt-4 md:mt-5">
              {socials.map((social) => (
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-row items-start sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-typography-secondary uppercase">
            <p>Ezekwu Jeremiah 2025 © </p>
            <p>Designed by <a href="https://chibueze-uchegbu.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white/85 underline font-normal">Chibueze</a></p>
          </div>
                    

         </div>
         
      </div>
      </BaseWrapper>
    </footer>
  );
}
