import { useEffect, useRef, useState } from "react";
import BaseWrapper from "../layout/BaseWrapper";
import AnimatedText from "../animations/AnimatedText";
import { skillsData, type SkillCategory } from "@/data/skills";
import { cn } from "@/utils/helpers";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
import ScrollTrigger from "gsap/ScrollTrigger";

const skillCategories: SkillCategory[] = [
  'Frontend Core & Frameworks',
  'Backend & Database',
  'State & Data Management',
  'Styling & Animation',
  'Version Control & Deployment',
  'Testing'
];

export default function Skills() {
  const [activeSkillCategory, setActiveSkillCategory] = useState<SkillCategory>('Frontend Core & Frameworks'); 

  const sectionRef = useRef(null);

  useEffect(() => {
    const categories = skillCategories;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${categories.length * 300}`,
        scrub: 1,
        pin: true,
      }
    });

    categories.forEach((category) => {
      tl.call(() => {
        setActiveSkillCategory(category);
      });
      tl.to({}, { duration: 1 });
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);


  const handleSkillCategoryClick = (category: SkillCategory) => {
    setActiveSkillCategory(category);
  }
  return (
    <section className="min-h-screen bg-[#010111]">
      <BaseWrapper className="  ">
      <div className="border-t border-white/10 py-20">
        <AnimatedText animateOnScroll={true}>
          <h2 className="text-4xl font-sora text-white mb-4">Skills</h2>
          <p className="text-typography-secondary max-w-4/5 ">
            A comprehensive skill set covering the entire Frontend spectrum alongside practical full-stack development experience, ensuring clean architecture, high performance, and robust data integration.            
            </p>
        </AnimatedText>

        <div ref={sectionRef} className="flex justify-between pt-24">
          <div className="flex flex-col gap-16 flex-1 ">
            {skillCategories.map((category) => (
              <button 
                key={category}
                onClick={() => handleSkillCategoryClick(category)}
                className={cn("text-typography-secondary text-3xl font-sora font-medium text-left cursor-pointer transition-all duration-150 ease-in", activeSkillCategory === category && 'text-white')}
              >
                {category}
              </button>
            ))}
          </div>
          
           <div className="flex flex-wrap gap-4 w-1/2 justify-end">
            {skillsData.map((skill) => (
              <span className={cn(
                "flex items-center gap-2 text-md font-grotesk font-normal text-white/70 border border-white/10  px-4 py-1 h-[46px] rounded-full opacity-50 transition-all duration-150 ease-in ", 
              
              activeSkillCategory === skill.category && 'text-white! opacity-100 bg-[linear-gradient(180deg,#100F20_0%,rgba(26,26,41,0)_100%)] shadow-[0px_1px_40px_-10px_rgba(61,45,119,0.3)] backdrop-blur-md')} key={skill.id}>
                {skill.icon && (
                  <img src={skill.icon} alt={skill.name} />
                )}
                <h3 className=" text-lg font-sora font-normal">{skill.name}</h3>
              </span>
            ))}
           </div>
        </div>
      </div>
      </BaseWrapper>
    </section>
  )
}
