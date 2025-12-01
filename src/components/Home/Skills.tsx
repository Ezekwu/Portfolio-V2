import { useEffect, useRef, useState } from "react";
import BaseWrapper from "../layout/BaseWrapper";
import AnimatedText from "../animations/AnimatedText";
import { skillsData, type Skill, type SkillCategory } from "@/data/skills";
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

  const categorizedSkills = skillsData.reduce((acc, skill) => {
    acc[skill.category] = [...(acc[skill.category] || []), skill];
    return acc;
  }, {} as Record<SkillCategory, Skill[]>);

  useEffect(() => {
    const categories = skillCategories;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top ",
        end: `+=200px`,
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
    <section id="skills" className="min-h-screen bg-[#010111]">
      <BaseWrapper className="  ">
      <div className="border-t border-white/10 md:py-20 py-10">
        <AnimatedText animateOnScroll={true}>
          <h2 className="text-3xl md:text-4xl font-sora mb-4 text-white/90">Skills</h2>
          <p className="text-typography-secondary text-sm md:text-base md:max-w-4/5 ">
            A comprehensive skill set covering the entire Frontend spectrum alongside practical full-stack development experience, ensuring clean architecture, high performance, and robust data integration.            
            </p>
        </AnimatedText>

        <div ref={sectionRef} className="md:flex justify-between pt-24 hidden">
          <div className="flex flex-col gap-10 flex-1 ">
            {skillCategories.map((category) => (
              <button 
                key={category}
                onClick={() => handleSkillCategoryClick(category)}
                className={cn("text-gray-600 text-3xl font-sora font-medium text-left cursor-pointer transition-all duration-150 ease-in", activeSkillCategory === category && 'text-white')}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-6 w-1/2 justify-end h-fit">
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

        <div className="text-white flex flex-col gap-10 md:hidden mt-10">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-[22px] font-sora font-medium text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <span className={cn(
                    "flex items-center gap-2 text-md font-grotesk font-normal text-white border border-white/10 px-4 py-1 h-[46px] rounded-full opacity-100 bg-[linear-gradient(180deg,#100F20_0%,rgba(26,26,41,0)_100%)] shadow-[0px_1px_40px_-10px_rgba(61,45,119,0.3)] backdrop-blur-md")} key={skill.id}>
                    {skill.icon && (
                      <img src={skill.icon} alt={skill.name} />
                    )}
                  <h3 className="font-sora font-normal">{skill.name}</h3>
                </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </BaseWrapper>
    </section>
  )
}
