"use client"

import { useInView, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { ProjectCard } from './project-card'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  const projectRef = useRef([])
  const [isHovered, setisHovered] = useState(false)

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

  useEffect(() => {
    projectRef.current && projectRef.current.forEach((el, index) => {
      gsap.to(
        el,
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })
  }, [projectRef.current])

  console.log(projectRef.current)
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
            src='/flowers/projects/top-right.png'
            className=' w-full'
          />
        </div>

        {/* bottom image  */}
        <div className=' absolute md:bottom-0 -bottom-[350px] -right-5 md:w-[500px] w-full md:z-10'>
          <Image
            alt="top right image"
            height={500}
            width={500}
            src='/flowers/projects/bottom-right.png'
            className=' w-full '
          />
        </div>

        {/* Purple glows */}
        <div className="absolute top-0 left-0 -z-10 w-72 h-72 bg-purple-600 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 -z-10 w-72 h-72 bg-purple-500 opacity-10 rounded-full blur-3xl" />

        {/* card content  */}
        <div className=' px-4 md:px-6 lg:px-8 max-w-6xl mx-auto z-10 relative md:pt-20 pt-[400px]'>
          <motion.div>

            {/* Cards */}
            <div className=" flex flex-col items-start ">
              {projects.map((project, index) => (
                <ProjectCard
                  divref={el => projectRef.current[index] = el}
                  key={index}
                  project={project}
                  index={index}
                />
              ))}

              {/* View all button */}
              <div className=" md:w-[500px] w-full my-10">
                <button
                  onMouseOver={() => setisHovered(true)}
                  onMouseLeave={() => setisHovered(false)}
                  onTouchStart={() => setisHovered(true)}
                  onTouchEnd={() => setisHovered(false)}
                  className={`
                  border-[#ffffff]/20  text-white mx-auto
                  ${isHovered ? " bg-[#1a0826b4] " : " bg-opacity-10 "}
                  flex items-center justify-center gap-2 text-sm font-medium  
                  rounded-full px-6 py-2 border-2 transition-all `}
                >
                  View All Projects
                  <ExternalLink
                    className={`ml-2 w-4 h-4 text-white ${isHovered ? " translate-x-1 " : ""} transition-transform`} />
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
