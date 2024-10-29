// app/components/Projects.tsx
"use client"

import { useRef } from 'react'
import  PageHeader from './PageHeader'
import { ScrollArea } from "@/components/ui/scroll-area"
import { projects } from '@/lib/utils'

const ProjectItem = ({ tools, name, link }: { tools: string[]; name: string; link: string }) => (
  <div className="flex flex-col items-start  w-full border-b border-border pb-6 mb-6">
    <ul className="flex flex-wrap gap-2 px-2 font-semibold mb-2 lg:mb-2 lg:mr-4">
      {tools.map((tool) => (
        <li key={tool} className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded min-w-16">{tool}</li>
      ))}
    </ul>
    <a href={link} className="project-name px-2 text-left text-4xl lg:text-5xl font-semibold cursor-pointer transition-transform duration-700 hover:scale-105 relative">
      {name}
    </a>
  </div>
)

export default function Projects() {
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  return (
    <div className="min-h-screen flex flex-col items-center md:block p-0 sm:p-4 relative z-0 overflow-hidden">
      <PageHeader pageTitle="PROJECTS" />
      <div className="w-full max-w-2xl md:absolute md:right-0 md:pt-16 h-[calc(100vh-14rem)] relative">
        <ScrollArea className="h-full w-full pr-4" ref={scrollAreaRef}>
          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectItem key={project.name} {...project} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}