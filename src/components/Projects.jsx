"use client"

import { useInView, motion } from 'framer-motion'
import React, { useRef } from 'react'
import { ProjectCard } from './project-card'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {

  const projectsRef = useRef(null)
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.2 })

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
      <section id="projects" className="section relative pb-20">

        {/* top image  */}
        <div className=' absolute top-0 right-0  md:w-[500px] w-full z-10'>
          <Image
            alt="top right image"
            height={500}
            width={500}
            src='/flowers/projects/gettyimages-114248901-612x612-removebg-preview.png'
            className=' w-full'
          />
        </div>

        {/* Purple glows */}
        <div className="absolute top-0 left-0 -z-10 w-72 h-72 bg-purple-600 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 -z-10 w-72 h-72 bg-purple-500 opacity-10 rounded-full blur-3xl" />

        {/* card content  */}
        <div className=' px-4 md:px-6 lg:px-8 max-w-6xl mx-auto z-10 relative md:mt-0 pt-[400px]'>
          <motion.div
            ref={projectsRef}
            style={{
              opacity: projectsInView ? 1 : 0,
              transform: projectsInView ? "translateY(0)" : "translateY(50px)",
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          >

            {/* Cards */}
            <div className=" flex flex-col items-start gap-8 ">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  index={index}
                />
              ))}

              {/* View all button */}
              <div className=" md:w-[500px] text-center ">
                <button
                  className="
              border-[#ffffff]/20  text-white 
              hover:bg-[#1a0826b4] hover:bg-opacity-10 
              inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium 
              ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 
              disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
              rounded-full px-6 py-2 border-2 transition-all group"
                >
                  <a target="_blank" href="#" className=' flex items-center'>
                    View All Projects
                    <ExternalLink className="ml-2 w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </a>
                </button>

              </div>
            </div>


          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Projects
