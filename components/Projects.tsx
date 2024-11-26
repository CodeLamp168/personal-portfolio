// app/components/Projects.tsx
"use client"

import { useRef } from 'react'

import { ScrollArea } from "@/components/ui/scroll-area"
import { projects } from '@/lib/utils'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

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
    <motion.div 
    className="min-h-screen flex flex-col items-center md:block p-0 sm:p-4 relative z-0 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
     >
      <motion.div 
        className="py-4 text-left w-full max-w-xs md:max-w-xl pl-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-7xl md:text-8xl font-semibold tracking-wider"
          variants={itemVariants}
        >
          Projects
        </motion.h1>
        
        <motion.p 
          className="text-3xl pt-2 font-medium tracking-wider"
          variants={itemVariants}
        >
          Front End
        </motion.p>

      </motion.div>
      {/* every new project = +2 to rem (no not an inside joke) (*/}
      <motion.div 
        className="w-full max-w-2xl md:absolute md:right-0 md:pt-16 h-[calc(100vh-16rem)] relative" 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        <ScrollArea className="h-full w-full pr-4" ref={scrollAreaRef}>
          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectItem key={project.name} {...project} />
            ))}
          </div>
        </ScrollArea>
      </motion.div>
    </motion.div>
  )
}