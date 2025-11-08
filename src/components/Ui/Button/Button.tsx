import { type ButtonProps } from './types';
import { cn } from '../../../utils/helpers';
import buttonStyles from './styles';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Button({ children, className, variant = 'primary' }: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const purpleOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant !== 'secondary' || !buttonRef.current || !purpleOverlayRef.current) return;

    const button = buttonRef.current;
    const overlay = purpleOverlayRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(overlay, {
        x: x,
        y: y,
        xPercent: -50,
        yPercent: -50,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseEnter = () => {
      gsap.to(overlay, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(overlay, {
        opacity: 0,
        scale: 0,
        duration: 0.2,
      });
    };

    // Set initial position to center
    const rect = button.getBoundingClientRect();
    gsap.set(overlay, {
      x: rect.width / 2,
      y: rect.height / 2,
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
      scale: 0,
    });

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [variant]);

  return (
    <button 
      ref={buttonRef}
      className={cn(className, buttonStyles[variant], 'px-4 cursor-pointer h-[51px] flex items-center justify-center rounded-[100px] text-base font-medium relative overflow-hidden')}
    >
      {variant === 'secondary' && (
        <div
          ref={purpleOverlayRef}
          className="absolute pointer-events-none w-28 h-28 rounded-full bg-purple-500/30 blur-2xl z-0"
          style={{
            left: 0,
            top: 0,
          }}
        />
      )}
      
      <span className={cn("relative z-20", variant === 'secondary' && 'gradient-text')}>
        {children}
        </span>
    </button>
  )
}
