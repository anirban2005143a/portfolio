"use client"


import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import { Card, CardContent } from "./ui/card"

export default function SkillCard({ name, icon, level, delay = 0, onMouseEnter, onMouseLeave, index }) {
  const [width, setWidth] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredIndex, sethoveredIndex] = useState(null)


  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [level, delay])

  // This function returns the appropriate icon component based on the icon name
  const getIconComponent = (iconName) => {
    // In a real implementation, you would import and use actual icons
    // For this example, we'll use placeholder colored squares with gradients
    const colors = {
      react: "from-blue-400 to-blue-600",
      nextjs: "from-gray-700 to-black",
      typescript: "from-blue-500 to-blue-700",
      nodejs: "from-green-500 to-green-700",
      tailwind: "from-cyan-400 to-cyan-600",
      javascript: "from-yellow-300 to-yellow-500",
    }

    return (
      <div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors[iconName] || "from-gray-400 to-gray-600"} flex items-center justify-center text-white font-bold shadow-lg relative overflow-hidden group`}
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
        <span className="text-xl">{iconName.charAt(0).toUpperCase()}</span>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => {
        setIsHovered(true)
        sethoveredIndex(index)
      }}
      onHoverEnd={() => {
        setIsHovered(false)
        sethoveredIndex(null)
      }}
      onTouchStart={() => {
        setIsHovered(true)
        sethoveredIndex(index)
      }}
      onTouchEnd={() => {
        setIsHovered(false)
        sethoveredIndex(null)
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Card className="overflow-hidden h-full border-0 relative shadow-lg  group">

        <CardContent className="p-6 ">

          <div className={`relative p-5 backdrop-blur-sm bg-gradient-to-r from-[#20093c5f] to-transparent border-[hsl(262.1,83.3%,57.8%)] ${isHovered ? " border-[1px] " : " border-l-4 " }  rounded-md`}  >

            {/* Corner accents that appear on hover */}
            <motion.div
              className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[hsl(262.1,83.3%,57.8%)] rounded-tl-md opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            />
            <motion.div
              className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[hsl(262.1,83.3%,57.8%)] rounded-tr-md opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[hsl(262.1,83.3%,57.8%)] rounded-bl-md opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[hsl(262.1,83.3%,57.8%)] rounded-br-md opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            />

            <div className="flex items-center gap-4 mb-6">
              {getIconComponent(icon)}
              <div>
                <h3 className="text-lg font-semibold text-white">{name}</h3>
                <motion.p
                  className="text-sm text-muted-foreground"
                  animate={isHovered ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
                  initial={{ y: 10, opacity: 0 }}
                >
                  {level}% Proficiency
                </motion.p>
              </div>
            </div>

            <div className="h-3 w-full  bg-muted rounded-full overflow-hidden shadow-inner relative">

              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 relative"
                initial={{ width: 0 }}
                animate={{ width: `${width}%` }}
                transition={{ duration: 1, delay: delay + 0.3 }}
              >
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                    ease: "linear",
                    repeatDelay: 1,
                  }}
                />
              </motion.div>

              {/* Skill level indicator */}
              <motion.div
                className="absolute top-0 h-full"
                style={{ left: `${width}%`, transform: "translateX(-50%)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay + 1.3 }}
              >
                <div className="w-1 h-3 bg-white rounded-full shadow-md"></div>
              </motion.div>
            </div>

            <div className="mt-2 text-right">
              <motion.span
                animate={
                  isHovered
                    ? { scale: 1.1, color: "white" }
                    : { scale: 1, color: "white" }
                }
                className="inline-block text-white text-sm font-medium"
                transition={{ duration: 0.2 }}
              >
                {level}%
              </motion.span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
