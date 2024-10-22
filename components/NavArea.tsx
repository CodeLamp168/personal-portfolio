// app/components/NavArea.tsx
'use client'

import Link from 'next/link'
import DarkMode from './DarkMode'
import { NavLinks } from './ImageLink'

const navItems = [
  { href: '/', name: 'Home' },
  { href: '/projects', name: 'Projects' },
  // { href: '/about', name: 'About'}
]

export default function NavArea() {
  return (
    <nav className="font-semibold md:h-screen md:relative md:flex md:flex-col md:justify-between items-center">
      <div className="flex md:flex-col justify-center items-center md:justify-around gap-8 md:gap-20 py-4 md:py-20 md:border-r border-black">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="nav-item tracking-wide">
            {item.name}
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-center items-center md:flex-col gap-6 mb-4">
        <NavLinks />
      </div>
    </nav>
  )
}