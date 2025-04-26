"use client"

import React, { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import SkillCard from "./skill-card"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
gsap.registerPlugin(ScrollTrigger)

const Skill = () => {

    const skillsRef = useRef([])
    const skillsInView = useInView(skillsRef, { once: true, amount: 0.2 })

    const skills = [
        { name: "React", icon: "react", level: 90 },
        { name: "Next.js", icon: "nextjs", level: 85 },
        { name: "TypeScript", icon: "typescript", level: 80 },
        { name: "Node.js", icon: "nodejs", level: 75 },
        { name: "Tailwind CSS", icon: "tailwind", level: 95 },
        { name: "JavaScript", icon: "javascript", level: 90 },
    ]

    useEffect(() => {
        skillsRef.current && skillsRef.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                { opacity: 0, x: -100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            )
        })
    }, [skillsRef.current])

    return (

        <>
            {/* Skills Section */}
            <section id="skills" className="section  z-10 relative">

                {/* top flower  */}
                <div className=' absolute top-0  left-0  md:w-[500px] w-[350px] z-0'>
                    <Image
                        height={500}
                        width={500}
                        src='/flowers/skills/top.png'
                        className=' w-full'
                    />
                </div>

                {/* Gradient Orbs/Balls */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Large purple orb */}
                    <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-purple-900/25 to-indigo-800/20 blur-3xl"></div>

                    {/* Medium indigo orb - top right */}
                    <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-gradient-to-bl from-indigo-700/20 to-purple-800/15 blur-3xl"></div>

                    {/* Small purple orb - middle left */}
                    <div className="absolute top-1/2 -left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-purple-700/20 to-indigo-600/15 blur-2xl"></div>

                    {/* Medium purple orb - bottom right */}
                    <div className="absolute bottom-10 right-20 w-56 h-56 rounded-full bg-gradient-to-tl from-purple-800/20 to-indigo-700/15 blur-3xl"></div>

                    {/* Small indigo orb - bottom left */}
                    <div className="absolute bottom-20 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-600/20 to-purple-700/15 blur-2xl"></div>

                    {/* Extra small floating orbs */}
                    <motion.div
                        className="absolute top-1/3 left-1/3 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/25 to-indigo-600/20 blur-xl"
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

                <div className=' py-20 px-2 md:px-6 lg:px-8 max-w-6xl mx-auto relative'>
                    <div className="flex flex-col gap-8 items-end md:mt-0 mt-30">
                        {skills.map((skill, index) => (
                            <div
                                className=' max-w-lg w-full '
                                key={index}
                                ref={el => skillsRef.current[index] = el}
                            >
                                <SkillCard
                                    name={skill.name}
                                    icon={skill.icon}
                                    level={skill.level}
                                    index={index}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill
