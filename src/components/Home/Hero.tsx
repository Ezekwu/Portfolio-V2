import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Button from '../Ui/Button/Button';
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const herocontentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!herocontentRef.current) return;

    gsap.from(herocontentRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 5.9,
    });
  }, { scope: herocontentRef });

  return (
    <div  
    id="home"
    className='hero relative bg-[#010111] h-dvh max-h-[1400px] w-full flex justify-center items-center text-white text-2xl font-bold text-center p-8 overflow-hidden md:min-h-screen md:max-h-[1400px] mx-auto! pt-20! z-10'
    >
      <div >
        <div className="absolute inset-0 w-full h-full z-0">
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

      <div ref={herocontentRef} className="hero-content max-w-[650px] mx-auto relative z-50 ">
        <div className="gradient-text text-sm md:text-[18px] font-grotesk font-normal flex gap-2 items-center justify-center">
          <span>Frontend Engineer</span>
          <span className="w-1 h-1 bg-white rounded-full"></span>
          <span>Fullstack Engineer</span>
        </div>
          <h1 className=" text-[2.2rem] md:text-[3rem] xl:text-[4rem] leading-[120%] font-normal gradient-text mb-5 font-sora">Ezekwu Jeremiah <br /> Frontend Engineer</h1>
        <p className=" gradient-text sm:text-base text-sm md:text-lg font-normal mb-10 leading-[120%] max-w-[600px] mx-auto">Open to job opportunities worldwide. Passionate about building polished, intuitive and thoughtful digital experiences that leave a mark.</p>

        <div className="flex gap-4 md:gap-6 w-full max-w-[428px] mx-auto">
          <a href="mailto:ezekwujerry@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className='w-full text-xs sm:text-sm md:text-base '>Get in touch with me</Button>
          </a>
          <a  href="https://drive.google.com/file/d/104fkLfiIgHRP71Ow32bFPQMgaCCvBLhG/view" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className='w-full min-w-[180px] text-xs sm:text-sm md:text-base'>View Resume</Button>
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}
