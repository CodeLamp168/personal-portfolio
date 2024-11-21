'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML', icon: '/svgs/html5.svg' },
  { name: 'CSS', icon: '/svgs/css3.svg' },
  { name: 'Javascript', icon: '/svgs/javascript.svg' },
  { name: 'SCSS', icon: '/svgs/sass.svg' },
  { name: 'Tailwind', icon: '/svgs/tailwindcss.svg' },
]

const SkillDisplay = ({ icon, name }: { icon: string; name: string }) => (
  <motion.div 
    className="w-14 flex flex-col items-center theme-icon-wrapper"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Image src={icon} alt={name} className="language-logo svg-icon" width={32} height={32} />
    <small className="mt-2">{name}</small>
  </motion.div>
)

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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-start mt-4 sm:mt-0 relative gap-4 md:gap-0 overflow-x-hidden">
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
          CALEB SIM
        </motion.h1>
        <motion.p 
          className="text-3xl pt-2 font-medium tracking-wider"
          variants={itemVariants}
        >
          Junior Front End Developer
        </motion.p>
        <motion.ul 
          className="flex w-full flex-wrap mt-6 md:gap-2"
          variants={containerVariants}
        >
          {skills.map((skill) => (
            <SkillDisplay key={skill.name} {...skill} />
          ))}
        </motion.ul>
      </motion.div>
      <motion.div 
        className="p-4 sm:pl-4 text-2xl sm:w-auto md:w-7/12 lg:w-8/12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="font-medium text-left leading-relaxed">
          22 Year Old, Front End Developer based in the Philippines.<br />
          Need a website developed or fixed? I can help you.
        </p>
      </motion.div>
    </div>
  )
}

