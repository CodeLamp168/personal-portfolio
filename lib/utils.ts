import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const projects = [
  { name: 'Watch Catalogue', tools: ['HTML', 'CSS', 'JS', 'NodeJs'], link: '404' },
  { name: 'Liquor Shop', tools: ['NEXTJS' , 'Tailwind'], link: '404' },
  { name: 'Business Website', tools: ['HTML', 'CSS', 'JS'], link: '404' },
  { name: 'Pokedex Next', tools: ['NextJS', 'Tailwind'], link: '404' },
  { name: 'Space Program Tourism', tools: ['React', 'SCSS'], link: '404' },
  { name: 'LOOP Studios', tools: ['React', 'Tailwind'], link: '404' },
]



export const socialLinks = [
  { name: 'Github', href: 'https://github.com/CodeLamp168', icon: '/svgs/github.svg' },
  { name: 'LinkedIn', href: '404', icon: '/svgs/linkedin.svg' },
  { name: 'Gmail', href: '404', icon: '/svgs/gmail.svg' },
]
