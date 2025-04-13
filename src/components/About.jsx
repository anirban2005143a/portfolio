// import React, { useRef } from 'react'
// import { motion, useInView } from 'framer-motion'
// import { ChevronRight, Github, Linkedin, Twitter,  } from 'lucide-react'

// const About = () => {

//     const aboutRef = useRef(null)
//     const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 })

//     return (
//         <>
//             {/* About Section */}
//             <section id="about" className="py-20 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto relative" >
//                 <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl" />
//                 <div className="absolute bottom-0 left-0 -z-10 w-72 h-72 bg-purple-500 opacity-10 rounded-full blur-3xl" />

//                 <motion.div
//                     ref={aboutRef}
//                     style={{
//                         opacity: aboutInView ? 1 : 0,
//                         transform: aboutInView ? "translateY(0)" : "translateY(50px)",
//                         transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
//                     }}
//                 >
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
//                             About Me
//                             <motion.div
//                                 className="absolute -bottom-2 left-0 h-1 bg-primary rounded-full"
//                                 initial={{ width: 0 }}
//                                 animate={aboutInView ? { width: "100%" } : { width: 0 }}
//                                 transition={{ duration: 0.8, delay: 0.4 }}
//                             />
//                         </h2>
//                     </div>

//                     <div className="grid md:grid-cols-5 gap-8 items-center">
//                         <div className="md:col-span-2 aspect-square relative rounded-xl overflow-hidden shadow-2xl">
//                             <motion.div
//                                 className="w-full h-full bg-gradient-to-br from-primary to-purple-500 opacity-30 absolute"
//                                 animate={{
//                                     background: [
//                                         "linear-gradient(to bottom right, rgba(var(--primary), 0.2), rgba(168, 85, 247, 0.4))",
//                                         "linear-gradient(to bottom left, rgba(var(--primary), 0.2), rgba(168, 85, 247, 0.4))",
//                                         "linear-gradient(to top right, rgba(var(--primary), 0.2), rgba(168, 85, 247, 0.4))",
//                                         "linear-gradient(to top left, rgba(var(--primary), 0.2), rgba(168, 85, 247, 0.4))",
//                                         "linear-gradient(to bottom right, rgba(var(--primary), 0.2), rgba(168, 85, 247, 0.4))",
//                                     ],
//                                 }}
//                                 transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
//                             />
//                             <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
//                                 <img
//                                     src="/placeholder.svg?height=400&width=400"
//                                     alt="Profile"
//                                     className="w-3/4 h-3/4 object-cover rounded-full border-4 border-background shadow-xl"
//                                 />
//                             </div>

//                             {/* Decorative elements */}
//                             <motion.div
//                                 className="absolute -top-4 -right-4 w-16 h-16 bg-primary opacity-10 rounded-full"
//                                 animate={{ scale: [1, 1.2, 1] }}
//                                 transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
//                             />
//                             <motion.div
//                                 className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 opacity-10 rounded-full"
//                                 animate={{ scale: [1, 1.3, 1] }}
//                                 transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
//                             />
//                         </div>

//                         <div className="md:col-span-3 bg-background bg-opacity-50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-muted relative">
//                             {/* Decorative corner accents */}
//                             <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-md" />
//                             <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-md" />
//                             <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl-md" />
//                             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br-md" />

//                             <h3 className="text-2xl font-semibold mb-6 text-primary">Who I Am</h3>

//                             <div className="space-y-4">
//                                 <div className="flex gap-4 items-start">
//                                     <div className="w-8 h-8 rounded-full bg-primary bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-1">
//                                         <ChevronRight className="w-5 h-5 text-primary" />
//                                     </div>
//                                     <p className="text-muted-foreground leading-relaxed">
//                                         I'm a passionate full-stack developer with over 5 years of experience building web applications. I
//                                         specialize in creating responsive, user-friendly interfaces with modern JavaScript frameworks.
//                                     </p>
//                                 </div>

//                                 <div className="flex gap-4 items-start">
//                                     <div className="w-8 h-8 rounded-full bg-primary bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-1">
//                                         <ChevronRight className="w-5 h-5 text-primary" />
//                                     </div>
//                                     <p className="text-muted-foreground leading-relaxed">
//                                         My journey in web development started when I built my first website in college. Since then, I've
//                                         worked with startups and established companies to deliver high-quality web solutions.
//                                     </p>
//                                 </div>

//                                 <div className="flex gap-4 items-start">
//                                     <div className="w-8 h-8 rounded-full bg-primary bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-1">
//                                         <ChevronRight className="w-5 h-5 text-primary" />
//                                     </div>
//                                     <p className="text-muted-foreground leading-relaxed">
//                                         I believe in clean code, continuous learning, and staying up-to-date with the latest technologies
//                                         and best practices in web development.
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="mt-8 flex gap-4">
//                                 <button
//                                     className="rounded-full hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-all group"

//                                 >
//                                     <a href="#" aria-label="GitHub">
//                                         <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                                     </a>
//                                 </button>
//                                 <button
//                                     className="rounded-full hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-all group"

//                                 >
//                                     <a href="#" aria-label="aedIn">
//                                         <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                                     </a>
//                                 </button>
//                                 <button
//                                     className="rounded-full hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-all group"

//                                 >
//                                     <a href="#" aria-label="Twitter">
//                                         <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
//                                     </a>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </section >
//         </>
//     )
// }

// export default About


import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronRight, Github, Linkedin, Twitter } from 'lucide-react'

const About = () => {
    const aboutRef = useRef(null)
    const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 })

    return (
        <section id="about" className="py-20 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto relative text-gray-900 dark:text-white">
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
                        <motion.div
                            className="absolute w-full h-full opacity-30 dark:opacity-40"
                            animate={{
                                background: [
                                    "linear-gradient(135deg, #7e22ce 0%, #a855f7 100%)",
                                    "linear-gradient(225deg, #7e22ce 0%, #c084fc 100%)",
                                    "linear-gradient(315deg, #a855f7 0%, #7e22ce 100%)",
                                    "linear-gradient(45deg, #c084fc 0%, #7e22ce 100%)",
                                    "linear-gradient(135deg, #7e22ce 0%, #a855f7 100%)"
                                ]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                backgroundSize: "200% 200%",
                                backgroundPosition: "0% 0%"
                            }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
                            <img
                                src="/placeholder.svg?height=400&width=400"
                                alt="Profile"
                                className="w-3/4 h-3/4 object-cover rounded-full border-4 border-background shadow-xl"
                            />
                        </div>

                        {/* Animated floating dots */}
                        <motion.div
                            className="absolute -top-4 -right-4 w-16 h-16 bg-[hsl(262.1,83.3%,57.8%)] opacity-10 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 opacity-10 rounded-full"
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
                                <button
                                    key={i}
                                    className="rounded-full p-3 hover:bg-[#9273c83e] hover:bg-opacity-10 hover:text-[hsl(262.1,83.3%,57.8%)] transition-all group"
                                >
                                    <a href="#" aria-label={label}>
                                        <Icon className="w-5 h-5  group-hover:scale-110 transition-transform" />
                                    </a>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default About
