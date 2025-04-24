"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronRight, Github, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

const About = () => {
    const aboutRef = useRef(null)
    const aboutInView = useInView(aboutRef, { once: true, amount: 0.2 })

    return (
        <section id="about" className="section py-20 px-4 md:px-6 lg:px-8 max-w-6xl z-10 mx-auto relative text-gray-900 dark:text-white">
            {/* Blurred floating shapes */}
            <div className="absolute top-0 right-0 -z-10 w-72 h-72 rounded-full blur-3xl bg-[hsl(262.1,83.3%,57.8%)] opacity-10" />
            <div className="absolute bottom-0 left-0 -z-10 w-72 h-72 rounded-full blur-3xl bg-purple-500 opacity-10" />

            <motion.div
                ref={aboutRef}
                style={{
                    opacity: aboutInView ? 1 : 0,
                    transform: aboutInView ? "translateY(0)" : "translateY(50px)",
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                }}
            >
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
                        About Me
                        <motion.div
                            className="absolute -bottom-2 left-0 h-1 bg-[hsl(262.1,83.3%,57.8%)] rounded-full"
                            initial={{ width: 0 }}
                            animate={aboutInView ? { width: "100%" } : { width: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        />
                    </h2>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-5 gap-8 items-center">
                    {/* Image Section */}
                    <div className="md:col-span-2 aspect-square relative rounded-xl overflow-hidden shadow-2xl">

                        <div className="absolute bg-[#22062e93] inset-0 flex items-center justify-center backdrop-blur-sm">
                            <Image
                                width={50}
                                height={50}
                                src="/anirban.png"
                                alt="Profile"
                                className="w-3/4 h-3/4 object-cover rounded-full border-4 border-background shadow-xl"
                            />
                        </div>

                        {/* Animated floating dots */}
                        <motion.div
                            className="absolute -top-4 -right-4 w-16 h-16 bg-[#a200ff] opacity-10 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#a200ff] opacity-10 rounded-full"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                        />
                    </div>

                    {/* Text Content */}
                    <div className="md:col-span-3 bg-white dark:bg-black/30 bg-opacity-50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 dark:border-white/20 relative">
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
                                        <ChevronRight className="w-5 h-5 text-[hsl(262.1,83.3%,57.8%)]" />
                                    </div>
                                    <p className=" w-[90%] text-gray-700 dark:text-gray-300 leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Socials */}
                        <div className="mt-8 flex gap-1">
                            {[["GitHub", Github], ["LinkedIn", Linkedin], ["Twitter", Twitter]].map(([label, Icon], i) => (
                                <a
                                    href="#" aria-label={label}
                                    key={i}
                                    className="rounded-full p-3 hover:bg-[#9273c83e] hover:bg-opacity-10 hover:text-[hsl(262.1,83.3%,57.8%)] transition-all group"
                                >
                                    <Icon className="w-5 h-5  group-hover:scale-110 transition-transform" />

                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
            {/* Blurred floating shapes */}
            <div className="absolute top-0 right-0 -z-10 w-72 h-72 rounded-full blur-3xl bg-[hsl(262.1,83.3%,57.8%)] opacity-10" />
            <div className="absolute bottom-0 left-0 -z-10 w-72 h-72 rounded-full blur-3xl bg-purple-500 opacity-10" />

            <motion.div
                ref={aboutRef}
                style={{
                    opacity: aboutInView ? 1 : 0,
                    transform: aboutInView ? "translateY(0)" : "translateY(50px)",
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                }}
            >
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
                        About Me
                        <motion.div
                            className="absolute -bottom-2 left-0 h-1 bg-[hsl(262.1,83.3%,57.8%)] rounded-full"
                            initial={{ width: 0 }}
                            animate={aboutInView ? { width: "100%" } : { width: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        />
                    </h2>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-5 gap-8 items-center">
                    {/* Image Section */}
                    <div className="md:col-span-2 aspect-square relative rounded-xl overflow-hidden shadow-2xl">

                        <div className="absolute bg-[#22062e93] inset-0 flex items-center justify-center backdrop-blur-sm">
                            <Image
                                width={50}
                                height={50}
                                src="/anirban.png"
                                alt="Profile"
                                className="w-3/4 h-3/4 object-cover rounded-full border-4 border-background shadow-xl"
                            />
                        </div>

                        {/* Animated floating dots */}
                        <motion.div
                            className="absolute -top-4 -right-4 w-16 h-16 bg-[#a200ff] opacity-10 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#a200ff] opacity-10 rounded-full"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                        />
                    </div>

                    {/* Text Content */}
                    <div className="md:col-span-3 bg-white dark:bg-black/30 bg-opacity-50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 dark:border-white/20 relative">
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
                                        <ChevronRight className="w-5 h-5 text-[hsl(262.1,83.3%,57.8%)]" />
                                    </div>
                                    <p className=" w-[90%] text-gray-700 dark:text-gray-300 leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Socials */}
                        <div className="mt-8 flex gap-1">
                            {[["GitHub", Github], ["LinkedIn", Linkedin], ["Twitter", Twitter]].map(([label, Icon], i) => (
                                <a
                                    href="#" aria-label={label}
                                    key={i}
                                    className="rounded-full p-3 hover:bg-[#9273c83e] hover:bg-opacity-10 hover:text-[hsl(262.1,83.3%,57.8%)] transition-all group"
                                >
                                    <Icon className="w-5 h-5  group-hover:scale-110 transition-transform" />

                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
            {/* Blurred floating shapes */}
            <div className="absolute top-0 right-0 -z-10 w-72 h-72 rounded-full blur-3xl bg-[hsl(262.1,83.3%,57.8%)] opacity-10" />
            <div className="absolute bottom-0 left-0 -z-10 w-72 h-72 rounded-full blur-3xl bg-purple-500 opacity-10" />

            <motion.div
                ref={aboutRef}
                style={{
                    opacity: aboutInView ? 1 : 0,
                    transform: aboutInView ? "translateY(0)" : "translateY(50px)",
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                }}
            >
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
                        About Me
                        <motion.div
                            className="absolute -bottom-2 left-0 h-1 bg-[hsl(262.1,83.3%,57.8%)] rounded-full"
                            initial={{ width: 0 }}
                            animate={aboutInView ? { width: "100%" } : { width: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        />
                    </h2>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-5 gap-8 items-center">
                    {/* Image Section */}
                    <div className="md:col-span-2 aspect-square relative rounded-xl overflow-hidden shadow-2xl">

                        <div className="absolute bg-[#22062e93] inset-0 flex items-center justify-center backdrop-blur-sm">
                            <Image
                                width={50}
                                height={50}
                                src="/anirban.png"
                                alt="Profile"
                                className="w-3/4 h-3/4 object-cover rounded-full border-4 border-background shadow-xl"
                            />
                        </div>

                        {/* Animated floating dots */}
                        <motion.div
                            className="absolute -top-4 -right-4 w-16 h-16 bg-[#a200ff] opacity-10 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#a200ff] opacity-10 rounded-full"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                        />
                    </div>

                    {/* Text Content */}
                    <div className="md:col-span-3 bg-white dark:bg-black/30 bg-opacity-50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 dark:border-white/20 relative">
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
                                        <ChevronRight className="w-5 h-5 text-[hsl(262.1,83.3%,57.8%)]" />
                                    </div>
                                    <p className=" w-[90%] text-gray-700 dark:text-gray-300 leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Socials */}
                        <div className="mt-8 flex gap-1">
                            {[["GitHub", Github], ["LinkedIn", Linkedin], ["Twitter", Twitter]].map(([label, Icon], i) => (
                                <a
                                    href="#" aria-label={label}
                                    key={i}
                                    className="rounded-full p-3 hover:bg-[#9273c83e] hover:bg-opacity-10 hover:text-[hsl(262.1,83.3%,57.8%)] transition-all group"
                                >
                                    <Icon className="w-5 h-5  group-hover:scale-110 transition-transform" />

                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default About
