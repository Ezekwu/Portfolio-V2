import AnimatedText from "../animations/AnimatedText";
import BaseWrapper from "../layout/BaseWrapper";
import ProjectCard from "../ProjectCard";
import {projectsData} from "../../data/projects";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function Projects() {

  return (
    <section id="projects" className="projects-section relative z-10 bg-[#010111]  border border-red">
      <BaseWrapper className="md:py-20 py-10">
        <AnimatedText animateOnScroll={true}>
          <h2 className='text-3xl md:text-4xl font-sora mb-4 text-white/90'>Some exciting things I’ve worked on</h2>
        </AnimatedText>
        <AnimatedText animateOnScroll={true}>
          <p className='text-typography-secondary text-sm md:text-base md:max-w-4/5'>
          A collection of projects demonstrating proficiency in modern Frontend development. Explore my experience building complete, data-driven applications that provide working solutions for real-world problems.
          </p>
        </AnimatedText>
        <div className="grid md:grid-cols-2 gap-6 mt-20">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </BaseWrapper>
    </section>
  )
}

