import { useRef, useLayoutEffect } from "react";
import AnimatedText from "../animations/AnimatedText";
import BaseWrapper from "../layout/BaseWrapper";

import portrait from '@/assets/images/my-portrait-bw.jpeg';

import AnimatedTextOnScroll from "@/components/animations/AnimatedTextOnScroll";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
   const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);


   useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (imgRef.current && wrapperRef.current) {
        gsap.set(imgRef.current, {
          scale: 1.3, 
        });

        gsap.to(imgRef.current, {
          scale: 1, 
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 75%",
            once: true,
          },
        });

        gsap.to(imgRef.current, {
          y: -100, 
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-26">
      <BaseWrapper>
        <div className="mb-10">
          <AnimatedText delay={0.3} animateOnScroll={true}>
            <p className="text-base font-sora text-white/70 mb-4">ALL THERE IS TO KNOW</p>
            <h3 className="text-5xl font-sora text-white/90">About Me</h3>
          </AnimatedText>
        </div>

        <div className="flex justify-between gap-14 items-center">
          <div ref={wrapperRef} className="reveal-wrapper w-[55%] h-[680px]">
            <div className="rounded-lg overflow-hidden h-full w-full relative">
              <img 
                ref={imgRef} 
                src={portrait} 
                alt="About Me" 
                className="absolute inset-0 w-full h-[120%] object-cover object-[25%_23%]"
              />
            </div>
          </div>
          <div className="w-[45%] flex flex-col justify-between gap-10 ">
            <AnimatedTextOnScroll>
              <p className="text-xl font-sora text-white/70 mb-4 leading-[150%]">
                I love playing Basketball, trying out new food and having new experiences. I’m a brand and product designer with a passion for building identities and digital products that connect creativity with real-world impact. Over the years, I’ve helped startups and growing businesses craft memorable brands, intuitive websites, and user-first digital experiences.
              </p>

              <p className="text-xl font-sora text-white/70 mb-4 leading-[150%]">
                I love playing Basketball, trying out new food and having new experiences. I’m a brand and product designer with a passion for building identities and digital products that connect creativity with real-world impact. Over the years, I’ve helped startups and growing businesses craft memorable brands, intuitive websites, and user-first digital experiences.
              </p>
            </AnimatedTextOnScroll>
          </div>
        </div>
      </BaseWrapper>
    </section>
  )
}
