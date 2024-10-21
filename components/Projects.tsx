
// app/components/Projects.tsx
import PageHeader from './PageHeader'

const projects = [
  { name: 'Watch Catalogue', tools: ['HTML', 'CSS', 'JS'], link: 'https://codelamp168.github.io/Watch-Catalogue-Webpage/' },
  { name: 'Pokedex Next', tools: ['NextJS', 'Tailwind'], link: 'https://pokedex-next-two-sigma.vercel.app/' },
  { name: 'Space Program Tourism', tools: ['React', 'SCSS'], link: 'https://codelamp168.github.io/Space-Tourism-Site/' },
  { name: 'LOOP Studios', tools: ['React', 'Tailwind'], link: 'https://codelamp168.github.io/Loop-Studios-Landing-Page-Tailwind-React/' },
  { name: 'TRAVEL', tools: ['Svelte', 'CSS', 'JS'], link: 'https://codelamp168.github.io/travelsite/' },
  { name: 'NEWS Flexbox', tools: ['HTML', 'CSS', 'JS'], link: 'https://codelamp168.github.io/News-Homepage-Front-End-Mentor-CHALLENGE/' },
  { name: 'Verve Elegance', tools: ['HTML', 'CSS', 'JS'], link: 'https://codelamp168.github.io/Verve-Elegence-Promo-Page/' },
]

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
      <div className="max-w-max md:absolute md:right-0 md:pt-16 h-4/5 relative overflow-y-scroll lg:pr-1">
        <ul className="text-right flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectItem key={project.name} {...project} />
          ))}
        </ul>
      </div>
    </div>
  )
}