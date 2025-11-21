import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import React from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface Props {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  start?: string;
}

export default function AnimatedText({
  animateOnScroll = true,
  children,
  delay = 0,
  start = "top 75%",
}: Props) {
  const containerRef = useRef<HTMLDivElement |  null>(null);

  const elementRef = useRef<HTMLElement[]>([]);
  const splitRef = useRef<SplitText[]>([]);
  const lines = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRef.current = [];
      elementRef.current = [];
      lines.current = [];

      let elements: HTMLElement[] = [];

      if (containerRef.current.hasAttribute("data-animate-wrapper")) {
        elements = Array.from(
          containerRef.current.children
        ) as HTMLElement[];
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((el) => {
        elementRef.current.push(el);

        const split = SplitText.create(el, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        }) as SplitText;

        splitRef.current.push(split);

        const splitLines = split.lines as HTMLElement[];

        const computeStyle = window.getComputedStyle(el);
        const textIndent = computeStyle.textIndent;

        if (textIndent && textIndent !== "0px") {
          if(splitLines.length > 0) {
            splitLines[0].style.paddingLeft = textIndent; 
          }

          el.style.textIndent = "0";
        }

        if (el.classList.contains('gradient-text')) {
          const bgImage = computeStyle.backgroundImage;
          const bgClip = computeStyle.backgroundClip || computeStyle.webkitBackgroundClip;
          
          splitLines.forEach((line) => {
            if (bgImage && bgImage !== 'none') {
              line.style.backgroundImage = bgImage;
            }
            if (bgClip) {
              line.style.backgroundClip = bgClip;
              line.style.webkitBackgroundClip = bgClip;
            }
            line.style.color = 'transparent';
            line.style.webkitTextFillColor = 'transparent';
          });
        }

        lines.current.push(...splitLines);

        
      });

      gsap.set(lines.current, { y: "100%" });

        const animationProps = {
          y: "0%",
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: delay,
        }

        if (animateOnScroll) {
          gsap.to(lines.current, {
            ...animationProps,
            scrollTrigger: {
              trigger: containerRef.current,
              start: start,
              once: true,
            }
          })
        } else {
          gsap.to(lines.current, animationProps)
        }

      return () => {
        splitRef.current.forEach((split) => {
          if(split) {
            split.revert();
          }
        });
      }
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );


  if(React.Children.count(children) === 1) {
    return React.cloneElement(children as React.ReactElement<{ ref?: React.RefObject<HTMLDivElement | null> }>, { ref: containerRef })
  }
  return (
    <div ref={containerRef} data-animate-wrapper={true}>
      {children}
    </div>
  )
}
