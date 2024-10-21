// app/components/DarkMode.tsx
'use client'

import { useState, useEffect } from 'react'

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('color-theme')
    if (savedTheme === 'dark') {
      setDarkMode()
    } else {
      setLightMode()
    }
  }, [])

  const setDarkMode = () => {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('color-theme', 'dark')
    setIsDarkMode(true)
  }

  const setLightMode = () => {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('color-theme', 'light')
    setIsDarkMode(false)
  }

  const toggleColorTheme = () => {
    if (isDarkMode) {
      setLightMode()
    } else {
      setDarkMode()
    }
  }

  return (
    <div className="dark-mode-container flex flex-col gap-2 relative md:top-10 md:right-0">
      <label className="dark-mode-label translate-x-96 transition-transform left-5 sm:translate-x-0 md:bottom-6 md:left-0 md:-bottom-0 md:-right-0 md:-rotate-90 absolute whitespace-nowrap text-sm" htmlFor="darkmode-toggle">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </label>
      <input
        type="checkbox"
        className="dark-mode transition-transform md:-rotate-90"
        id="darkmode-toggle"
        onChange={toggleColorTheme}
        checked={isDarkMode}
      />
    </div>
  )
}