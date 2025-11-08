import Button from '../Ui/Button/Button';
export default function Hero() {
  return (
    <div className='hero'>
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

      <div className="hero-content max-w-[650px] mx-auto">
        <div className="gradient-text text-[18px] font-grotesk font-normal flex gap-2 items-center justify-center">
          <span>Frontend Engineer</span>
          <span className="w-1 h-1 bg-white rounded-full"></span>
          <span>Fullstack Engineer</span>
        </div>
        <h1 className="text-[64px] leading-[120%] font-normal gradient-text mb-5 font-sora">Ezekwu Jeremiah <br /> Frontend Engineer</h1>

        <p className=" gradient-text text-lg font-normal mb-10 leading-[120%] max-w-[600px] mx-auto">Open to job opportunities worldwide. Passionate about building polished, intuitive and thoughtful digital experiences that leave a mark.</p>

        <div className="flex gap-4 md:gap-6 w-full max-w-[428px] mx-auto">
          <Button variant="primary" className='w-full'>Get in touch with me</Button>
          <Button variant="secondary" className='w-full'>View Resume</Button>
        </div>
      </div>
    </div>
  )
}
