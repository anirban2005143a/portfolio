"use client"

import { useInView, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { ProjectCard } from './project-card'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Projects = ({setProjectLoader}) => {

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
          duration: 1,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })
  }, [projectRef.current])

  return (
    <>
      {/* Projects Section */}
      <section id="projects" className="section relative pb-20">

        {/* top image  */}
        <div className=' absolute top-0 right-0  md:w-[500px] w-full '>
          <Image
            alt="top right image"
            height={500}
            width={500}
            src='/flowers/projects/top-right.png'
            className=' w-full'
          />
        </div>

        {/* bottom image  */}
        <div className=' absolute md:bottom-0 -bottom-[350px] -right-5 md:w-[500px] w-full z-10 '>
          <Image
            alt="top right image"
            height={500}
            width={500}
            src='/flowers/projects/bottom-right.png'
            className=' w-full relative '
          />
        </div>

        {/* Gradient Orbs/Balls */}
        <div className="absolute w-full h-full top-0 left-0 overflow-y-visible z-0">
          {/* Large purple orb */}
          <div className="absolute -z-10 -top-20 left-0 w-80 h-80 rounded-full bg-radial from-purple-900 to-indigo-800 opacity-20 blur-3xl"></div>

          {/* Medium indigo orb - top right */}
          <div className="absolute -z-10 top-1/4 right-10 w-64 h-64 rounded-full bg-gradient-to-bl from-indigo-700/20 to-purple-800/15 blur-3xl"></div>

          {/* Small purple orb - middle left */}
          <div className="absolute -z-10 top-1/2 -left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-purple-700/20 to-indigo-600/15 blur-2xl"></div>

          {/* Medium purple orb - bottom right */}
          <div className="absolute -z-10 bottom-10 right-20 w-56 h-56 rounded-full bg-gradient-to-tl from-purple-800/20 to-indigo-700/15 blur-3xl"></div>

          {/* Small indigo orb - bottom left */}
          <div className="absolute -z-10 bottom-20 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-600/20 to-purple-700/15 blur-2xl"></div>

          {/* Extra small floating orbs */}
          <motion.div
            className="absolute -z-10 top-1/3 left-1/3 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/25 to-indigo-600/20 blur-xl"
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          ></motion.div>

          <motion.div
            className="absolute top-2/3 right-1/3 w-20 h-20 rounded-full bg-gradient-to-tl from-indigo-500/25 to-purple-600/20 blur-xl"
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>


        {/* card content  */}
        <div className=' px-4 md:px-6 lg:px-8 max-w-6xl mx-auto relative md:pt-20 pt-[400px] z-10'>
          <motion.div>

            {/* Cards */}
            <div className=" relative flex flex-col items-start ">
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
