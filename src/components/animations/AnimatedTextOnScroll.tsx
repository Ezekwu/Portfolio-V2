import { useRef } from "react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, SplitText);

interface Props {
  children: React.ReactNode;
}

export default function AnimatedTextOnScroll({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const colorInitial = '#9A96AE';
  const colorAccent = '#9478f3e1';
  const colorFinal = '#FFFFFF';

  const splitRef = useRef<{ wordSplit: SplitText, charSplit: SplitText }[]>([]);
  const lastScrollProgress = useRef(0);
  const colorTransitionTimers = useRef(new Map());
  const completedCharacters = useRef(new Set());

  useGSAP(() => {

    if(!containerRef.current) return;

    splitRef.current = [];
    lastScrollProgress.current = 0;
    colorTransitionTimers.current.clear();
    completedCharacters.current.clear();

    let elements = [];
    if(containerRef.current.hasAttribute('data-animate-wrapper')) {
      elements = Array.from(containerRef.current.children) as HTMLElement[];
    } else {
      elements = [containerRef.current];
    }

    elements.forEach((element) => {
      const wordSplit = SplitText.create(element, {
        type: 'words',
        wordsClass: 'word',
      })

      const charSplit = SplitText.create(wordSplit.words, {
        type: 'chars',
        charsClass: 'char',
      })

      splitRef.current.push({ wordSplit, charSplit});
    })


    const allChars = splitRef.current.flatMap(({ charSplit }) => charSplit.chars);
  
    gsap.set(allChars, { color: colorInitial });

    function scheduleFinalTransition(char: HTMLElement, index: number) {
      if(colorTransitionTimers.current.has(index)) {
        clearTimeout(colorTransitionTimers.current.get(index));
      }

      const timer = setTimeout(() => {
        if(!completedCharacters.current.has(index)) {
          gsap.to(char, {
            duration: 0.1,
            ease: "none", 
            color: colorFinal,
            onComplete: () => {
              completedCharacters.current.add(index);
            },
          })
        }
        colorTransitionTimers.current.delete(index);
      }, 100)

      colorTransitionTimers.current.set(index, timer);
    }

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 30%',
      end: 'top 5%',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalChars = allChars.length;
        const isScrollingDown = progress >= lastScrollProgress.current;
        const currentCharIndex = Math.floor(progress * totalChars);
         
        allChars.forEach((char, index) => {
          if(!isScrollingDown && index >= currentCharIndex) {
            if(colorTransitionTimers.current.has(index)) {
              clearTimeout(colorTransitionTimers.current.get(index));
              colorTransitionTimers.current.delete(index);
            }
            completedCharacters.current.delete(index);
            gsap.set(char, { color: colorInitial, });
            return;
          }

          if(completedCharacters.current.has(index)) {
           return;
          }

          if(isScrollingDown && index <= currentCharIndex){
            gsap.set(char, { color: colorAccent });
            if(!colorTransitionTimers.current.has(index)) {
              scheduleFinalTransition( char as HTMLElement, index);
            }
          }  else {
              gsap.set(char, { color: colorInitial });
            }
        })

        lastScrollProgress.current = progress;
      }
    })
  }, {
    scope: containerRef,
    dependencies: [colorInitial, colorAccent, colorFinal],
  })

  if(React.Children.count(children) === 1) {
    return React.cloneElement(children as React.ReactElement<{ ref?: React.RefObject<HTMLDivElement | null> }>, { ref: containerRef })
  }

  return (
    <div data-animate-wrapper={true} ref={containerRef}>{children}</div>
  )
}
