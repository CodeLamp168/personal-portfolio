
import Projects from '@/components/Projects'

export default function ProjectsArea(){
  return <Projects/>
}


// const projects = [
//   {
//     title: "Project 1",
//     image: "/placeholder.svg",
//     languages: ["React", "TypeScript", "Tailwind CSS"],
//     github: "https://github.com",
//     demo: "https://example.com"
//   },
//   {
//     title: "Project 2",
//     image: "/placeholder.svg",
//     languages: ["Next.js", "JavaScript", "CSS"],
//     github: "https://github.com",
//     demo: "https://example.com"
//   },
//   {
//     title: "Project 3",
//     image: "/placeholder.svg",
//     languages: ["Vue.js", "JavaScript", "SCSS"],
//     github: "https://github.com",
//     demo: "https://example.com"
//   }
// ]

// export default function Projects() {
//   return (
//     <div className="max-w-6xl mx-auto">
//       <h1 className="text-4xl font-bold mb-2">Projects</h1>
//       <div className="w-full h-1 bg-gray-900 mb-8"></div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
//             <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.languages.map((lang, i) => (
//                   <span key={i} className="bg-gray-200 px-2 py-1 rounded text-sm">{lang}</span>
//                 ))}
//               </div>
//               <div className="flex justify-between">
//                 <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700">GitHub Repo</a>
//                 <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Live Demo</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }