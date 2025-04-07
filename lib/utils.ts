import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const projects = [
  { name: 'Watch Catalogue', tools: ['HTML', 'CSS', 'JS', 'NodeJs'], link: 'https://watch-catalogue.vercel.app/' },
  { name: 'Liquor Shop', tools: ['NEXTJS' , 'Tailwind'], link: 'https://revamp-liquor-shop.vercel.app/' },
  { name: 'Business Website', tools: ['HTML', 'CSS', 'JS'], link: 'https://codelamp168.github.io/Business-Single-Page/' },
  { name: 'Pokedex Next', tools: ['NextJS', 'Tailwind'], link: 'https://pokedex-next-two-sigma.vercel.app/' },
  { name: 'Space Program Tourism', tools: ['React', 'SCSS'], link: 'https://codelamp168.github.io/Space-Tourism-Site/' },
  { name: 'LOOP Studios', tools: ['React', 'Tailwind'], link: 'https://codelamp168.github.io/Loop-Studios-Landing-Page-Tailwind-React/' },
]



export const socialLinks = [
  { name: 'Github', href: 'https://github.com/CodeLamp168', icon: '/svgs/github.svg' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/calebsimdev/', icon: '/svgs/linkedin.svg' },
  { name: 'Gmail', href: 'https://mail.google.com/mail/?view=cm&source=mailto&to=dylansim168@gmail.com&body=This%20is%20mail%20body&su=Hello%20Caleb%20', icon: '/svgs/gmail.svg' },
  { name: 'Discord', href: '#', icon: '/svgs/discord.svg' },
]