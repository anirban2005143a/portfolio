

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function TextReveal({ text, className = "", delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const words = text.split(" ")

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.h1
      ref={ref}
      className={`${className} overflow-hidden`}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >

      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1 bg-clip-text text-transparent bg-[length:200%_auto] bg-gradient-to-r from-violet-500 via-purple-400 to-violet-500 animate-gradient"
          variants={child}
        >
          {word}
        </motion.span>
      ))}


    </motion.h1>
  )
}
