
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function FloatingNav() {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [hoveredItem, setHoveredItem] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)

      const sections = navItems.map((item) => item.href.replace("#", "")).filter(Boolean)

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
        >
          <nav className="flex items-center gap-5 bg-[#0e0e11]/90 backdrop-blur-md px-5 py-3 rounded-full border border-purple-800 shadow-lg shadow-purple-900/40">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "")
              const isHovered = hoveredItem === item.name

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-1 text-sm font-medium rounded-full transition-all text-neutral-300 hover:text-white"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span
                    className={`relative z-10 transition-colors ${
                      isActive
                        ? "text-white"
                        : isHovered
                        ? "text-purple-400"
                        : "text-neutral-300"
                    }`}
                  >
                    {item.name}
                  </span>

                  {/* Background highlight */}
                  <AnimatePresence>
                    {(isActive || isHovered) && (
                      <motion.span
                        className={`absolute inset-0 rounded-full ${
                          isActive
                            ? "bg-purple-600"
                            : "bg-purple-500/20"
                        }`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </a>
              )
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
