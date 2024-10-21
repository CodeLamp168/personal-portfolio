// app/components/About.tsx
import PageHeader from './PageHeader'

const skills = ['HTML', 'CSS', 'SCSS', 'JS', 'REACT', 'SVELTE']
const languages = ['NATIVE ENGLISH', 'Beginner Filipino']

const SkillBox = ({ title, items }: { title: string; items: string[] }) => (
  <div className="skill-box p-2 border-r lg:border-l lg:border-0 border-theme">
    <h2 className="text-7xl border-b border-theme text-left md:w-auto">{title}</h2>
    <ul className="inline-flex items-start flex-col gap-4 pl-4 pt-4">
      {items.map((item) => (
        <li key={item} className="skill-item">{item}</li>
      ))}
    </ul>
  </div>
)

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center md:block p-0 sm:p-4 relative z-0 overflow-x-hidden">
      <PageHeader pageTitle="ABOUT" />
      <div className="border-2 border-theme absolute flex flex-col sm:flex-row sm:bottom-0 justify-between lg:flex-col lg:block lg:w-80 xl:w-96 lg:absolute lg:h-full md:right-0 lg:top-0">
        <SkillBox title="SKILLS" items={skills} />
        <SkillBox title="Passive" items={languages} />
      </div>
    </div>
  )
}