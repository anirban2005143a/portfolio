"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useMobile from "../hooks/use-mobile";
import { AlignRight, X } from "lucide-react";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";

export function FloatingNav() {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const pathname = usePathname();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState(
    pathname === "/projects" ? "projects" : "hero"
  );
  const [hoveredItem, setHoveredItem] = useState(null);
  const isMobile = useMobile();
  const lastScrollY = useRef(0);

  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const logoBorderMobileRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 80);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/projects") {
      setActiveSection("projects");
      return;
    }

    const updateActiveSection = () => {
      if (window.scrollY < 80) {
        setActiveSection("hero");
        return;
      }

      const sections = document.querySelectorAll(".section");
      let currentSection = "hero";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= window.innerHeight / 2) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    requestAnimationFrame(updateActiveSection);
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    const targetId = window.location.hash.slice(1);
    if (targetId) {
      requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }

    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [pathname]);

  const handleNavigation = (event, href) => {
    if (pathname === "/projects" && href !== "#") {
      event.preventDefault();
      router.push(`/${href}`);
      return;
    }

    if (pathname !== "/" && href === "#") {
      event.preventDefault();
      router.push("/");
    }
  };

  // GSAP animation for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      // Slide in the menu from the right
      gsap.fromTo(
        menuRef.current,
        { x: "110%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.3 }
      );

      gsap.fromTo(
        document.querySelectorAll(".nav-menu-mobile"),
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.2,
        }
      );
    } else {
      // Slide out the menu to the right
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isMenuOpen]);

  return (
    <>
      {!isMobile && (
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{
                y: -100,
                opacity: 0,
              }}
              animate={{ y: 0, opacity: 1 }}
              exit={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 0.3 }}
              className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-40 `}
            >
              <nav className="flex items-center gap-5 bg-[#0e0e11]/40 backdrop-blur-xs px-5 py-3 rounded-full border border-purple-800 shadow-lg shadow-purple-900/40">
                {navItems.map((item) => {
                  const sectionId = item.href === "#" ? "hero" : item.href.slice(1);
                  const isActive = activeSection === sectionId;
                  const isHovered = hoveredItem === item.name;

                  return (
                    <a
                      key={item.name}
                      href={pathname === "/projects" ? `/${item.href}` : item.href}
                      onClick={(event) => handleNavigation(event, item.href)}
                      className="relative px-3 py-1 text-sm font-medium rounded-full transition-all text-neutral-300 hover:text-white"
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <span
                        className={`relative z-10 transition-colors ${
                          isActive
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
                            className={`absolute inset-0 rounded-full ${
                              isActive ? "bg-purple-600" : "bg-purple-500/20"
                            }`}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </AnimatePresence>
                    </a>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {isMobile && (
        <div>
          {/* Mobile Navbar */}
          <motion.div
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 z-30 flex w-screen justify-end px-5 py-6"
          >
            {/* Toggle Button */}
            <button
              ref={toggleButtonRef}
              onClick={() => {
                // console.log(menuRef.current)
                setIsMenuOpen(!isMenuOpen);
              }}
              className=" cursor-pointer focus:outline-none relative "
            >
              <AlignRight className=" text-white scale-[1.5]" />
            </button>
          </motion.div>

          {/* Mobile Menu */}
          <div
            ref={menuRef}
            className={` fixed top-0 translate-x-full h-screen w-screen z-40 bg-[#00000084] backdrop-blur-sm shadow-lg`}
          >
            <div className="px-10 pt-[50px] h-full">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className="text-white cursor-pointer focus:outline-none"
              >
                <X className=" scale-[1.5]" />
              </button>
              <div className=" flex flex-col items-start gap-10  pt-[50px] text-white">
                {navItems.map((item, index) => {
                  // console.log(index)
                  return (
                    <a
                      key={index}
                      href={pathname === "/projects" ? `/${item.href}` : item.href}
                      onClick={(event) => {
                        handleNavigation(event, item.href);
                        setIsMenuOpen(false);
                      }}
                      className=" hover:underline text-xl text-violet-300 hover:underline-offset-4 nav-menu-mobile"
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
