import {  useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../Ui/Button/Button';
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  // const heroRef = useRef<HTMLDivElement>(null);
  // const heroContentRef = useRef<HTMLDivElement>(null);
  const heroBackgroundRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!heroRef.current || !heroContentRef.current || !heroBackgroundRef.current) return;

  //   const hero = heroRef.current;
  //   const heroContent = heroContentRef.current;

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: hero,
  //       start: 'top top',
  //       end: '+=100%',
  //       scrub: true,
  //       pin: true,
  //       pinSpacing: true,
  //       anticipatePin: 1,
  //       invalidateOnRefresh: true,
  //     },
  //   });

  //   tl.fromTo(heroContent, 
  //     { y: 0,  },
  //     { y: -350, animationDuration: 1, ease: 'power1.out' }
  //   );

  //   return () => {
  //     tl.kill();
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   };
  // }, []);

  return (
    <div  className='hero min-h-screen max-h-[1400px] mx-auto! pt-20! flex relative z-10'>
      <div >
        <div ref={heroBackgroundRef} className="hero-background-wrapper absolute inset-0 w-full h-full z-0">
        <svg className='hero-background'>
           <filter>
             <feTurbulence type="turbulence" baseFrequency="0.65"/>
           </filter>
        </svg>

        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
        </div>
      </div>

      <div  className="hero-content max-w-[650px] mx-auto relative z-50">
        <div className="gradient-text text-[18px] font-grotesk font-normal flex gap-2 items-center justify-center">
          <span>Frontend Engineer</span>
          <span className="w-1 h-1 bg-white rounded-full"></span>
          <span>Fullstack Engineer</span>
        </div>
          <h1 className="text-[4rem] leading-[120%] font-normal gradient-text mb-5 font-sora">Ezekwu Jeremiah  Frontend Engineer</h1>
        <p className=" gradient-text text-lg font-normal mb-10 leading-[120%] max-w-[600px] mx-auto">Open to job opportunities worldwide. Passionate about building polished, intuitive and thoughtful digital experiences that leave a mark.</p>

        <div className="flex gap-4 md:gap-6 w-full max-w-[428px] mx-auto">
          <Button variant="primary" className='w-full'>Get in touch with me</Button>
          <Button variant="secondary" className='w-full'>View Resume</Button>
        </div>
      </div>
      </div>
    </div>
  )
}
