"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronRight, Github, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

const About = () => {
    const aboutRef = useRef(null)
    const aboutInView = useInView(aboutRef, { once: true, amount: 0.2 })

    return (
        <section id="about" className="section relative  text-gray-900 ">

            <div className=' px-4 md:pt-[150px] pt-[50px] pb-[100px] md:px-6 lg:px-8 max-w-6xl mx-auto'>

                {/* top right flower  */}
                <div className=' md:w-[600px] w-full absolute  -top-50 -right-15 z-20'>
                    <Image
                        width={600}
                        height={600}
                        alt='top left flower'
                        src="/flowers/about/bottom-left.png"
                        className=' w-full h-full -rotate-10'
                    />
                </div>

               
                <motion.div
                    ref={aboutRef}
                    style={{
                        opacity: aboutInView ? 1 : 0,
                        transform: aboutInView ? "translateY(0)" : "translateY(50px)",
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                    }}
                >

                    {/* Content */}
                    <div className=" items-center ">

                        {/* Text Content */}
                        <div className="md:w-[50%] md:min-w-[500px]  bg-gradient-to-bl from-[#250152a2] to-transparent backdrop-blur-xl p-8 md:px-8 sm:px-5 px-3  rounded-xl shadow-lg border border-white/20  relative">

                            {/* Corners */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[hsl(262.1,83.3%,57.8%)] rounded-tl-md" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[hsl(262.1,83.3%,57.8%)] rounded-tr-md" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[hsl(262.1,83.3%,57.8%)] rounded-bl-md" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[hsl(262.1,83.3%,57.8%)] rounded-br-md" />

                            <h3 className="text-2xl font-semibold mb-6 text-[hsl(262.1,83.3%,57.8%)]">Who I Am</h3>

                            <div className="space-y-4">
                                {[
                                    "I'm a passionate full-stack developer with over 5 years of experience building web applications. I specialize in creating responsive, user-friendly interfaces with modern JavaScript frameworks.",
                                    "My journey in web development started when I built my first website in college. Since then, I've worked with startups and established companies to deliver high-quality web solutions.",
                                    "I believe in clean code, continuous learning, and staying up-to-date with the latest technologies and best practices in web development.",
                                ].map((text, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="w-[40px] h-[40px] rounded-full bg-[#7c3bed51]  flex items-center justify-center mt-1">
                                            <ChevronRight className="w-5 h-5 text-[hsl(262,100%,79%)]" />
                                        </div>
                                        <p className=" w-[90%] text-gray-300  leading-relaxed">{text}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Socials */}
                            <div className="mt-8 flex gap-1">
                                {[["GitHub", Github], ["LinkedIn", Linkedin], ["Twitter", Twitter]].map(([label, Icon], i) => (
                                    <a
                                        href="#" aria-label={label}
                                        key={i}
                                        className="rounded-full bg-[#33195f89] p-3 text-white hover:bg-[#483d6d8f] hover:bg-opacity-10 hover:text-[#d8c2ff] transition-all group"
                                    >
                                        <Icon className="w-5 h-5  group-hover:scale-110 transition-transform" />

                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>


                </motion.div>
                {/* Blurred floating shapes */}
                <div className="absolute -top-60 right-10 -z-10 md:w-[600px] md:h-[600px] sm:w-[450px] sm:h-[450px] w-[300px] h-[300px] rounded-full blur-3xl bg-[#7c3aed] opacity-10" />
                <div className="absolute top-0 left-0 -z-10 w-72 h-72 rounded-full blur-3xl bg-[#7c3aed] opacity-10" />
                <div className="absolute bottom-0 right-0 -z-10 w-72 h-72 rounded-full blur-3xl bg-purple-500 opacity-10" />


            </div>
        </section>
    )
}

export default About
