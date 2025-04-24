"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SkillCard from "./skill-card"

const Skill = () => {

    const skillsRef = useRef(null)
    const skillsInView = useInView(skillsRef, { once: true, amount: 0.2 })

    const skills = [
        { name: "React", icon: "react", level: 90 },
        { name: "Next.js", icon: "nextjs", level: 85 },
        { name: "TypeScript", icon: "typescript", level: 80 },
        { name: "Node.js", icon: "nodejs", level: 75 },
        { name: "Tailwind CSS", icon: "tailwind", level: 95 },
        { name: "JavaScript", icon: "javascript", level: 90 },
    ]

    return (
        <>
            {/* Skills Section */}
            <section id="skills" className="section py-20 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto z-10 relative">
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted to-background opacity-30" />

                <motion.div
                    ref={skillsRef}
                    style={{
                        opacity: skillsInView ? 1 : 0,
                        transform: skillsInView ? "translateY(0)" : "translateY(50px)",
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                    }}
                >
                    <div className="text-center mb-18">
                        <h2 className="text-3xl md:text-4xl text-white font-bold inline-block relative">
                            My Skills
                            <motion.div
                                className="absolute -bottom-2 left-0 h-1 bg-purple-400 rounded-full"
                                initial={{ width: 0 }}
                                animate={skillsInView ? { width: "100%" } : { width: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            />
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {skills.map((skill, index) => (
                            <SkillCard
                                key={index}
                                name={skill.name}
                                icon={skill.icon}
                                level={skill.level}
                                delay={index * 0.1}
                                index={index}
                            />
                        ))}
                    </div>
                </motion.div>
            </section>
        </>
    )
}

export default Skill