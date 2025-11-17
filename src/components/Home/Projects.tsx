import AnimatedText from "../animations/AnimatedText";
import BaseWrapper from "../layout/BaseWrapper";
import ProjectCard from "../ProjectCard";
import {projectsData} from "../../data/projects";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function Projects() {

  return (
    <section className="projects-section relative z-10 bg-[#010111]  border border-red">
      <BaseWrapper className="py-20">
        <AnimatedText animateOnScroll={true}>
          <h2 className='text-4xl font-sora text-white mb-4'>Some exciting things I’ve worked on</h2>
          
          <p className='text-typography-secondary max-w-4/5'>
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

