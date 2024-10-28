import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const projects = [
  { name: 'Watch Catalogue', tools: ['HTML', 'CSS', 'JS', 'NodeJs'], link: 'https://watch-catalogue.vercel.app/' },
  { name: 'Pokedex Next', tools: ['NextJS', 'Tailwind'], link: 'https://pokedex-next-two-sigma.vercel.app/' },
  { name: 'Space Program Tourism', tools: ['React', 'SCSS'], link: 'https://codelamp168.github.io/Space-Tourism-Site/' },
  { name: 'LOOP Studios', tools: ['React', 'Tailwind'], link: 'https://codelamp168.github.io/Loop-Studios-Landing-Page-Tailwind-React/' },
  { name: 'TRAVEL', tools: ['Svelte', 'CSS', 'JS'], link: 'https://codelamp168.github.io/travelsite/' },
  { name: 'NEWS Flexbox', tools: ['HTML', 'CSS', 'JS'], link: 'https://codelamp168.github.io/News-Homepage-Front-End-Mentor-CHALLENGE/' },
  { name: 'Verve Elegance', tools: ['HTML', 'CSS', 'JS'], link: 'https://codelamp168.github.io/Verve-Elegence-Promo-Page/' },

]

export const socialLinks = [
  { name: 'Github', href: 'https://github.com/CodeLamp168', icon: '/svgs/github.svg' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/calebsimdev/', icon: '/svgs/linkedin.svg' },
  { name: 'Gmail', href: 'https://mail.google.com/mail/?view=cm&source=mailto&to=dylansim168@gmail.com&body=This%20is%20mail%20body&su=Hello%20Caleb%20', icon: '/svgs/gmail.svg' },
  { name: 'Discord', href: '#', icon: '/svgs/discord.svg' },
]