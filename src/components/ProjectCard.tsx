import Button from "./Ui/Button/Button";
import type { Project } from "@/types/Project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, link, stack } = project;

  return (
    <article 
      className="project-card flex flex-col justify-between rounded-4xl p-3 pb-6 border border-white/10"
    >
      <div className="h-[293px] w-full bg-white/10 rounded-2xl"></div>
      <div className="p-3 pt-6 flex flex-col justify-between gap-6 flex-1">
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {stack.map((tech) => (
              <span key={tech.tech} className="flex items-center gap-2 text-md font-grotesk font-normal text-white/70 border border-white/10  backdrop-blur-md px-2 py-1 rounded-full">
                <img src={tech.icon} alt={tech.tech} width={20} height={20} />
                {tech.tech}
              </span>
            ))}
          </div>
          <h3 className="text-white text-lg font-sora font-normal">{title}</h3>
          <p className="text-typography-secondary mt-3 w-[90%] leading-[150%] text-sm">{description}</p>
        </div>

        <Button variant="secondary" className='w-[177px] text-white! mt-auto'>
          <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </Button>
      </div>
    </article>
  )
}
