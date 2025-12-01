import { clsx, type ClassValue } from "clsx";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

interface ScrollToOptions {
  duration?: number;
  offsetY?: number;
  ease?: string;
}

/**
 * Smoothly scrolls to an element using GSAP ScrollToPlugin
 * @param selector - CSS selector string or HTMLElement to scroll to
 * @param options - Optional scroll configuration
 */
export function scrollToElement(
  selector: string | HTMLElement,
  options: ScrollToOptions = {}
) {
  const {
    duration = 1.2,
    offsetY = 80,
    ease = "power2.inOut"
  } = options;

  const element = typeof selector === 'string' 
    ? document.querySelector(selector)
    : selector;

  if (element) {
    gsap.to(window, {
      duration,
      scrollTo: {
        y: element,
        offsetY
      },
      ease
    });
  }
}
