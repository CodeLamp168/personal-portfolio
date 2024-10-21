// app/components/Home.tsx
import Image from 'next/image'

const skills = [
  { name: 'HTML', icon: '/svgs/html5.svg' },
  { name: 'CSS', icon: '/svgs/css3.svg' },
  { name: 'Javascript', icon: '/svgs/javascript.svg' },
  { name: 'SCSS', icon: '/svgs/sass.svg' },
  { name: 'Tailwind', icon: '/svgs/tailwindcss.svg' },
]

const SkillDisplay = ({ icon, name }: { icon: string; name: string }) => (
  <div className="w-14 flex flex-col items-center">
    <Image src={icon} alt={name} className="language-logo" width={32} height={32} />
    <small className="mt-2">{name}</small>
  </div>
)

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-start mt-4 sm:mt-0 border border-theme relative gap-4 md:gap-0 overflow-x-hidden">
      <div className="border-theme py-4 text-left w-full max-w-xs md:max-w-xl pl-4">
        <h1 className="text-7xl md:text-8xl font-semibold tracking-wider">CALEB SIM</h1>
        <p className="text-3xl pt-2 font-medium tracking-wider">Junior Front End Developer</p>
        <ul className="flex w-full flex-wrap mt-6 md:gap-2">
          {skills.map((skill) => (
            <SkillDisplay key={skill.name} {...skill} />
          ))}
        </ul>
      </div>
      <div className="p-4 sm:pl-4 text-2xl sm:w-auto md:w-7/12 lg:w-8/12">
        <p className="font-medium text-left leading-relaxed">
          22 Year Old, Front End Developer based in the Philippines.<br />
          Need a website developed or fixed? I can help you.
        </p>
      </div>
    </div>
  )
}