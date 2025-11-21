import AnimatedText from "../animations/AnimatedText";
import BaseWrapper from "../layout/BaseWrapper";
import { RxArrowTopRight } from "react-icons/rx";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Contact() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!buttonRef.current || !overlayRef.current) return;

    const button = buttonRef.current;
    const overlay = overlayRef.current;

    gsap.set(overlay, {
      scaleY: 0,
      transformOrigin: "bottom",
    });

    const handleMouseEnter = () => {
      gsap.to(overlay, {
        scaleY: 1,
        duration: .7,
        ease: "power4.inOut",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(overlay, {
        scaleY: 0,
        duration: .7,
        ease: "power2.out",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
   <section className='py-40'>
      <BaseWrapper>
        <div className="flex flex-col items-center justify-center text-center text-white max-w-[1000px] mx-auto">
          <AnimatedText animateOnScroll={true} delay={0.2}>
          <p className="text-base font-sora text-white/70 mb-4 uppercase">Get in touch with me</p>
          <h2 className='text-6xl text-center font-sora font-medium leading-[120%] mb-8 gradient-text'>Let's build <br /> something together</h2>
          <p className='text-lg text-center text-typography-secondary font-sora font-normal leading-[150%] mb-8'>
            I am open to new opportunities. If you have any questions or want to work together, <br /> please feel free to contact me.
          </p>
          </AnimatedText>
          <a href="mailto:jeremiah.ezekwu@gmail.com">
            <button 
              ref={buttonRef}
              className="uppercase pl-6 pr-[6px] h-[54px] bg-white rounded-[100px] cursor-pointer text-black hover:text-white relative overflow-hidden group transition-all duration-400 ease-in"
            >
              <div 
                ref={overlayRef}
                className="absolute inset-0 bg-[#5a41b3] z-0"
              />
              <div className="flex items-center gap-2 relative z-10">
                Get in touch with me  <div className="w-10 h-10 bg-[#030328] group-hover:bg-white  duration-700 rounded-full flex items-center justify-center">
                  <RxArrowTopRight className="text-white text-[28px] group-hover:text-black group-hover:rotate-45 transition-all duration-400 ease-in" />
                </div>
              </div>
            </button>
          </a>
        </div>          
      </BaseWrapper>
    </section>
  )
}
