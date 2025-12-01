import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import CustomEase from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

export default function LoadingPage() {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const dividerRef = useRef<HTMLDivElement | null>(null);
  const name1Ref = useRef<HTMLDivElement | null>(null);
  const name2Ref = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!dividerRef.current || !name1Ref.current || !name2Ref.current || !overlayRef.current || !loaderRef.current) {
      return;
    }

    const tl = gsap.timeline({ delay: 0.3, defaults: { ease: "hop" } });

    const name1Heading = name1Ref.current.querySelector("h1");
    const name2Heading = name2Ref.current.querySelector("h1");

    if (name1Heading && name2Heading) {
      tl.to([name1Heading, name2Heading], {
        y: "0%",
        duration: 1.2,
        stagger: 0.075,
      });
    }

    tl.to(dividerRef.current, {
      scaleY: "100%",
      duration: 1,
    }).to(dividerRef.current, {
      opacity: 0,
      duration: 0.4,
      delay: 0.3,
    });

    if (name1Heading) {
      tl.to(name1Heading, {
        y: "100%",
        duration: 1.2,
      });
    }

    if (name2Heading) {
      tl.to(
        name2Heading,
        {
          y: "-100%",
          duration: 1.2,
        },
        "<"
      );
    }

    const backgroundClips = overlayRef.current.querySelectorAll<HTMLElement>(".background-clip");

    if (backgroundClips.length) {
      tl.to(backgroundClips, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1.2,
        stagger: 0.1,
        delay: 0.75,
      });
    }

    // Hide loader
    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 0.5,
    });
  });

  return (
    <div ref={loaderRef} className="w-screen h-screen fixed top-0 left-0 z-9999 overflow-hidden flex items-center justify-center text-white">
      <div ref={overlayRef} className="overlay absolute top-0 left-0 w-full h-full flex">
        <div className="background-clip w-full h-full bg-[#010111]"></div>
        <div className="background-clip w-full h-full bg-[#010111]"></div>
      </div>

      <div className="intro-logo absolute top-1/2 left-1/2 -translate-x-[44%] -translate-y-1/2 flex items-center gap-1 ">
        <div ref={name1Ref} className="name relative -left-2 pr-1 " id="name1">
          <h1 className="text-4xl -translate-y-[120%]  font-medium text-white/85  gradient-text">Ezekwu</h1>
        </div>
        <div ref={name2Ref} className="name " id="name2">
          <h1 className="text-4xl translate-y-[120%] font-medium text-white/85 gradient-text">Jeremiah</h1>
        </div>
      </div>  

      <div ref={dividerRef} className="divider absolute top-0 left-1/2 origin-top bg-white/50 w-px h-full scale-y-0"></div>
    </div>
  );
}
