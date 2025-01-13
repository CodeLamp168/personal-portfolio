// app/layout.tsx
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import NavArea from '@/components/NavArea'
import { ThemeProvider } from '@/components/ThemeProvider'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Caleb Sim Portfolio',
  description: 'Junior Front End Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} overflow-hidden`} >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col justify-center md:flex-row md:mx-2 overflow-hidden md:w-7xl">
            <NavArea />
            <main className="border-r border-border md:m-4 relative md:w-[1320px]">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}