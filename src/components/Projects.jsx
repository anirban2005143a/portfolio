import { useInView, motion } from 'framer-motion'
import React, { useRef } from 'react'
import { ProjectCard } from './project-card'
import { Button } from './ui/button'
import { ExternalLink } from 'lucide-react'

const Projects = () => {

  const projectsRef = useRef(null)
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.3 })

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with payment integration and admin dashboard.",
      image: "/anirban.png",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "/anirban.png",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website with animations and dark mode support.",
      image: "/anirban.png",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto relative">
        {/* Purple glows */}
        <div className="absolute top-0 left-0 -z-10 w-72 h-72 bg-purple-600 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 -z-10 w-72 h-72 bg-purple-500 opacity-10 rounded-full blur-3xl" />

        <motion.div
          ref={projectsRef}
          style={{
            opacity: projectsInView ? 1 : 0,
            transform: projectsInView ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold inline-block relative text-white">
              Featured Projects
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={projectsInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* View all button */}
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              asChild
              className="rounded-full px-6 py-2 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:bg-opacity-10 transition-all group"
            >
              <a target="_blank" href="#">
                View All Projects
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Projects
