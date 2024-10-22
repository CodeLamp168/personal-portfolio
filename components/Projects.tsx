// app/components/Projects.tsx
import PageHeader from './PageHeader'
import { projects } from '@/lib/utils';




const ProjectItem = ({ tools, name, link }: { tools: string[]; name: string; link: string }) => (
  <div className="flex flex-col lg:flex-row items-start lg:items-end min-w-full md:w-auto border-b border-theme">
    <ul className="flex gap-2 px-2 font-semibold">
      {tools.map((tool) => (
        <li key={tool}>{tool}</li>
      ))}
    </ul>
    <a href={link} className="project-name px-2 text-left text-5xl lg:text-6xl font-semibold cursor-pointer transition-transform duration-700 hover:scale-110 md:hover:scale-y-110 lg:hover:scale-105 relative">
      {name}
    </a>
  </div>
)

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center md:block p-0 sm:p-4 relative z-0 overflow-x-hidden">
      <PageHeader pageTitle="PROJECTS" />
      <div className="max-w-max md:absolute md:right-0 md:pt-16 h-4/5 relative lg:pr-1">
        <ul className="text-right flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectItem key={project.name} {...project} />
          ))}
        </ul>
      </div>
    </div>
  )
}