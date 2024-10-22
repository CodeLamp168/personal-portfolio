// app/components/About.tsx
import PageHeader from './PageHeader'


export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center md:block p-0 sm:p-4 relative z-0 overflow-x-hidden">
      <PageHeader pageTitle="ABOUT" />
      <div className="border-2 border-theme absolute flex flex-col sm:flex-row sm:bottom-0 justify-between lg:flex-col lg:block lg:w-80 xl:w-96 lg:absolute lg:h-full md:right-0 lg:top-0">
      </div>
    </div>
  )
}