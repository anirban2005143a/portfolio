"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      id="contact"
      className="pb-20 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto relative z-10"
    >
      {/* <div className="absolute inset-0 -z-10  " /> */}

      <motion.div
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative text-white">
            Get In Touch
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-violet-500 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Info Card */}
          <div className=" bg-opacity-60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-violet-800 relative text-violet-100">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-violet-500 rounded-tl-md" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-violet-500 rounded-tr-md" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-violet-500 rounded-bl-md" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-violet-500 rounded-br-md" />

            <h3 className="text-2xl font-semibold mb-6 text-violet-500">
              Contact Information
            </h3>
            <p className="text-white mb-8 leading-relaxed">
              Feel free to reach out to me for collaboration, job
              opportunities, or just to say hello!
            </p>
            <div className="space-y-6">
              {/* Email */}
              <motion.div
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-violet-500/20 bg-opacity-20 flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition-colors">
                  <Mail className="w-5 h-5 text-violet-500" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Email</p>
                  <p className="font-medium group-hover:text-violet-500 transition-colors">
                    your.email@example.com
                  </p>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-violet-500/20 bg-opacity-20 flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition-colors">
                  <Linkedin className="w-5 h-5 text-violet-500" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">LinkedIn</p>
                  <p className="font-medium group-hover:text-violet-500 transition-colors">
                    linkedin.com/in/yourname
                  </p>
                </div>
              </motion.div>

              {/* GitHub */}
              <motion.div
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-violet-500/20 bg-opacity-20 flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition-colors">
                  <Github className="w-5 h-5 text-violet-500" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">GitHub</p>
                  <p className="font-medium group-hover:text-violet-500 transition-colors">
                    github.com/yourname
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Form */}
          <div className=" bg-opacity-60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-violet-800 relative text-violet-100">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-violet-500 rounded-tl-md" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-violet-500 rounded-tr-md" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-violet-500 rounded-bl-md" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-violet-500 rounded-br-md" />

            <form className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-violet-500 inline-block" />
                  Name
                </label>
                <input
                  id="name"
                  className="flex h-12 w-full rounded-md border border-white/50  px-4 py-2 text-sm placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-1 outline-0 focus-visible:ring-violet-500/20 focus-visible:ring-offset-[1px] transition-all text-white"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-violet-500 inline-block" />
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="flex h-12 w-full rounded-md border border-white/50  px-4 py-2 text-sm placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-1 outline-0 focus-visible:ring-violet-500/20 focus-visible:ring-offset-[1px] transition-all text-white"
                  placeholder="Your email"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-violet-500 inline-block" />
                  Message
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[100px] max-h-[200px] w-full rounded-md border border-white/50  px-4 py-2 text-sm placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-1 outline-0 focus-visible:ring-violet-500/20 focus-visible:ring-offset-[1px] transition-all text-white"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-700 hover:to-purple-600 text-white px-4 py-2 w-full rounded-md h-12 relative overflow-hidden group transition-all"
              >
                <span className="relative z-10">Send Message</span>
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-500 group-hover:scale-150 transition-transform duration-300 ease-in-out" />
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-500 opacity-0 group-hover:opacity-80 transition-opacity" />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
