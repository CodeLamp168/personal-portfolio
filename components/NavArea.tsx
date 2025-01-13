// app/components/NavArea.tsx
'use client'

import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { NavLinks } from './ImageLink'


const navItems = [
  { href: '/', name: 'Home' },
  { href: '/projects', name: 'Projects' }
]

export default function NavArea() {
  return (
    <nav className="font-medium md:h-screen md:relative md:flex md:flex-col md:justify-between items-center">
      <div className="flex md:flex-col justify-center items-center md:justify-around gap-8 md:gap-20 py-4 md:py-20 md:border-r border-border">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="nav-item tracking-wider">
            {item.name}
          </Link>
        ))}
        <ThemeToggle />
      </div>
      <div className="w-full flex justify-center items-center md:flex-col gap-6 mb-4">
        <NavLinks />
      </div>
    </nav>
  )
}