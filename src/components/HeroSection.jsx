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
            <section id='hero' className="section h-screen flex bg-black overflow-y-visible flex-col items-center justify-center text-center px-4 relative overflow-hidden ">

                {/* 3D Floating Elements */}
                <div className="absolute inset-0 pointer-events-none z-10">

                    <motion.div
                        className="absolute top-[20%] left-[15%] w-8 h-8 rounded-full bg-[#7c3aed] opacity-30 blur-sm"
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
                </div>

                {/* top left flower  */}
                <div className='md:w-[20%] sm:w-[300px] w-[200px]  absolute -top-0 -left-10 z-20'>
                    <Image
                        width={500}
                        height={500}
                        alt='top left flower'
                        src="/flowers/hero/top-left.png"
                        className=' w-full rotate-[0deg]'
                    />
                </div>

                {/* top right flower  */}
                <div className='md:w-[500px] sm:w-[300px] w-[200px] md:block hidden absolute -top-10 -right-0 z-20'>
                    <Image
                        width={500}
                        height={500}
                        alt='top left flower'
                        src="/flowers/hero/top-right.png"
                        className=' w-full  '
                    />
                </div>


            </section>

        </>
    )
}

export default HeroSection