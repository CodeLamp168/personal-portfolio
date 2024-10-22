// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavArea from '@/components/NavArea'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col md:flex-row md:mx-2 overflow-hidden">
          <NavArea />
          <main className=" md:m-2 relative w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}