import BaseWrapper from "../layout/BaseWrapper"
import AnimatedText from "../animations/AnimatedText"
import { IoGlobeOutline } from "react-icons/io5";
import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { navItems } from '@/utils/constants';
import { RxArrowTopRight } from "react-icons/rx";
import { RiGithubFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const navListRef = useRef<HTMLUListElement>(null);

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

  return (
    <footer className="py-10 text-white">
      <BaseWrapper>
      <div className="bg-[#36286b]  rounded-3xl px-10 grid grid-cols-3">
         <div className="flex flex-col gap-10 justify-between h-full pr-[28px] py-10">
           <div>
            <AnimatedText animateOnScroll={true} delay={0.5}>
            <h1 className="text-xl font-sora font-semibold text-white mb-4">EZEKWU JEREMIAH</h1>
              <p className="text-sm leading-[150%]">Open to job opportunities worldwide. Passionate about building polished, intuitive and thoughtful digital experiences that leave a mark.</p>
            </AnimatedText>
           </div>
           <div className="flex flex-col gap-2">   
              <p className='text-white text-sm font-normal font-sora flex items-center gap-2'><IoGlobeOutline className=' text-sm text-white/85' /> Lagos, Nigeria 19:42</p>
              <a href="" className='text-xl font-sora font-normal text-white'>ezekwujerry@gmail.com</a>
           </div>
            
         </div>
           <ul ref={navListRef} className="flex flex-col border-x border-typography-secondary/30  h-fit"> 

            {navItems.map((item) => (
              <li className="group relative border-b border-typography-secondary/30 overflow-hidden" key={item.label}>
                <Link className="px-6 py-8 flex items-center gap-2 text-xl relative z-10 group-hover:text-[#010111] transition-all duration-300" to={item.href}>
                {item.label} <RxArrowTopRight className=" text-white/85 group-hover:text-[#010111] text-xl" />
                </Link>
                <span className="nav-overlay absolute inset-0 bottom-0 left-0 w-full h-full bg-white z-0"></span>
              </li>
            ))}
           </ul>
         <div className="py-8 pl-[28px] flex flex-col justify-between">
          <div>
            <AnimatedText animateOnScroll={true} delay={0.5}>
            <h3 className="text-2xl font-sora font-semibold text-white mb-4 w-4/5">Ready to bring your project to life?</h3>
            <p className="text-sm text-typography-secondary font-normal font-sora leading-[150%] w-4/5">Let's discuss your project and how I can help you achieve your goals.</p>
            </AnimatedText>
            <div className="flex items-center gap-4 mt-5">
              {socials.map((social) => (
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-typography-secondary  uppercase">
              <p>Ezekwu Jeremiah 2025 © </p>
              <p>Designed by <a href="https://chibueze-uchegbu.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white/85 underline font-normal">Chibueze</a></p>
          </div>
         </div>
         
      </div>
      </BaseWrapper>
    </footer>
  );
}
