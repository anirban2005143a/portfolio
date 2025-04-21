"use client"

import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { TextReveal } from './text-reveal'
import useMobile from "../hooks/use-mobile"
import Image from 'next/image'

const HeroSection = () => {

    const ref = useRef(null)
    const isMobile = useMobile()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.5])
    const y = useTransform(scrollYProgress, [0, 0.5], [0, -50])


    return (
        <>
            <section className="h-screen flex bg-black flex-col items-center justify-center text-center px-4 relative overflow-hidden ">

                <motion.div style={{ opacity, scale, y }} className="z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative mb-6 w-52 h-52 mx-auto p-2"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[hsl(262.1,83.3%,57.8%)] to-purple-500  duration-[8000ms] ease-linear" />
                        <div className="absolute inset-[3px] rounded-full p-2 bg-black flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[hsl(262.1,83.3%,57.8%)] to-purple-500 opacity-20 " />
                            <Image
                            width={50}
                            height={50}
                                src="/anirban.png"
                                alt="Profile"
                                className="rounded-full w-full h-full object-cover relative z-10"
                            />
                        </div>
                    </motion.div>

                    <TextReveal
                        text={`Hi,  I'm    Anirban`}
                        className="text-4xl md:text-6xl font-normal mb-4 text-white/80"
                        delay={0.2}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="relative"
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4 inline-block font-bold">
                            <span className="relative">
                                <span className="relative z-10 bg-clip-text text-transparent bg-[length:200%_auto] bg-gradient-to-r from-violet-500 via-purple-400 to-violet-500 animate-gradient ">
                                    Full-Stack Innovator
                                </span>

                            </span>
                        </h2>
                    </motion.div>

                    <TextReveal
                        text={`Crafting cutting-edge solutions at the intersection of web technologies and intuitive user experiences.`}
                        className="text-xl w-[85%] mx-auto md:text-3xl font-light mb-6 text-white/80"
                        delay={0.2}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex gap-4 justify-center"
                    >
                        <button
                            className="rounded-full px-6 py-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all overflow-hidden group relative bg-gradient-to-r from-purple-600 to-violet-600 text-white font-medium"
                        >
                            <a href="#contact" className="block w-full h-full">
                                <span className="relative z-10">Contact Me</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                        </button>

                        <button
                            className="rounded-full px-6 py-2 border-2 border-purple-600 hover:border-purple-700 text-purple-600 hover:text-white font-medium transition-all overflow-hidden group relative"
                        >
                            <a href="#projects" className="block w-full h-full">
                                <span className="relative z-10">View Projects</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 rounded-full" />
                            </a>
                        </button>

                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="absolute bottom-10 z-10"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                        className="bg-purple-500/20 bg-opacity-80 backdrop-blur-sm p-2 rounded-full shadow-lg"
                    >
                        <ArrowDown className="w-6 h-6 text-[#ad7eff]" />
                    </motion.div>
                </motion.div>

                {/* 3D Floating Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {!isMobile && (
                        <>
                            <motion.div
                                className="absolute top-[20%] left-[15%] w-8 h-8 rounded-full bg-[hsl(262.1,83.3%,57.8%)] opacity-30 blur-sm"
                                animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
                                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                            />
                            <motion.div
                                className="absolute top-[30%] right-[20%] w-6 h-6 rounded-full bg-purple-500 opacity-30 blur-sm"
                                animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
                                transition={{
                                    duration: 5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: 1,
                                }}
                            />
                            <motion.div
                                className="absolute bottom-[25%] left-[25%] w-10 h-10 rounded-full bg-[hsl(262.1,83.3%,57.8%)] opacity-20 blur-sm"
                                animate={{ y: [0, 25, 0], opacity: [0.2, 0.5, 0.2] }}
                                transition={{
                                    duration: 6,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: 2,
                                }}
                            />
                            <motion.div
                                className="absolute bottom-[30%] right-[15%] w-12 h-12 rounded-full bg-purple-500 opacity-20 blur-sm"
                                animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
                                transition={{
                                    duration: 7,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: 1.5,
                                }}
                            />
                        </>
                    )}
                </div>
            </section>

        </>
    )
}

export default HeroSection