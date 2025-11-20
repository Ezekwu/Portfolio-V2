import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import AnimatedText from '../animations/AnimatedText';
import GitHubContributions from './GitHubContributions';

import { experienceData } from '@/data/experience';
import BaseWrapper from '../layout/BaseWrapper';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const experienceContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!experienceContainerRef.current) return;

      const experienceItems = Array.from(
        experienceContainerRef.current.children
      ) as HTMLElement[];

      if (experienceItems.length === 0) return;

      gsap.set(experienceItems, {
        opacity: 0,
        y: 30,
      });

      // Animate with stagger
      gsap.to(experienceItems, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: experienceContainerRef.current,
          start: "top 40%",
          once: true,
        },
      });
    },
    { scope: experienceContainerRef }
  );

  return (
    <section className="text-white py-20 mt-20">
      <BaseWrapper>
      <AnimatedText animateOnScroll={true} delay={0.2} start="top 50%">
        <p className="text-base font-sora text-white/70 mb-4">WITH OVER 4 YEARS OF</p>
        <h3 className="text-5xl font-sora text-white/90  ">Work Experience</h3>
      </AnimatedText>

      <div className="flex flex-col gap-6 mt-16 mb-24" ref={experienceContainerRef}>
        {experienceData.map((experience) => (
          <div key={experience.id} className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 pb-6" style={{ borderBottom: '1px solid', borderImageSource: 'linear-gradient(90deg,  #010111  0%, #ffffff9c 98.08%)', borderImageSlice: 1 }}>
            <div className="flex items-center gap-3 md:gap-4 flex-wrap">
              <img src={experience.icon} alt={experience.company} className="w-10 h-10 md:w-auto md:h-auto" />
              <div className="flex flex-wrap items-center text-base md:text-lg text-white/80 gap-2">
                <h3 className="font-medium">{experience.company}</h3>
                <span className="text-white/70 hidden md:inline"> / </span>
                <p className="text-white/70 md:text-white/80">{experience.position}</p>
              </div>
            </div>
            
            <span className="text-[#A6A6C2] text-xs md:text-sm h-auto md:h-[33px] flex items-center px-3 py-1.5 md:py-0 rounded-full bg-[#010111] border border-white/20 w-fit md:w-auto">{experience.durationAndLocation}</span>
          </div>
        ))}
      </div>
      <GitHubContributions />
    </BaseWrapper>
    </section>
  )
}
