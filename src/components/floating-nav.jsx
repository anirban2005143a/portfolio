"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import useMobile from "../hooks/use-mobile"
import { AlignRight, X } from "lucide-react"
import gsap from "gsap"

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

  const isMobile = useMobile()

  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const logoBorderMobileRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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


  // GSAP animation for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      // Slide in the menu from the right
      gsap.fromTo(
        menuRef.current,
        { x: '110%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.3 }
      );

      gsap.fromTo(document.querySelectorAll('.nav-menu-mobile'), {
        x: 100,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.2,

      })
    } else {
      // Slide out the menu to the right
      gsap.to(menuRef.current, {
        x: '100%',
        opacity: 0,
        duration: 0.5,
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if(isMenuOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"
  }, [isMenuOpen])
  

  return (
    <>
      {!isMobile && <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 "
          >
            <nav className="flex items-center gap-5 bg-[#0e0e11]/40 backdrop-blur-xs px-5 py-3 rounded-full border border-purple-800 shadow-lg shadow-purple-900/40">
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
                      className={`relative z-10 transition-colors ${isActive
                        ? "text-white"
                        : isHovered
                          ? "text-purple-200"
                          : "text-neutral-300"
                        }`}
                    >
                      {item.name}
                    </span>

                    {/* Background highlight */}
                    <AnimatePresence>
                      {(isActive || isHovered) && (
                        <motion.span
                          className={`absolute inset-0 rounded-full ${isActive
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
      </AnimatePresence>}

      {isMobile && <div>
        {/* Mobile Navbar */}
        <div className=" fixed top-0 w-screen flex justify-end items-center py-6 px-5 z-30">
        
          {/* Toggle Button */}
          <button
            ref={toggleButtonRef}
            onClick={() => {
              // console.log(menuRef.current)
              setIsMenuOpen(!isMenuOpen)
            }}
            className=" cursor-pointer focus:outline-none relative "
          >
            <AlignRight className=" text-white scale-[1.5]" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={` fixed top-0 translate-x-full h-screen w-screen z-40 bg-[#00000084] backdrop-blur-sm shadow-lg`}
        >
          <div className="px-10 pt-[50px] h-full">
            <button
              onClick={() => {
                setIsMenuOpen(false)
              }}
              className="text-white cursor-pointer focus:outline-none"
            >
              <X className=" scale-[1.5]"/>
            </button>
            <div className=' flex flex-col items-start gap-10  pt-[50px] text-white'>
              {navItems.map((item, index) => {
                // console.log(index)
                return (
                  <a
                    key={index}
                    href={`${item.href}`}
                    onClick={()=>{
                      setIsMenuOpen(false)
                    }}
                    className=" hover:underline text-xl text-violet-300 hover:underline-offset-4 nav-menu-mobile">
                    {item.name}
                  </a>
                )
              })}

            </div>
          </div>
        </div>
      </div>}

    </>
  )
}
